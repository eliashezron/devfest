import Image from 'next/image'
import elias from '@/public/images/pf.jpg'
import david from '@/public/images/david.jpg'
import blank from '@/public/images/blank.svg'
import jovan from '@/public/images/jovan.jpg'
export default function FeaturesBlocks() {
  return (
    <section className="relative">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-gray-900 pointer-events-none" aria-hidden="true">
        {/* <div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
      </div> */}
      </div>
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Listen from the Speakers</h2>
            <p className="text-xl text-gray-600">Embark on an inspiring journey as our esteemed lineup of speakers shares their expertise, insights, and vision for the future of blockchain at Blockchain devFest Kampala 2024.</p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">

            {/* 1st item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <Image className="relative rounded-full"  src={elias} width={150} height={250} alt="Features element" />
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Elias Hezron</h4>
              <p className="text-gray-600 text-center">Co-Founder Oneramp & Shukuru Wallet</p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
            <Image className="relative rounded-full" src={david} width={150} height={250} alt="Features element" />
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">David Lumala</h4>
              <p className="text-gray-600 text-center">Co-Founder Epoch Infinity </p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
            <Image className="relative rounded-full" src={jovan} width={150} height={250} alt="Features element" />
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Jovan Mwesigwa</h4>
              <p className="text-gray-600 text-center">Co-Founder Oneramp & Shukuru Wallet</p>
            </div>

            {/* 4th item */}
            {/* <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
            <Image className="relative rounded-full" src={elias} width={150} height={250} alt="Features element" />
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Speaker 4</h4>
              <p className="text-gray-600 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div> */}

            {/* 5th item */}
            {/* <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
            <Image className="relative rounded-full"  src={elias} width={150} height={250} alt="Features element" />
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Speaker 5</h4>
              <p className="text-gray-600 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div> */}

            {/* 6th item */}
            {/* <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
            <Image className="relative rounded-full"  src={elias} width={150} height={250} alt="Features element" />
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Speaker 6</h4>
              <p className="text-gray-600 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div> */}

          </div>

        </div>
      </div>
    </section>
  )
}