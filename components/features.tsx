'use client'

import { useState, useRef, useEffect } from 'react'
import { Transition } from '@headlessui/react'
import Image from 'next/image'
import FeaturesBg from '@/public/images/thumb.png'
import comm from '@/public/images/comm.jpeg'
import hack from '@/public/images/hack.jpeg'
import share from '@/public/images/share.jpeg'
import FeaturesElement from '@/public/images/msg.png'

export default function Features() {
  const [tab, setTab] = useState<number>(1);
  const tabs = useRef<HTMLDivElement>(null);

  const heightFix = () => {
    if (tabs.current && tabs.current.parentElement)
      tabs.current.parentElement.style.height = `${tabs.current.clientHeight}px`;
  };

  useEffect(() => {
    heightFix();
  }, []);

  return (
    <section className="relative py-12 md:py-20 bg-gray-100">
      {/* Section background */}
      <div className="absolute inset-0 bg-white pointer-events-none" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">What to Expect</h1>
          <p className="text-xl text-gray-600">
            Discover the potential of blockchain technologies through engaging talks and workshops
          </p>
        </div>

        {/* Section content */}
        <div className="md:grid md:grid-cols-12 md:gap-8">
          {/* Content */}
          <div
            className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6"
            data-aos="fade-right"
          >
            {/* Tabs buttons */}
            <div className="mb-8 md:mb-0 space-y-4">
              {[
                {
                  id: 1,
                  title: 'Community',
                  description:
                    'Forge valuable connections with fellow attendees who share your interests and aspirations. Share knowledge, insights, and experiences with others in the community, fostering growth and development.',
                  icon: (
                    <svg
                      className="w-3 h-3 fill-current"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M11.953 4.29a.5.5 0 00-.454-.292H6.14L6.984.62A.5.5 0 006.12.173l-6 7a.5.5 0 00.379.825h5.359l-.844 3.38a.5.5 0 00.864.445l6-7a.5.5 0 00.075-.534z" />
                    </svg>
                  ),
                },
                {
                  id: 2,
                  title: 'Talks and Workshops',
                  description:
                    'Take collaboration to the next level with security and administrative features built for teams.',
                  icon: (
                    <svg
                      className="w-3 h-3 fill-current"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.854.146a.5.5 0 00-.525-.116l-11 4a.5.5 0 00-.015.934l4.8 1.921 1.921 4.8A.5.5 0 007.5 12h.008a.5.5 0 00.462-.329l4-11a.5.5 0 00-.116-.525z"
                        fillRule="nonzero"
                      />
                    </svg>
                  ),
                },
                {
                  id: 3,
                  title: 'Hackathons',
                  description:
                    'Take collaboration to the next level with security and administrative features built for teams.',
                  icon: (
                    <svg
                      className="w-3 h-3 fill-current"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.334 8.06a.5.5 0 00-.421-.237 6.023 6.023 0 01-5.905-6c0-.41.042-.82.125-1.221a.5.5 0 00-.614-.586 6 6 0 106.832 8.529.5.5 0 00-.017-.485z"
                        fill="#191919"
                        fillRule="nonzero"
                      />
                    </svg>
                  ),
                },
              ].map((item) => (
                <button
                  key={item.id}
                  className={`flex items-center text-left w-full p-6 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 ${
                    tab === item.id
                      ? 'bg-white shadow-lg border-transparent'
                      : 'bg-gray-50 hover:bg-white hover:shadow-md border-gray-200'
                  }`}
                  onClick={() => setTab(item.id)}
                >
                  <div className="flex-1">
                    <div className="font-bold text-lg text-gray-800 mb-1">{item.title}</div>
                    <div className="text-gray-600">{item.description}</div>
                  </div>
                  <div
                    className={`flex justify-center items-center w-8 h-8 rounded-full shadow flex-shrink-0 ml-4 transition-all duration-300 ${
                      tab === item.id
                        ? 'bg-blue-500 text-white'
                        : 'bg-white text-gray-800 hover:bg-blue-500 hover:text-white'
                    }`}
                  >
                    {item.icon}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Tabs items */}
          <div
            className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
            data-aos="zoom-y-out"
          >
            <div className="relative flex flex-col text-center lg:text-right" ref={tabs}>
              <Transition
                show={tab === 1}
                enter="transition-opacity duration-700 ease-in-out"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-300 ease-in-out"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                unmount={false}
              >
                <div className="relative group">
                  <Image
                    className="md:max-w-none mx-auto rounded-lg shadow-lg transform transition-transform duration-300 group-hover:scale-105"
                    src={comm}
                    width={500}
                    height={800}
                    alt="Community"
                  />
                  {/* <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 rounded-lg transition-all duration-300"></div> */}
                </div>
              </Transition>
              <Transition
                show={tab === 2}
                enter="transition-opacity duration-700 ease-in-out"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-300 ease-in-out"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                unmount={false}
              >
                <div className="relative group">
                  <Image
                    className="md:max-w-none mx-auto rounded-lg shadow-lg transform transition-transform duration-300 group-hover:scale-105"
                    src={share}
                    width={500}
                    height={462}
                    alt="Talks and Workshops"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 rounded-lg transition-all duration-300"></div>
                </div>
              </Transition>
              <Transition
                show={tab === 3}
                enter="transition-opacity duration-700 ease-in-out"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-300 ease-in-out"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                unmount={false}
              >
                <div className="relative group">
                  <Image
                    className="md:max-w-none mx-auto rounded-lg shadow-lg transform transition-transform duration-300 group-hover:scale-105"
                    src={hack}
                    width={500}
                    height={462}
                    alt="Hackathons"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 rounded-lg transition-all duration-300"></div>
                </div>
              </Transition>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// export default function Features() {
  
//   const [tab, setTab] = useState<number>(1)

//   const tabs = useRef<HTMLDivElement>(null)

//   const heightFix = () => {
//     if (tabs.current && tabs.current.parentElement) tabs.current.parentElement.style.height = `${tabs.current.clientHeight}px`
//   }

//   useEffect(() => {
//     heightFix()
//   }, []) 

//   return (
//     <section className="relative">

//       {/* Section background (needs .relative class on parent and next sibling elements) */}
//       <div className="absolute inset-0 bg-gray-100 pointer-events-none mb-16" aria-hidden="true"></div>
//       <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

//       <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
//         <div className="pt-12 md:pt-20">

//           {/* Section header */}
//           <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
//             <h1 className="h2 mb-4">What to Expect</h1>
//             <p className="text-xl text-gray-600">Discover the potential of blockchain technologies through engaging talks and workshops</p>
//           </div>

//           {/* Section content */}
//           <div className="md:grid md:grid-cols-12 md:gap-6">

//             {/* Content */}
//             <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6" data-aos="fade-right">
//               <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-8">
//                 <h3 className="h3 mb-3">Excited for</h3>
//                 <p className="text-xl text-gray-600">Be inspired to create impactful solutions for Africa's challenges using blockchain technology. Come learn, interact and explore the Ugandan blockchain space</p>
//               </div>
//               {/* Tabs buttons */}
//               <div className="mb-8 md:mb-0">
//                 <a
//                   className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 1 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'}`}
//                   href="#0"
//                   onClick={(e) => { e.preventDefault(); setTab(1); }}
//                 >
//                   <div>
//                     <div className="font-bold leading-snug tracking-tight mb-1">Community</div>
//                     <div className="text-gray-600">Forge valuable connections with fellow attendees who share your interests and aspirations. Share knowledge, insights, and experiences with others in the community, fostering growth and development</div>
//                   </div>
//                   <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
//                     <svg className="w-3 h-3 fill-current" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
//                       <path d="M11.953 4.29a.5.5 0 00-.454-.292H6.14L6.984.62A.5.5 0 006.12.173l-6 7a.5.5 0 00.379.825h5.359l-.844 3.38a.5.5 0 00.864.445l6-7a.5.5 0 00.075-.534z" />
//                     </svg>
//                   </div>
//                 </a>
//                 <a
//                   className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 2 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'}`}
//                   href="#0"
//                   onClick={(e) => { e.preventDefault(); setTab(2); }}
//                 >
//                   <div>
//                     <div className="font-bold leading-snug tracking-tight mb-1">Talks and Workshops</div>
//                     <div className="text-gray-600">Take collaboration to the next level with security and administrative features built for teams.</div>
//                   </div>
//                   <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
//                     <svg className="w-3 h-3 fill-current" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
//                       <path d="M11.854.146a.5.5 0 00-.525-.116l-11 4a.5.5 0 00-.015.934l4.8 1.921 1.921 4.8A.5.5 0 007.5 12h.008a.5.5 0 00.462-.329l4-11a.5.5 0 00-.116-.525z" fillRule="nonzero" />
//                     </svg>
//                   </div>
//                 </a>
//                 <a
//                   className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 3 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'}`}
//                   href="#0"
//                   onClick={(e) => { e.preventDefault(); setTab(3); }}
//                 >
//                   <div>
//                     <div className="font-bold leading-snug tracking-tight mb-1">Hackathons</div>
//                     <div className="text-gray-600">Take collaboration to the next level with security and administrative features built for teams.</div>
//                   </div>
//                   <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
//                     <svg className="w-3 h-3 fill-current" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
//                       <path d="M11.334 8.06a.5.5 0 00-.421-.237 6.023 6.023 0 01-5.905-6c0-.41.042-.82.125-1.221a.5.5 0 00-.614-.586 6 6 0 106.832 8.529.5.5 0 00-.017-.485z" fill="#191919" fillRule="nonzero" />
//                     </svg>
//                   </div>
//                 </a>
//               </div>
//             </div>

//             {/* Tabs items */}
//             <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1">
//               <div className="transition-all">
//                 <div className="relative flex flex-col text-center lg:text-right" data-aos="zoom-y-out" ref={tabs}>
//                   {/* Item 1 */}
//                   <Transition
//                     show={tab === 1}
//                     appear={true}
//                     className="w-full"
//                     enter="transition ease-in-out duration-700 transform order-first"
//                     enterFrom="opacity-0 translate-y-16"
//                     enterTo="opacity-100 translate-y-0"
//                     leave="transition ease-in-out duration-300 transform absolute"
//                     leaveFrom="opacity-100 translate-y-0"
//                     leaveTo="opacity-0 -translate-y-16"
//                     beforeEnter={() => heightFix()}
//                     unmount={false}                     
//                   >
//                     <div className="relative inline-flex flex-col">
//                       <Image className="md:max-w-none mx-auto rounded" src={comm} width={500} height="462" alt="Features bg" />
//                       {/* <Image className="md:max-w-none absolute w-full left-0 transform animate-float" src={FeaturesElement} width={500} height="44" alt="Element" style={{ top: '30%' }} /> */}
//                     </div>
//                   </Transition>
//                   {/* Item 2 */}
//                   <Transition
//                     show={tab === 2}
//                     appear={true}
//                     className="w-full"
//                     enter="transition ease-in-out duration-700 transform order-first"
//                     enterFrom="opacity-0 translate-y-16"
//                     enterTo="opacity-100 translate-y-0"
//                     leave="transition ease-in-out duration-300 transform absolute"
//                     leaveFrom="opacity-100 translate-y-0"
//                     leaveTo="opacity-0 -translate-y-16"
//                     beforeEnter={() => heightFix()}
//                     unmount={false}                     
//                   >
//                     <div className="relative inline-flex flex-col">
//                       <Image className="md:max-w-none mx-auto rounded" src={share} width={500} height="462" alt="Features bg" />
//                       {/* <Image className="md:max-w-none absolute w-full left-0 transform animate-float" src={FeaturesElement} width={500} height="44" alt="Element" style={{ top: '30%' }} /> */}
//                     </div>
//                   </Transition>
//                   {/* Item 3 */}
//                   <Transition
//                     show={tab === 3}
//                     appear={true}
//                     className="w-full"
//                     enter="transition ease-in-out duration-700 transform order-first"
//                     enterFrom="opacity-0 translate-y-16"
//                     enterTo="opacity-100 translate-y-0"
//                     leave="transition ease-in-out duration-300 transform absolute"
//                     leaveFrom="opacity-100 translate-y-0"
//                     leaveTo="opacity-0 -translate-y-16"
//                     beforeEnter={() => heightFix()}
//                     unmount={false}                     
//                   >
//                     <div className="relative inline-flex flex-col">
//                       <Image className="md:max-w-none mx-auto rounded" src={hack} width={500} height="462" alt="Features bg" />
//                       {/* <Image className="md:max-w-none absolute w-full left-0 transform animate-float" src={FeaturesElement} width={500} height="44" alt="Element" style={{ top: '30%' }} /> */}
//                     </div>
//                   </Transition>
//                 </div>
//               </div>
//             </div>

//           </div>

//         </div>
//       </div>
//     </section>
//   )
// }