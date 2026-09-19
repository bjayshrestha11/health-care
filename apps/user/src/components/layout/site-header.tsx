import { useEffect, useState } from "react"
import { Link, useRouterState } from "@tanstack/react-router"
import { Phone } from "lucide-react"
import { cn } from "@health-care/ui/lib/utils"
import { mainNav, siteConfig } from "@/content/site"
import { MobileNav } from "@/components/layout/mobile-nav"

export function SiteHeader() {
  const pathname = useRouterState({ select: (s) => s.location.pathname })
  const [scrolled, setScrolled] = useState(false)

  // The home hero sits behind the header, so there the header starts
  // transparent and only turns solid once it leaves the hero.
  const overHero = pathname === "/"
  const solid = !overHero || scrolled

  useEffect(() => {
    if (!overHero) return
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [overHero])

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
          solid
            ? "border-b border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/80"
            : "bg-transparent"
        )}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center" aria-label={siteConfig.name}>
            <img
              src={siteConfig.logo.src}
              alt={siteConfig.logo.alt}
              className="h-12 w-auto"
            />
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {mainNav.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                hash={"hash" in item ? item.hash : undefined}
                className={cn(
                  "text-base font-medium transition-colors",
                  solid
                    ? "text-muted-foreground hover:text-foreground"
                    : "text-white/90 drop-shadow-sm hover:text-white"
                )}
                activeProps={{
                  className: solid ? "text-foreground" : "text-white",
                }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={siteConfig.phoneHref}
              className={cn(
                "hidden items-center gap-2 rounded-full px-5 py-2.5 text-base font-medium transition-colors sm:flex",
                solid
                  ? "bg-primary text-primary-foreground hover:bg-primary/90"
                  : "bg-white/20 text-white backdrop-blur-sm hover:bg-white/30"
              )}
            >
              <Phone className="size-4" />
              {siteConfig.phone}
            </a>
            <MobileNav solid={solid} />
          </div>
        </div>
      </header>
      {/* Only non-hero pages need to clear the fixed header. */}
      {!overHero && <div className="h-20" aria-hidden />}
    </>
  )
}
