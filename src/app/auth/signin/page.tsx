'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { authClient } from '@/lib/auth/client';
import Link from 'next/link';
import { useState } from 'react';

export default function Page() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className='flex flex-col gap-4 mx-auto max-w-md justify-center h-screen'>
      <h1 className='text-2xl font-bold'>Sign in</h1>
      <Input
        placeholder='Email'
        type='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        placeholder='Password'
        type='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button onClick={() => authClient.signIn.email({ email, password })}>
        Sign in
      </Button>
      <Link href='/auth/signup'>Don&apos;t have an account? Sign up</Link>
    </div>
  );
}
