import { Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { CampusEvent } from "@/lib/events"

// A single reusable event card. It receives one event via props.
export function EventCard({ event }: { event: CampusEvent }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden bg-muted">
        <img
          src={event.image || "/placeholder.svg"}
          alt={event.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full bg-background/90 px-3 py-1 text-xs font-medium text-foreground backdrop-blur">
          {event.category}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
          <Calendar className="h-4 w-4" />
          <span>{event.date}</span>
        </div>
        <h3 className="mt-2 text-lg font-semibold leading-tight">{event.title}</h3>
        <p className="mt-2 flex-1 text-sm text-muted-foreground">{event.description}</p>
        <Button variant="secondary" className="mt-4 w-full transition-colors">
          View Details
        </Button>
      </div>
    </article>
  )
}
