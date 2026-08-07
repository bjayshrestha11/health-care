import { CheckCircle2 } from "lucide-react"
import { Section } from "@/components/layout/section"
import { mission, vision } from "@/content/home"

export function MissionVision() {
  return (
    <Section className="bg-muted/30">
      <div className="grid gap-10 md:grid-cols-2 md:gap-16">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">
            {mission.heading}
          </h2>
          <p className="text-muted-foreground">{mission.body}</p>
          <ul className="space-y-2 pt-2">
            {mission.points.map((point) => (
              <li key={point} className="flex items-center gap-2 text-sm font-medium">
                <CheckCircle2 className="size-4 text-primary" />
                {point}
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">
            {vision.heading}
          </h2>
          <p className="text-muted-foreground">{vision.body}</p>
        </div>
      </div>
    </Section>
  )
}
