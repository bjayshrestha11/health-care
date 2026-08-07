import { CheckCircle2 } from "lucide-react"
import { Section } from "@/components/layout/section"
import { aideQualifications, payors, serviceArea } from "@/content/about"

export function QualificationsSection() {
  return (
    <Section>
      <div className="grid gap-10 md:grid-cols-2 md:gap-16">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">
            {aideQualifications.heading}
          </h2>
          <ul className="space-y-2.5">
            {aideQualifications.items.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-8">
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">{serviceArea.heading}</h3>
            <p className="text-sm text-muted-foreground">{serviceArea.body}</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">{payors.heading}</h3>
            <ul className="flex flex-wrap gap-2 pt-1">
              {payors.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full bg-muted px-3 py-1 text-sm text-foreground"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  )
}
