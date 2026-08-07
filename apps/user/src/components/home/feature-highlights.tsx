import { Link } from "@tanstack/react-router"
import { Clock, HeartHandshake, Users, type LucideIcon } from "lucide-react"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@health-care/ui/components/card"
import { Section } from "@/components/layout/section"
import { featureHighlights } from "@/content/home"

const icons: Record<string, LucideIcon> = {
  Clock,
  HeartHandshake,
  Users,
}

export function FeatureHighlights() {
  return (
    <Section className="bg-muted/30">
      <div className="grid gap-6 md:grid-cols-3">
        {featureHighlights.map((feature) => {
          const Icon = icons[feature.icon]
          return (
            <Card key={feature.title}>
              <CardHeader>
                <Icon className="size-8 text-primary" />
                <CardTitle className="pt-2 text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">{feature.body}</p>
                <Link
                  to={feature.cta.href}
                  className="text-sm font-medium text-primary hover:underline"
                >
                  {feature.cta.label} &rarr;
                </Link>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </Section>
  )
}
