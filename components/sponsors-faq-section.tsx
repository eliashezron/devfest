'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import celo from '@/public/images/celo.png';
import starknet from '@/public/images/starknet.png';
import onboard from '@/public/images/onboard.png';
import iv from '@/public/images/iv.png';
import oneramp from '@/public/images/oneramp.png';
import base from '@/public/images/base.jpeg';
import web3bridge from '@/public/images/w3bridge.png';
import unlock from '@/public/images/unlock.png';
import muda from '@/public/images/muda.png';
import fonbnk from '@/public/images/fonbnk.png';
import pago from '@/public/images/pago.png';

const sponsors = [
  { src: celo, alt: 'Celo', href: 'https://celo.org/' },
  { src: starknet, alt: 'Starknet', href: 'https://www.starknet.io/' },
  { src: onboard, alt: 'Onboard', href: 'https://x.com/onboardglobal' },
  { src: iv, alt: 'Innovation Village', href: 'https://innovationvillage.africa/' },
  { src: oneramp, alt: 'Oneramp', href: 'https://oneramp.io/' },
  { src: base, alt: 'Base', href: 'https://www.base.org/' },
  { src: web3bridge, alt: 'Web3Bridge', href: 'https://www.web3bridgeafrica.com/' },
  { src: unlock, alt: 'Unlock Protocol', href: 'https://unlock-protocol.com/' },
  { src: muda, alt: 'Muda', href: 'https://muda.tech/' },
  { src: fonbnk, alt: 'Fonbnk', href: 'https://fonbnk.com/' },
  { src: pago, alt: 'Pago', href: 'https://pago.capital/' },
];

const faqs = [
  {
    question: 'What is BlockBunch?',
    answer: 'BlockBunch is a community-driven platform that brings together blockchain enthusiasts, developers, and innovators to collaborate and build the future of decentralized technology.',
  },
  {
    question: 'How do I apply to be a hacker?',
    answer: 'You can apply to participate in the hackathon by filling out the application form on our website. Applications are reviewed on a rolling basis, and selected participants will receive confirmation via email.',
  },
  {
    question: 'When is the event?',
    answer: 'The event will take place on June 27, 2026 in Kampala, Uganda. Stay tuned for more details about the schedule and venue.',
  },
  {
    question: 'What does it mean for my ticket or application?',
    answer: 'All existing tickets and applications remain valid. You will receive updated information via email.',
  },
  {
    question: 'What does this mean for the Travel Grant?',
    answer: 'Travel Grant applications are still open. Selected Travel Scholars will receive full travel sponsorship to attend DevFest in person.',
  },
];

export default function SponsorsFAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="relative py-20 md:py-32 bg-gray-900 text-white overflow-hidden">
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
        {/* Top Section: Our Previous Sponsors */}
        <div className="mb-20 md:mb-32" data-aos="fade-up">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Our Previous Sponsors
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
              The companies that make the Blockchain DevFest happen
            </p>
          </div>

          {/* Sponsor Logos Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8 md:gap-12 items-center justify-items-center">
            {sponsors.map((sponsor, index) => (
              <Link
                key={index}
                href={sponsor.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full h-24 md:h-32 hover:opacity-80 transition-opacity"
                data-aos="fade-up"
                data-aos-delay={index * 50}
              >
                <Image
                  src={sponsor.src}
                  alt={sponsor.alt}
                  width={120}
                  height={120}
                  className="object-contain max-w-full max-h-full opacity-80 hover:opacity-100 transition-opacity"
                />
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom Section: Frequently Asked Questions */}
        <div data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-12 text-center">
            Frequently Asked Questions
          </h2>

          {/* FAQ Items */}
          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-700 rounded-lg overflow-hidden hover:bg-gray-600 transition-colors"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <button
                  className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                  onClick={() => toggleAccordion(index)}
                >
                  <h3 className="text-lg md:text-xl font-semibold text-white pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    <svg
                      className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
                        activeIndex === index ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>

                {activeIndex === index && (
                  <div className="px-6 pb-6">
                    <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
