import { Link } from "@tanstack/react-router"
import { buttonVariants } from "@health-care/ui/components/button"
import { Section } from "@/components/layout/section"
import { familyProgram } from "@/content/services"

export function FamilyProgram() {
  return (
    <Section className="bg-primary/5">
      <div className="mx-auto max-w-2xl space-y-4 text-center">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          {familyProgram.heading}
        </h2>
        <p className="text-muted-foreground">{familyProgram.body}</p>
        <Link to={familyProgram.cta.href} className={buttonVariants({ size: "lg" })}>
          {familyProgram.cta.label}
        </Link>
      </div>
    </Section>
  )
}
