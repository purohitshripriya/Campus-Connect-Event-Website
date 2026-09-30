"use client"

import { useEffect, useState } from "react"
import { Search } from "lucide-react"
import { EventCard, type CampusEvent } from "@/components/event-card"

// Fallback categories list in case @/lib/events isn't exported as expected
const CATEGORIES = ["All", "Technical", "Cultural", "Sports", "Workshops"]

export function EventsSection() {
  const [query, setQuery] = useState("")
  const [category, setCategory] = useState("All")
  const [events, setEvents] = useState<CampusEvent[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchEvents() {
      try {
        const response = await fetch("/api/events")
        const data = await response.json()

        if (response.ok && Array.isArray(data)) {
          setEvents(data)
        } else {
          console.error("Failed to fetch events:", data.error)
        }
      } catch (error) {
        console.error("Error fetching events:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchEvents()
  }, [])

  const search = query.toLowerCase().trim()

  const filteredEvents = events.filter((event) => {
    const title = event.title?.toLowerCase() || ""
    const eventCat = event.category?.toLowerCase() || ""

    const matchesQuery =
      search === "" || title.includes(search) || eventCat.includes(search)

    const matchesCategory =
      category === "All" ||
      (event.category &&
        event.category.toLowerCase() === category.toLowerCase())

    return matchesQuery && matchesCategory
  })

  return (
    <section id="events" className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
          Upcoming Events
        </h2>

        <p className="mt-2 text-muted-foreground">
          Browse and search everything happening on campus.
        </p>
      </div>

      {/* Search + filter controls */}
      <div className="mb-10 flex flex-col gap-3 sm:flex-row">
        <div className="relative flex-1">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search events..."
            className="w-full rounded-lg border border-border bg-background py-2.5 pl-10 pr-4 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          aria-label="Filter by category"
          className="rounded-lg border border-border bg-background px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20 sm:w-48"
        >
          {CATEGORIES.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* Loading & Grid state */}
      {loading ? (
        <p className="py-16 text-center text-muted-foreground">
          Loading events...
        </p>
      ) : filteredEvents.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      ) : (
        <p className="py-16 text-center text-muted-foreground">
          No events found
        </p>
      )}
    </section>
  )
}