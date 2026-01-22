'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import david from '@/public/images/david.jpg';
import jovan from '@/public/images/jovan.jpg';
import angie from '@/public/images/Angellina.jpeg';
import vianey from '@/public/images/vianey.jpeg';

const testimonialsData = [
  {
    quote: 'Blockchain devFest Kampala 2024 exceeded all my expectations. Inspiring speakers, valuable networking, and practical workshops made it an event not to be missed. Highly recommended!',
    name: 'David Lumala',
    title: 'Co-Founder Epoch Infinity',
    avatar: david
  },
  {
    quote: 'Attending the devfest hackathon opened my view of decentralisation as a core value proposition of Blockchains. I attended the 2023 edition in which I met my cofounder and so many other people who have helped us elevate our startup to the extent that we are soon doing a Series A. I thank and laud the organisers for this visionary idea of what convening like minds can do with devfest.',
    name: 'Jovan Mwesigwa',
    title: 'Co-Founder Oneramp & Shukuru Wallet',
    avatar: jovan
  },
  {
    quote: 'Attending DevFest has been a game-changer for me. It didn\'t just open the door to Web3—it kicked it wide open. Through the connections I made, I got into the Web3Bridge program in Nigeria, where I deepened my understanding and sharpened my skills as a developer in web3. That experience gave me the clarity and confidence to start building in the space.',
    name: 'Angella Mulikatete',
    title: 'Software Engineer',
    avatar: angie
  },
  {
    quote: 'I have participated in 3 editions of the Blockchain Developer Festival and i cant thank more the organisers for their thoughtful idea to convene all web3 enthusiasts in a single place. Across all domains, i met different tech players, founders and consumers alike. I participated in their last 2 hackathons which formed a baseline for my current web3 education startup. DevFest is the birthplace for Decentracode.',
    name: 'Vianey Kakooza',
    title: 'Founder Decentracode',
    avatar: vianey
  },
];

export default function CommunityImpactSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Auto-play: move to next testimonial every 7 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonialsData.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonialsData.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const testimonial = testimonialsData[currentTestimonial];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Section: Introduction and Navigation */}
          <div className="space-y-6" data-aos="fade-right">
            {/* Header with line */}
            <div className="flex items-center space-x-4">
              <div className="h-0.5 w-12 bg-gray-400"></div>
              <span className="text-gray-500 text-sm uppercase tracking-wider font-medium">
                COMMUNITY IMPACT
              </span>
            </div>

            {/* Main Title */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Stories from<br />
              Our previous Attendees
            </h2>

            {/* Description */}
            <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-lg">
              Hear firsthand experiences from past attendees who were inspired, empowered, and connected at Blockchain DevFest Kampala 2026. Discover how this event shaped their journey and fueled their passion for blockchain innovation.
            </p>

            {/* Navigation Controls */}
            <div className="flex space-x-4 pt-2">
              <button
                onClick={prevTestimonial}
                aria-label="Previous testimonial"
                className="w-12 h-12 rounded-full border border-gray-300 bg-white hover:bg-gray-50 transition-colors flex items-center justify-center group"
              >
                <svg className="w-5 h-5 text-gray-600 group-hover:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextTestimonial}
                aria-label="Next testimonial"
                className="w-12 h-12 rounded-full bg-black text-white hover:bg-gray-800 transition-colors flex items-center justify-center group"
              >
                <svg className="w-5 h-5 text-white group-hover:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Section: Testimonial Card */}
          <div className="relative" data-aos="fade-left">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 relative max-w-lg mx-auto">
              {/* Large Quotation Mark */}
              <div className="absolute -top-4 -left-4 text-gray-200 text-8xl md:text-9xl font-serif leading-none select-none">
                "
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-lg md:text-xl text-gray-900 mb-6 relative z-10 leading-relaxed pt-4">
                {testimonial.quote}
              </blockquote>

              {/* Author Information */}
              <div className="flex items-center space-x-4 relative z-10">
                <div className="relative">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={64}
                    height={64}
                    className="rounded-full border-4 border-green-500 object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm md:text-base">{testimonial.title}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
