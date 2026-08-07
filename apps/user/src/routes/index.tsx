import { createFileRoute } from '@tanstack/react-router'
import { HeroSection } from '@/components/home/hero-section'
import { FeatureHighlights } from '@/components/home/feature-highlights'
import { CompanyOverview } from '@/components/home/company-overview'
import { MissionVision } from '@/components/home/mission-vision'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  return (
    <>
      <HeroSection />
      <FeatureHighlights />
      <CompanyOverview />
      <MissionVision />
    </>
  )
}
