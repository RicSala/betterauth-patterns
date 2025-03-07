'use client';

import { Button } from '@/components/ui/button';
import { authClient } from '@/lib/auth/client';
import { Loader2 } from 'lucide-react';
import { useState } from 'react';

export const SignOutButton = () => {
  const [isPending, setIsPending] = useState(false);
  return (
    <Button
      onClick={async () => {
        setIsPending(true);
        await authClient.signOut();
        setIsPending(false);
      }}
    >
      {isPending ? (
        <>
          <Loader2 className='w-4 h-4 mr-2' />
          Signing out...
        </>
      ) : (
        'Sign out'
      )}
    </Button>
  );
};
