'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

interface Badge {
  id: string;
  name: string;
  logo: string;
}

interface TrustBadgeCarouselProps {
  badges: Badge[];
}

export default function TrustBadgeCarousel({ badges }: TrustBadgeCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % badges.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [badges.length]);

  if (!isMounted || badges.length === 0) return null;

  return (
    <div className="relative w-full max-w-6xl mx-auto py-8 px-4">
      <div className="overflow-hidden rounded-lg bg-gray-50 p-2">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {[...badges, ...badges].map((badge) => (
            <div key={badge.id} className="flex-shrink-0 w-full px-4 flex justify-center items-center">
              <Image
                src={badge.logo}
                alt={badge.name}
                width={120}
                height={40}
                className="h-10 object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}