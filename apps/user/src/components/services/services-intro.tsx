import { Section } from "@/components/layout/section"
import { servicesIntro } from "@/content/services"

export function ServicesIntro() {
  return (
    <Section className="py-12 md:py-20">
      <div className="max-w-2xl space-y-4">
        <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
          {servicesIntro.heading}
        </h1>
        <p className="text-lg text-muted-foreground">{servicesIntro.body}</p>
      </div>
    </Section>
  )
}
