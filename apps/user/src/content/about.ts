import { images } from "@/content/images";

export const aboutHero = {
  heading: "About Altimax Home Care",
  intro:
    "Altimax Home Care is dedicated to providing the highest quality of care in the Home by the Professionals.",
  image: images.aboutHero,
} as const;

export const aboutOverview = {
  heading: "Who We Are",
  paragraphs: [
    "Licensed, bonded, and insured, Altimax Home Care serves Maryland  and the surrounding areas as a Baltimore state Medicaid waiver provider",
  ],
} as const;

export const coreValues = {
  heading: "Culturally Appropriate Care",
  body: "We believe in respecting every body, every culture, language, religion, ritual, and belief, and gender identity, equally. That's why we hire multilingual caregivers who can communicate with clients in the way that works best for them.",
} as const;

export const credentials = [
  "State Licensed",
  "Medicaid Certified",
  "OLTL Approved",
  "Nurse-Supervised Care",
  "Directly Employed Workers",
  "Insured & Bonded",
  "BBB Accredited Business",
] as const;

export const aideQualifications = {
  heading: "Our Aides Are Thoroughly Qualified",
  items: [
    "State-approved nursing assistant training",
    "Criminal background clearance",
    "Verified work references",
    "State certification verification",
    "Knowledge exam completion",
    "Registered nurse skills verification",
    "Ongoing continuing education",
  ],
} as const;

export const serviceArea = {
  heading: "Where We Work",
  body: "We send aides to the homes of clients throughout 23 counties of Maryland, including Allegheny, Erie, Dauphin, and York counties.",
} as const;

export const payors = {
  heading: "Payors We Accept",
  items: ["Private Pay", "Medicaid"],
} as const;
