import { SessionProvider } from '@/lib/auth/components/SessionProvider';
export default async function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SessionProvider>{children}</SessionProvider>;
}
