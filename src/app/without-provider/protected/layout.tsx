import { auth } from '@/lib/auth/server';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
export default async function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth.api.getSession({
    headers: headers(),
  });

  if (!session) {
    redirect('/auth/signin');
  }

  return <>{children}</>;
}
