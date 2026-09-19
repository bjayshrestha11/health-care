import { useState } from "react"
import { Link } from "@tanstack/react-router"
import { Menu, Phone } from "lucide-react"
import { Button } from "@health-care/ui/components/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@health-care/ui/components/sheet"
import { cn } from "@health-care/ui/lib/utils"
import { mainNav, siteConfig } from "@/content/site"

interface MobileNavProps {
  /** Matches the header: on a transparent header the trigger has to stay white. */
  solid?: boolean
}

export function MobileNav({ solid = true }: MobileNavProps) {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        render={
          <Button
            variant="ghost"
            size="icon-lg"
            className={cn(
              "lg:hidden",
              !solid && "text-white hover:bg-white/20 hover:text-white"
            )}
          />
        }
      >
        <Menu className="size-6" />
        <span className="sr-only">Open menu</span>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>{siteConfig.name}</SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col gap-1 px-4">
          {mainNav.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              hash={"hash" in item ? item.hash : undefined}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2.5 text-base font-medium text-foreground hover:bg-muted"
              activeProps={{ className: "bg-muted" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={siteConfig.phoneHref}
            className="mt-3 flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-2.5 text-base font-medium text-primary-foreground"
          >
            <Phone className="size-4" />
            {siteConfig.phone}
          </a>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
