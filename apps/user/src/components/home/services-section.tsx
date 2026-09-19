import { Link } from "@tanstack/react-router"
import { ArrowRight } from "lucide-react"
import { servicesSection } from "@/content/home"

export function ServicesSection() {
  return (
    <section id={servicesSection.id} className="relative isolate scroll-mt-20 overflow-hidden py-16 md:py-24">
      <img
        src={servicesSection.background.src}
        alt={servicesSection.background.alt}
        aria-hidden
        className="absolute inset-0 -z-10 size-full object-cover"
      />
      {/* Washes the photo out so the cards and heading stay readable. */}
      <div className="absolute inset-0 -z-10 bg-background/70" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          {servicesSection.heading}
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2 md:gap-8">
          {servicesSection.cards.map((card) => (
            <div
              key={card.title}
              className="flex flex-col rounded-2xl bg-card/95 p-8 shadow-lg ring-1 ring-black/5 backdrop-blur-sm sm:p-10"
            >
              <h3 className="text-lg font-medium">{card.title}</h3>

              {"points" in card && (
                <ul className="mt-5 list-disc space-y-1.5 pl-5 text-muted-foreground marker:text-primary">
                  {card.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              )}

              {"body" in card && (
                <p className="mt-5 leading-relaxed text-muted-foreground">
                  {card.body}
                </p>
              )}

              {"cta" in card && (
                <Link
                  to={card.cta.to}
                  className="mt-6 inline-flex w-fit items-center gap-1.5 font-medium text-foreground underline underline-offset-4 hover:text-primary"
                >
                  {card.cta.label}
                  <ArrowRight className="size-4" />
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
