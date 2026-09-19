import { createFileRoute } from '@tanstack/react-router'
import { HeroSection } from '@/components/home/hero-section'
import { FeatureHighlights } from '@/components/home/feature-highlights'
import { AboutSection } from '@/components/home/about-section'
import { MissionVision } from '@/components/home/mission-vision'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <FeatureHighlights />
      <MissionVision />
    </>
  )
}
