import { getTranslations } from '@/lib/i18n';
import HeroSection from '@/components/HeroSection';
import SignalGrid from '@/components/SignalGrid';
import ProvenanceTimeline from '@/components/ProvenanceTimeline';
import ImpactMetrics from '@/components/ImpactMetrics';
import TrustBadgeCarousel from '@/components/TrustBadgeCarousel';
import { Metadata } from 'next';

export const generateMetadata = async (): Promise<Metadata> => {
  const t = await getTranslations('en');
  return {
    title: `${t('seo.home.title')} | Veridia Nexus`,
    description: t('seo.home.description'),
    keywords: t('seo.home.keywords').split(', '),
    openGraph: {
      title: t('seo.home.ogTitle'),
      description: t('seo.home.ogDescription'),
      url: 'https://veridianexus.ai',
      siteName: 'Veridia Nexus',
      images: [
        {
          url: '/og-image-en.jpg',
          width: 1200,
          height: 630,
          alt: t('seo.home.ogAlt'),
        },
      ],
      locale: 'en-US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: t('seo.home.twitterTitle'),
      description: t('seo.home.twitterDescription'),
      images: ['/og-image-en.jpg'],
    },
    alternates: {
      canonical: 'https://veridianexus.ai/',
      languages: {
        'en-US': 'https://veridianexus.ai/',
        'es-ES': 'https://veridianexus.ai/es',
        'ja-JP': 'https://veridianexus.ai/ja',
        'de-DE': 'https://veridianexus.ai/de',
      },
    },
  };
};

export default async function HomePage() {
  const t = await getTranslations('en');

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900 overflow-x-hidden">
      {/* Semantic hero with structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebApplication',
            'name': 'Veridia Nexus',
            'description': t('seo.home.description'),
            'url': 'https://veridianexus.ai',
            'applicationCategory': 'BusinessApplication',
            'offers': {
              '@type': 'Offer',
              'price': '0',
              'priceCurrency': 'USD',
            },
            'potentialAction': {
              '@type': 'SearchAction',
              'target': {
                '@type': 'EntryPoint',
                'urlTemplate': 'https://veridianexus.ai/search?q={search_term_string}',
                'httpMethod': 'GET',
              },
              'query-input': 'required name=search_term_string',
            },
          }),
        }}
      />

      <HeroSection t={t} />
      <div className="relative z-10 pt-24 pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-cyan-300 to-teal-200 mb-4">
            {t('home.realTimeSignals')}
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            {t('home.signalDescription')}
          </p>
        </div>

        <SignalGrid t={t} />

        <div className="mt-32">
          <ImpactMetrics t={t} />
        </div>

        <div className="mt-32">
          <ProvenanceTimeline t={t} />
        </div>

        <div className="mt-32 pb-24">
          <TrustBadgeCarousel t={t} />
        </div>
      </div>
    </main>
  );
}