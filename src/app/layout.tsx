import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';
import { GoogleTagManager } from '@next/third-parties/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Veridianexus — Trust-First SaaS Platform',
  description: 'Enterprise-grade data integrity and provenance platform',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>{children}</Providers>
        <GoogleTagManager gtmId="GTM-XXXXXXX" />
      </body>
    </html>
  );
}