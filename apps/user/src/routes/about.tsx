import { createFileRoute } from '@tanstack/react-router'
import { AboutHero } from '@/components/about/about-hero'
import { AboutOverview } from '@/components/about/about-overview'
import { CredentialsSection } from '@/components/about/credentials-section'
import { QualificationsSection } from '@/components/about/qualifications-section'

export const Route = createFileRoute('/about')({
  component: AboutPage,
})

function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutOverview />
      <CredentialsSection />
      <QualificationsSection />
    </>
  )
}
