import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { GoogleAnalytics } from '@next/third-parties/google';
import { Suspense } from 'react';
import { getTranslations } from '@/lib/i18n';
import { Providers } from './providers';
import Script from 'next/script';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://veridianexus.ai'),
  title: {
    default: 'Veridia Nexus — Real-Time AI Provenance & Impact Intelligence',
    template: '%s | Veridia Nexus',
  },
  description:
    'Veridia Nexus is the first real-time AI Provenance & Impact Intelligence Platform — ingesting, normalizing, and cross-referencing live signals across news, regulation, biotech, sustainability, and synthetic media.',
  keywords:
    'AI provenance, truth infrastructure, deepfake attribution, AI governance, biotech AI, CRISPR AI, rare-earth-free motors, synthetic media provenance, Fable 5 audit, Mythos 5 forensics',
  authors: [{ name: 'Veridia Labs', url: 'https://veridianexus.ai' }],
  creator: 'Veridia Labs',
  publisher: 'Veridia Labs',
  openGraph: {
    title: 'Veridia Nexus — Real-Time AI Provenance & Impact Intelligence',
    description:
      'The world’s first live signal intelligence platform for AI accountability, impact verification, and cross-domain provenance mapping.',
    url: 'https://veridianexus.ai',
    siteName: 'Veridia Nexus',
    images: [
      {
        url: '/og-image-global.jpg',
        width: 1200,
        height: 630,
        alt: 'Veridia Nexus — AI Provenance Intelligence Dashboard',
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Veridia Nexus — Real-Time AI Provenance & Impact Intelligence',
    description:
      'Mapping truth at scale: Live regulatory feeds, biotech breakthroughs, synthetic media provenance, and sustainability signals — all in one verifiable graph.',
    images: ['/og-image-global.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-token-veridia-nexus-2024',
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const t = await getTranslations('en');

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#0d9488" />
        <meta name="application-name" content="Veridia Nexus" />
        <meta name="apple-mobile-web-app-title" content="Veridia Nexus" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <Script id="schema-org" type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            'name': 'Veridia Labs',
            'url': 'https://veridianexus.ai',
            'logo': 'https://veridianexus.ai/logo-dark.svg',
            'sameAs': [
              'https://twitter.com/veridianexus',
              'https://linkedin.com/company/veridia-labs',
              'https://github.com/veridia-labs',
              'https://discord.gg/veridia',
            ],
          })}
        </Script>
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased bg-slate-900 text-slate-100`}
      >
        <Providers>
          <Suspense fallback={<div className="h-screen w-screen bg-slate-900" />}> 
            {children}
          </Suspense>
        </Providers>
        {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID} />
        )}
      </body>
    </html>
  );
}