import { createFileRoute } from '@tanstack/react-router'
import { ServicesIntro } from '@/components/services/services-intro'
import { ServiceCategories } from '@/components/services/service-categories'
import { FamilyProgram } from '@/components/services/family-program'

export const Route = createFileRoute('/services')({
  component: ServicesPage,
})

function ServicesPage() {
  return (
    <>
      <ServicesIntro />
      <ServiceCategories />
      <FamilyProgram />
    </>
  )
}
