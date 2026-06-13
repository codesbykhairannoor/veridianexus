import { Providers } from './providers';
import { GoogleAnalytics } from '@next/third-parties/google';
import './globals.css';

export const metadata = {
  title: 'Veridianexus',
  description: 'A secure, transparent SaaS platform for digital provenance.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
      <GoogleAnalytics gaId="G-XXXXXXXXXX" />
    </html>
  );
}