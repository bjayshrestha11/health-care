import { Check } from "lucide-react"
import { Section } from "@/components/layout/section"
import { serviceCategories } from "@/content/services"
import { cn } from "@health-care/ui/lib/utils"

export function ServiceCategories() {
  return (
    <Section className="space-y-16 md:space-y-24">
      {serviceCategories.map((category, index) => (
        <div
          key={category.title}
          className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
        >
          <div
            className={cn(
              "overflow-hidden rounded-2xl ring-1 ring-foreground/10",
              index % 2 === 1 && "lg:order-2"
            )}
          >
            <img
              src={category.image.src}
              alt={category.image.alt}
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
          <div className={cn("space-y-4", index % 2 === 1 && "lg:order-1")}>
            <h2 className="text-2xl font-semibold tracking-tight">
              {category.title}
            </h2>
            <p className="text-muted-foreground">{category.description}</p>
            <ul className="grid gap-2 sm:grid-cols-2">
              {category.items.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm">
                  <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </Section>
  )
}
