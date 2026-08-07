import { Section } from "@/components/layout/section"
import { companyOverview } from "@/content/home"

export function CompanyOverview() {
  return (
    <Section>
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="overflow-hidden rounded-2xl ring-1 ring-foreground/10 lg:order-2">
          <img
            src={companyOverview.image.src}
            alt={companyOverview.image.alt}
            className="aspect-[4/3] w-full object-cover"
          />
        </div>
        <div className="space-y-4 lg:order-1">
          <h2 className="text-3xl font-semibold tracking-tight">
            {companyOverview.heading}
          </h2>
          {companyOverview.paragraphs.map((paragraph) => (
            <p key={paragraph} className="text-muted-foreground">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </Section>
  )
}
