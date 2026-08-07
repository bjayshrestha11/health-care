import { Section } from "@/components/layout/section"
import { aboutOverview, coreValues } from "@/content/about"

export function AboutOverview() {
  return (
    <Section>
      <div className="grid gap-10 lg:grid-cols-3 lg:gap-16">
        <div className="space-y-4 lg:col-span-2">
          <h2 className="text-3xl font-semibold tracking-tight">
            {aboutOverview.heading}
          </h2>
          {aboutOverview.paragraphs.map((paragraph) => (
            <p key={paragraph} className="text-muted-foreground">
              {paragraph}
            </p>
          ))}
        </div>
        <div className="rounded-2xl bg-muted/50 p-6">
          <h3 className="text-lg font-semibold">{coreValues.heading}</h3>
          <p className="mt-3 text-sm text-muted-foreground">
            {coreValues.body}
          </p>
        </div>
      </div>
    </Section>
  )
}
