import { ShieldCheck } from "lucide-react"
import { Badge } from "@health-care/ui/components/badge"
import { Section } from "@/components/layout/section"
import { credentials } from "@/content/about"

export function CredentialsSection() {
  return (
    <Section className="bg-muted/30">
      <div className="flex flex-col items-center gap-6 text-center">
        <ShieldCheck className="size-10 text-primary" />
        <h2 className="text-2xl font-semibold tracking-tight">
          Licensed &amp; Accredited
        </h2>
        <div className="flex flex-wrap justify-center gap-2">
          {credentials.map((credential) => (
            <Badge key={credential} variant="secondary" className="h-auto px-3 py-1.5 text-sm">
              {credential}
            </Badge>
          ))}
        </div>
      </div>
    </Section>
  )
}
