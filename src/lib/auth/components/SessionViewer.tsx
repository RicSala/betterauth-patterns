'use client';

import { authClient } from '@/lib/auth/client';

export function SessionViewer() {
  const session = authClient.useSession();
  return (
    <div className='bottom-0 right-0 m-2 bg-blue-300 border p-4 rounded-md max-w-md overflow-auto flex-1'>
      <div className='text-sm font-semibold'>Without Provider</div>
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </div>
  );
}
