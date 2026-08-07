import { createFileRoute } from '@tanstack/react-router'
import { ContactHero } from '@/components/contact/contact-hero'
import { OfficeLocations } from '@/components/contact/office-locations'

export const Route = createFileRoute('/contact')({
  component: ContactPage,
})

function ContactPage() {
  return (
    <>
      <ContactHero />
      <OfficeLocations />
    </>
  )
}
