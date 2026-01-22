'use client';

export default function NodeEngine() {
  const hackathonTracks = [
    { number: '01', title: 'Payments and Stablecoins' },
    { number: '02', title: 'Identity and Security' },
    { number: '03', title: 'Decentralized AI & DePin' },
    { number: '04', title: 'Gaming and Entertainment' },
  ];

  return (
    <section id="node-engine" className="py-20 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Label */}
        <div className="text-sm md:text-base text-gray-500 mb-4 font-mono" data-aos="fade-down">
          &lt;02&gt;
        </div>
        <div className="text-sm md:text-base text-gray-500 mb-4 font-mono" data-aos="fade-down">
          //Node Engine
        </div>
        <div className="text-sm md:text-base text-gray-500 mb-12 font-mono" data-aos="fade-down">
          2025
        </div>

        {/* Hackathon Tracks */}
        <div className="mb-16" data-aos="fade-up">
          <h3 className="text-sm md:text-base text-gray-600 mb-8 font-semibold uppercase tracking-wide">
            Hackathon Tracks
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {hackathonTracks.map((track, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg border border-gray-200 hover:border-gray-400 transition"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="text-2xl font-bold text-gray-400 mb-2">{track.number}</div>
                <div className="text-lg font-semibold text-gray-900">{track.title}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
              <span className="font-bold">A Community of Builders</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
              <span className="font-semibold">Node Engine</span> is a growing network of developers, designers, and product thinkers shaping the future of tech from the African continent and beyond.
            </p>
            <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
              Whether you're building blockchain tools for mass adoption, remittance solutions, or AI-powered platforms, the Node Engine Hackathon is where bright minds come to build in Africa. And this year, when you apply to the Hackathon, you'll automatically be considered for the <span className="font-semibold">Node Engine Travel Grant</span>, designed to bring the most promising talent to Cape Town this November.
            </p>
            <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
              💸 <span className="font-semibold">Prize pool to be announced soon.</span> — and yes, it's worth the wait. Selected Travel Scholars will receive full travel sponsorship to attend DevFest in person.
            </p>
            <div className="mb-6">
              <p className="text-xl font-semibold text-gray-900 mb-4">One Application. Two Opportunities.</p>
            </div>
            <a
              href="#registration"
              className="inline-block px-8 py-4 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition"
            >
              Apply Now
            </a>
          </div>
          
          <div className="relative" data-aos="fade-left">
            {/* Placeholder for image */}
            <div className="aspect-square bg-gray-200 rounded-lg flex items-center justify-center">
              <span className="text-gray-400 text-lg">Image Placeholder</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
