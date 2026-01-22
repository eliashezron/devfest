'use client';

export default function StatsW3Node() {
  const stats = [
    { label: 'REGISTRATIONS', value: '500+' },
    { label: 'SPEAKERS', value: '20+' },
    { label: 'TRAVEL SCHOLARS', value: '10+' },
    { label: 'HACKATON WINNERS', value: '4+' },
  ];

  return (
    <section id="stats" className="relative py-20 md:py-32 bg-black text-white overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header Section */}
        <div className="relative mb-16">
          {/* Thin white horizontal line at top */}
          <div className="w-full h-px bg-white mb-6"></div>
          
          <div className="flex items-center justify-between">
            {/* Left: <06> */}
            <div 
              className="text-sm md:text-base text-white font-mono"
              style={{ 
                fontFamily: '"Courier New", Courier, monospace'
              }}
              data-aos="fade-right"
            >
              &lt;06&gt;
            </div>
            
            {/* Center: //STATS */}
            <div 
              className="text-sm md:text-base text-white font-mono absolute left-1/2 transform -translate-x-1/2"
              style={{ 
                fontFamily: '"Courier New", Courier, monospace'
              }}
              data-aos="fade-up"
            >
              //STATS
            </div>
            
            {/* Right: FUN FACTS */}
            <div 
              className="text-sm md:text-base text-gray-400 font-mono"
              style={{ 
                fontFamily: '"Courier New", Courier, monospace'
              }}
              data-aos="fade-left"
            >
              FUN FACTS
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div 
                className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-3"
                style={{ 
                  fontFamily: '"Courier New", Courier, monospace',
                  textShadow: '0 0 10px rgba(255, 255, 255, 0.3)'
                }}
              >
                {stat.value}
              </div>
              <div 
                className="text-sm md:text-base lg:text-lg text-gray-400 uppercase tracking-wider"
                style={{ 
                  fontFamily: '"Courier New", Courier, monospace'
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
