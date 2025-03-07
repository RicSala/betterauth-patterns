import { SessionProvider } from '@/lib/auth/components/SessionProvider';
import { auth } from '@/lib/auth/server';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
export default async function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const data = await auth.api.getSession({
    headers: headers(),
  });

  console.log('🟥 data from wrapped layout', data);
  if (!data) {
    redirect('/auth/signin');
  }

  return <SessionProvider initialData={data}>{children}</SessionProvider>;
}
