import Image from 'next/image'
import TestimonialImage from '@/public/images/testimonial.jpg'
import celo from '@/public/images/celo.png'
import base from '@/public/images/base.jpeg'
import web3bridge from '@/public/images/w3bridge.png'
import starknet from '@/public/images/starknet.png'
import iv from '@/public/images/iv.png'
import fonbnk from '@/public/images/fonbnk.png'
import onboard from '@/public/images/onboard.png'
import unlock from '@/public/images/unlock.png'
import pf from '@/public/images/pf.jpg'
import muda from '@/public/images/muda.png'
import pago from '@/public/images/pago.png'
import oneramp from '@/public/images/oneramp.png'
import Link from 'next/link'



export default function Testimonials() {
  return (
    <section className="relative">

      {/* Illustration behind content */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -mb-32" aria-hidden="true">
        <svg width="1760" height="518" viewBox="0 0 1760 518" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-02">
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g transform="translate(0 -3)" fill="url(#illustration-02)" fillRule="evenodd">
            <circle cx="1630" cy="128" r="128" />
            <circle cx="178" cy="481" r="40" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h2 className="h2 mb-4">Our previous Sponsors</h2>
            <p className="text-xl text-gray-600" data-aos="zoom-y-out"> The companies that make the blockchain devfest happen</p>
          </div>

          {/* Items */}
          <div className="max-w-sm md:max-w-4xl mx-auto grid gap-2 grid-cols-4 md:grid-cols-5">

            {/* Item */}
            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
            <Link href="https://celo.org/" passHref target="_blank" rel="noopener noreferrer">
              <Image src={celo} width={100} height={100} alt="Celo" />
            </Link>
            </div>

            {/* Item */}
            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
            <Link href="https://www.starknet.io/" passHref target="_blank" rel="noopener noreferrer">
            <Image src={starknet} width={100} height={100} alt="starknet" />
            </Link>
            </div>

            {/* Item */}
            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
            <Link href="https://x.com/onboardglobal" passHref target="_blank" rel="noopener noreferrer">
            <Image src={onboard} width={100} height={100} alt="onboard" />
            </Link>
            </div>

            {/* Item */}
            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
            <Link href="https://innovationvillage.africa/" passHref target="_blank" rel="noopener noreferrer">
            <Image src={iv} width={100} height={100} alt="innovation village" />
            </Link>
            </div>
            {/* Item */}
            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto col-start-2 col-end-4">
            <Link href="https://oneramp.io/" passHref target="_blank" rel="noopener noreferrer">
            <Image src={oneramp} width={100} height={100} alt="oneramp" />
            </Link>
            </div>
          </div>

            <div className="max-w-sm md:max-w-4xl mx-auto grid gap-2 grid-cols-4 md:grid-cols-5"> 
            {/* Item */}
            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
            <Link href="https://www.base.org/" passHref target="_blank" rel="noopener noreferrer">
            <Image src={base} width={100} height={100} alt="base" />
            </Link>
            </div>
            {/* Item */}
            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
            <Link href="https://www.web3bridgeafrica.com/" passHref target="_blank" rel="noopener noreferrer">
            <Image src={web3bridge} width={100} height={100} alt="web3Bridge" />
            </Link>
            </div>
            {/* Item */}
            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
            <Link href="https://unlock-protocol.com/" passHref target="_blank" rel="noopener noreferrer">
            <Image src={unlock} width={100} height={100} alt="unlock protocol" />
            </Link>
            </div>
            {/* Item */}
            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
            <Link href="https://muda.tech/" passHref target="_blank" rel="noopener noreferrer">
            <Image src={muda} width={100} height={100} alt="muda" />
            </Link>
            </div>
            {/* Item */}
            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
            <Link href="https://fonbnk.com/" passHref target="_blank" rel="noopener noreferrer">
                <Image src={fonbnk} width={100} height={100} alt="fonbnk" />
            </Link>
            </div>
            {/* Item */}
            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
            <Link href="https://pago.capital/" passHref target="_blank" rel="noopener noreferrer">
                <Image src={pago} width={100} height={100} alt="pago" />
            </Link>
            </div>

          </div>

          {/* Testimonials */}
          <div className="max-w-3xl mx-auto mt-20" data-aos="zoom-y-out">
            <div className="relative flex items-start border-2 border-gray-200 rounded bg-white">

              {/* Testimonial */}
              <div className="text-center px-12 py-8 pt-20 mx-4 md:mx-0">
                <div className="absolute top-0 -mt-8 left-1/2 transform -translate-x-1/2">
                  <svg className="absolute top-0 right-0 -mt-3 -mr-8 w-16 h-16 fill-current text-blue-500" viewBox="0 0 64 64" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                    <path d="M37.89 58.338c-2.648-5.63-3.572-10.045-2.774-13.249.8-3.203 8.711-13.383 23.737-30.538l2.135.532c-6.552 10.033-10.532 17.87-11.939 23.515-.583 2.34.22 6.158 2.41 11.457l-13.57 8.283zm-26.963-6.56c-2.648-5.63-3.572-10.046-2.773-13.25.799-3.203 8.71-13.382 23.736-30.538l2.136.533c-6.552 10.032-10.532 17.87-11.94 23.515-.583 2.339.22 6.158 2.41 11.456l-13.57 8.283z" />
                  </svg>
                  <Image className="relative rounded-full" src={pf} width={96} height={96} alt="Testimonial 01" />
                </div>
                <blockquote className="text-xl font-medium mb-4">
                  “ Blockchain devFest Kampala 2024 exceeded all my expectations. Inspiring speakers, valuable networking, and practical workshops made it an event not to be missed. Highly recommended! “
                </blockquote>
                <cite className="block font-bold text-lg not-italic mb-1">Elias Hezron</cite>
                <div className="text-gray-600">
                  <span>CEO & Co-Founder</span> <a className="text-blue-600 hover:underline" href="https://oneramp.io">@Oneramp</a>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}