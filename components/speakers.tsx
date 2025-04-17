'use client';

import { useState } from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import Image from 'next/image';
import elias from '@/public/images/pf.jpg';
import david from '@/public/images/david.jpg';
import jovan from '@/public/images/jovan.jpg';
import daniel from '@/public/images/daniel.jpeg';
import Bbosa from '@/public/images/bosa.png';

// Speaker Data
const speakers = [
  {
    name: "David Lumala",
    role: "Co-Founder Epoch Infinity",
    image: david,
    bio: "David Lumala is an expert in blockchain and decentralized applications, co-founding Epoch Infinity to drive blockchain adoption in Africa."
  },
  {
    name: "Elias Hezron",
    role: "Co-Founder Oneramp & Shukuru Wallet",
    image: elias,
    bio: "Elias Hezron is a visionary entrepreneur and blockchain advocate, co-founding Oneramp and Shukuru Wallet to make digital finance more accessible."
  },
  {
    name: "Jovan Mwesigwa",
    role: "Co-Founder Oneramp & Shukuru Wallet",
    image: jovan,
    bio: "Jovan is a blockchain developer and advocate, working on innovative solutions in Web3 and digital asset management."
  },
  {
    name: "Daniel Nasasira",
    role: "Technical Analyst at Gateway.fm",
    image: daniel,
    bio: "Nasasira Daniel is a Technical Analyst at Gateway.fm, a leading provider of decentralized blockchain infrastructure. At Gateway, he plays a key role in enabling developers to build scalable, secure, and customizable rollup solutions using zkEVM and Optimistic technologies through Gateway’s flagship Rollup-as-a-Service product, Presto. With a strong foundation in data strategy and Web3, Nasasira leads Gateway’s regional efforts for Africa to support blockchain builders through infrastructure and blockchain tooling. Prior to joining Gateway, he worked at API7.ai where he contributed to the Apache APISIX open-source API Gateway project. His work helped enhance the growth and global adoption of one of the most performant and modern API gateways in the open-source ecosystem. Nasasira is also the founder of NASDAN and a creator of Humura Therapy, a digital mental health platform that has provided support to thousands of users globally. His passion lies at the intersection of blockchain infrastructure, data-driven decision-making, and technology social empowerment."
  },
  {
    name: "Lutalo Joseph Bbosa",
    role: "Founder swiftramp",
    image: Bbosa,
    bio: "Software engineer building swiftramp, an on/off-ramp and cross border payment platform leveraging blockchain"
  }
];

export default function Speakers() {
  const [selectedSpeaker, setSelectedSpeaker] = useState<null | typeof speakers[0]>(null);

  // Slider settings
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } }
    ]
  };

  return (
    <section className="relative py-12 md:py-20">
      <div className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-gray-900 pointer-events-none"></div>
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20 px-4">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">
              Listen from the Speakers
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-xl mx-auto">
              Embark on an inspiring journey as our esteemed lineup of speakers shares their expertise, insights, and vision for the future of blockchain at Blockchain devFest Kampala 2025.
            </p>
          </div>

          {/* Speaker Carousel */}
          <Slider {...settings} className="px-4">
            {speakers.map((speaker, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl cursor-pointer"
                onClick={() => setSelectedSpeaker(speaker)}
              >
                  <div className="flex justify-center items-center">
                    <Image
                      className="rounded-full"
                      src={speaker.image}
                      width={150}
                      height={150}
                      alt={speaker.name}
                    />
                 </div>
                <h4 className="text-xl font-bold leading-snug tracking-tight  text-center mt-4">{speaker.name}</h4>
                <p className="text-gray-600 text-center">{speaker.role}</p>
              </motion.div>
            ))}
          </Slider>

          {/* Speaker Details Modal */}
          {selectedSpeaker && (
            <motion.div
              className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md p-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={() => setSelectedSpeaker(null)}
            >
              <motion.div
                className="bg-white p-6 rounded-lg shadow-xl max-w-lg w-full text-center"
                initial={{ y: 50 }}
                animate={{ y: 0 }}
                exit={{ y: 50 }}
                onClick={(e) => e.stopPropagation()}
              >
                <Image className="rounded-full mx-auto" src={selectedSpeaker.image} width={200} height={200} alt={selectedSpeaker.name} />
                <h3 className="text-2xl font-bold mt-4">{selectedSpeaker.name}</h3>
                <p className="text-gray-600">{selectedSpeaker.role}</p>
                <p className="mt-4 text-gray-800">{selectedSpeaker.bio}</p>
                <button
                  className="mt-6 px-4 py-2 bg-red-500 text-white rounded-md"
                  onClick={() => setSelectedSpeaker(null)}
                >
                  Close
                </button>
              </motion.div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}






















// export default function Speakers() {
//   return (
//     <section className="relative">

//       {/* Section background (needs .relative class on parent and next sibling elements) */}
//       <div className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-gray-900 pointer-events-none" aria-hidden="true">
//         {/* <div>
//         <div className="wave"></div>
//         <div className="wave"></div>
//         <div className="wave"></div>
//       </div> */}
//       </div>
//       <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>

//       <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
//         <div className="py-12 md:py-20">

//           {/* Section header */}
//           <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
//             <h2 className="h2 mb-4">Listen from the Speakers</h2>
//             <p className="text-xl text-gray-600">Embark on an inspiring journey as our esteemed lineup of speakers shares their expertise, insights, and vision for the future of blockchain at Blockchain devFest Kampala 2024.</p>
//           </div>

//           {/* Items */}
//           <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">

//             {/* 1st item */}
//             <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
//               <Image className="relative rounded-full"  src={elias} width={150} height={250} alt="Features element" />
//               <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Elias Hezron</h4>
//               <p className="text-gray-600 text-center">Co-Founder Oneramp & Shukuru Wallet</p>
//             </div>

//             {/* 2nd item */}
//             <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
//             <Image className="relative rounded-full" src={david} width={150} height={250} alt="Features element" />
//               <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">David Lumala</h4>
//               <p className="text-gray-600 text-center">Co-Founder Epoch Infinity </p>
//             </div>

//             {/* 3rd item */}
//             <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
//             <Image className="relative rounded-full" src={jovan} width={150} height={250} alt="Features element" />
//               <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Jovan Mwesigwa</h4>
//               <p className="text-gray-600 text-center">Co-Founder Oneramp & Shukuru Wallet</p>
//             </div>

//             {/* 4th item */}
//             {/* <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
//             <Image className="relative rounded-full" src={elias} width={150} height={250} alt="Features element" />
//               <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Speaker 4</h4>
//               <p className="text-gray-600 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//             </div> */}

//             {/* 5th item */}
//             {/* <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
//             <Image className="relative rounded-full"  src={elias} width={150} height={250} alt="Features element" />
//               <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Speaker 5</h4>
//               <p className="text-gray-600 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//             </div> */}

//             {/* 6th item */}
//             {/* <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
//             <Image className="relative rounded-full"  src={elias} width={150} height={250} alt="Features element" />
//               <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Speaker 6</h4>
//               <p className="text-gray-600 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//             </div> */}

//           </div>

//         </div>
//       </div>
//     </section>
//   )
// }