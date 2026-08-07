// Free-to-use stock photography from Pexels (https://www.pexels.com), no attribution required.
function pexels(id: number, width: number) {
  return `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${width}`
}

export const images = {
  homeHero: {
    src: pexels(29373893, 1600),
    alt: "A caregiver sharing a warm moment with an elderly woman at home",
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
