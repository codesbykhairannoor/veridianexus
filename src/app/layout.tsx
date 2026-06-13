import { Providers } from './providers';
import './globals.css';

export const metadata = {
  title: 'Veridianexus',
  description: 'Secure, auditable AI infrastructure for regulated industries',
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