import { Link } from "@tanstack/react-router"
import { buttonVariants } from "@health-care/ui/components/button"
import { Section } from "@/components/layout/section"
import { hero } from "@/content/home"

export function HeroSection() {
  return (
    <Section className="py-12 md:py-20">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="space-y-6">
          <p className="text-sm font-semibold tracking-wide text-primary uppercase">
            {hero.eyebrow}
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
            {hero.heading}
          </h1>
          <p className="max-w-prose text-lg text-muted-foreground">
            {hero.body}
          </p>
          <div className="flex flex-wrap gap-3">
            <Link to={hero.primaryCta.href} className={buttonVariants({ size: "lg" })}>
              {hero.primaryCta.label}
            </Link>
            <Link
              to={hero.secondaryCta.href}
              className={buttonVariants({ variant: "outline", size: "lg" })}
            >
              {hero.secondaryCta.label}
            </Link>
          </div>
        </div>
        <div className="overflow-hidden rounded-2xl ring-1 ring-foreground/10">
          <img
            src={hero.image.src}
            alt={hero.image.alt}
            className="aspect-[4/3] w-full object-cover"
          />
        </div>
      </div>
    </Section>
  )
}
