import Image from 'next/image';
import { useState, useEffect } from 'react';

interface Badge {
  id: string;
  alt: string;
  src: string;
}

export default function TrustBadgeCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const badges: Badge[] = [
    { id: 'iso27001', alt: 'ISO 27001 Certified', src: '/badges/iso27001.svg' },
    { id: 'gdpr', alt: 'GDPR Compliant', src: '/badges/gdpr.svg' },
    { id: 'soc2', alt: 'SOC 2 Type II', src: '/badges/soc2.svg' },
    { id: 'hipaa', alt: 'HIPAA Ready', src: '/badges/hipaa.svg' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % badges.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [badges.length]);

  return (
    <div className="relative w-full max-w-4xl mx-auto py-8 px-4">
      <div className="flex overflow-hidden rounded-xl bg-gray-50 p-1 shadow-sm">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {badges.map((badge) => (
            <div key={badge.id} className="flex-shrink-0 w-full px-2 py-4 flex justify-center">
              <Image
                src={badge.src}
                alt={badge.alt}
                width={120}
                height={60}
                className="h-auto max-h-12 object-contain"
                priority={currentIndex === 0}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-4 space-x-2">
        {badges.map((_, idx) => (
          <button
            key={idx}
            aria-label={`Go to slide ${idx + 1}`}
            onClick={() => setCurrentIndex(idx)}
            className={`w-2 h-2 rounded-full transition-colors ${
              idx === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
}