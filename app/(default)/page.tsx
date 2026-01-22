export const metadata = {
  title: 'DevFest Kampala - Africa\'s Premier Developer Conference',
  description: `DevFest provides a platform that showcases developers and founding teams, upskills community managers, and provides investors with industry insights. Connect Africa's thriving developer ecosystem with global blockchain companies.`,
}

import HeroW3Node from '@/components/hero-w3node'
import VideoSection from '@/components/video-section'
import AboutW3Node from '@/components/about-w3node'
import CountdownSection from '@/components/countdown-section'
import NodeEngine from '@/components/node-engine'
import VisitCapeTown from '@/components/visit-cape-town'
import SponsorshipW3Node from '@/components/sponsorship-w3node'
import CommunityW3Node from '@/components/community-w3node'
import StatsW3Node from '@/components/stats-w3node'
import SpeakersW3Node from '@/components/speakers-w3node'
import GallerySection from '@/components/gallery-section'
import SponsorsFAQSection from '@/components/sponsors-faq-section'
import RegistrationW3Node from '@/components/registration-w3node'
import FAQW3Node from '@/components/faq-w3node'

export default function Home() {
  return (
    <>
      <HeroW3Node />
      <VideoSection />
      <AboutW3Node />
      <CountdownSection />
      {/* <NodeEngine /> */}
      {/* <VisitCapeTown /> */}
      <SponsorshipW3Node />
      <CommunityW3Node />
      <StatsW3Node />
      <SpeakersW3Node />
      <GallerySection />
      <SponsorsFAQSection />
      {/* <FAQW3Node /> */}
    </>
  )
}
