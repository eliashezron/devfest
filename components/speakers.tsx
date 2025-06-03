
"use client"

import { useState } from "react"
import Slider from "react-slick"
import { motion } from "framer-motion"
import Image from "next/image"

import elias from '@/public/images/pf.jpg';
import david from '@/public/images/david.jpg';
import jovan from '@/public/images/jova.jpeg';
import daniel from '@/public/images/daniel.jpeg';
import Bbosa from '@/public/images/lutalo.jpeg';
import dorcus from '@/public/images/Dorcus.png';
import edgar from '@/public/images/edgar.png';
import israel from '@/public/images/israel.jpg';
import jimmy from '@/public/images/jimmy.jpg';
import moses from '@/public/images/moses.jpg';
import vicent from '@/public/images/vicent.jpg';
import vianey from '@/public/images/vianey.jpeg';
import elkanah from '@/public/images/elkana.jpg';
import agnes from '@/public/images/Agnes.jpeg';
import noela from '@/public/images/noela.jpg';
import mrisho from '@/public/images/mrisho.jpeg';
import alex from '@/public/images/Alex.jpg';
import kizza from '@/public/images/kizza.jpg';
// Helper function to trim text
const trimText = (text: string, maxLength: number) => {
  if (text.length <= maxLength) return text
  return text.substring(0, maxLength) + "..."
}

// Speaker Data
const speakers = [
  {
    name: "David Lumala",
    role: "Co-Founder Epoch Infinity",
    image: david,
    bio: "David Lumala is an expert in blockchain and decentralized applications, co-founding Epoch Infinity to drive blockchain adoption in Africa."
  },
  {
    name: "Awosika Israel Ayodeji",
    role: "Founder Web3bridge",
    image: israel,
    bio: "Founder Web3bridge"
  },

  {
    name: "Jovan Mwesigwa",
    role: "Co-Founder Oneramp & Shukuru Wallet",
    image: jovan,
    bio: "Jovan is a blockchain developer and advocate, working on innovative solutions in Web3 and digital asset management."
  },
   {
    name: "Dorcus Mathu",
    role: "Data Analyst, Software Developer",
    image: dorcus,
    bio: "A reowned Business Growth Strategist, Digital Innovation Driver, Digital Transformation Expert, Finance Analyst, Data Analyst, software Developer, Executive Coach and Internation Speaker. With over a decade of experience, Dorcus Mathu specializes in driving digital transformation , strategic growth and operation excellence for organizations worldwide. Her expertise spans 𝐟𝐢𝐧𝐚𝐧𝐜𝐞, 𝐭𝐞𝐜𝐡𝐧𝐨𝐥𝐨𝐠𝐲, 𝐚𝐧𝐝 𝐝𝐚𝐭𝐚 𝐚𝐧𝐚𝐥𝐲𝐭𝐢𝐜𝐬, enabling businesses to streamline operations, leverage data-driven insights, and implement 𝐬𝐜𝐚𝐥𝐚𝐛𝐥𝐞 𝐝𝐢𝐠𝐢𝐭𝐚𝐥 𝐬𝐨𝐥𝐮𝐭𝐢𝐨𝐧𝐬. As a 𝐯𝐢𝐬𝐢𝐨𝐧𝐚𝐫𝐲 𝐥𝐞𝐚𝐝𝐞𝐫, Dorcus helps organizations embrace 𝐜𝐮𝐭𝐭𝐢𝐧𝐠-𝐞𝐝𝐠𝐞 𝐰𝐞𝐛-𝐛𝐚𝐬𝐞𝐝 𝐭𝐞𝐜𝐡𝐧𝐨𝐥𝐨𝐠𝐢𝐞𝐬 such as 𝐰𝐞𝐛𝐬𝐢𝐭𝐞𝐬, 𝐂𝐑𝐌𝐬, 𝐒𝐨𝐜𝐢𝐚𝐥 𝐌𝐞𝐝𝐢𝐚 among others to enhance efficiency and long-term sustainability. Beyond her technical and financial acumen, Dorcus is a 𝐭𝐫𝐮𝐬𝐭𝐞𝐝 𝐞𝐱𝐞𝐜𝐮𝐭𝐢𝐯𝐞 𝐜𝐨𝐚𝐜𝐡 𝐚𝐧𝐝 𝐠𝐥𝐨𝐛𝐚𝐥 𝐬𝐩𝐞𝐚𝐤𝐞𝐫, empowering leaders with strategies to 𝐧𝐚𝐯𝐢𝐠𝐚𝐭𝐞 𝐜𝐡𝐚𝐧𝐠𝐞, 𝐨𝐩𝐭𝐢𝐦𝐢𝐳𝐞 𝐛𝐮𝐬𝐢𝐧𝐞𝐬𝐬 𝐩𝐞𝐫𝐟𝐨𝐫𝐦𝐚𝐧𝐜𝐞, 𝐚𝐧𝐝 𝐡𝐚𝐫𝐧𝐞𝐬𝐬 𝐝𝐢𝐠𝐢𝐭𝐚𝐥 𝐭𝐫𝐚𝐧𝐬𝐟𝐨𝐫𝐦𝐚𝐭𝐢𝐨𝐧 𝐟𝐨𝐫 𝐜𝐨𝐦𝐩𝐞𝐭𝐢𝐭𝐢𝐯𝐞 𝐚𝐝𝐯𝐚𝐧𝐭𝐚𝐠𝐞. She welcomes opportunities for 𝐜𝐨𝐥𝐥𝐚𝐛𝐨𝐫𝐚𝐭𝐢𝐨𝐧𝐬, 𝐬𝐭𝐫𝐚𝐭𝐞𝐠𝐢𝐜 𝐩𝐚𝐫𝐭𝐧𝐞𝐫𝐬𝐡𝐢𝐩𝐬, 𝐚𝐧𝐝 𝐭𝐡𝐨𝐮𝐠𝐡𝐭 𝐥𝐞𝐚𝐝𝐞𝐫𝐬𝐡𝐢𝐩 𝐞𝐧𝐠𝐚𝐠𝐞𝐦𝐞𝐧𝐭𝐬 in 𝐟𝐢𝐧𝐚𝐧𝐜𝐞, 𝐭𝐞𝐜𝐡𝐧𝐨𝐥𝐨𝐠𝐲, 𝐚𝐧𝐝 𝐛𝐮𝐬𝐢𝐧𝐞𝐬𝐬 𝐠𝐫𝐨𝐰𝐭𝐡. 🌐 Website: www.dorcusmathu.com Social Media: @dorcusmathu"
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
  },
  {
    name: "Kakooza Vianey",
    role: "Founder Decentracode",
    image: vianey,
    bio: "Software engineer building  at Decentracode"
  },
  {
    name: "Moses Mrima Mbanga",
    role: "Web3 Security Engineer",
    image: moses,
    bio: "I'm the Lead Web3 Security Engineer at 41swara, where I help development teams design secure protocols through threat modeling and build with confidence through in-depth smart contract audits. I lead end-to-end security across the stack, from smart contracts to web applications and infrastructure. With a strong background in cybersecurity, my focus is on aligning security with development workflows to ensure resilient and secure Web3 systems."
  },
  {
    name: "Jimii",
    role: "Solana software engineer",
    image: jimmy,
    bio: "Solana software engineer @Smithii"
  },
  {
    name: "Vincent Sipoi",
    role: "Software Engineer, Founder Adamur",
    image: vicent,
    bio: "Experienced Technical Project Manager with over 5 years of expertise in managing complex projects and driving growth through strategic initiatives.Adept at Project Management, Agile Methodologies, and Technical Documentation, with a proven track record in CI/CD Pipelines, Web3, and Blockchain technologies. Skilled in Client Onboarding, Stakeholder Communication, and Business Development. Committed to leveraging data-driven insights to ensure On-time Delivery, optimize Processes, and achieve Sustainable Growth."
  },
  {
    name: "Kalema Edgar",
    role: "A Solutions Architect",
    image: edgar,
    bio: "Kalema Edgar is a seasoned Enterprise & Solutions Architect, a Senior Software Engineer with over 12 years of experience building and integrating complex systems across the Banking, FinTech, and Education sectors. He is the author of More Than A Click, a mentor, blogger, and part-time tutor at ISBAT University and Refactory. He is passionate about Blockchain, AI, Technology in general, an AWS-Certified Cloud professional and Agile practitioner, blending deep technical expertise with Agile leadership to drive innovation and transformation in digital ecosystems. When he's not building systems, he's cheering on Manchester United and the Uganda Cranes. Blog: kalemaedgar.medium.com"
  },
  {
    name: "Muchiri Elkanah Kariuki",
    role: "founder of Jua",
    image: elkanah,
    bio: " Elkanah Muchiri Kariuki is the founder of Jua, a peer-to-peer crypto infrastructure platform built for Africa. Jua enables users to trade Bitcoin and stablecoins with over 200 payment methods, starting from as little as $1. Built by developers for developers, Jua provides APIs and SDKs that integrate mobile money, fintech wallets, and local fiat rails into Web3 applications. With a deep focus on interoperability, Muchiri and his team have architected Jua as a programmable layer for digital asset exchange, borderless remittance, and decentralized commerce. He's passionate about merging Web2 with Web3 to power grassroots innovation and financial inclusion across the continent."
  },
  // {
  //   name: "Jeff-L Kibirige",
  //   role: "A hunter and passionate artist.",
  //   image: kibirige,
  //   bio: "A hunter and passionate artist.",
  // },
  {
    name: "Agnes Freda Lumala",
    role: "ICT Capacity Building Expert",
    image: agnes,
    bio: " Agnes Lumala is a seasoned Digital Transformation Leader and ICT Capacity Building Expert with over 20 years of experience across ICT, banking, and education sectors. She currently serves as the Academic Registrar at Uganda's specialized ICT skilling institution under the Ministry of ICT & NG, where she leads transformative digital initiatives. Agnes has successfully managed large-scale digital skilling programs, supported international development projects, and implemented enterprise systems that drive efficiency and service excellence. A TOGAF-certified enterprise architect and a CDPSE candidate, she applies risk-aware digital strategies and data governance frameworks to ensure compliance and institutional integrity. She holds an MSc in Computer Science and is a member of ISACA and the Association of Enterprise Architects, using her expertise to empower thousands through digital literacy, financial inclusion, and innovation-driven capacity building."
  },
  {
    name: "Jemima Noela",
    role: "Smart contract engineer, data researcher",
    image: noela,
    bio: "Smart contract engineer, data researcher"
  },
  {
    name: "Mrisho Lukamba",
    role: "Blockchain protocol enginner",
    image: mrisho,
    bio: " Blockchain protocol enginner having 4 years of experience working in web3 and a math undergraduate "
  },
  {
    name: "Alex Mula",
    role: "Software Engineer",
    image: alex,
    bio: "A software engineer with 5 years of experience building systems across diverse industries. My focus has been on developing web and backend applications, particularly in the Web3 and fintech sectors. Currently, I’m part of the team at MusaPay, a fintech company providing innovative payment solutions. With the expertise I've gained, I’m now exploring how blockchain technology can seamlessly integrate with traditional systems—emphasizing smooth onboarding and zero added costs."
  },
  {
    name: "Kizza Fredrich",
    role: "Cofounder doxa a multistablecoin plartform with DUSD.",
    image: kizza,
    bio: "Fredrich is an AI, blockchain and crypto geek with over 5 years in the industry"
  },

];

