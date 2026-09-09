export const site = {
  name: "Banjara",
  legalName: "PB Venture",
  outletName: "Banjara",
  place: "Sonari",
  fullName: "Banjara, Sonari",
  title: "Banjara | PB Venture | Royal Indian Dining in Jamshedpur",
  description:
    "Banjara is the dining outlet of PB Venture in Sonari, Jamshedpur — Indian hospitality, vibrant ambience and memorable dining.",
  attribution: "Banjara, powered by PB Venture",
  phoneDisplay: "+91 75458 00700",
  phoneHref: "tel:+917545800700",
  hours: "12:00 PM – 11:00 PM",
  address: {
    line: "Shop 18-19-20 G, Ground Floor, Bindal Mall, Marine Drive Road, Sonari, Jamshedpur",
    short: "Bindal Mall, Marine Drive Road, Sonari, Jamshedpur",
  },
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Shop+18-19-20+G+Bindal+Mall+Marine+Drive+Road+Sonari+Jamshedpur",
} as const;

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#story", label: "Our Story" },
  { href: "#experience", label: "Experience" },
  { href: "#gallery", label: "Gallery" },
  { href: "#visit", label: "Visit Us" },
] as const;

export const images = {
  logo: "/images/banjara-logo.png",
  emblem: "/images/banjara-emblem.png",
  hero: "/images/sat-7809.jpg",
  experience: "/images/sat-7806.jpg",
  diningHall: "/images/sat-7824.jpg",
  diningTable: "/images/sat-7809.jpg",
  diningArt: "/images/sat-7806.jpg",
  thali: "/images/sat-7808.jpg",
  front: "/images/banjara-front.jpg",
  scale: "/images/sat-7831.jpg",
  seating: "/images/sat-7827.jpg",
  entry: "/images/sat-7795.jpg",
} as const;

export const galleryItems = [
  {
    src: images.scale,
    alt: "Grand dining hall at Banjara Sonari with chandelier and patterned seating",
    caption: "The dining hall",
    className: "md:col-span-8 md:row-span-2 min-h-[280px] md:min-h-[540px]",
  },
  {
    src: images.diningTable,
    alt: "Brass tableware and colourful chairs in the Banjara dining room",
    caption: "A table awaits",
    className: "md:col-span-4 min-h-[240px] md:min-h-[260px]",
  },
  {
    src: images.diningArt,
    alt: "Rajasthani-inspired wall artefacts and patterned seating at Banjara",
    caption: "Handcrafted walls",
    className: "md:col-span-4 min-h-[240px] md:min-h-[260px]",
  },
  {
    src: images.diningHall,
    alt: "Arched interiors, chandelier lighting and royal seating at Banjara",
    caption: "Arches and light",
    className: "md:col-span-5 min-h-[240px] md:min-h-[320px]",
  },
  {
    src: images.seating,
    alt: "Warm interior seating and Indian decorative details at Banjara Sonari",
    caption: "Colour in every chair",
    className: "md:col-span-7 min-h-[240px] md:min-h-[320px]",
  },
  {
    src: images.thali,
    alt: "Brass thalis and goblets set on a wooden table at Banjara",
    caption: "Brass and wood",
    className: "md:col-span-8 min-h-[260px] md:min-h-[360px]",
  },
  {
    src: images.front,
    alt: "Exterior of Banjara restaurant at Bindal Mall, Sonari",
    caption: "Banjara, Sonari",
    className: "md:col-span-4 min-h-[240px] md:min-h-[360px]",
  },
  {
    src: images.entry,
    alt: "Entrance and façade of Banjara restaurant in Sonari, Jamshedpur",
    caption: "Welcome in",
    className: "md:col-span-12 min-h-[220px] md:min-h-[300px]",
  },
] as const;
