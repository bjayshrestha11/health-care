// Free-to-use stock photography from Pexels (https://www.pexels.com), no attribution required.
function pexels(id: number, width: number) {
  return `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${width}`
}

export const images = {
  servicesBackground: {
    src: "/services-bg.png",
    alt: "",
  },
  homeHero: {
    src: "/home-bg.png",
    alt: "A home care aide walking arm in arm with a smiling client",
  },
  aboutHero: {
    src: pexels(18459198, 1600),
    alt: "A caregiver helping an elderly client at home",
  },
  homemakerServices: {
    src: pexels(8805784, 1200),
    alt: "An elderly man preparing a meal in his kitchen",
  },
  personalCare: {
    src: pexels(6129678, 1200),
    alt: "A caregiver checking a client's blood pressure",
  },
  companionCare: {
    src: pexels(271353, 1200),
    alt: "A caregiver spending time with an elderly client",
  },
} as const
