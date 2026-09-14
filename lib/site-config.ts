// Central place to edit the wedding's details — update these and the whole site follows.
// Plain facts (names, dates, links) live here. Translated copy lives in lib/dictionary.ts.
export const site = {
  partnerOne: "Nataly",
  partnerTwo: "Christian",
  monogram: "N & C",
  hashtag: "#NatalyAndChristian",
  contactEmail: "hello@example.com",

  // Countdown target: sail-away moment (Port Canaveral departs 16:00 on embarkation day).
  weddingDateISO: "2027-06-06T16:00:00",
  weddingDateDisplayEn: "June 6–11, 2027",
  weddingDateDisplayEs: "6–11 de junio de 2027",

  cruiseLine: "MSC Cruises",
  cruiseShip: "MSC Seashore",
  embarkPort: "Port Canaveral (Orlando), Florida",

  // Replace with your real Google Form link if it ever changes.
  // Same form is used for RSVP and cabin reservation.
  rsvpFormUrl: "https://forms.gle/aUFpyQnPRR8DhenD7",
  facebookGroupUrl: "https://www.facebook.com/groups/natalyandchris",

  itinerary: [
    {
      day: "sun",
      date: "06/06/2027",
      port: "Port Canaveral (Orlando), Florida",
      arrival: "—",
      departure: "16:00",
    },
    {
      day: "mon",
      date: "07/06/2027",
      port: "Nassau, Bahamas",
      arrival: "09:00",
      departure: "18:00",
    },
    {
      day: "tue",
      date: "08/06/2027",
      port: "Ocean Cay MSC Marine Reserve, Bahamas",
      arrival: "08:00",
      departure: "23:59",
    },
    {
      day: "wed",
      date: "09/06/2027",
      port: "Ocean Cay MSC Marine Reserve, Bahamas",
      arrival: "00:01",
      departure: "12:00",
    },
    {
      day: "thu",
      date: "10/06/2027",
      port: "Port Canaveral (Orlando), Florida",
      arrival: "07:00",
      departure: "—",
    },
  ],

  registries: [
    {
      name: "Zola",
      url: "https://www.zola.com/REPLACE_WITH_YOUR_REGISTRY",
    },
    {
      name: "Amazon",
      url: "https://www.amazon.com/wedding/REPLACE_WITH_YOUR_REGISTRY",
    },
    {
      name: "Honeymoon Fund",
      url: "https://www.zola.com/REPLACE_WITH_YOUR_FUND",
    },
  ],

  hotels: [
    {
      name: "Hotel Near Port Canaveral",
      url: "#",
    },
    {
      name: "Orlando Airport Hotel",
      url: "#",
    },
  ],

  nav: [
    { href: "/", key: "home" },
    { href: "/our-story", key: "ourStory" },
    { href: "/gallery", key: "gallery" },
    { href: "/ship", key: "ship" },
    { href: "/travel", key: "travel" },
    { href: "/registry", key: "registry" },
    { href: "/faq", key: "faq" },
  ] as const,
} as const;
