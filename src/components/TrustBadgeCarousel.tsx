import { motion, AnimatePresence } from 'framer-motion';

interface TrustBadgeCarouselProps {
  t: Record<string, string>;
}

const badges = [
  { id: 'iso27001', name: 'ISO/IEC 27001:2022', logo: '🔒', verified: true },
  { id: 'nistai', name: 'NIST AI RMF Compliant', logo: '🛡️', verified: true },
  { id: 'crispr', name: 'CRISPR-AI Provenance Certified', logo: '🧬', verified: true },
  { id: 'fable5', name: 'Fable 5 Attribution Verified', logo: '📜', verified: true },
  { id: 'mythos5', name: 'Mythos 5 Integrity Endorsed', logo: '✨', verified: true },
];

export default function TrustBadgeCarousel({ t }: TrustBadgeCarouselProps) {
  return (
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 to-cyan-300">
        {t('trust.carousel.title')}
      </h2>
      <div className="relative overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...badges, ...badges].map((badge, i) => (
            <motion.div
              key={`${badge.id}-${i}`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="flex-shrink-0 mx-4"
            >
              <div className="flex items-center justify-center p-4 bg-slate-800/30 backdrop-blur-xl rounded-xl border border-slate-700/30 w-48 h-24">
                <div className="text-3xl">{badge.logo}</div>
                <div className="ml-3 text-left">
                  <div className="text-sm font-medium text-slate-200">{badge.name}</div>
                  <div className="flex items-center mt-1">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mr-1"></div>
                    <span className="text-xs text-emerald-400">{t('trust.verified')}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-slate-900 to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-slate-900 to-transparent z-10" />
      </div>
    </div>
  );
}