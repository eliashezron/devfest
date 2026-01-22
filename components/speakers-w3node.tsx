'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import daniel from '@/public/images/daniel.jpeg';
import Bbosa from '@/public/images/lutalo.jpeg';
import Angellina from '@/public/images/Angellina.jpeg';
import david from '@/public/images/david.jpg';
import jovan from '@/public/images/jova.jpeg';
import dorcus from '@/public/images/Dorcus.png';
import israel from '@/public/images/israel.jpg';
import moses from '@/public/images/moses.jpg';
import jimmy from '@/public/images/jimmy.jpg';
import vicent from '@/public/images/vicent.jpg';
import edgar from '@/public/images/edgar.png';
import vianey from '@/public/images/vianey.jpeg';

// Helper function to trim text
const trimText = (text: string, maxLength: number) => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
};

export default function SpeakersW3Node() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [selectedSpeaker, setSelectedSpeaker] = useState<typeof speakers[0] | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      // Calculate scroll amount based on card width + gap
      const cardWidth = 280; // w-72 = 288px, but accounting for gaps
      const scrollAmount = cardWidth;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  // Auto-scroll continuously
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      if (scrollContainerRef.current) {
        const container = scrollContainerRef.current;
        const scrollAmount = 1; // Small increment for smooth continuous scroll
        const singleSetWidth = container.scrollWidth / 2; // Since we duplicated speakers
        
        container.scrollLeft += scrollAmount;

        // Reset to start of first set when reaching end of second set (seamless loop)
        if (container.scrollLeft >= singleSetWidth) {
          container.scrollLeft = container.scrollLeft - singleSetWidth;
        }
      }
    }, 20); // Update every 20ms for smooth scrolling

    return () => clearInterval(interval);
  }, [isPaused]);

  const speakers = [
    {
      name: "Daniel Nasasira",
      role: "Technical Analyst at Gateway.fm",
      image: daniel,
      bio: "Nasasira Daniel is a Technical Analyst at Gateway.fm, a leading provider of decentralized blockchain infrastructure. At Gateway, he plays a key role in enabling developers to build scalable, secure, and customizable rollup solutions using zkEVM and Optimistic technologies through Gateway's flagship Rollup-as-a-Service product, Presto. With a strong foundation in data strategy and Web3, Nasasira leads Gateway's regional efforts for Africa to support blockchain builders through infrastructure and blockchain tooling. Prior to joining Gateway, he worked at API7.ai where he contributed to the Apache APISIX open-source API Gateway project. His work helped enhance the growth and global adoption of one of the most performant and modern API gateways in the open-source ecosystem. Nasasira is also the founder of NASDAN and a creator of Humura Therapy, a digital mental health platform that has provided support to thousands of users globally. His passion lies at the intersection of blockchain infrastructure, data-driven decision-making, and technology social empowerment."
    },
    {
      name: "Lutalo Joseph Bbosa",
      role: "Founder swiftramp",
      image: Bbosa,
      bio: "Software engineer building swiftramp, an on/off-ramp and cross border payment platform leveraging blockchain"
    },
    {
      name: "Angella Mulikatete",
      role: "Software Engineer",
      image: Angellina,
      bio: "Software engineer and smart Contract Engineer"
    },
    {
      name: "David Lumala",
      role: "Co-Founder Epoch Infinity",
      image: david,
      bio: "David Lumala is an expert in blockchain and decentralized applications, co-founding Epoch Infinity to drive blockchain adoption in Africa."
    },
    {
      name: "Jovan Mwesigwa",
      role: "Co-Founder Oneramp & Shukuru Wallet",
      image: jovan,
      bio: "Jovan is a blockchain developer and advocate, working on innovative solutions in Web3 and digital asset management."
    },
    {
      name: "Dorcus Mathu",
      role: "Data Analyst, Software Developer",
      image: dorcus,
      bio: "A renowned Business Growth Strategist, Digital Innovation Driver, Digital Transformation Expert, Finance Analyst, Data Analyst, Software Developer, Executive Coach and International Speaker."
    },
    {
      name: "Awosika Israel Ayodeji",
      role: "Founder Web3bridge",
      image: israel,
      bio: "Founder Web3bridge"
    },
    {
      name: "Moses Mrima Mbanga",
      role: "Web3 Security Engineer",
      image: moses,
      bio: "I'm the Lead Web3 Security Engineer at 41swara, where I help development teams design secure protocols through threat modeling and build with confidence through in-depth smart contract audits."
    },
    {
      name: "Jimii",
      role: "Solana software engineer",
      image: jimmy,
      bio: "Solana software engineer @Smithii"
    },
    {
      name: "Vincent Sipoi",
      role: "Software Engineer, Founder Adamur",
      image: vicent,
      bio: "Experienced Technical Project Manager with over 5 years of expertise in managing complex projects and driving growth through strategic initiatives."
    },
    {
      name: "Kalema Edgar",
      role: "A Solutions Architect",
      image: edgar,
      bio: "Kalema Edgar is a seasoned Enterprise & Solutions Architect, a Senior Software Engineer with over 12 years of experience building and integrating complex systems across the Banking, FinTech, and Education sectors."
    },
    {
      name: "Kakooza Vianey",
      role: "Founder Decentracode",
      image: vianey,
      bio: "Software engineer building at Decentracode"
    },
  ];

  return (
    <>
      <section id="speakers" className="relative py-20 md:py-32 bg-gray-900 text-white overflow-hidden">
        {/* Diagonal grid pattern background */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255, 255, 255, 0.1) 10px, rgba(255, 255, 255, 0.1) 20px)
            `,
          }}
        ></div>

        <div className="relative z-10 max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Title */}
          <div className="text-center mb-8" data-aos="fade-up">
            <h2 className="text-2xl md:text-3xl lg:text-5xl xl:text-4xl font-bold uppercase leading-tight mb-2">
              <span className="block text-white">MEET OUR ESTEEMED SPEAKERS</span>
              {/* <span className="block text-cyan-400">INDUSTRY THOUGHT LEADERS</span> */}
            </h2>
          </div>

          {/* CTA Button */}
          <div className="flex items-center justify-center gap-4 mb-12" data-aos="fade-up" data-aos-delay="100">
            <a
              href="#"
              className="inline-flex items-center px-8 py-4 bg-gray-800 border border-white text-white font-semibold hover:bg-gray-700 transition rounded-lg"
              style={{ 
                fontFamily: '"Courier New", Courier, monospace'
              }}
            >
              <span className="uppercase text-sm md:text-base">APPLY TO BE A SPEAKER</span>
              <span className="ml-4 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 15l7-7 7 7" />
                </svg>
              </span>
            </a>
          </div>

          {/* Speaker Carousel Container */}
          <div className="relative px-12 md:px-16">
            {/* Left Scroll Arrow */}
            <button
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 bg-gray-800 hover:bg-gray-700 border border-gray-600 rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110"
              aria-label="Scroll left"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Right Scroll Arrow */}
            <button
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 bg-gray-800 hover:bg-gray-700 border border-gray-600 rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110"
              aria-label="Scroll right"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Scrollable Speaker Cards */}
            <div
              ref={scrollContainerRef}
              className="overflow-x-auto pb-4 [&::-webkit-scrollbar]:hidden"
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
              }}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div className="flex gap-6 md:gap-8 lg:gap-10 min-w-max">
                {/* Duplicate speakers for seamless infinite loop */}
                {[...speakers, ...speakers].map((speaker, index) => (
                  <div
                    key={`${speaker.name}-${index}`}
                    className="flex-shrink-0 w-52 md:w-60 lg:w-72 text-center cursor-pointer group"
                    onClick={() => setSelectedSpeaker(speaker)}
                    data-aos="fade-up"
                    data-aos-delay={(index % speakers.length) * 50}
                  >
                    {/* Square Profile Image */}
                    <div className="relative w-52 h-52 md:w-60 md:h-60 lg:w-72 lg:h-72 bg-gray-800 rounded-lg mb-4 mx-auto overflow-hidden border-2 border-gray-700 group-hover:border-orange-500 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-orange-500/20">
                      <Image
                        src={speaker.image}
                        alt={speaker.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 208px, (max-width: 1024px) 240px, 288px"
                        priority={index < 4}
                      />
                    </div>

                    {/* Name */}
                    <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-white mb-2 uppercase leading-tight px-2" style={{ 
                      fontFamily: '"Courier New", Courier, monospace'
                    }}>
                      {speaker.name.toUpperCase()}
                    </h3>

                    {/* Role */}
                    <p className="text-sm md:text-base text-gray-400 px-2 leading-relaxed">
                      {speaker.role}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Speaker Details Modal */}
      {selectedSpeaker && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm p-4 z-50 transition-opacity duration-200"
          onClick={() => setSelectedSpeaker(null)}
        >
          <div
            className="bg-white rounded-lg shadow-2xl max-w-3xl w-full mx-4 max-h-[85vh] flex flex-col transform transition-all duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Content */}
            <div className="p-6 md:p-8 overflow-y-auto flex-1">
              <div className="flex flex-col items-center mb-6">
                <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden mb-4 border-4 border-gray-200 shadow-lg">
                  <Image
                    src={selectedSpeaker.image}
                    alt={selectedSpeaker.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 160px, 192px"
                  />
                </div>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-2">
                  {selectedSpeaker.name}
                </h3>
                <p className="text-lg md:text-xl text-gray-700 text-center mb-4 font-medium">
                  {selectedSpeaker.role}
                </p>
              </div>
              {/* Full bio */}
              <div className="mt-6 p-6 bg-gray-50 rounded-lg border border-gray-200">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">About</h4>
                <p className="text-gray-800 leading-relaxed text-base md:text-lg">{selectedSpeaker.bio}</p>
              </div>
            </div>
            {/* Close button */}
            <div className="p-4 md:p-6 border-t border-gray-200 flex justify-center bg-gray-50">
              <button
                onClick={() => setSelectedSpeaker(null)}
                className="px-8 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition font-semibold text-base"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
