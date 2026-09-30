import Link from "next/link"
import { Calendar } from "lucide-react"

export interface CampusEvent {
  id: string
  title: string
  description?: string
  location?: string
  start_time: string
  end_time?: string
  image_url?: string
  banner_url?: string
  category?: string
}

export function EventCard({ event }: { event: CampusEvent }) {
  const eventDate = new Date(event.start_time).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  })

  // Use banner_url first, fallback to image_url, then placeholder
  const imageSrc = event.banner_url || event.image_url || "/placeholder.svg"

  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden bg-muted">
        <img
          src={imageSrc}
          alt={event.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {event.category && (
          <span className="absolute left-3 top-3 rounded-full bg-background/90 px-3 py-1 text-xs font-medium text-foreground backdrop-blur">
            {event.category}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
          <Calendar className="h-4 w-4" />
          <span>{eventDate}</span>
        </div>

        <h3 className="mt-2 text-lg font-semibold leading-tight">
          {event.title}
        </h3>

        <p className="mt-2 flex-1 text-sm text-muted-foreground line-clamp-2">
          {event.description}
        </p>

        <Link
          href={`/events/${event.id}`}
          className="mt-4 flex w-full items-center justify-center rounded-md bg-secondary px-4 py-2 text-sm font-medium transition-colors hover:bg-secondary/80"
        >
          View Details
        </Link>
      </div>
    </article>
  )
}