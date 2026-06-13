import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';
import { GoogleTagManager } from '@next/third-parties/google'; // ✅ Import added

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Veridian Nexus',
  description: 'Enterprise-grade data provenance and trust platform',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
      <GoogleTagManager gtmId="GTM-XXXXXXX" /> // ✅ Required for @next/third-parties/google
    </html>
  );
}