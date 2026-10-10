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

export function validateSignUp(name: string, email: string, password: string): string | null {
  if (name.trim().length < 2) return 'Tell us what to call you (at least 2 characters).';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) return 'Enter a valid email address, like name@example.com.';
  if (password.length < 8) return 'Use at least 8 characters for your password.';
  return null;
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
