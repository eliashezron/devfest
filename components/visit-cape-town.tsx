'use client';

export default function VisitCapeTown() {
  return (
    <section id="visit-cape-town" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Label */}
        <div className="text-sm md:text-base text-gray-500 mb-4 font-mono" data-aos="fade-down">
          &lt;03&gt;
        </div>
        <div className="text-sm md:text-base text-gray-500 mb-12 font-mono" data-aos="fade-down">
          //Visit Cape Town
        </div>
        <div className="text-sm md:text-base text-gray-500 mb-4 font-mono" data-aos="fade-down">
          2025
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          <div data-aos="fade-right">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
              Explore & Build<br />
              In Cape Town
            </h2>
            <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
              <span className="font-semibold">Cape Town</span> blends rich African heritage with global tech culture. Whether you're hiking Lion's Head at sunrise or jamming with founders at First Thursdays, this city is built for inspiration and connection. Mothore Foundry meets the Mother City.
            </p>
            <a
              href="#"
              className="inline-block px-8 py-4 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition"
            >
              Book Your Trip
            </a>
          </div>
          
          <div className="grid grid-cols-2 gap-4" data-aos="fade-left">
            {/* Image placeholders */}
            <div className="aspect-square bg-gray-200 rounded-lg flex items-center justify-center">
              <span className="text-gray-400 text-sm">Image</span>
            </div>
            <div className="aspect-square bg-gray-200 rounded-lg flex items-center justify-center">
              <span className="text-gray-400 text-sm">Image</span>
            </div>
            <div className="aspect-square bg-gray-200 rounded-lg flex items-center justify-center">
              <span className="text-gray-400 text-sm">Image</span>
            </div>
            <div className="aspect-square bg-gray-200 rounded-lg flex items-center justify-center">
              <span className="text-gray-400 text-sm">Image</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
