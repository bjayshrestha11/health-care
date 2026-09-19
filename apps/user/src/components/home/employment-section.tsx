import { Section } from "@/components/layout/section"
import { employmentSection } from "@/content/home"

export function EmploymentSection() {
  return (
    <Section id={employmentSection.id} className="scroll-mt-20 bg-[#c6dcf7]">
      <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        {employmentSection.heading}
      </h2>

      <div className="mx-auto mt-10 flex max-w-xl flex-col gap-5">
        {employmentSection.links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="rounded-xl bg-[#4577ab] px-6 py-4 text-center text-lg font-medium text-white transition-colors hover:bg-[#3a6593] focus-visible:ring-3 focus-visible:ring-primary/50 focus-visible:outline-none"
          >
            {link.label}
          </a>
        ))}
      </div>
    </Section>
  )
}
