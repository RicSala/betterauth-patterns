import Link from 'next/link';

export function Navbar() {
  return (
    <div className='flex items-center justify-center gap-4 bg-zinc-200 py-6'>
      <Link href='/' className='bg-blue-500 text-white rounded-md p-2'>
        Home
      </Link>
      <div className='flex gap-4 items-center text-blue-500 relative border-blue-500 border-2 rounded-md p-2'>
        <div className='absolute -top-6 left-0'>With Provider</div>
        <Link href='/with-provider/unprotected'>Unprotected</Link>
        <Link href='/with-provider/protected'>Protected</Link>
      </div>
      <div className='flex gap-4 items-center text-green-500 relative border-green-500 border-2 rounded-md p-2'>
        <div className='absolute -top-6 left-0'>
          <span className='text-green-500'>Without</span> Provider
        </div>
        <Link href='/without-provider/unprotected'>Unprotected</Link>
        <Link href='/without-provider/protected'>Protected</Link>
      </div>
      {/* signup and login */}
      <div className='flex gap-4 items-center'>
        <Link href='/auth/signup'>Signup</Link>
        <Link href='/auth/signin'>Login</Link>
      </div>
    </div>
  );
}
