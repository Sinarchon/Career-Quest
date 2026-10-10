import { api, ApiError } from '@/lib/api';
import { clearLocal, hasLocal, loadLocal, store } from '@/lib/storage';

/** Accounts live on the FastAPI backend (httpOnly session cookie). Guest mode stays in this browser. */
export type User = { id: string; name: string; email: string; guest: boolean; createdAt: string };
export const GUEST: User = { id: 'guest', name: 'Guest explorer', email: '', guest: true, createdAt: '' };

export class AuthError extends Error {
  constructor(message: string, public code?: string) { super(message); }
}

async function call<T>(p: Promise<T>): Promise<T> {
  try { return await p; } catch (e) {
    if (e instanceof ApiError) throw new AuthError(e.message, e.code);
    throw new AuthError('Can’t reach the server. Check your connection and try again.');
  }
}

/** Per-field rules, so the form can validate live and signUp() still validates in one go. */
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function nameProblem(name: string): string | null {
  return name.trim().length < 2 ? 'Tell us what to call you (at least 2 characters).' : null;
}

export function emailProblem(email: string): string | null {
  return EMAIL_RE.test(email.trim()) ? null : 'Enter a valid email address, like name@example.com.';
}

export function passwordProblem(password: string): string | null {
  return password.length < 8 ? 'Use at least 8 characters for your password.' : null;
}

export function validateSignUp(name: string, email: string, password: string): string | null {
  return nameProblem(name) ?? emailProblem(email) ?? passwordProblem(password);
}

/** A length-and-variety hint for the strength meter, not a measure of entropy. */
export function passwordStrength(password: string): { score: 0 | 1 | 2 | 3; label: string } {
  if (!password) return { score: 0, label: '' };
  const classes = [/[a-z]/, /[A-Z]/, /\d/, /[^A-Za-z0-9]/].filter(re => re.test(password)).length;
  let score = 0;
  if (password.length >= 8) score++;
  if (password.length >= 12) score++;
  if (classes >= 3) score++;
  const label = password.length < 8 ? 'Too short' : score >= 3 ? 'Strong' : score === 2 ? 'Fair' : 'Weak';
  return { score: Math.min(score, 3) as 0 | 1 | 2 | 3, label };
}

export async function getSessionUser(): Promise<User | null> {
  if (store.read('guest', false)) return GUEST;
  try { return await api<User>('/auth/me'); } catch { return null; }
}

export async function signUp(input: { name: string; email: string; password: string; character: number | null }) {
  const problem = validateSignUp(input.name, input.email, input.password);
  if (problem) throw new AuthError(problem);
  const progress = hasLocal(GUEST.id) ? loadLocal(GUEST.id) : null; // keep anything done as a guest
  const res = await call(api<{ email: string }>('/auth/signup', { method: 'POST', body: { name: input.name.trim(), email: input.email.trim(), password: input.password, character: input.character, progress } }));
  clearLocal(GUEST.id); store.remove('guest');
  return res;
}

export async function logIn(email: string, password: string): Promise<User> {
  const user = await call(api<User>('/auth/login', { method: 'POST', body: { email: email.trim(), password } }));
  store.remove('guest');
  return user;
}

export async function verifyEmail(token: string): Promise<User> {
  const user = await call(api<User>('/auth/verify', { method: 'POST', body: { token } }));
  store.remove('guest');
  return user;
}

export const resendVerification = (email: string) => call(api('/auth/resend', { method: 'POST', body: { email } }));
export const forgotPassword = (email: string) => call(api('/auth/forgot', { method: 'POST', body: { email } }));
export const resetPassword = (token: string, password: string) => call(api('/auth/reset', { method: 'POST', body: { token, password } }));

export function continueAsGuest(): User { store.write('guest', true); return GUEST; }

export async function logOut() {
  if (store.read('guest', false)) return void store.remove('guest');
  try { await api('/auth/logout', { method: 'POST' }); } catch { /* cookie expires on its own */ }
}

export const updateName = (name: string) => call(api<User>('/auth/me', { method: 'PATCH', body: { name } }));
export const deleteAccount = () => call(api('/auth/me', { method: 'DELETE' }));
