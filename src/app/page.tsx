import { EnterOrSignInButton } from '@/lib/auth/components/EnterOrSignInButton';

export default function Page() {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <h1 className='text-4xl font-bold'>Home</h1>
      <EnterOrSignInButton />
    </div>
  );
}
