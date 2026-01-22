"use client"

import { useState } from "react"
import Slider from "react-slick"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

// Import slick carousel CSS
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import elias from '@/public/images/pf.jpg';
import david from '@/public/images/david.jpg';
import jovan from '@/public/images/jova.jpeg';
import daniel from '@/public/images/daniel.jpeg';
import vianey from '@/public/images/vianey.jpeg';
import Angella from '@/public/images/Angellina.jpeg';
import solene from '@/public/images/solene.jpeg';
import osiyomeoh from '@/public/images/osiyomeoh.jpeg';
import okot from '../public/images/josh.jpeg';
import michael from '../public/images/michael.jpeg';


// Helper function to trim text
const trimText = (text: string, maxLength: number) => {
  if (text.length <= maxLength) return text
  return text.substring(0, maxLength) + "..."
}

// Speaker Data
const speakers = [
    {
        name: "Solene Daviaud",
        role: "Dev3pack Founder",
        image: solene,
        bio: "Dev3pack Founder | Onboarding women+ and student developers from Web2."
    },
    {
        name: "Samuel Aleonomoh",
        role: "Founder of DevCasta",
        image: osiyomeoh,
        bio: "Samuel Aleonomoh is a software engineer, blockchain enthusiast, and the founder of DevCasta, a platform that bridges learning with real-world application. With over five years of experience in software development and a deep passion for decentralized technologies, Samuel is also a blockchain engineer, actively writing smart contracts and building decentralized applications (dApps). He created DevCasta to help individuals develop practical skills and gain hands-on experience through real-world projects. Samuel is committed to empowering the next generation of tech talent and driving innovation through education and technology."
    },
    {
        name: "Michael Nwachukwu",
        role: "Co-Founder, Coinsafe",
        image: michael,
        bio: "Architect | Smart Contract Engineer "
    },
  {
    name: "David Lumala",
    role: "Co-Founder Epoch Infinity",
    image: david,
    bio: "David Lumala is an expert in blockchain and decentralized applications, co-founding Epoch Infinity to drive blockchain adoption in Africa."
  },
  {
    name: "Elias Hezron",
    role: "Founder Oneramp & Shukuru Wallet",
    image: elias,
    bio: "David Lumala is an expert in blockchain and decentralized applications, co-founding Epoch Infinity to drive blockchain adoption in Africa."
  },
  {
    name: "Jovan Mwesigwa",
    role: "Co-Founder Oneramp",
    image: jovan,
    bio: "Jovan is a blockchain developer and advocate, working on innovative solutions in Web3 and digital asset management."
  },
  {
    name: "Daniel Nasasira",
    role: "Technical Analyst at Gateway.fm",
    image: daniel,
    bio: "Nasasira Daniel is a Technical Analyst at Gateway.fm, a leading provider of decentralized blockchain infrastructure. At Gateway, he plays a key role in enabling developers to build scalable, secure, and customizable rollup solutions using zkEVM and Optimistic technologies through Gateway's flagship Rollup-as-a-Service product, Presto. With a strong foundation in data strategy and Web3, Nasasira leads Gateway's regional efforts for Africa to support blockchain builders through infrastructure and blockchain tooling. Prior to joining Gateway, he worked at API7.ai where he contributed to the Apache APISIX open-source API Gateway project. His work helped enhance the growth and global adoption of one of the most performant and modern API gateways in the open-source ecosystem. Nasasira is also the founder of NASDAN and a creator of Humura Therapy, a digital mental health platform that has provided support to thousands of users globally. His passion lies at the intersection of blockchain infrastructure, data-driven decision-making, and technology social empowerment."
  },
    {
    name: "Angella Mulikatete",
    role: "Software Engineer",
    image: Angella,
    bio: "Software engineer and Smart Contract Engineer "
  },
  {
    name: "Kakooza Vianey",
    role: "Founder Decentracode",
    image: vianey,
    bio: "Software engineer building at Decentracode"
  },
    {
    name: "Okot Joshua",
    role: " Co-founder of Kakebe Technologies",
    image: okot,
    bio: "Okot Joshua is a passionate Ugandan innovator, entrepreneur, and youth mentor,a youth-led tech company based in Lira City, Northern Uganda. Through Kakebe, Joshua has empowered hundreds of young people with practical skills in robotics, software development, digital innovation, and entrepreneurship. He serves as a Technovation Ambassador, representing a global nonprofit that equips girls and underserved youth with the skills to become tech entrepreneurs and leaders. Through Technovation, Joshua mentors young innovators to solve real-world problems in their communities using technology and entrepreneurship—particularly encouraging girls to pursue STEM and leadership paths. With a strong belief in grassroots transformation, he has championed partnerships with institutions like Lira University to bridge the gap between academic learning and real-world problem-solving. Under his leadership, Kakebe has launched impactful programs such as Tech Camps, ICT training, and entrepreneurship support that foster job creation and mindset change across Northern Uganda.Joshua is also an inspiring public speaker, mentor, and advocate for youth-led innovation and economic empowerment. His vision is to nurture a generation of purpose-driven African tech leaders who create local solutions with global impact."
  }
];

