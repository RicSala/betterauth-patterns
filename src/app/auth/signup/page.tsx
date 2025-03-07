'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { authClient } from '@/lib/auth/client';
import Link from 'next/link';
import { useState } from 'react';
import { toast } from 'sonner';
import { Loader2 } from 'lucide-react';
import { SignOutButton } from '@/lib/auth/components/SignOutButton';
import { SessionViewer } from '@/lib/auth/components/SessionViewer';
export default function Page() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const generateRandomSignUpData = () => {
    setName(Math.random().toString(36).substring(2, 15));
    setEmail(Math.random().toString(36).substring(2, 15) + '@example.com');
    setPassword(Math.random().toString(36).substring(2, 15));
    navigator.clipboard.writeText(JSON.stringify({ email, password, name }));
    toast.success('Copied to clipboard');
  };

  return (
    <div className='flex flex-col gap-4 mx-auto max-w-md justify-center h-screen'>
      <h1 className='text-2xl font-bold'>Sign up</h1>
      <Input
        type='name'
        placeholder='Name'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        type='email'
        placeholder='Email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        type='password'
        placeholder='Password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button
        onClick={async () => {
          setIsLoading(true);
          await authClient.signUp.email(
            { email, password, name },
            {
              onSuccess: () => {
                toast.success('Signed up successfully');
              },
            }
          );
          setIsLoading(false);
        }}
      >
        {isLoading ? <Loader2 className='w-4 h-4 animate-spin' /> : 'Sign up'}
      </Button>
      <Button onClick={generateRandomSignUpData}>
        Generate random sign up data
      </Button>
      <Link href='/auth/signin'>Already have an account? Sign in</Link>

      <SignOutButton />
      <div className='fixed bottom-0 right-0 p-2 border rounded-md flex gap-2 max-w-lg'>
        <SessionViewer />
      </div>
    </div>
  );
}
