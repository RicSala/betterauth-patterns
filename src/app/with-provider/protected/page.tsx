import { SessionViewer } from '@/lib/auth/components/SessionViewer';
import { SessionViewerPreloaded } from '@/lib/auth/components/SessionViewerPreloaded';
import { SignOutButton } from '@/lib/auth/components/SignOutButton';
import { UserAvatar } from '@/lib/auth/components/UserAvatar';

export default function Page() {
  return (
    <div className='flex flex-col gap-4 mx-auto max-w-md justify-center h-screen items-center'>
      <div className='text-2xl font-semibold'>Protected page</div>
      <UserAvatar />
      <SignOutButton />
      <div className='fixed bottom-0 right-0 p-2 border rounded-md flex gap-2 max-w-lg'>
        <SessionViewer />
        <SessionViewerPreloaded />
      </div>
    </div>
  );
}
