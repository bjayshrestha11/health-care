export const siteConfig = {
  name: "Altimax Home Care",
  legalName: "Altimax Home Care, LLC",
  tagline: "Home Care Aides Serving Pennsylvania",
  description:
    "Licensed, bonded, and insured home care agency providing homemaker, personal care, and companion services throughout Pennsylvania.",
  logo: { src: "/logo.png", alt: "Altimax Home Care" },
  phone: "(888) 351-6472",
  phoneHref: "tel:+18883516472",
  fax: "(877) 248-9303",
  email: "info@aplusunitedhc.com",
  address: "4411 Stilley Road, Suite 207, Pittsburgh, PA 15227",
} as const

/**
 * The share link from the spec (https://maps.app.goo.gl/nHnjDS8m5Qv2BpGZ9)
 * resolves to the Oriental Care, LLC. listing in Harrisburg. Neither the short
 * link nor a /maps/place/ URL can be framed, so the embed searches for the
 * listing by name within the viewport of its resolved coordinates.
 */
export const mapEmbed = {
  title: "Oriental Care, LLC. on Google Maps",
  src: "https://www.google.com/maps?q=Oriental+Care,+LLC.&ll=40.2770344,-76.8235095&z=17&hl=en&output=embed",
  link: "https://maps.app.goo.gl/nHnjDS8m5Qv2BpGZ9",
} as const

/**
 * Nav targets are either a route (`to`) or a section on the home page
 * (`to: "/"` plus `hash`), so the header can link to sections that do not
 * have a route of their own.
 */
export const mainNav = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Employment", to: "/", hash: "employment" },
  { label: "Contact", to: "/contact" },
] as const

export const socialLinks = [
  { label: "Facebook", href: "#" },
  { label: "Twitter", href: "#" },
  { label: "Google+", href: "#" },
  { label: "Instagram", href: "#" },
] as const

export const footerNav = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Contact Us", to: "/contact" },
] as const
