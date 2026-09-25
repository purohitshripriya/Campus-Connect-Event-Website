// Sample/local data for the events shown on the page.
// This is just static data for now — no backend or API is connected yet.

export type EventCategory = "Hackathon" | "Workshop" | "MUN" | "Cultural"

export type CampusEvent = {
  id: number
  title: string
  date: string
  category: EventCategory
  description: string
  image: string
}

// The categories used by the filter dropdown. "All" shows everything.
export const categories = ["All", "Hackathon", "Workshop", "MUN", "Cultural"] as const

export const events: CampusEvent[] = [
  {
    id: 1,
    title: "CodeStorm Hackathon 2026",
    date: "Oct 12, 2026",
    category: "Hackathon",
    description: "A 24-hour build sprint where teams turn bold ideas into working prototypes. Mentors, snacks, and prizes included.",
    image: "/events/hackathon.png",
  },
  {
    id: 2,
    title: "AWS Cloud Workshop",
    date: "Oct 18, 2026",
    category: "Workshop",
    description: "Hands-on session covering cloud fundamentals, deploying your first app, and working with core AWS services.",
    image: "/events/aws-workshop.png",
  },
  {
    id: 3,
    title: "Model United Nations",
    date: "Oct 25, 2026",
    category: "MUN",
    description: "Step into the shoes of a delegate, debate global issues, and sharpen your diplomacy and public speaking skills.",
    image: "/events/mun.png",
  },
  {
    id: 4,
    title: "Rhythm Cultural Fest",
    date: "Nov 2, 2026",
    category: "Cultural",
    description: "Our biggest celebration of music, dance, and art. Watch performances, join workshops, and enjoy food stalls.",
    image: "/events/cultural-fest.png",
  },
  {
    id: 5,
    title: "Tech Talk: Future of AI",
    date: "Nov 9, 2026",
    category: "Workshop",
    description: "Industry speakers share how artificial intelligence is shaping careers, products, and everyday life.",
    image: "/events/tech-talk.png",
  },
  {
    id: 6,
    title: "Frame It Photography Contest",
    date: "Nov 15, 2026",
    category: "Cultural",
    description: "Capture the campus through your lens. Submit your best shots for a chance to be featured in the gallery.",
    image: "/events/photography.png",
  },
]
