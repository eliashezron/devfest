'use client';

export default function CommunityW3Node() {
  return (
    <section id="community" className="relative py-8 md:py-12 bg-blue-700 text-white overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header Section */}
        <div className="relative mb-6">
          {/* Thin white horizontal line at top */}
          <div className="w-full h-px bg-white mb-4"></div>
          
          <div className="flex items-center justify-between">
            {/* Left: <05> */}
            <div 
              className="text-sm md:text-base text-white font-mono"
              style={{ 
                fontFamily: '"Courier New", Courier, monospace'
              }}
              data-aos="fade-right"
            >
              &lt;05&gt;
            </div>
            
            {/* Center: //COMMUNITY */}
            <div 
              className="text-sm md:text-base text-white font-mono absolute left-1/2 transform -translate-x-1/2"
              style={{ 
                fontFamily: '"Courier New", Courier, monospace'
              }}
              data-aos="fade-up"
            >
              //COMMUNITY
            </div>
            
            {/* Right: MOTHORE FOUNDRY */}
            <div 
              className="text-sm md:text-base text-white font-mono"
              style={{ 
                fontFamily: '"Courier New", Courier, monospace'
              }}
              data-aos="fade-left"
            >
              DEVFEST 5.0 2026
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-5xl flex flex-col md:flex-row items-center md:items-start justify-between gap-6" data-aos="fade-up">
          {/* Simple Paragraph */}
          <p 
            className="text-base md:text-lg text-white leading-relaxed flex-1"
            style={{ 
              fontFamily: '"Courier New", Courier, monospace'
            }}
          >
            Join our community and be part of building the future of blockchain innovation in Africa. Together, we create opportunities, share knowledge, and empower developers to shape the decentralized web.
          </p>
          
          {/* CTA Button */}
          <div className="flex-shrink-0">
            <a
              href="https://app.unlock-protocol.com/event/block-chain-developer-festival-v-11"
              target="_blank"
              className="inline-flex items-center px-6 md:px-8 py-3 md:py-4 bg-black border border-white text-white font-semibold hover:bg-gray-900 transition rounded-lg"
              style={{ 
                fontFamily: '"Courier New", Courier, monospace'
              }}
            >
              <span className="uppercase text-sm md:text-base">REGISTER TO ATTEND</span>
              <span className="ml-4 w-6 h-6 md:w-8 md:h-8 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-3 h-3 md:w-4 md:h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 15l7-7 7 7" />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
