import HackathonHero from '@/components/hackathonHero'
import HackathonTimeline from '@/components/hackathonTimeline'
import PrizesSection from '@/components/prizeSection'
import React from 'react'

const Page = () => {
  return (
    <div className="min-h-screen bg-background">
    <HackathonHero />
    <HackathonTimeline />
    <PrizesSection />
  </div>
  )
}

export default Page
