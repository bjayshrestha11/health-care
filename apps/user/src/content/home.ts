import { images } from "@/content/images"

export const hero = {
  eyebrow: "Home care aides serving Pennsylvania",
  heading: "Compassionate home care you can count on",
  body: "We work days, nights, weekends, and holidays. Whether you need at-home help a few hours per week, 24 hours per day, or on a live-in basis, you can count on Altimax home care.",
  cta: { label: "Our services", to: "/services" },
  image: images.homeHero,
} as const

export const aboutSection = {
  id: "about",
  heading: "About Altimax home care",
  paragraphs: [
    "Altimax Home Care is dedicated to providing care with compassion, excellence, and reliability to families across Pennsylvania.",
    "We proudly serve clients from three locations across the state, sending qualified, directly-employed aides into clients' homes to help them live safely and independently.",
    "We are guided by Respect, Passion, Quality, and Accountability, providing compassionate, reliable, and high-quality care that puts every client\u2019s dignity and well-being first.",
  ],
  video: {
    // https://www.youtube.com/watch?v=jh5U5BnpGN8
    youtubeId: "jh5U5BnpGN8",
    title: "About Altimax Home Care",
  },
} as const

export const servicesSection = {
  id: "services",
  heading: "Services",
  background: images.servicesBackground,
  /** Laid out as a 2x2 grid, in reading order. */
  cards: [
    {
      title: "We give all basic services:",
      points: [
        "Meal Preparation",
        "Light housekeeping",
        "Medication Reminders",
        "Companionship and grocery shopping.",
        "Assistance with doctor\u2019s appointment",
        "Personal care, assistance of daily living and Errands",
      ],
    },
    {
      title: "We'll Hire Your Family",
      body: "Through our Family to Family Program, Medicaid recipients can hire family members or close friends to provide their in-home care, with Medicaid covering the cost.",
      cta: { label: "Learn More", to: "/services" },
    },
    {
      title: "Medicaid Pays 100%",
      body: "Medicaid and Medicaid HMOs pay 100% when people qualify for in-home help. Let's see if you qualify.",
      cta: { label: "Learn More", to: "/contact" },
    },
    {
      title: "ODP Companion services:",
      body: "Oriental Care, LLC provides companion care Services to children and young adult under the age of 21 those diagnosed with Intellectual Disability (ID) and/or Autism.",
      cta: { label: "Learn More", to: "/services" },
    },
  ],
} as const

export const mission = {
  heading: "Our Mission",
  body: "The Agency's mission is to provide paraprofessional service to the consumer in their place of residence, thereby assisting them to realize his or her highest level of independence and quality of life.",
  points: ["Quality Care", "Personal Service", "Dependable Caregivers"],
} as const

export const vision = {
  heading: "Our Vision",
  body: "We strive to be one of the leading providers of a wide range of quality home care and services, recognized for enduring dedication to provide innovative, professional, and compassionate care.",
} as const

export const employmentSection = {
  id: "employment",
  heading: "Employment Information",
  links: [
    { label: "Time sheet", href: "/TIMESHEET.pdf" },
    { label: "Download Schedule", href: "/TIMESHEET-SCHEDULE.pdf" },
    { label: "ADP", href: "https://www.adp.com/logins/adp-workforce-now.aspx" },
    { label: "Brochure", href: "/BROCHURE.pdf" },
  ],
} as const
