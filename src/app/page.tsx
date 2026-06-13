import HeroSection from '@/components/HeroSection';
import SignalGrid from '@/components/SignalGrid';
import ProvenanceTimeline from '@/components/ProvenanceTimeline';
import ImpactMetrics from '@/components/ImpactMetrics';
import TrustBadgeCarousel from '@/components/TrustBadgeCarousel';
import { useTranslations } from '@/lib/i18n';

export default function HomePage() {
  const t = useTranslations('HomePage');

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <HeroSection />
      <div className="container mx-auto px-4 py-16">
        <ImpactMetrics />
        <SignalGrid />
        <ProvenanceTimeline />
        <TrustBadgeCarousel />
      </div>
    </main>
  );
}