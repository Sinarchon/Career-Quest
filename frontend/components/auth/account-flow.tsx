'use client';
import { useEffect, useState, type FormEvent } from 'react';
import { ArrowRight, MailCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import * as auth from '@/lib/auth';
import type { User } from '@/lib/auth';

export type Mode = 'login' | 'signup' | 'verify' | 'forgot' | 'reset';
type Props = { mode: 'verify' | 'forgot' | 'reset'; email: string; token: string; setMode: (m: Mode) => void; adopt: (u: User) => void };

export function AccountFlow({ mode, email, token, setMode, adopt }: Props) {
  const [value, setValue] = useState(mode === 'forgot' ? email : '');
  const [msg, setMsg] = useState('');
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);
  const [wait, setWait] = useState(0);
  const verifying = mode === 'verify' && !!token;

  const run = async (fn: () => Promise<void>) => {
    setError(''); setMsg(''); setBusy(true);
    try { await fn(); } catch (e) { setError(e instanceof Error ? e.message : 'Something went wrong.'); }
    setBusy(false);
  };

  useEffect(() => { if (wait > 0) { const t = setTimeout(() => setWait(wait - 1), 1000); return () => clearTimeout(t); } }, [wait]);
  useEffect(() => {
    if (!verifying) return;
    run(async () => { const u = await auth.verifyEmail(token); window.history.replaceState(null, '', window.location.pathname + window.location.hash); adopt(u); });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (mode === 'forgot') return run(async () => { await auth.forgotPassword(value); setMsg('If that email has an account, a reset link is on its way.'); });
    if (value.length < 8) return setError('Use at least 8 characters for your password.');
    run(async () => { await auth.resetPassword(token, value); window.history.replaceState(null, '', window.location.pathname); setMode('login'); });
  };

  const resend = () => run(async () => { await auth.resendVerification(email); setMsg('A new link is on its way. Check your inbox and spam folder.'); setWait(60); });
  const back = <Button type="button" variant="ghost" className="w-full mt-2" onClick={() => setMode('login')}>Back to log in</Button>;
  const feedback = <>{error && <div className="form-error" role="alert">{error}</div>}{msg && <p role="status">{msg}</p>}</>;

  if (mode === 'verify') return <div>
    <h1>{verifying ? 'Verifying your email…' : 'Check your inbox'}</h1>
    {verifying ? <p>One moment while we confirm your link.</p> : <p><MailCheck size={18} style={{ display: 'inline', marginRight: 6 }} />We sent a verification link to <strong>{email}</strong>. Open it to start your quest.</p>}
    {feedback}
    {!verifying && <Button type="button" className="w-full h-11" disabled={busy || wait > 0 || !email} onClick={resend}>{wait > 0 ? `Resend in ${wait}s` : 'Resend verification email'}</Button>}
    {back}
  </div>;

  return <form onSubmit={submit} noValidate>
    <h1>{mode === 'forgot' ? 'Forgot your password?' : 'Choose a new password'}</h1>
    <p>{mode === 'forgot' ? 'Enter your email and we’ll send you a reset link.' : 'At least 8 characters.'}</p>
    <div className="field">
      <label htmlFor="flow-input">{mode === 'forgot' ? 'Email' : 'New password'}</label>
      <input id="flow-input" className="text-input" type={mode === 'forgot' ? 'email' : 'password'} autoComplete={mode === 'forgot' ? 'email' : 'new-password'} value={value} onChange={e => setValue(e.target.value)} />
    </div>
    {feedback}
    <Button type="submit" className="w-full h-11" disabled={busy}>{mode === 'forgot' ? 'Send reset link' : 'Save new password'} <ArrowRight /></Button>
    {back}
  </form>;
}
