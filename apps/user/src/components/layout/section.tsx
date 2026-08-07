import type { ComponentProps } from "react"
import { cn } from "@health-care/ui/lib/utils"

interface SectionProps extends ComponentProps<"section"> {
  container?: boolean
}

export function Section({
  className,
  container = true,
  children,
  ...props
}: SectionProps) {
  return (
    <section className={cn("py-16 md:py-24", className)} {...props}>
      {container ? (
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {children}
        </div>
      ) : (
        children
      )}
    </section>
  )
}
