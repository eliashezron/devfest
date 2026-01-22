'use client';

export default function RegistrationW3Node() {
  const ticketTypes = [
    {
      name: 'Full Access Pass',
      price: '$20',
      priceLocal: 'R550',
      description: 'Ideal for Developers and Founding Teams.',
      features: [
        'Full access to 2-day conference',
        'full Access to 3-day Hackathon Stage',
        'Full Access to Expo Floor',
        'Wrap Party',
      ],
      cta: 'Buy Now',
      popular: false,
    },
    {
      name: 'Community Manager Pass',
      price: '$250',
      priceLocal: 'R4200',
      description: 'Ideal for Community Managers, DevRel pros, and Regional Ambassadors',
      features: [
        'Full access to 2-day conference',
        'Full Access to 3-day Hackathon Stage',
        'Community Manager Track (Workshops)',
        'Free Coworking Lounge',
        'Full Access to Expo Floor',
        'Access to Community Manager Events',
        'Wrap Party',
      ],
      cta: 'Buy Now',
      popular: false,
    },
    {
      name: 'Apply to hack',
      price: 'Free',
      priceLocal: '(Mahala)',
      description: 'Ideal for Students, Developers, and Founding Teams.',
      features: [
        'Full access to 2-day conference',
        'Full Access to 3-day Hackathon Stage',
        'Eligible for Hackathon Prizes',
        'Free Coworking Lounge',
        'Full Access to Expo Floor',
        'Wrap Party',
        'Travel Grant winners receive airfare, accommodation, and Meals',
      ],
      cta: 'Apply Now',
      popular: true,
    },
    {
      name: 'VIP',
      price: '$500',
      priceLocal: 'R8400',
      description: 'Premium experience with priority access and VIP-only networking opportunities.',
      features: [
        'Full access to 2-day conference',
        'Full Access to 3-day Hackathon Stage',
        'Community Manager Track (Workshops)',
        'Travel Concierge',
        'Access to VIP Events (Dinners, Networking & Experiences)',
        'Full Access to Expo Floor',
        'Wrap Party',
        'VIP Lounge',
      ],
      cta: 'Buy Now',
      popular: false,
    },
  ];

  return (
    <section id="registration" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Label */}
        <div className="text-sm md:text-base text-gray-500 mb-4 font-mono" data-aos="fade-down">
          &lt;08&gt;
        </div>
        <div className="text-sm md:text-base text-gray-500 mb-12 font-mono" data-aos="fade-down">
          //Registration
        </div>
        <div className="text-sm md:text-base text-gray-500 mb-4 font-mono" data-aos="fade-down">
          Early Bird
        </div>

        {/* Title */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12 text-center text-gray-900" data-aos="fade-up">
          Get Tickets
        </h2>

        {/* Tickets Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {ticketTypes.map((ticket, index) => (
            <div
              key={index}
              className={`bg-gray-50 rounded-lg p-6 border-2 ${
                ticket.popular ? 'border-black' : 'border-gray-200'
              } hover:border-gray-400 transition`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <h3 className="text-xl font-bold mb-2 text-gray-900">{ticket.name}</h3>
              <div className="mb-4">
                <div className="text-3xl font-bold text-gray-900">{ticket.price}</div>
                <div className="text-lg text-gray-600">{ticket.priceLocal}</div>
              </div>
              <p className="text-sm text-gray-600 mb-4">{ticket.description}</p>
              <ul className="space-y-2 mb-6 text-sm text-gray-700">
                {ticket.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className={`block w-full text-center py-3 rounded-lg font-semibold transition ${
                  ticket.popular
                    ? 'bg-black text-white hover:bg-gray-800'
                    : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
                }`}
              >
                {ticket.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Schedule Section */}
        <div className="mt-20" data-aos="fade-up">
          <h3 className="text-4xl md:text-5xl font-bold mb-12 text-center text-gray-900">
            Schedule
          </h3>
          
          <div className="text-center mb-8">
            <a
              href="#"
              className="inline-block px-6 py-2 border-2 border-black text-black rounded-lg font-semibold hover:bg-black hover:text-white transition"
            >
              Full Schedule
            </a>
          </div>

          {/* Schedule Days */}
          <div className="grid md:grid-cols-5 gap-4">
            {[
              { day: 'Day 1', date: '21 Jan, Wed', events: ['Travel Grant winners arrive', 'Welcome Reception', 'Registration open'] },
              { day: 'Day 2', date: '22 Jan, Thurs', events: ['All conference Programming begins', 'Hackathon begins', 'Expo Area', 'Coworking Lounge'] },
              { day: 'Day 3', date: '23 Jan, Fri', events: ['All conference Programming', 'Hackathon', 'Expo Area', 'Coworking Lounge', 'community manager track', 'VIP experience'] },
              { day: 'Day 4', date: '24 Jan, Sat', events: ['Hackathon Award ceremony', 'Expo Area', 'Coworking Lounge', 'Wrap party', 'VIP experience'] },
              { day: 'Day 5', date: '25 Jan, Sun', events: [] },
            ].map((schedule, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-4 border border-gray-200"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="font-bold text-lg mb-2 text-gray-900">{schedule.day}</div>
                <div className="text-sm text-gray-600 mb-4">{schedule.date}</div>
                <ul className="space-y-2 text-sm text-gray-700">
                  {schedule.events.map((event, i) => (
                    <li key={i} className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>{event}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
