import { useTranslations } from 'src/lib/i18n';
import HeroSection from 'src/components/HeroSection';
import SignalGrid from 'src/components/SignalGrid';
import ProvenanceTimeline from 'src/components/ProvenanceTimeline';
import ImpactMetrics from 'src/components/ImpactMetrics';
import TrustBadgeCarousel from 'src/components/TrustBadgeCarousel';

export default function Home() {
  const t = useTranslations('home'); // ✅ 't' is now used

  return (
    <main>
      <HeroSection />
      <SignalGrid />
      <ProvenanceTimeline />
      <ImpactMetrics />
      <TrustBadgeCarousel />
      <div className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900">{t('trusted_by')}</h2>
          <p className="mt-4 text-lg text-gray-600">{t('trusted_by_description')}</p>
        </div>
      </div>
    </main>
  );
}