export default function Judges() {
  const [selectedSpeaker, setSelectedSpeaker] = useState<null | (typeof speakers)[0]>(null)

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    centerMode: false,
    variableWidth: false,
    responsive: [
      { 
        breakpoint: 1024, 
        settings: { 
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true 
        } 
      },
      { 
        breakpoint: 768, 
        settings: { 
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true 
        } 
      },
    ],
  }

  return (
    <section className="relative py-12 md:py-20" suppressHydrationWarning>
      <div className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-gray-900 pointer-events-none"></div>
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20 px-4">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">Meet Our Judges and Mentors</h2>
          </div>

          {/* Speaker Carousel */}
          <div className="px-4">
            <div className="slick-carousel-wrapper">
              <Slider {...settings}>
                {speakers.map((speaker, index) => (
                  <div key={index} className="px-2">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl cursor-pointer h-[320px] mx-2"
                      onClick={() => setSelectedSpeaker(speaker)}
                    >
                      <div className="relative w-[150px] h-[150px] rounded-full overflow-hidden mb-4">
                        <Image
                          className="object-cover"
                          src={speaker.image || "/placeholder.svg"}
                          fill
                          sizes="150px"
                          style={{ objectPosition: "center" }}
                          alt={speaker.name}
                        />
                      </div>
                      <h4 className="text-xl font-bold leading-snug tracking-tight text-center mt-2">{speaker.name}</h4>
                      <p className="text-gray-600 text-center mt-1">{speaker.role}</p>
                      <p className="mt-2 text-gray-600 text-center text-sm line-clamp-2">{trimText(speaker.bio, 100)}</p>
                    </motion.div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>

          {/* Speaker Details Modal with AnimatePresence */}
          <AnimatePresence mode="wait">
            {selectedSpeaker && (
              <motion.div
                key="modal"
                className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md p-4 z-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={() => setSelectedSpeaker(null)}
              >
                <motion.div
                  className="bg-white rounded-lg shadow-xl max-w-2xl w-full mx-4 max-h-[80vh] flex flex-col"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 300, 
                    damping: 25,
                    duration: 0.3 
                  }}
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Modal Content */}
                  <div className="p-6 overflow-y-auto flex-1">
                    <div className="flex flex-col items-center">
                      <div className="relative w-[200px] h-[200px] rounded-full overflow-hidden">
                        <Image
                          className="object-cover"
                          src={selectedSpeaker.image || "/placeholder.svg"}
                          fill
                          sizes="200px"
                          style={{ objectPosition: "center" }}
                          alt={selectedSpeaker.name}
                        />
                      </div>
                      <h3 className="text-2xl font-bold mt-4 text-center">{selectedSpeaker.name}</h3>
                      <p className="text-gray-600 text-center">{selectedSpeaker.role}</p>
                    </div>
                    {/* Full bio with scrolling */}
                    <div className="mt-4 p-4 bg-gray-50 rounded-lg max-h-[40vh] overflow-y-auto">
                      <p className="text-gray-800 leading-relaxed">{selectedSpeaker.bio}</p>
                    </div>
                  </div>
                  {/* Close button (always visible at bottom) */}
                  <div className="p-4 border-t border-gray-200 flex justify-center">
                    <button
                      className="px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                      onClick={() => setSelectedSpeaker(null)}
                    >
                      Close
                    </button>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}