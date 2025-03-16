export const metadata = {
  title: 'Devfest Kampala',
  description: `Embrace the blockchain revolution. Empowering Developers, Igniting Innovation, and Building Solutions for Africa's Future.`,
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import FeaturesBlocks from '@/components/features-blocks'
import Testimonials from '@/components/testimonials'
import Newsletter from '@/components/newsletter'
import FAQs from '@/components/FAQS'
import Sponsors from '@/components/sponsors'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <FeaturesBlocks />
      <Testimonials />
      <Sponsors/>
      {/* <Newsletter /> */}
      <FAQs />
    </>
  )
}
