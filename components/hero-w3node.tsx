'use client';

import { motion } from 'framer-motion';
import BlockchainBackground from '@/components/blockchain-background';

export default function HeroW3Node() {
  // Animation variants for FEST letters - wave effect
  const festLetters = ['F', 'E', 'S', 'T'];
  
  const getLetterAnimation = (index: number) => ({
    y: [0, -15, 0],
    transition: {
      duration: 1.2,
      delay: index * 0.15,
      repeat: Infinity,
      ease: "easeInOut",
      repeatDelay: 0.5
    }
  });
  return (
    <section className="relative h-[550px] flex items-center justify-center text-white overflow-hidden">
      <BlockchainBackground />

      <div className="relative z-10 w-full h-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-10">
        <div className="flex flex-col h-[500px] justify-between py-12 md:py-16 lg:py-20">
          {/* Main Title - Upper Section */}
          <div className="flex items-center justify-center flex-1 mb-3 md:mb-16 lg:mb-10">
            <h1 
              className="w-full text-6xl md:text-8xl lg:text-[10rem] xl:text-[12rem] 2xl:text-[14rem] font-bold tracking-tight text-center leading-none"
              data-aos="fade-up"
              style={{ 
                fontFamily: '"Courier New", Courier, monospace',
                color: '#d1d5db', // light grey/off-white color matching the image
                letterSpacing: '0.05em',
                textRendering: 'optimizeSpeed'
              }}
            >
              <span className="inline-block">DEV</span>
              {festLetters.map((letter, index) => (
                <motion.span
                  key={index}
                  className="inline-block"
                  animate={getLetterAnimation(index)}
                >
                  {letter}
                </motion.span>
              ))}
              <span className="inline-block align-baseline text-2xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl ml-1 md:ml-2"> 5.0</span>
            </h1>
          </div>

          {/* Three Info Blocks - Bottom Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 lg:gap-20 w-full max-w-6xl mx-auto">
            {/* Location Block - Left */}
            <div className="flex flex-col items-center text-center" data-aos="fade-up" data-aos-delay="100">
              {/* Navy map pin icon - outlined */}
              <div className="mb-6 md:mb-8">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
                    stroke="#1D4ED8"
                    strokeWidth="2"
                    fill="none"
                  />
                  <circle cx="12" cy="9" r="2.5" fill="#1D4ED8" />
                </svg>
              </div>
              <div 
                className="text-white text-base md:text-lg lg:text-xl mb-2 uppercase tracking-wider"
                style={{ 
                  fontFamily: '"Courier New", Courier, monospace',
                  letterSpacing: '0.1em'
                }}
              >
                KAMPALA
              </div>
              <div 
                className="text-gray-400 text-sm md:text-base uppercase tracking-wider"
                style={{ 
                  fontFamily: '"Courier New", Courier, monospace',
                  letterSpacing: '0.1em'
                }}
              >
                UGANDA
              </div>
            </div>

            {/* Date Block - Middle */}
            <div className="flex flex-col items-center text-center" data-aos="fade-up" data-aos-delay="200">
              {/* White globe icon - outlined */}
              <div className="mb-6 md:mb-8">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <ellipse cx="12" cy="12" rx="10" ry="10" stroke="white" strokeWidth="2" fill="none" />
                  <path
                    d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
                    stroke="white"
                    strokeWidth="1.5"
                  />
                  <rect x="10" y="10" width="4" height="4" fill="white" />
                </svg>
              </div>
              <div 
                className="text-white text-base md:text-lg lg:text-xl mb-2 uppercase tracking-wider"
                style={{ 
                  fontFamily: '"Courier New", Courier, monospace',
                  letterSpacing: '0.1em'
                }}
              >
                27th 
              </div>
              <div 
                className="text-gray-400 text-sm md:text-base uppercase tracking-wider"
                style={{ 
                  fontFamily: '"Courier New", Courier, monospace',
                  letterSpacing: '0.1em'
                }}
              >
                AUGUST 2026
              </div>
            </div>

            {/* Tagline Block - Right */}
            <div className="flex flex-col items-center text-center" data-aos="fade-up" data-aos-delay="300">
              {/* Teal-blue badge/shield icon with checkmark */}
              <div className="mb-6 md:mb-8">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12 2L15 7L21 8L17 12L18 18L12 16L6 18L7 12L3 8L9 7L12 2Z"
                    stroke="#60A5FA"
                    strokeWidth="2"
                    fill="none"
                  />
                  <circle cx="12" cy="11" r="4" stroke="#60A5FA" strokeWidth="1.5" fill="none" />
                  <path
                    d="M9 11l2 2 4-4"
                    stroke="#60A5FA"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div 
                className="text-white text-base md:text-lg lg:text-xl mb-2 uppercase tracking-wider"
                style={{ 
                  fontFamily: '"Courier New", Courier, monospace',
                  letterSpacing: '0.1em'
                }}
              >
                AFRICA'S PREMIER
              </div>
              <div 
                className="text-gray-400 text-sm md:text-base uppercase tracking-wider"
                style={{ 
                  fontFamily: '"Courier New", Courier, monospace',
                  letterSpacing: '0.1em'
                }}
              >
                DEVELOPER CONFERENCE
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
