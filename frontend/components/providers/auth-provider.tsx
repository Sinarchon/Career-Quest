'use client';
import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import * as auth from '@/lib/auth';
import type { User } from '@/lib/auth';

type Panel = 'login' | 'signup' | null;
type AuthContextValue = {
  user: User | null;
  ready: boolean;
  panel: Panel;
  openAuth: (mode: Exclude<Panel, null>) => void;
  closeAuth: () => void;
  signUp: (input: { name: string; email: string; password: string; character: number | null }) => Promise<void>;
  logIn: (email: string, password: string) => Promise<void>;
  adopt: (user: User) => void;
  guest: () => void;
  logOut: () => void;
  rename: (name: string) => void;
  deleteAccount: () => void;
};

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [ready, setReady] = useState(false);
  const [panel, setPanel] = useState<Panel>(null);

  // The session cookie is checked with the API after mount.
  useEffect(() => { auth.getSessionUser().then(u => { setUser(u); setReady(true); }); }, []);

  const signUp = useCallback<AuthContextValue['signUp']>(async input => { await auth.signUp(input); }, []);
  const logIn = useCallback<AuthContextValue['logIn']>(async (email, password) => {
    setUser(await auth.logIn(email, password));
    setPanel(null);
  }, []);

  const value = useMemo<AuthContextValue>(() => ({
    user, ready, panel,
    openAuth: mode => setPanel(mode),
    closeAuth: () => setPanel(null),
    signUp, logIn,
    adopt: u => { setUser(u); setPanel(null); },
    guest: () => { setUser(auth.continueAsGuest()); setPanel(null); },
    logOut: () => { void auth.logOut(); setUser(null); setPanel(null); },
    rename: async name => { if (user && !user.guest) { try { setUser(await auth.updateName(name)); } catch { /* keep old name */ } } },
    deleteAccount: async () => { if (user && !user.guest) { try { await auth.deleteAccount(); setUser(null); setPanel(null); } catch { /* still signed in */ } } },
  }), [user, ready, panel, signUp, logIn]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used inside <AuthProvider>');
  return ctx;
}
