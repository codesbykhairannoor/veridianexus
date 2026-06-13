import { Providers } from './providers';
import './globals.css';

export const metadata = {
  title: 'Veridianexus',
  description: 'Enterprise-grade SaaS platform for data provenance and trust intelligence',
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
    </html>
  );
}