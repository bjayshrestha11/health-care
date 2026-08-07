export const siteConfig = {
  name: "APlus United Home Care",
  legalName: "APlus United Home Care, LLC",
  tagline: "Home Care Aides Serving Pennsylvania",
  description:
    "Licensed, bonded, and insured home care agency providing homemaker, personal care, and companion services throughout Pennsylvania.",
  phone: "(888) 351-6472",
  phoneHref: "tel:+18883516472",
  fax: "(877) 248-9303",
  email: "info@aplusunitedhc.com",
  address: "4411 Stilley Road, Suite 207, Pittsburgh, PA 15227",
} as const

export const mainNav = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact Us", href: "/contact" },
] as const

export const socialLinks = [
  { label: "Facebook", href: "#" },
  { label: "Twitter", href: "#" },
  { label: "Google+", href: "#" },
  { label: "Instagram", href: "#" },
] as const
