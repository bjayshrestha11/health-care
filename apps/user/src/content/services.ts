import { images } from "@/content/images"

export const servicesIntro = {
  heading: "Our Services",
  body: "We send aides to the homes of clients throughout 23 counties of Pennsylvania, offering homemaking, personal care, and companionship, with options ranging from a few hours a week to full 24-hour and live-in care.",
} as const

export const serviceCategories = [
  {
    title: "Homemaker Services",
    description:
      "Support with the everyday domestic tasks that keep a home running smoothly.",
    items: [
      "Meal preparation",
      "Cleaning",
      "Laundry",
      "Changing bed linens",
      "Changing light bulbs",
      "And more",
    ],
    image: images.homemakerServices,
  },
  {
    title: "Personal Care",
    description:
      "Hands-on assistance with health, hygiene, and mobility needs.",
    items: [
      "Medication reminders",
      "Mobility assistance",
      "Fall safety",
      "Adherence to special diets (example: diabetic diet)",
      "Bathing assistance",
      "Dressing & grooming",
      "Feeding",
      "Transportation assistance",
      "Accompaniment to appointments",
      "Hospital attendant service",
      "And more",
    ],
    image: images.personalCare,
  },
  {
    title: "Companion Care",
    description:
      "Friendly support for daily activities and staying socially engaged.",
    items: [
      "Getting the mail",
      "Assistance with hobbies (for example: caring for potted plants, scrap booking, keeping a journal)",
      "Assistance with remotes",
      "Help with correspondence (for example: writing letters, email, social media)",
      "Help reading newspapers, magazines, or the internet",
      "Running errands, shopping",
      "And more",
    ],
    image: images.companionCare,
  },
] as const

export const familyProgram = {
  heading: "Family to Family Program",
  body: "Through our Family to Family Program, Medicaid recipients can hire family members or close friends to provide their in-home care, with Medicaid covering the cost.",
  cta: { label: "See If You Qualify", href: "/contact" },
} as const
