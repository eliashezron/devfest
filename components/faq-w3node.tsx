'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function FAQW3Node() {
  const faqs = [
    {
      question: 'Why the change?',
      answer: 'We have updated our event to better serve the African Web3 developer community.',
    },
    {
      question: 'When is the event?',
      answer: 'The event will take place from January 22-24, 2026 in Cape Town, South Africa.',
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

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative w-full bg-blue-950 text-white overflow-hidden">
      {/* Top Section - Photographic Scene */}
      

      {/* Bottom Section - FAQ */}
      <div className="relative py-20 md:py-32 bg-blue-950">
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
          {/* Main Heading */}
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-12 text-center text-white uppercase"
            style={{
              textShadow: '0 0 20px rgba(255, 255, 255, 0.3)',
              fontFamily: 'system-ui, -apple-system, sans-serif'
            }}
            data-aos="fade-up"
          >
            FREQUENTLY ASKED QUESTIONS
          </h2>

          {/* FAQ Items */}
          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-b border-white/20 pb-4"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <button
                  className="w-full flex justify-between items-center text-left focus:outline-none hover:opacity-80 transition"
                  onClick={() => toggleAccordion(index)}
                >
                  <div className="flex items-center">
                    <span className="text-lg md:text-xl font-bold text-white mr-4">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h3 
                      className="text-lg md:text-xl font-semibold text-white uppercase"
                      style={{
                        fontFamily: 'system-ui, -apple-system, sans-serif'
                      }}
                    >
                      {faq.question}
                    </h3>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    {activeIndex === index ? (
                      <span className="text-2xl text-white">−</span>
                    ) : (
                      <span className="text-2xl text-white">+</span>
                    )}
                  </div>
                </button>

                {activeIndex === index && (
                  <div className="mt-4 ml-12">
                    <p 
                      className="text-base md:text-lg text-gray-300 leading-relaxed"
                      style={{
                        fontFamily: '"Courier New", Courier, monospace'
                      }}
                    >
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