export default function Speakers() {
  const [selectedSpeaker, setSelectedSpeaker] = useState<null | (typeof speakers)[0]>(null)

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
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  }

  return (
    <section className="relative py-12 md:py-20">
      <div className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-gray-900 pointer-events-none"></div>
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20 px-4">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">Listen from the Speakers</h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-xl mx-auto">
              Embark on an inspiring journey as our esteemed lineup of speakers shares their expertise, insights, and
              vision for the future of blockchain at Blockchain devFest Kampala 2025.
            </p>
          </div>

          {/* Speaker Carousel */}
          <div className="px-4">
            <Slider {...settings}>
              {speakers.map((speaker, index) => (
                <div key={index} className="px-2">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl cursor-pointer h-[320px]"
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

          {/* Speaker Details Modal */}
          {selectedSpeaker && (
            <motion.div
              className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md p-4 z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedSpeaker(null)}
            >
              <motion.div
                className="bg-white rounded-lg shadow-xl max-w-2xl w-full mx-4 max-h-[80vh] flex flex-col"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
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
                    <p className="text-gray-800">{selectedSpeaker.bio}</p>
                  </div>
                </div>
                {/* Close button (always visible at bottom) */}
                <div className="p-4 border-t border-gray-200 flex justify-center">
                  <button
                    className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
                    onClick={() => setSelectedSpeaker(null)}
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}









// // 'use client';

// // import { useState } from 'react';
// // import Slider from 'react-slick';
// // import { motion } from 'framer-motion';
// // import Image from 'next/image';
// // import elias from '@/public/images/pf.jpg';
// // import david from '@/public/images/david.jpg';
// // import jovan from '@/public/images/jova.jpeg';
// // import daniel from '@/public/images/daniel.jpeg';
// // import Bbosa from '@/public/images/lutalo.jpeg';
// // import dorcus from '@/public/images/Dorcus.png';
// // import vianey from '@/public/images/vianey.jpg';

// // // Helper function to trim text
// // const trimText = (text: string, maxLength: number) => {
// //   if (text.length <= maxLength) return text;
// //   return text.substring(0, maxLength) + '...';
// // };

// // // Speaker Data
// // const speakers = [
// //   {
// //     name: "David Lumala",
// //     role: "Co-Founder Epoch Infinity",
// //     image: david,
// //     bio: "David Lumala is an expert in blockchain and decentralized applications, co-founding Epoch Infinity to drive blockchain adoption in Africa."
// //   },
// //   {
// //     name: "Elias Hezron",
// //     role: "Co-Founder Oneramp & Shukuru Wallet",
// //     image: elias,
// //     bio: "Elias Hezron is a visionary entrepreneur and blockchain advocate, co-founding Oneramp and Shukuru Wallet to make digital finance more accessible."
// //   },
// //   {
// //     name: "Jovan Mwesigwa",
// //     role: "Co-Founder Oneramp & Shukuru Wallet",
// //     image: jovan,
// //     bio: "Jovan is a blockchain developer and advocate, working on innovative solutions in Web3 and digital asset management."
// //   },
// //    {
// //     name: "Dorcus Mathu",
// //     role: "A 𝐫𝐞𝐧𝐨𝐰𝐧𝐞𝐝 𝐁𝐮𝐬𝐢𝐧𝐞𝐬𝐬 𝐆𝐫𝐨𝐰𝐭𝐡 𝐒𝐭𝐫𝐚𝐭𝐞𝐠𝐢𝐬𝐭, 𝐃𝐢𝐠𝐢𝐭𝐚𝐥 𝐈𝐧𝐧𝐨𝐯𝐚𝐭𝐢𝐨𝐧 𝐃𝐫𝐢𝐯𝐞𝐫, 𝐃𝐢𝐠𝐢𝐭𝐚𝐥 𝐓𝐫𝐚𝐧𝐬𝐟𝐨𝐫𝐦𝐚𝐭𝐢𝐨𝐧 𝐄𝐱𝐩𝐞𝐫𝐭, 𝐅𝐢𝐧𝐚𝐧𝐜𝐞 𝐀𝐧𝐚𝐥𝐲𝐬𝐭, 𝐃𝐚𝐭𝐚 𝐀𝐧𝐚𝐥𝐲𝐬𝐭, 𝐒𝐨𝐟𝐭𝐰𝐚𝐫𝐞 𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫, 𝐄𝐱𝐞𝐜𝐮𝐭𝐢𝐯𝐞 𝐂𝐨𝐚𝐜𝐡, 𝐚𝐧𝐝 𝐈𝐧𝐭𝐞𝐫𝐧𝐚𝐭𝐢𝐨𝐧𝐚𝐥 𝐒𝐩𝐞𝐚𝐤𝐞𝐫.",
// //     image: dorcus,
// //     bio: "With over a decade of experience, Dorcus Mathu specializes in 𝐝𝐫𝐢𝐯𝐢𝐧𝐠 𝐝𝐢𝐠𝐢𝐭𝐚𝐥 𝐭𝐫𝐚𝐧𝐬𝐟𝐨𝐫𝐦𝐚𝐭𝐢𝐨𝐧, 𝐬𝐭𝐫𝐚𝐭𝐞𝐠𝐢𝐜 𝐠𝐫𝐨𝐰𝐭𝐡, 𝐚𝐧𝐝 𝐨𝐩𝐞𝐫𝐚𝐭𝐢𝐨𝐧𝐚𝐥 𝐞𝐱𝐜𝐞𝐥𝐥𝐞𝐧𝐜𝐞 for organizations worldwide. Her expertise spans 𝐟𝐢𝐧𝐚𝐧𝐜𝐞, 𝐭𝐞𝐜𝐡𝐧𝐨𝐥𝐨𝐠𝐲, 𝐚𝐧𝐝 𝐝𝐚𝐭𝐚 𝐚𝐧𝐚𝐥𝐲𝐭𝐢𝐜𝐬, enabling businesses to streamline operations, leverage data-driven insights, and implement 𝐬𝐜𝐚𝐥𝐚𝐛𝐥𝐞 𝐝𝐢𝐠𝐢𝐭𝐚𝐥 𝐬𝐨𝐥𝐮𝐭𝐢𝐨𝐧𝐬. As a 𝐯𝐢𝐬𝐢𝐨𝐧𝐚𝐫𝐲 𝐥𝐞𝐚𝐝𝐞𝐫, Dorcus helps organizations embrace 𝐜𝐮𝐭𝐭𝐢𝐧𝐠-𝐞𝐝𝐠𝐞 𝐰𝐞𝐛-𝐛𝐚𝐬𝐞𝐝 𝐭𝐞𝐜𝐡𝐧𝐨𝐥𝐨𝐠𝐢𝐞𝐬 such as 𝐰𝐞𝐛𝐬𝐢𝐭𝐞𝐬, 𝐂𝐑𝐌𝐬, 𝐒𝐨𝐜𝐢𝐚𝐥 𝐌𝐞𝐝𝐢𝐚 among others to enhance efficiency and long-term sustainability. Beyond her technical and financial acumen, Dorcus is a 𝐭𝐫𝐮𝐬𝐭𝐞𝐝 𝐞𝐱𝐞𝐜𝐮𝐭𝐢𝐯𝐞 𝐜𝐨𝐚𝐜𝐡 𝐚𝐧𝐝 𝐠𝐥𝐨𝐛𝐚𝐥 𝐬𝐩𝐞𝐚𝐤𝐞𝐫, empowering leaders with strategies to 𝐧𝐚𝐯𝐢𝐠𝐚𝐭𝐞 𝐜𝐡𝐚𝐧𝐠𝐞, 𝐨𝐩𝐭𝐢𝐦𝐢𝐳𝐞 𝐛𝐮𝐬𝐢𝐧𝐞𝐬𝐬 𝐩𝐞𝐫𝐟𝐨𝐫𝐦𝐚𝐧𝐜𝐞, 𝐚𝐧𝐝 𝐡𝐚𝐫𝐧𝐞𝐬𝐬 𝐝𝐢𝐠𝐢𝐭𝐚𝐥 𝐭𝐫𝐚𝐧𝐬𝐟𝐨𝐫𝐦𝐚𝐭𝐢𝐨𝐧 𝐟𝐨𝐫 𝐜𝐨𝐦𝐩𝐞𝐭𝐢𝐭𝐢𝐯𝐞 𝐚𝐝𝐯𝐚𝐧𝐭𝐚𝐠𝐞. She welcomes opportunities for 𝐜𝐨𝐥𝐥𝐚𝐛𝐨𝐫𝐚𝐭𝐢𝐨𝐧𝐬, 𝐬𝐭𝐫𝐚𝐭𝐞𝐠𝐢𝐜 𝐩𝐚𝐫𝐭𝐧𝐞𝐫𝐬𝐡𝐢𝐩𝐬, 𝐚𝐧𝐝 𝐭𝐡𝐨𝐮𝐠𝐡𝐭 𝐥𝐞𝐚𝐝𝐞𝐫𝐬𝐡𝐢𝐩 𝐞𝐧𝐠𝐚𝐠𝐞𝐦𝐞𝐧𝐭𝐬 in 𝐟𝐢𝐧𝐚𝐧𝐜𝐞, 𝐭𝐞𝐜𝐡𝐧𝐨𝐥𝐨𝐠𝐲, 𝐚𝐧𝐝 𝐛𝐮𝐬𝐢𝐧𝐞𝐬𝐬 𝐠𝐫𝐨𝐰𝐭𝐡. 🌐 Website: www.dorcusmathu.com Social Media: @dorcusmathu"
// //   },
// //   {
// //     name: "Daniel Nasasira",
// //     role: "Technical Analyst at Gateway.fm",
// //     image: daniel,
// //     bio: "Nasasira Daniel is a Technical Analyst at Gateway.fm, a leading provider of decentralized blockchain infrastructure. At Gateway, he plays a key role in enabling developers to build scalable, secure, and customizable rollup solutions using zkEVM and Optimistic technologies through Gateway’s flagship Rollup-as-a-Service product, Presto. With a strong foundation in data strategy and Web3, Nasasira leads Gateway’s regional efforts for Africa to support blockchain builders through infrastructure and blockchain tooling. Prior to joining Gateway, he worked at API7.ai where he contributed to the Apache APISIX open-source API Gateway project. His work helped enhance the growth and global adoption of one of the most performant and modern API gateways in the open-source ecosystem. Nasasira is also the founder of NASDAN and a creator of Humura Therapy, a digital mental health platform that has provided support to thousands of users globally. His passion lies at the intersection of blockchain infrastructure, data-driven decision-making, and technology social empowerment."
// //   },
// //   {
// //     name: "Lutalo Joseph Bbosa",
// //     role: "Founder swiftramp",
// //     image: Bbosa,
// //     bio: "Software engineer building swiftramp, an on/off-ramp and cross border payment platform leveraging blockchain"
// //   },
// //   {
// //     name: "Kakooza Vianey",
// //     role: "Founder Decentracode",
// //     image: vianey,
// //     bio: "Software engineer building  at Decentracode"
// //   }
// // ];

// // export default function Speakers() {
// //   const [selectedSpeaker, setSelectedSpeaker] = useState<null | typeof speakers[0]>(null);

// //   // Slider settings
// //   const settings = {
// //     infinite: true,
// //     speed: 500,
// //     slidesToShow: 3,
// //     slidesToScroll: 1,
// //     autoplay: true,
// //     autoplaySpeed: 3000,
// //     responsive: [
// //       { breakpoint: 1024, settings: { slidesToShow: 2 } },
// //       { breakpoint: 768, settings: { slidesToShow: 1 } }
// //     ]
// //   };

// //   return (
// //     <section className="relative py-12 md:py-20">
// //       {/* ... (rest of your layout code) */}

// //       {/* Speaker Carousel */}
// //       <Slider {...settings} className="px-4">
// //         {speakers.map((speaker, index) => (
// //           <motion.div
// //             key={index}
// //             whileHover={{ scale: 1.05 }}
// //             whileTap={{ scale: 0.95 }}
// //             className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl cursor-pointer h-full"
// //             onClick={() => setSelectedSpeaker(speaker)}
// //           >
// //             <div className="flex justify-center items-center">
// //               <Image
// //                 className="rounded-full"
// //                 src={speaker.image}
// //                 width={150}
// //                 height={150}
// //                 alt={speaker.name}
// //               />
// //             </div>
// //             <h4 className="text-xl font-bold leading-snug tracking-tight text-center mt-4">
// //               {speaker.name}
// //             </h4>
// //             <p className="text-gray-600 text-center">{speaker.role}</p>
// //             {/* Trimmed bio preview */}
// //             <p className="mt-2 text-gray-600 text-center text-sm">
// //               {trimText(speaker.bio, 100)} {/* Show first 100 chars */}
// //             </p>
// //           </motion.div>
// //         ))}
// //       </Slider>

// //       {/* Speaker Details Modal */}
// //       {selectedSpeaker && (
// //         <motion.div
// //           className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md p-4 z-50"
// //           initial={{ opacity: 0 }}
// //           animate={{ opacity: 1 }}
// //           exit={{ opacity: 0 }}
// //           onClick={() => setSelectedSpeaker(null)}
// //         >
// //           <motion.div
// //             className="bg-white rounded-lg shadow-xl max-w-2xl w-full mx-4 max-h-[80vh] flex flex-col"
// //             initial={{ scale: 0.9 }}
// //             animate={{ scale: 1 }}
// //             exit={{ scale: 0.9 }}
// //             onClick={(e) => e.stopPropagation()}
// //           >
// //             {/* Modal Content */}
// //             <div className="p-6 overflow-y-auto flex-1">
// //               <div className="flex flex-col items-center">
// //                 <Image
// //                   className="rounded-full"
// //                   src={selectedSpeaker.image}
// //                   width={150}
// //                   height={150}
// //                   alt={selectedSpeaker.name}
// //                 />
// //                 <h3 className="text-2xl font-bold mt-4 text-center">
// //                   {selectedSpeaker.name}
// //                 </h3>
// //                 <p className="text-gray-600 text-center">
// //                   {selectedSpeaker.role}
// //                 </p>
// //               </div>
// //               {/* Full bio with scrolling */}
// //               <div className="mt-4 p-4 bg-gray-50 rounded-lg max-h-[40vh] overflow-y-auto">
// //                 <p className="text-gray-800">{selectedSpeaker.bio}</p>
// //               </div>
// //             </div>
// //             {/* Close button (always visible at bottom) */}
// //             <div className="p-4 border-t border-gray-200 flex justify-center">
// //               <button
// //                 className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
// //                 onClick={() => setSelectedSpeaker(null)}
// //               >
// //                 Close
// //               </button>
// //             </div>
// //           </motion.div>
// //         </motion.div>
// //       )}
// //     </section>
// //   );
// // }














// 'use client';

// import { useState } from 'react';
// import Slider from 'react-slick';
// import { motion } from 'framer-motion';
// import Image from 'next/image';
// import elias from '@/public/images/pf.jpg';
// import david from '@/public/images/david.jpg';
// import jovan from '@/public/images/jova.jpeg';
// import daniel from '@/public/images/daniel.jpeg';
// import Bbosa from '@/public/images/lutalo.jpeg';
// import dorcus from '@/public/images/Dorcus.png';
// import edgar from '@/public/images/edgar.png';
// import israel from '@/public/images/israel.jpg';
// import jimmy from '@/public/images/jimmy.jpg';
// import moses from '@/public/images/moses.jpg';
// import vicent from '@/public/images/vicent.jpg';
// import vianey from '@/public/images/vianey.jpeg';
// import elkanah from '@/public/images/elkana.jpg';

// // Speaker Data
// const speakers = [
//   {
//     name: "David Lumala",
//     role: "Co-Founder Epoch Infinity",
//     image: david,
//     bio: "David Lumala is an expert in blockchain and decentralized applications, co-founding Epoch Infinity to drive blockchain adoption in Africa."
//   },
//   {
//     name: "Awosika Israel Ayodeji",
//     role: "Founder Web3bridge",
//     image: israel,
//     bio: "Founder Web3bridge"
//   },

//   {
//     name: "Jovan Mwesigwa",
//     role: "Co-Founder Oneramp & Shukuru Wallet",
//     image: jovan,
//     bio: "Jovan is a blockchain developer and advocate, working on innovative solutions in Web3 and digital asset management."
//   },
//    {
//     name: "Dorcus Mathu",
//     role: "Data Analyst, Software Developer",
//     image: dorcus,
//     bio: "A reowned Business Growth Strategist, Digital Innovation Driver, Digital Transformation Expert, Finance Analyst, Data Analyst, software Developer, Executive Coach and Internation Speaker. With over a decade of experience, Dorcus Mathu specializes in driving digital transformation , strategic growth and operation excellence for organizations worldwide. Her expertise spans 𝐟𝐢𝐧𝐚𝐧𝐜𝐞, 𝐭𝐞𝐜𝐡𝐧𝐨𝐥𝐨𝐠𝐲, 𝐚𝐧𝐝 𝐝𝐚𝐭𝐚 𝐚𝐧𝐚𝐥𝐲𝐭𝐢𝐜𝐬, enabling businesses to streamline operations, leverage data-driven insights, and implement 𝐬𝐜𝐚𝐥𝐚𝐛𝐥𝐞 𝐝𝐢𝐠𝐢𝐭𝐚𝐥 𝐬𝐨𝐥𝐮𝐭𝐢𝐨𝐧𝐬. As a 𝐯𝐢𝐬𝐢𝐨𝐧𝐚𝐫𝐲 𝐥𝐞𝐚𝐝𝐞𝐫, Dorcus helps organizations embrace 𝐜𝐮𝐭𝐭𝐢𝐧𝐠-𝐞𝐝𝐠𝐞 𝐰𝐞𝐛-𝐛𝐚𝐬𝐞𝐝 𝐭𝐞𝐜𝐡𝐧𝐨𝐥𝐨𝐠𝐢𝐞𝐬 such as 𝐰𝐞𝐛𝐬𝐢𝐭𝐞𝐬, 𝐂𝐑𝐌𝐬, 𝐒𝐨𝐜𝐢𝐚𝐥 𝐌𝐞𝐝𝐢𝐚 among others to enhance efficiency and long-term sustainability. Beyond her technical and financial acumen, Dorcus is a 𝐭𝐫𝐮𝐬𝐭𝐞𝐝 𝐞𝐱𝐞𝐜𝐮𝐭𝐢𝐯𝐞 𝐜𝐨𝐚𝐜𝐡 𝐚𝐧𝐝 𝐠𝐥𝐨𝐛𝐚𝐥 𝐬𝐩𝐞𝐚𝐤𝐞𝐫, empowering leaders with strategies to 𝐧𝐚𝐯𝐢𝐠𝐚𝐭𝐞 𝐜𝐡𝐚𝐧𝐠𝐞, 𝐨𝐩𝐭𝐢𝐦𝐢𝐳𝐞 𝐛𝐮𝐬𝐢𝐧𝐞𝐬𝐬 𝐩𝐞𝐫𝐟𝐨𝐫𝐦𝐚𝐧𝐜𝐞, 𝐚𝐧𝐝 𝐡𝐚𝐫𝐧𝐞𝐬𝐬 𝐝𝐢𝐠𝐢𝐭𝐚𝐥 𝐭𝐫𝐚𝐧𝐬𝐟𝐨𝐫𝐦𝐚𝐭𝐢𝐨𝐧 𝐟𝐨𝐫 𝐜𝐨𝐦𝐩𝐞𝐭𝐢𝐭𝐢𝐯𝐞 𝐚𝐝𝐯𝐚𝐧𝐭𝐚𝐠𝐞. She welcomes opportunities for 𝐜𝐨𝐥𝐥𝐚𝐛𝐨𝐫𝐚𝐭𝐢𝐨𝐧𝐬, 𝐬𝐭𝐫𝐚𝐭𝐞𝐠𝐢𝐜 𝐩𝐚𝐫𝐭𝐧𝐞𝐫𝐬𝐡𝐢𝐩𝐬, 𝐚𝐧𝐝 𝐭𝐡𝐨𝐮𝐠𝐡𝐭 𝐥𝐞𝐚𝐝𝐞𝐫𝐬𝐡𝐢𝐩 𝐞𝐧𝐠𝐚𝐠𝐞𝐦𝐞𝐧𝐭𝐬 in 𝐟𝐢𝐧𝐚𝐧𝐜𝐞, 𝐭𝐞𝐜𝐡𝐧𝐨𝐥𝐨𝐠𝐲, 𝐚𝐧𝐝 𝐛𝐮𝐬𝐢𝐧𝐞𝐬𝐬 𝐠𝐫𝐨𝐰𝐭𝐡. 🌐 Website: www.dorcusmathu.com Social Media: @dorcusmathu"
//   },
//   {
//     name: "Daniel Nasasira",
//     role: "Technical Analyst at Gateway.fm",
//     image: daniel,
//     bio: "Nasasira Daniel is a Technical Analyst at Gateway.fm, a leading provider of decentralized blockchain infrastructure. At Gateway, he plays a key role in enabling developers to build scalable, secure, and customizable rollup solutions using zkEVM and Optimistic technologies through Gateway’s flagship Rollup-as-a-Service product, Presto. With a strong foundation in data strategy and Web3, Nasasira leads Gateway’s regional efforts for Africa to support blockchain builders through infrastructure and blockchain tooling. Prior to joining Gateway, he worked at API7.ai where he contributed to the Apache APISIX open-source API Gateway project. His work helped enhance the growth and global adoption of one of the most performant and modern API gateways in the open-source ecosystem. Nasasira is also the founder of NASDAN and a creator of Humura Therapy, a digital mental health platform that has provided support to thousands of users globally. His passion lies at the intersection of blockchain infrastructure, data-driven decision-making, and technology social empowerment."
//   },
//   {
//     name: "Lutalo Joseph Bbosa",
//     role: "Founder swiftramp",
//     image: Bbosa,
//     bio: "Software engineer building swiftramp, an on/off-ramp and cross border payment platform leveraging blockchain"
//   },
//   {
//     name: "Kakooza Vianey",
//     role: "Founder Decentracode",
//     image: vianey,
//     bio: "Software engineer building  at Decentracode"
//   },
//   {
//     name: "Moses Mrima Mbanga",
//     role: "Web3 Security Engineer",
//     image: moses,
//     bio: "I'm the Lead Web3 Security Engineer at 41swara, where I help development teams design secure protocols through threat modeling and build with confidence through in-depth smart contract audits. I lead end-to-end security across the stack, from smart contracts to web applications and infrastructure. With a strong background in cybersecurity, my focus is on aligning security with development workflows to ensure resilient and secure Web3 systems."
//   },
//   {
//     name: "Jimii",
//     role: "Solana software engineer",
//     image: jimmy,
//     bio: "Solana software engineer @Smithii"
//   },
//   {
//     name: "Vincent Sipoi",
//     role: "Software Engineer, Founder Adamur",
//     image: vicent,
//     bio: "Experienced Technical Project Manager with over 5 years of expertise in managing complex projects and driving growth through strategic initiatives.Adept at Project Management, Agile Methodologies, and Technical Documentation, with a proven track record in CI/CD Pipelines, Web3, and Blockchain technologies. Skilled in Client Onboarding, Stakeholder Communication, and Business Development. Committed to leveraging data-driven insights to ensure On-time Delivery, optimize Processes, and achieve Sustainable Growth."
//   },
//   {
//     name: "Kalema Edgar",
//     role: "A Solutions Architect",
//     image: edgar,
//     bio: "Kalema Edgar is a seasoned Enterprise & Solutions Architect, a Senior Software Engineer with over 12 years of experience building and integrating complex systems across the Banking, FinTech, and Education sectors. He is the author of More Than A Click, a mentor, blogger, and part-time tutor at ISBAT University and Refactory. He is passionate about Blockchain, AI, Technology in general, an AWS-Certified Cloud professional and Agile practitioner, blending deep technical expertise with Agile leadership to drive innovation and transformation in digital ecosystems. When he's not building systems, he's cheering on Manchester United and the Uganda Cranes. Blog: kalemaedgar.medium.com"
//   },
//   {
//     name: "Muchiri Elkanah Kariuki",
//     role: "founder of Jua",
//     image: elkanah,
//     bio: " Elkanah Muchiri Kariuki is the founder of Jua, a peer-to-peer crypto infrastructure platform built for Africa. Jua enables users to trade Bitcoin and stablecoins with over 200 payment methods, starting from as little as $1. Built by developers for developers, Jua provides APIs and SDKs that integrate mobile money, fintech wallets, and local fiat rails into Web3 applications. With a deep focus on interoperability, Muchiri and his team have architected Jua as a programmable layer for digital asset exchange, borderless remittance, and decentralized commerce. He's passionate about merging Web2 with Web3 to power grassroots innovation and financial inclusion across the continent."
//   },
  

// ];

// // Helper function to trim text
//   const trimText = (text: string, maxLength: number) => {
//     if (text.length <= maxLength) return text;
//     return text.substring(0, maxLength) + '...';
//   };

// export default function Speakers() {
//   const [selectedSpeaker, setSelectedSpeaker] = useState<null | typeof speakers[0]>(null);

//   // Slider settings
//   const settings = {
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     responsive: [
//       { breakpoint: 1024, settings: { slidesToShow: 2 } },
//       { breakpoint: 768, settings: { slidesToShow: 1 } }
//     ]
//   };

//   return (
//     <section className="relative py-12 md:py-20">
//       <div className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-gray-900 pointer-events-none"></div>
//       <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>

//       <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
//         <div className="py-12 md:py-20">
//           <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20 px-4">
//             <h2 className="text-3xl font-semibold text-gray-900 mb-6">
//               Listen from the Speakers
//             </h2>
//             <p className="text-lg text-gray-600 leading-relaxed max-w-xl mx-auto">
//               Embark on an inspiring journey as our esteemed lineup of speakers shares their expertise, insights, and vision for the future of blockchain at Blockchain devFest Kampala 2025.
//             </p>
//           </div>

//           {/* Speaker Carousel */}
//           <Slider {...settings} className="px-4">
//             {speakers.map((speaker, index) => (
//               <motion.div
//                 key={index}
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl cursor-pointer"
//                 onClick={() => setSelectedSpeaker(speaker)}
//               >
//                   <div className=" w-[150px] h-[150px] rounded-full overflow-hidden flex justify-center items-center">
//                     <Image
//                         className="object-cover"
                          //  src={speaker.image || "/placeholder.svg"}
                          //  fill
                          //  sizes="150px"
                          //  style={{ objectPosition: "center" }}
                          //  alt={speaker.name}
//                     />
//                  </div>
//                 <h4 className="text-xl font-bold leading-snug tracking-tight  text-center mt-4">{speaker.name}</h4>
//                 <p className="text-gray-600 text-center">{speaker.role}</p>
//                 {/* <p className="mt-2 text-gray-600 text-center text-sm">
//                  {trimText(speaker.bio, 100)} 
//                 </p> */}
//               </motion.div>
//             ))}
//           </Slider>

//           {/* Speaker Details Modal */}
//           {selectedSpeaker && (
//             <motion.div
//               className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md p-6"
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={{ opacity: 1, scale: 1 }}
//               exit={{ opacity: 0, scale: 0.8 }}
//               onClick={() => setSelectedSpeaker(null)}
//             >
//               <motion.div
//                 // className="bg-white p-6 rounded-lg shadow-xl max-w-lg w-full text-center"
//                 className="bg-white rounded-lg shadow-xl max-w-2xl w-full mx-4 max-h-[80vh] flex flex-col"
//                 initial={{ y: 50 }}
//                 animate={{ y: 0 }}
//                 exit={{ y: 50 }}
//                 onClick={(e) => e.stopPropagation()}
//               >
//                 <div className="p-6 overflow-y-auto flex-1">
//                   <div className="flex flex-col items-center">
//                     <Image className="rounded-full mx-auto " src={selectedSpeaker.image} width={200} height={200} alt={selectedSpeaker.name} />
//                     <h3 className="text-2xl font-bold mt-4">{selectedSpeaker.name}</h3>
//                     <p className="text-gray-600">{selectedSpeaker.role}</p>
//                   </div>
//                     <div className="mt-4 p-4 bg-gray-50 rounded-lg max-h-[40vh] overflow-y-auto">
//                       <p className="mt-4 text-gray-800">{selectedSpeaker.bio}</p>
//                     </div>
//                 </div>
//                 <div className="p-4 border-t border-gray-200 flex justify-center">
//                   <button
//                     className="mt-6 px-4 py-2 bg-red-500 text-white rounded-md"
//                     onClick={() => setSelectedSpeaker(null)}
//                   >
//                     Close
//                   </button>
//                 </div>
             
//               </motion.div>
//             </motion.div>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// }






















// // export default function Speakers() {
// //   return (
// //     <section className="relative">

// //       {/* Section background (needs .relative class on parent and next sibling elements) */}
// //       <div className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-gray-900 pointer-events-none" aria-hidden="true">
// //         {/* <div>
// //         <div className="wave"></div>
// //         <div className="wave"></div>
// //         <div className="wave"></div>
// //       </div> */}
// //       </div>
// //       <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>

// //       <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
// //         <div className="py-12 md:py-20">

// //           {/* Section header */}
// //           <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
// //             <h2 className="h2 mb-4">Listen from the Speakers</h2>
// //             <p className="text-xl text-gray-600">Embark on an inspiring journey as our esteemed lineup of speakers shares their expertise, insights, and vision for the future of blockchain at Blockchain devFest Kampala 2024.</p>
// //           </div>

// //           {/* Items */}
// //           <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">

// //             {/* 1st item */}
// //             <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
// //               <Image className="relative rounded-full"  src={elias} width={150} height={250} alt="Features element" />
// //               <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Elias Hezron</h4>
// //               <p className="text-gray-600 text-center">Co-Founder Oneramp & Shukuru Wallet</p>
// //             </div>

// //             {/* 2nd item */}
// //             <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
// //             <Image className="relative rounded-full" src={david} width={150} height={250} alt="Features element" />
// //               <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">David Lumala</h4>
// //               <p className="text-gray-600 text-center">Co-Founder Epoch Infinity </p>
// //             </div>

// //             {/* 3rd item */}
// //             <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
// //             <Image className="relative rounded-full" src={jovan} width={150} height={250} alt="Features element" />
// //               <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Jovan Mwesigwa</h4>
// //               <p className="text-gray-600 text-center">Co-Founder Oneramp & Shukuru Wallet</p>
// //             </div>

// //             {/* 4th item */}
// //             {/* <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
// //             <Image className="relative rounded-full" src={elias} width={150} height={250} alt="Features element" />
// //               <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Speaker 4</h4>
// //               <p className="text-gray-600 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
// //             </div> */}

// //             {/* 5th item */}
// //             {/* <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
// //             <Image className="relative rounded-full"  src={elias} width={150} height={250} alt="Features element" />
// //               <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Speaker 5</h4>
// //               <p className="text-gray-600 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
// //             </div> */}

// //             {/* 6th item */}
// //             {/* <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
// //             <Image className="relative rounded-full"  src={elias} width={150} height={250} alt="Features element" />
// //               <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Speaker 6</h4>
// //               <p className="text-gray-600 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
// //             </div> */}

// //           </div>

// //         </div>
// //       </div>
// //     </section>
// //   )
// // }


// 'use client';

// import { useState } from 'react';
// import Slider from 'react-slick';
// import { motion } from 'framer-motion';
// import Image from 'next/image';
// import elias from '@/public/images/pf.jpg';
// import david from '@/public/images/david.jpg';
// import jovan from '@/public/images/jova.jpeg';
// import daniel from '@/public/images/daniel.jpeg';
// import Bbosa from '@/public/images/lutalo.jpeg';
// import dorcus from '@/public/images/Dorcus.png';
// import vianey from '@/public/images/vianey.jpg';

// // Helper function to trim text
// const trimText = (text: string, maxLength: number) => {
//   if (text.length <= maxLength) return text;
//   return text.substring(0, maxLength) + '...';
// };

// // Speaker Data
// const speakers = [
//   {
//     name: "David Lumala",
//     role: "Co-Founder Epoch Infinity",
//     image: david,
//     bio: "David Lumala is an expert in blockchain and decentralized applications, co-founding Epoch Infinity to drive blockchain adoption in Africa."
//   },
//   {
//     name: "Elias Hezron",
//     role: "Co-Founder Oneramp & Shukuru Wallet",
//     image: elias,
//     bio: "Elias Hezron is a visionary entrepreneur and blockchain advocate, co-founding Oneramp and Shukuru Wallet to make digital finance more accessible."
//   },
//   {
//     name: "Jovan Mwesigwa",
//     role: "Co-Founder Oneramp & Shukuru Wallet",
//     image: jovan,
//     bio: "Jovan is a blockchain developer and advocate, working on innovative solutions in Web3 and digital asset management."
//   },
//    {
//     name: "Dorcus Mathu",
//     role: "A 𝐫𝐞𝐧𝐨𝐰𝐧𝐞𝐝 𝐁𝐮𝐬𝐢𝐧𝐞𝐬𝐬 𝐆𝐫𝐨𝐰𝐭𝐡 𝐒𝐭𝐫𝐚𝐭𝐞𝐠𝐢𝐬𝐭, 𝐃𝐢𝐠𝐢𝐭𝐚𝐥 𝐈𝐧𝐧𝐨𝐯𝐚𝐭𝐢𝐨𝐧 𝐃𝐫𝐢𝐯𝐞𝐫, 𝐃𝐢𝐠𝐢𝐭𝐚𝐥 𝐓𝐫𝐚𝐧𝐬𝐟𝐨𝐫𝐦𝐚𝐭𝐢𝐨𝐧 𝐄𝐱𝐩𝐞𝐫𝐭, 𝐅𝐢𝐧𝐚𝐧𝐜𝐞 𝐀𝐧𝐚𝐥𝐲𝐬𝐭, 𝐃𝐚𝐭𝐚 𝐀𝐧𝐚𝐥𝐲𝐬𝐭, 𝐒𝐨𝐟𝐭𝐰𝐚𝐫𝐞 𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫, 𝐄𝐱𝐞𝐜𝐮𝐭𝐢𝐯𝐞 𝐂𝐨𝐚𝐜𝐡, 𝐚𝐧𝐝 𝐈𝐧𝐭𝐞𝐫𝐧𝐚𝐭𝐢𝐨𝐧𝐚𝐥 𝐒𝐩𝐞𝐚𝐤𝐞𝐫.",
//     image: dorcus,
//     bio: "With over a decade of experience, Dorcus Mathu specializes in 𝐝𝐫𝐢𝐯𝐢𝐧𝐠 𝐝𝐢𝐠𝐢𝐭𝐚𝐥 𝐭𝐫𝐚𝐧𝐬𝐟𝐨𝐫𝐦𝐚𝐭𝐢𝐨𝐧, 𝐬𝐭𝐫𝐚𝐭𝐞𝐠𝐢𝐜 𝐠𝐫𝐨𝐰𝐭𝐡, 𝐚𝐧𝐝 𝐨𝐩𝐞𝐫𝐚𝐭𝐢𝐨𝐧𝐚𝐥 𝐞𝐱𝐜𝐞𝐥𝐥𝐞𝐧𝐜𝐞 for organizations worldwide. Her expertise spans 𝐟𝐢𝐧𝐚𝐧𝐜𝐞, 𝐭𝐞𝐜𝐡𝐧𝐨𝐥𝐨𝐠𝐲, 𝐚𝐧𝐝 𝐝𝐚𝐭𝐚 𝐚𝐧𝐚𝐥𝐲𝐭𝐢𝐜𝐬, enabling businesses to streamline operations, leverage data-driven insights, and implement 𝐬𝐜𝐚𝐥𝐚𝐛𝐥𝐞 𝐝𝐢𝐠𝐢𝐭𝐚𝐥 𝐬𝐨𝐥𝐮𝐭𝐢𝐨𝐧𝐬. As a 𝐯𝐢𝐬𝐢𝐨𝐧𝐚𝐫𝐲 𝐥𝐞𝐚𝐝𝐞𝐫, Dorcus helps organizations embrace 𝐜𝐮𝐭𝐭𝐢𝐧𝐠-𝐞𝐝𝐠𝐞 𝐰𝐞𝐛-𝐛𝐚𝐬𝐞𝐝 𝐭𝐞𝐜𝐡𝐧𝐨𝐥𝐨𝐠𝐢𝐞𝐬 such as 𝐰𝐞𝐛𝐬𝐢𝐭𝐞𝐬, 𝐂𝐑𝐌𝐬, 𝐒𝐨𝐜𝐢𝐚𝐥 𝐌𝐞𝐝𝐢𝐚 among others to enhance efficiency and long-term sustainability. Beyond her technical and financial acumen, Dorcus is a 𝐭𝐫𝐮𝐬𝐭𝐞𝐝 𝐞𝐱𝐞𝐜𝐮𝐭𝐢𝐯𝐞 𝐜𝐨𝐚𝐜𝐡 𝐚𝐧𝐝 𝐠𝐥𝐨𝐛𝐚𝐥 𝐬𝐩𝐞𝐚𝐤𝐞𝐫, empowering leaders with strategies to 𝐧𝐚𝐯𝐢𝐠𝐚𝐭𝐞 𝐜𝐡𝐚𝐧𝐠𝐞, 𝐨𝐩𝐭𝐢𝐦𝐢𝐳𝐞 𝐛𝐮𝐬𝐢𝐧𝐞𝐬𝐬 𝐩𝐞𝐫𝐟𝐨𝐫𝐦𝐚𝐧𝐜𝐞, 𝐚𝐧𝐝 𝐡𝐚𝐫𝐧𝐞𝐬𝐬 𝐝𝐢𝐠𝐢𝐭𝐚𝐥 𝐭𝐫𝐚𝐧𝐬𝐟𝐨𝐫𝐦𝐚𝐭𝐢𝐨𝐧 𝐟𝐨𝐫 𝐜𝐨𝐦𝐩𝐞𝐭𝐢𝐭𝐢𝐯𝐞 𝐚𝐝𝐯𝐚𝐧𝐭𝐚𝐠𝐞. She welcomes opportunities for 𝐜𝐨𝐥𝐥𝐚𝐛𝐨𝐫𝐚𝐭𝐢𝐨𝐧𝐬, 𝐬𝐭𝐫𝐚𝐭𝐞𝐠𝐢𝐜 𝐩𝐚𝐫𝐭𝐧𝐞𝐫𝐬𝐡𝐢𝐩𝐬, 𝐚𝐧𝐝 𝐭𝐡𝐨𝐮𝐠𝐡𝐭 𝐥𝐞𝐚𝐝𝐞𝐫𝐬𝐡𝐢𝐩 𝐞𝐧𝐠𝐚𝐠𝐞𝐦𝐞𝐧𝐭𝐬 in 𝐟𝐢𝐧𝐚𝐧𝐜𝐞, 𝐭𝐞𝐜𝐡𝐧𝐨𝐥𝐨𝐠𝐲, 𝐚𝐧𝐝 𝐛𝐮𝐬𝐢𝐧𝐞𝐬𝐬 𝐠𝐫𝐨𝐰𝐭𝐡. 🌐 Website: www.dorcusmathu.com Social Media: @dorcusmathu"
//   },
//   {
//     name: "Daniel Nasasira",
//     role: "Technical Analyst at Gateway.fm",
//     image: daniel,
//     bio: "Nasasira Daniel is a Technical Analyst at Gateway.fm, a leading provider of decentralized blockchain infrastructure. At Gateway, he plays a key role in enabling developers to build scalable, secure, and customizable rollup solutions using zkEVM and Optimistic technologies through Gateway’s flagship Rollup-as-a-Service product, Presto. With a strong foundation in data strategy and Web3, Nasasira leads Gateway’s regional efforts for Africa to support blockchain builders through infrastructure and blockchain tooling. Prior to joining Gateway, he worked at API7.ai where he contributed to the Apache APISIX open-source API Gateway project. His work helped enhance the growth and global adoption of one of the most performant and modern API gateways in the open-source ecosystem. Nasasira is also the founder of NASDAN and a creator of Humura Therapy, a digital mental health platform that has provided support to thousands of users globally. His passion lies at the intersection of blockchain infrastructure, data-driven decision-making, and technology social empowerment."
//   },
//   {
//     name: "Lutalo Joseph Bbosa",
//     role: "Founder swiftramp",
//     image: Bbosa,
//     bio: "Software engineer building swiftramp, an on/off-ramp and cross border payment platform leveraging blockchain"
//   },
//   {
//     name: "Kakooza Vianey",
//     role: "Founder Decentracode",
//     image: vianey,
//     bio: "Software engineer building  at Decentracode"
//   }
// ];

// export default function Speakers() {
//   const [selectedSpeaker, setSelectedSpeaker] = useState<null | typeof speakers[0]>(null);

//   // Slider settings
//   const settings = {
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     responsive: [
//       { breakpoint: 1024, settings: { slidesToShow: 2 } },
//       { breakpoint: 768, settings: { slidesToShow: 1 } }
//     ]
//   };

//   return (
//     <section className="relative py-12 md:py-20">
//       {/* ... (rest of your layout code) */}

//       {/* Speaker Carousel */}
//       <Slider {...settings} className="px-4">
//         {speakers.map((speaker, index) => (
//           <motion.div
//             key={index}
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl cursor-pointer h-full"
//             onClick={() => setSelectedSpeaker(speaker)}
//           >
//             <div className="flex justify-center items-center">
//               <Image
//                 className="rounded-full"
//                 src={speaker.image}
//                 width={150}
//                 height={150}
//                 alt={speaker.name}
//               />
//             </div>
//             <h4 className="text-xl font-bold leading-snug tracking-tight text-center mt-4">
//               {speaker.name}
//             </h4>
//             <p className="text-gray-600 text-center">{speaker.role}</p>
//             {/* Trimmed bio preview */}
//             <p className="mt-2 text-gray-600 text-center text-sm">
//               {trimText(speaker.bio, 100)} {/* Show first 100 chars */}
//             </p>
//           </motion.div>
//         ))}
//       </Slider>

//       {/* Speaker Details Modal */}
//       {selectedSpeaker && (
//         <motion.div
//           className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md p-4 z-50"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           onClick={() => setSelectedSpeaker(null)}
//         >
//           <motion.div
//             className="bg-white rounded-lg shadow-xl max-w-2xl w-full mx-4 max-h-[80vh] flex flex-col"
//             initial={{ scale: 0.9 }}
//             animate={{ scale: 1 }}
//             exit={{ scale: 0.9 }}
//             onClick={(e) => e.stopPropagation()}
//           >
//             {/* Modal Content */}
//             <div className="p-6 overflow-y-auto flex-1">
//               <div className="flex flex-col items-center">
//                 <Image
//                   className="rounded-full"
//                   src={selectedSpeaker.image}
//                   width={150}
//                   height={150}
//                   alt={selectedSpeaker.name}
//                 />
//                 <h3 className="text-2xl font-bold mt-4 text-center">
//                   {selectedSpeaker.name}
//                 </h3>
//                 <p className="text-gray-600 text-center">
//                   {selectedSpeaker.role}
//                 </p>
//               </div>
//               {/* Full bio with scrolling */}
//               <div className="mt-4 p-4 bg-gray-50 rounded-lg max-h-[40vh] overflow-y-auto">
//                 <p className="text-gray-800">{selectedSpeaker.bio}</p>
//               </div>
//             </div>
//             {/* Close button (always visible at bottom) */}
//             <div className="p-4 border-t border-gray-200 flex justify-center">
//               <button
//                 className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
//                 onClick={() => setSelectedSpeaker(null)}
//               >
//                 Close
//               </button>
//             </div>
//           </motion.div>
//         </motion.div>
//       )}
//     </section>
//   );
// }














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