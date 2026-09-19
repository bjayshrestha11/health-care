import { Section } from "@/components/layout/section"
import { mission, vision } from "@/content/home"

export function MissionVision() {
  return (
    <Section className="bg-primary">
      <div className="grid gap-6 md:grid-cols-2 md:gap-8">
        {[mission, vision].map((item) => (
          <div
            key={item.heading}
            className="rounded-2xl bg-card p-8 shadow-lg sm:p-10"
          >
            <h2 className="text-lg font-medium">{item.heading}</h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              {item.body}
            </p>
            {"points" in item && (
              <ul className="mt-5 list-disc space-y-1.5 pl-5 text-muted-foreground marker:text-primary">
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </Section>
  )
}
