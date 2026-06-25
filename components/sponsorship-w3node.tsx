'use client';

import BlockchainBackground from '@/components/blockchain-background';

export default function SponsorshipW3Node() {
  return (
    <section id="sponsorship" className="relative py-20 md:py-32 text-white overflow-hidden">
      <BlockchainBackground />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header Section */}
        <div className="relative mb-12">
          {/* Thin white horizontal line at top */}
          <div className="w-full h-px bg-white mb-6"></div>
          
          <div className="flex items-center justify-between">
            {/* Left: <04> */}
            <div className="text-sm md:text-base text-white font-mono" data-aos="fade-right">
              &lt;04&gt;
            </div>
            
            {/* Center: //SPONSORSHIP */}
            <div className="text-sm md:text-base text-white font-mono absolute left-1/2 transform -translate-x-1/2" data-aos="fade-up">
              //SPONSORSHIP
            </div>
            
            {/* Right: 2026 vertical */}
            <div 
              className="text-sm md:text-base text-white font-mono"
              style={{ 
                writingMode: 'vertical-rl',
                textOrientation: 'mixed'
              }}
              data-aos="fade-left"
            >
              2026
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="text-center max-w-4xl mx-auto" data-aos="fade-up">
          {/* Main Title - Two Lines */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-8 uppercase leading-tight">
            <span className="block text-white">ACCELERATE THE BUIDLERS,</span>
            <span className="block text-blue-700">SHAPE THE FUTURE</span>
          </h2>
          
          {/* Body Text */}
          <p 
            className="text-base md:text-lg lg:text-xl text-white mb-12 leading-relaxed max-w-3xl mx-auto"
            style={{ 
              fontFamily: '"Courier New", Courier, monospace'
            }}
          >
            DevFest is a launchpad for the next generation of African founders shaping the decentralized web. As a sponsor, we'll curate your experience to align with your goals—whether that's establishing a local hub, accessing our pipeline of top African founders, or amplifying your brand's visibility. Let's BUIDL the future, together.
          </p>
          
          {/* CTA Button */}
          <a
           target="_blank"
            href="https://docs.google.com/forms/d/e/1FAIpQLSfeoqoQIrUFyvpJX8S20EfssmFjMbDzE50yhqRFRy1ZE7B12w/viewform?usp=send_form"
            className="inline-flex items-center px-8 py-4 bg-gray-800 border border-white text-white font-semibold hover:bg-gray-700 transition rounded-lg"
            style={{ 
              fontFamily: '"Courier New", Courier, monospace'
            }}
          >
            <span className="uppercase text-sm md:text-base">BECOME A SPONSOR</span>
            <span className="ml-4 w-6 h-6 bg-blue-700 rounded flex items-center justify-center flex-shrink-0">
              <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 15l7-7 7 7" />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
