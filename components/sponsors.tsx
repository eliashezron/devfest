'use client';

import Link from 'next/link';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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


const sponsors = [
  { src: celo, alt: 'Celo', href: 'https://celo.org/' },
  { src: starknet, alt: 'starknet', href: 'https://www.starknet.io/' },
  { src: onboard, alt: 'onboard', href: 'https://x.com/onboardglobal' },
  { src: iv, alt: 'innovation village', href: 'https://innovationvillage.africa/' },
  { src: oneramp, alt: 'oneramp', href: 'https://oneramp.io/' },
  { src: base, alt: 'base', href: 'https://www.base.org/' },
  { src: web3bridge, alt: 'web3Bridge', href: 'https://www.web3bridgeafrica.com/' },
  { src: unlock, alt: 'unlock protocol', href: 'https://unlock-protocol.com/' },
  { src: muda, alt: 'muda', href: 'https://muda.tech/' },
  { src: fonbnk, alt: 'fonbnk', href: 'https://fonbnk.com/' },
  { src: pago, alt: 'pago', href: 'https://pago.capital/' },
];

const Sponsors = () => {
  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"

  };

  return (
    <section className="relative py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
       
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Previous Sponsors</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                The companies that make the Blockchain DevFest happen
            </p>

        <Slider {...settings}>
          {sponsors.map((sponsor, index) => (
            <div key={index} className="flex justify-center">
              <Link href={sponsor.href} passHref target="_blank" rel="noopener noreferrer">
                <Image src={sponsor.src} width={120} height={120} alt={sponsor.alt} className="mx-auto" />
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Sponsors;























