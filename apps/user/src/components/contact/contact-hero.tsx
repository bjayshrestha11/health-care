import { Phone, Printer } from "lucide-react"
import { Section } from "@/components/layout/section"
import { contactIntro } from "@/content/contact"

export function ContactHero() {
  return (
    <Section className="py-12 md:py-20">
      <div className="max-w-2xl space-y-4">
        <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
          {contactIntro.heading}
        </h1>
        <p className="text-lg text-muted-foreground">{contactIntro.body}</p>
        <div className="flex flex-wrap gap-6 pt-2">
          <a
            href={contactIntro.tollFreePhoneHref}
            className="flex items-center gap-2 text-sm font-medium hover:text-primary"
          >
            <Phone className="size-4" />
            Toll-Free: {contactIntro.tollFreePhone}
          </a>
          <span className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
            <Printer className="size-4" />
            Fax: {contactIntro.tollFreeFax}
          </span>
        </div>
      </div>
    </Section>
  )
}
