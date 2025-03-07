'use client';

import { usePreloadedSession } from '@/lib/auth/components/SessionProvider';

export function SessionViewerPreloaded() {
  const session = usePreloadedSession();
  return (
    <div className='bottom-0 left-0 m-2 bg-yellow-300 border p-4 rounded-md max-w-md overflow-auto flex-1'>
      <div className='text-sm font-semibold'>With Provider</div>
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </div>
  );
}
