import { SessionViewer } from '@/lib/auth/components/SessionViewer';
import { SessionViewerPreloaded } from '@/lib/auth/components/SessionViewerPreloaded';
import { SignOutButton } from '@/lib/auth/components/SignOutButton';

export default function Page() {
  return (
    <div className='flex flex-col gap-4 mx-auto max-w-md justify-center h-screen items-center'>
      <div className='text-2xl font-semibold'>Unprotected page</div>
      {/* <SessionViewer /> */}
      <div className='flex gap-4 max-w-lg will-change-transform fixed bottom-0 p-2 border rounded-md right-0'>
        <SessionViewer />
        <SessionViewerPreloaded />
      </div>
      <SignOutButton />
    </div>
  );
}
