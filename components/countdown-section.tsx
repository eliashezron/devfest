'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import BlockchainBackground from '@/components/blockchain-background';

const getTimeRemaining = (targetDate: Date) => {
  const total = targetDate.getTime() - new Date().getTime();
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  return { total, days, hours, minutes, seconds };
};

export default function CountdownSection() {
  const targetDate = new Date('2026-08-29T09:00:00'); // DevFest Kampala 2026 - August 29th
  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ total: 0, days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // Only set mounted and initial time after client-side hydration
    setMounted(true);
    setTimeLeft(getTimeRemaining(targetDate));

    const timer = setInterval(() => {
      const remaining = getTimeRemaining(targetDate);
      setTimeLeft(remaining);
      if (remaining.total <= 0) clearInterval(timer);
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timeBox = (label: string, value: number) => (
    <motion.div
      key={label}
      className="flex flex-col items-center justify-center bg-gray-900 border border-gray-700 rounded-lg px-6 py-8 w-24 sm:w-28 md:w-32 lg:w-36"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-white drop-shadow-sm">
        {String(value).padStart(2, '0')}
      </div>
      <div className="text-sm sm:text-base font-medium text-gray-400 mt-2 uppercase tracking-wider">{label}</div>
    </motion.div>
  );

  return (
    <section className="relative py-16 md:py-24 text-white overflow-hidden">
      <BlockchainBackground />

      <div className="relative z-10 max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-8xl mx-auto text-center pb-12 md:pb-16" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Countdown to <span className="text-blue-700">DevFest Kampala 2026</span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300">
            Experience tech, community, innovation and more. Don't miss it!
          </p>
        </div>

        {/* Timer */}
        {!mounted ? (
          // Placeholder during SSR to prevent hydration mismatch
          <div className="flex justify-center items-center flex-wrap gap-4 sm:gap-6 md:gap-8" data-aos="fade-up" data-aos-delay="200">
            <div className="flex flex-col items-center justify-center bg-gray-900 border border-gray-700 rounded-lg px-6 py-8 w-24 sm:w-28 md:w-32 lg:w-36">
              <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-white drop-shadow-sm">00</div>
              <div className="text-sm sm:text-base font-medium text-gray-400 mt-2 uppercase tracking-wider">Days</div>
            </div>
            <div className="flex flex-col items-center justify-center bg-gray-900 border border-gray-700 rounded-lg px-6 py-8 w-24 sm:w-28 md:w-32 lg:w-36">
              <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-white drop-shadow-sm">00</div>
              <div className="text-sm sm:text-base font-medium text-gray-400 mt-2 uppercase tracking-wider">Hours</div>
            </div>
            <div className="flex flex-col items-center justify-center bg-gray-900 border border-gray-700 rounded-lg px-6 py-8 w-24 sm:w-28 md:w-32 lg:w-36">
              <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-white drop-shadow-sm">00</div>
              <div className="text-sm sm:text-base font-medium text-gray-400 mt-2 uppercase tracking-wider">Minutes</div>
            </div>
            <div className="flex flex-col items-center justify-center bg-gray-900 border border-gray-700 rounded-lg px-6 py-8 w-24 sm:w-28 md:w-32 lg:w-36">
              <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-white drop-shadow-sm">00</div>
              <div className="text-sm sm:text-base font-medium text-gray-400 mt-2 uppercase tracking-wider">Seconds</div>
            </div>
          </div>
        ) : timeLeft.total > 0 ? (
          <div className="flex justify-center items-center flex-wrap gap-4 sm:gap-6 md:gap-8" data-aos="fade-up" data-aos-delay="200">
            {timeBox('Days', timeLeft.days)}
            {timeBox('Hours', timeLeft.hours)}
            {timeBox('Minutes', timeLeft.minutes)}
            {timeBox('Seconds', timeLeft.seconds)}
          </div>
        ) : (
          <div className="text-center text-3xl sm:text-4xl font-bold text-blue-700 mt-8 animate-bounce">
            🎉 The event has started!
          </div>
        )}
      </div>
    </section>
  );
}
