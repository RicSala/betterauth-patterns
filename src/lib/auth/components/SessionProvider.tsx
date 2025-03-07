'use client';

import { authClient } from '@/lib/auth/client';
import { auth } from '@/lib/auth/server';
import { createContext, useContext, useEffect, useState } from 'react';

type TSessionData = Awaited<ReturnType<typeof auth.api.getSession>> | undefined;

type SessionProviderProps = {
  initialData?: TSessionData;
  children: React.ReactNode;
};

export const INITIAL_SESSION_DATA: TSessionData = null;

const SessionContext = createContext<TSessionData>(INITIAL_SESSION_DATA);

export function SessionProvider({
  initialData,
  children,
}: SessionProviderProps) {
  const [sessionData, setSessionData] = useState<TSessionData>(initialData);

  const data = authClient.useSession();

  useEffect(() => {
    setSessionData(data.data);
  }, [data]);

  return (
    <SessionContext.Provider value={sessionData}>
      {children}
    </SessionContext.Provider>
  );
}

export function usePreloadedSession() {
  return useContext(SessionContext);
}
