'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const getTimeRemaining = (targetDate: Date) => {
  const total = targetDate.getTime() - new Date().getTime();
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  return { total, days, hours, minutes, seconds };
};

export default function CountDownTimer() {
  const targetDate = new Date('2025-06-27T09:00:00'); // DevFest Kampala 2025
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining(targetDate));

  useEffect(() => {
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
      className="flex flex-col items-center justify-center bg-white rounded-2xl shadow-xl px-6 py-8 w-28 sm:w-32 md:w-36"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="text-4xl sm:text-5xl font-extrabold text-blue-600 drop-shadow-sm animate-pulse">
        {String(value).padStart(2, '0')}
      </div>
      <div className="text-md sm:text-lg font-medium text-gray-500 mt-2">{label}</div>
    </motion.div>
  );

  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center pb-12 md:pb-16">
          <h1 className="text-4xl sm:text-5xl font-black text-gray-800 leading-tight mb-6">
            Countdown to <span className="text-blue-600">DevFest Kampala 2025</span>
          </h1>
          <p className="text-xl text-gray-600">
            Experience tech, community, innovation and more. Don’t miss it!
          </p>
        </div>

        {/* Timer */}
        {timeLeft.total > 0 ? (
          <div className="flex justify-center items-center flex-wrap gap-6 sm:gap-8 md:gap-10">
            <AnimatePresence mode="wait">
              {timeBox('Days', timeLeft.days)}
              {timeBox('Hours', timeLeft.hours)}
              {timeBox('Minutes', timeLeft.minutes)}
              {timeBox('Seconds', timeLeft.seconds)}
            </AnimatePresence>
          </div>
        ) : (
          <div className="text-center text-3xl sm:text-4xl font-bold text-green-600 mt-8 animate-bounce">
            🎉 The event has started!
          </div>
        )}
      </div>
    </section>
  );
}
