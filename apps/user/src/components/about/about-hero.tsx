import { Section } from "@/components/layout/section"
import { aboutHero } from "@/content/about"

export function AboutHero() {
  return (
    <Section className="py-12 md:py-20">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="space-y-4">
          <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
            {aboutHero.heading}
          </h1>
          <p className="max-w-prose text-lg text-muted-foreground">
            {aboutHero.intro}
          </p>
        </div>
        <div className="overflow-hidden rounded-2xl ring-1 ring-foreground/10">
          <img
            src={aboutHero.image.src}
            alt={aboutHero.image.alt}
            className="aspect-[4/3] w-full object-cover"
          />
        </div>
      </div>
    </Section>
  )
}
