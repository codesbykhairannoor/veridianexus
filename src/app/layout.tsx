import { Providers } from './providers';
import './globals.css';

export const metadata = {
  title: 'Veridianexus',
  description: 'A secure, transparent SaaS platform',
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