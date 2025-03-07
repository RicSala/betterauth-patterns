'use client';

import { Button } from '@/components/ui/button';
import { authClient } from '@/lib/auth/client';
import { useRouter } from 'next/navigation';

export function EnterOrSignInButton() {
  const data = authClient.useSession();
  const router = useRouter();
  return (
    <Button
      onClick={() => {
        if (data.data?.user) {
          router.push('/with-provider/protected');
        } else {
          router.push('/with-provider/unprotected');
        }
      }}
    >
      {data.data?.user ? 'Enter' : 'SignIn'}
    </Button>
  );
}
