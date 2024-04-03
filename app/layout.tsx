import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { threadId } from 'worker_threads';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}

export const metadata = {
  metadataBase: new URL('http://localhost:3000'),
}
