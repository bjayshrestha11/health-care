import { createFileRoute } from '@tanstack/react-router'
import { HeroSection } from '@/components/home/hero-section'
import { ServicesSection } from '@/components/home/services-section'
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
      <ServicesSection />
      <MissionVision />
    </>
  )
}
