import { ContactForm } from "@/components/contact/contact-form";
import { Section } from "@/components/layout/section";

export function OfficeLocations() {
  return (
    <Section>
      <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <ContactForm />
      </div>
    </Section>
  );
}
