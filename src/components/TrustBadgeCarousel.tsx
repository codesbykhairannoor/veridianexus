import { motion, AnimatePresence } from 'framer-motion'; // ✅ Keep import — used below
import { useState, useEffect } from 'react';

interface Badge {
  id: number;
  name: string;
  logo: string;
}

export default function TrustBadgeCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const badges: Badge[] = [
    { id: 1, name: 'SOC 2', logo: '/logos/soc2.svg' },
    { id: 2, name: 'ISO 27001', logo: '/logos/iso27001.svg' },
    { id: 3, name: 'GDPR Compliant', logo: '/logos/gdpr.svg' },
    { id: 4, name: 'HIPAA Ready', logo: '/logos/hipaa.svg' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % badges.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [badges.length]);

  return (
    <div className="relative w-full max-w-4xl mx-auto py-12 px-4">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center items-center"
        >
          <img
            src={badges[currentIndex].logo}
            alt={badges[currentIndex].name}
            className="h-16 md:h-20 grayscale hover:grayscale-0 transition-all duration-300"
          />
        </motion.div>
      </AnimatePresence>
      <div className="flex justify-center mt-6 space-x-2">
        {badges.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Go to ${badges[idx].name} badge`}
            className={`w-3 h-3 rounded-full transition-colors ${
              idx === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
}