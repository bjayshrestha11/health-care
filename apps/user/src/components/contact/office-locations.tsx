import { Clock, MapPin, Phone, Printer } from "lucide-react"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@health-care/ui/components/card"
import { Section } from "@/components/layout/section"
import { offices } from "@/content/contact"
import { ContactForm } from "@/components/contact/contact-form"

export function OfficeLocations() {
  return (
    <Section>
      <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <div className="grid gap-6 sm:grid-cols-2">
          {offices.map((office) => (
            <Card key={office.id} id={office.id}>
              <CardHeader>
                <CardTitle className="text-base">{office.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2.5 text-sm text-muted-foreground">
                <p className="flex items-start gap-2">
                  <MapPin className="mt-0.5 size-4 shrink-0" />
                  {office.address}
                </p>
                <a
                  href={office.phoneHref}
                  className="flex items-center gap-2 hover:text-foreground"
                >
                  <Phone className="size-4 shrink-0" />
                  {office.phone}
                </a>
                <p className="flex items-center gap-2">
                  <Printer className="size-4 shrink-0" />
                  Fax: {office.fax}
                </p>
                <p className="flex items-start gap-2">
                  <Clock className="mt-0.5 size-4 shrink-0" />
                  {office.hours}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        <ContactForm />
      </div>
    </Section>
  )
}
