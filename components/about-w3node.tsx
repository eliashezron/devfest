'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function AboutW3Node() {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      title: 'Community',
      description: 'Forge valuable connections with fellow attendees who share your interests and aspirations.',
      image: '/images/community.jpeg',
    },
    {
      title: 'Talks and Workshops',
      description: 'Discover the potential of blockchain technologies through engaging talks and workshops.',
      image: '/images/hack1.jpg',
    },
    {
      title: 'Hackathons',
      description: 'Take collaboration to the next level with security and administrative features built for teams.',
      image: '/images/hack2.jpg',
    },
  ];

  // Auto-slide through features continuously
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, [features.length]);

  return (
    <section id="about" className="relative py-20 md:py-32 bg-blue-950 text-white overflow-hidden">
      {/* Diagonal grid pattern background */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255, 255, 255, 0.1) 10px, rgba(255, 255, 255, 0.1) 20px)
          `,
        }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header Section */}
        <div className="relative mb-8">
          <div className="flex items-center justify-between mb-4">
            {/* Left: <01> */}
            <div className="text-sm md:text-base text-white font-mono" data-aos="fade-right">
              &lt;01&gt;
            </div>
            
            {/* Center: //ABOUT */}
            <div className="text-sm md:text-base text-white font-mono absolute left-1/2 transform -translate-x-1/2" data-aos="fade-up">
              //ABOUT
            </div>
            
            {/* Right: DEVFEST 5.0 rotated 90 degrees */}
            <div 
              className="text-sm md:text-base text-white font-mono"
              style={{ 
                writingMode: 'vertical-rl',
                textOrientation: 'mixed',
                transform: 'rotate(90deg)'
              }}
              data-aos="fade-left"
            >
              DEVFEST 5.0
            </div>
          </div>
          
          {/* Thin white horizontal line */}
          <div className="w-full h-px bg-white mb-12"></div>
        </div>

        {/* Main Content */}
        <div className="max-w-8xl mx-auto text-center">
          {/* Main Title - Three Lines */}
          <div className="mb-8" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl lg:text-8xl xl:text-7xl font-bold mb-4 uppercase leading-tight">
              <span className="block text-white">WELCOME TO DEVFEST 5.0 2026</span>
              <span className="block text-white">WEB3 DEVELOPER</span>
              <span className="block text-blue-700">CONFERENCE </span>
            </h2>
          </div>
          
          {/* Descriptive Text */}
          <div className="mb-12" data-aos="fade-up" data-aos-delay="100">
            <p className="text-base md:text-lg lg:text-xl text-white leading-relaxed max-w-4xl mx-auto">
            Empowering Developers, Igniting Innovation, and Building Solutions for Africa's Future            </p>
          </div>

          {/* CTA Buttons - Four buttons in a row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6" data-aos="fade-up" data-aos-delay="200">
            <a
              href="#sponsorship"
              className="group relative px-6 py-4 bg-gray-800 border border-white text-white font-semibold hover:bg-gray-700 transition flex items-center justify-between"
            >
              <span className="uppercase text-sm md:text-base">BECOME A SPONSOR</span>
              <span className="ml-4 w-6 h-6 bg-blue-700 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 15l7-7 7 7" />
                </svg>
              </span>
            </a>
            
            <a
              href="#speakers"
              className="group relative px-6 py-4 bg-gray-800 border border-white text-white font-semibold hover:bg-gray-700 transition flex items-center justify-between"
            >
              <span className="uppercase text-sm md:text-base">APPLY TO SPEAK</span>
              <span className="ml-4 w-6 h-6 bg-blue-700 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 15l7-7 7 7" />
                </svg>
              </span>
            </a>
            
            <a
              href="#node-engine"
              className="group relative px-6 py-4 bg-gray-800 border border-white text-white font-semibold hover:bg-gray-700 transition flex items-center justify-between"
            >
              <span className="uppercase text-sm md:text-base">APPLY TO HACK</span>
              <span className="ml-4 w-6 h-6 bg-blue-700 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 15l7-7 7 7" />
                </svg>
              </span>
            </a>
            
            <a
              href="#community"
              className="group relative px-6 py-4 bg-gray-800 border border-white text-white font-semibold hover:bg-gray-700 transition flex items-center justify-between"
            >
              <span className="uppercase text-sm md:text-base">BECOME A COMMUNITY PARTNER</span>
              <span className="ml-4 w-6 h-6 bg-blue-700 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 15l7-7 7 7" />
                </svg>
              </span>
            </a>
          </div>
        </div>

        {/* Who The Conference is For Section */}
        <div className="mt-20 md:mt-32" data-aos="fade-up">
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 md:mb-16 text-center uppercase">
            <span className="text-white">WHO THE</span>{' '}
            <span className="text-blue-700">CONFERENCE IS FOR</span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-20 md:mb-32">
            {/* Developers & Founders */}
            <div className="flex flex-col items-center text-center" data-aos="fade-up" data-aos-delay="100">
              <div className="mb-6 w-32 h-32 flex items-center justify-center">
                <div className="relative w-full h-full">
                  {/* Orange circle outline */}
                  <div className="absolute inset-0 rounded-full border-4 border-orange-500"></div>
                  {/* Code tags icon with geometric shape */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      {/* Subtle geometric shape background */}
                      <div className="absolute inset-0 opacity-20">
                        <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                          <path d="M30 0L60 30L30 60L0 30Z" fill="url(#gradient1)" />
                          <defs>
                            <linearGradient id="gradient1" x1="0" y1="0" x2="60" y2="60">
                              <stop offset="0%" stopColor="#1D4ED8" />
                              <stop offset="100%" stopColor="#60A5FA" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                      {/* Code tags </> */}
                      <div className="relative text-white text-3xl font-bold font-mono">
                        &lt;/&gt;
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-white text-lg md:text-xl font-semibold uppercase">
                Developers & Founders
              </div>
            </div>

            {/* Community Leads */}
            <div className="flex flex-col items-center text-center" data-aos="fade-up" data-aos-delay="200">
              <div className="mb-6 w-32 h-32 flex items-center justify-center">
                <div className="relative w-full h-full bg-black border-2 border-gray-400 rounded-xl flex items-center justify-center">
                  {/* Handshake icon */}
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M11 12h2M9 9h2M13 9h2M7 15h10" />
                    <path d="M8 12c0-1 1-2 2-2h4c1 0 2 1 2 2v3H8v-3z" />
                    <path d="M6 8l-2 2 2 2M18 8l2 2-2 2" />
                  </svg>
                </div>
              </div>
              <div className="text-white text-lg md:text-xl font-semibold uppercase">
                Community Leads
              </div>
            </div>

            {/* Ecosystem Leads */}
            <div className="flex flex-col items-center text-center" data-aos="fade-up" data-aos-delay="300">
              <div className="mb-6 w-32 h-32 flex items-center justify-center">
                <div className="relative w-full h-full bg-black border-2 border-gray-400 rounded-xl flex items-center justify-center">
                  {/* Four circles with plus icon */}
                  <div className="relative">
                    <div className="grid grid-cols-2 gap-2">
                      <div className="w-4 h-4 rounded-full bg-white"></div>
                      <div className="w-4 h-4 rounded-full bg-white"></div>
                      <div className="w-4 h-4 rounded-full bg-white"></div>
                      <div className="w-4 h-4 rounded-full bg-white relative">
                        <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-white rounded-full flex items-center justify-center">
                          <span className="text-black text-xs font-bold">+</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-white text-lg md:text-xl font-semibold uppercase">
                Ecosystem Leads
              </div>
            </div>
          </div>
        </div>

        {/* What To Expect Section */}
        <div className="mt-20 md:mt-32" data-aos="fade-up">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* Left: Text Content */}
            <div>
              {/* Main Title */}
              <h4 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 text-center md:text-left">
                What to Expect
              </h4>
              
              {/* Subtitle */}
              <p className="text-base md:text-lg text-white mb-8 text-center md:text-left">
                Discover the potential of blockchain technologies through engaging talks and workshops.
              </p>
              
              {/* Feature Cards */}
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className={`bg-gray-800 rounded-lg p-6 border-2 transition-all cursor-pointer ${
                      activeFeature === index ? 'border-orange-500 bg-gray-700' : 'border-gray-700 hover:border-gray-600'
                    }`}
                    onMouseEnter={() => setActiveFeature(index)}
                    onClick={() => setActiveFeature(index)}
                  >
                    <h5 className="text-xl md:text-2xl font-bold text-white mb-2">
                      {feature.title}
                    </h5>
                    <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Right: Sliding Image */}
            <div className="relative h-[400px] md:h-[600px] rounded-lg overflow-hidden">
              <div className="relative w-full h-full">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-500 ${
                      activeFeature === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
                    }`}
                  >
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      className="object-cover"
                      priority={index === 0}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
