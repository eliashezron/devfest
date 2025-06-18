
'use client'
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, QuoteIcon } from 'lucide-react';
import elias from '@/public/images/pf.jpg'
import david from '@/public/images/david.jpg'
import angie from '@/public/images/Angellina.jpeg'
import blank from '@/public/images/blank.svg'
import jovan from '@/public/images/jovan.jpg'
import vianey from '@/public/images/vianey.jpeg';

const testimonialsData = [
  {
    quote: '" Blockchain devFest Kampala 2024 exceeded all my expectations. Inspiring speakers, valuable networking, and practical workshops made it an event not to be missed. Highly recommended!"',
    name: 'David Lumala',
    title: 'Co-Founder Epoch Infinity',
    avatar: david
  },
  {
    quote: '" Attending the devfest hackathon opened my view of decentralisation as a core value proposition of Blockchains.  I attended the 2023 edition in which I met my cofounder and so many other people who have helped us elevate our startup to the extent that we are soon doing a Series A. I thank and laud the organisers for this visionary idea of what convening like minds can do with devfest. I look forward to more editions and encourage all people to attend as Web3 has space for everyone and Blockchain Developer Festival is where your biggest opportunity yet is to start."',
    name: 'Jovan Mwesigwa',
    title: 'Co-Founder Oneramp & Shukuru Wallet',
    avatar: jovan
  },
  {
    quote: '" Attending DevFest has been a game-changer for me. It didn’t just open the door to Web3—it kicked it wide open. Through the connections I made, I got into the Web3Bridge program in Nigeria, where I deepened my understanding and sharpened my skills as a developer in web3 . That experience gave me the clarity and confidence to start building in the space. If you are a dev curious about the future of tech, DevFest is where you want to be"',
    name: 'Angella Mulikatete',
    title: 'software Engineer',
    avatar: angie
  },
  {
    quote: '" I have participated in 3 editions of the Blockchain Developer Festival and i cant thank more the organisers for their thoughtful idea to convene all web3 enthusiasts  in a single place . Across all domains, i met different tech players , founders and  consumers alike . I participated in their last 2 hackathons which formed a baseline for my current web3 education startup. DevFest is the birthplace for Decentracode."',
    name: 'Vianey Kakooza',
    title: 'Founder Decentracode',
    avatar: vianey
  },
  {
    quote: '" Attending the devfest hackathon opened my view of decentralisation as a core value proposition of Blockchains.  I attended the 2023 edition in which I met my cofounder and so many other people who have helped us elevate our startup to the extent that we are soon doing a Series A. I thank and laud the organisers for this visionary idea of what convening like minds can do with devfest. I look forward to more editions and encourage all people to attend as Web3 has space for everyone and Blockchain Developer Festival is where your biggest opportunity yet is to start."',
    name: 'Jovan Mwesigwa',
    title: 'Co-Founder Oneramp & Shukuru Wallet',
    avatar: jovan
  },
];

const Testimonials: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [direction, setDirection] = useState(0);

  // Auto-play: move to next testimonial every 7 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 7000);
    return () => clearInterval(interval);
  }, [currentTestimonial]);

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentTestimonial((prev) => (prev + 1) % testimonialsData.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentTestimonial((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const testimonial = testimonialsData[currentTestimonial];

  // Motion variants for cleaner code
  const variants = {
    enter: (direction: number) => ({
      opacity: 0,
      x: direction * 100
    }),
    center: {
      opacity: 1,
      x: 0
    },
    exit: (direction: number) => ({
      opacity: 0,
      x: -direction * 100
    })
  };

  return (
    <section className="py-16 bg-gradient-to-br from-[#FCFEF9] to-[#F0F4F8] relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Intro Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="h-0.5 w-12 bg-gray-300"></div>
              <span className="text-gray-600 text-sm uppercase tracking-wider">
                Community Impact
              </span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 leading-tight">
              Stories from <br />Our previous Attendees
            </h2>
            <p className="text-gray-600 max-w-md">
            Hear firsthand experiences from past attendees who were inspired,  
            empowered, and connected at Blockchain DevFest Kampala 2025.  
            Discover how this event shaped their journey and fueled their passion for blockchain innovation.  
            </p>
            <div className="flex space-x-4">
              <button
                onClick={prevTestimonial} 
                aria-label="Previous testimonial"
                className="border border-gray-300 hover:bg-gray-100 transition-colors rounded-full w-12 h-12 flex items-center justify-center group"
              >
                <ChevronLeft className="text-gray-600 group-hover:text-black" />
              </button>
              <button
                onClick={nextTestimonial}
                aria-label="Next testimonial"
                className="bg-black text-white hover:bg-gray-800 transition-colors rounded-full w-12 h-12 flex items-center justify-center group"
              >
                <ChevronRight className="text-white group-hover:text-gray-300" />
              </button>
            </div>
          </div>

          {/* Dynamic Testimonial Carousel */}
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div 
                key={currentTestimonial}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5 }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={(event, info) => {
                  if (info.offset.x < -100) {
                    nextTestimonial();
                  } else if (info.offset.x > 100) {
                    prevTestimonial();
                  }
                }}
                className="bg-white rounded-2xl shadow-lg p-8 relative max-w-lg mx-auto"
              >
                <QuoteIcon className="absolute top-4 left-4 text-gray-200 w-16 h-16" />
                <blockquote className="text-xl font-medium text-gray-800 mb-6 relative z-10">
                  {testimonial.quote}
                </blockquote>
                <div className="flex items-center space-x-4">
                  <Image 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    width={64}
                    height={64}
                    className="rounded-full border-4 border-gray-100 shadow-md"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.title}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-green-100/50 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default Testimonials;
