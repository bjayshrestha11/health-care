export const siteConfig = {
  name: "Altimax Home Care",
  legalName: "Altimax Home Care",
  tagline: "Home Care Aides Serving Pennsylvania",
  description:
    "Licensed, bonded, and insured home care agency providing homemaker, personal care, and companion services throughout Pennsylvania.",
  logo: { src: "/logo.png", alt: "Altimax Home Care" },
  phone: "(410) 220-4170",
  phoneHref: "tel:+4102204170",
  fax: "(717) 409-8526",
  email: "altimaxhomecare@gmail.com",
  address: "2141 Huntingdon Ave, Baltimore, MD 21211",
} as const;

/**
 * The share link from the spec (https://maps.app.goo.gl/nHnjDS8m5Qv2BpGZ9)
 * resolves to the Oriental Care, LLC. listing in Harrisburg. Neither the short
 * link nor a /maps/place/ URL can be framed, so the embed searches for the
 * listing by name within the viewport of its resolved coordinates.
 */
export const mapEmbed = {
  title: "Altimax Home Care, LLC. on Google Maps",
  src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3086.8612585120213!2d-76.62295182381192!3d39.3140683220111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c805d04b94bdf7%3A0x210a13a7e00961c6!2sAltimax%20Home%20Care!5e0!3m2!1sen!2sus!4v1790092365218!5m2!1sen!2sus&z=17&hl=en&output=embed",
  link: "https://maps.app.goo.gl/foQMpmr9HVbRJxZW6",
} as const;

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
] as const;

export const socialLinks = [{ label: "Facebook", href: "#", icon: "facebook" }] as const;

export const footerNav = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Contact Us", to: "/contact" },
] as const;
