import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from 'sonner';
import { Navbar } from './components/Navbar';
export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={` antialiased`}>
        <Navbar />
        {children}
        <Toaster position='top-center' />
      </body>
    </html>
  );
}
