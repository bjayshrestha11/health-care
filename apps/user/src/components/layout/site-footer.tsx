import { Link } from "@tanstack/react-router"
import { Separator } from "@health-care/ui/components/separator"
import { footerNav, mapEmbed, siteConfig, socialLinks } from "@/content/site"
import { Mail, MapPin, Phone } from "lucide-react"
import { FacebookIcon } from "../icons/facebook"

const linkStyles = "flex items-center gap-2 underline underline-offset-4 hover:text-foreground"

export function SiteFooter() {
  const year = new Date().getFullYear()

  const getIcon = (iconName: string, props: any) => {
    switch (iconName) {
      case "facebook":
        return <FacebookIcon {...props} />
      default:
        return null
    }
  }

  return (
    <footer className="border-t border-border bg-muted/40">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <p className="font-medium text-foreground">{siteConfig.name}</p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {siteConfig.description}
            </p>
          </div>

          <div className="space-y-4">
            <p className="font-medium text-foreground">Links</p>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              {footerNav.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="hover:text-foreground">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <p className="font-medium text-foreground">Contact</p>
            <ul className="list-none space-y-2 pl-5 text-sm text-muted-foreground marker:text-primary">
              <li>
                <a href={siteConfig.phoneHref} className={linkStyles}>
                  <Phone className="size-4" />
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`} className={linkStyles}>
                  <Mail className="size-4" />
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a
                  href={mapEmbed.link}
                  target="_blank"
                  rel="noreferrer"
                  className={linkStyles}
                >
                  <MapPin className="size-6" />
                  {siteConfig.address}
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <p className="font-medium text-foreground">Follow Us</p>
            <ul className="list-none space-y-1.5 pl-5 text-sm text-muted-foreground marker:text-primary">
              {socialLinks.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className={linkStyles}>
                    {getIcon(item.icon, { className: "size-4" })}
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <p className="text-center text-sm text-muted-foreground">
          &copy; {year} {siteConfig.legalName}. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}
