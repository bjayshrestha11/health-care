import { Link } from "@tanstack/react-router"
import { Phone } from "lucide-react"
import { buttonVariants } from "@health-care/ui/components/button"
import { mainNav, siteConfig } from "@/content/site"
import { MobileNav } from "@/components/layout/mobile-nav"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/80">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2 text-lg font-semibold">
          <span className="text-primary">Altimax</span>
          <span className="hidden sm:inline">Home Care</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
              activeOptions={{ exact: item.href === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={siteConfig.phoneHref}
            className="hidden items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground lg:flex"
          >
            <Phone className="size-4" />
            {siteConfig.phone}
          </a>
          <div className="hidden md:block">
            <Link to="/contact" className={buttonVariants()}>
              Contact Us
            </Link>
          </div>
          <MobileNav />
        </div>
      </div>
    </header>
  )
}
