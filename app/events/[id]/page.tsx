import { supabase } from "@/lib/supabase"
import Link from "next/link"
import { notFound } from "next/navigation"
import { RegisterButton } from "@/components/register-button"

interface PageProps {
  params: Promise<{ id: string }>
}

export default async function EventDetailPage({ params }: PageProps) {
  const { id } = await params

  const { data: event, error } = await supabase
    .from("events")
    .select("*")
    .eq("id", id)
    .single()

  if (error || !event) {
    notFound()
  }

  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <Link
        href="/"
        className="inline-block mb-6 text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        ← Back to Events
      </Link>

      <div className="space-y-6">
        <h1 className="text-3xl font-bold tracking-tight">
          {event.title}
        </h1>

        {event.banner_url && (
          <img
            src={event.banner_url}
            alt={event.title}
            className="w-full h-64 sm:h-96 object-cover rounded-xl border"
          />
        )}

        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground border-y py-4">
          <div>
            <strong>Start:</strong>{" "}
            {new Date(event.start_time).toLocaleString()}
          </div>

          {event.location && (
            <div>
              <strong>Location:</strong> {event.location}
            </div>
          )}
        </div>

        <div className="prose max-w-none">
          <h2 className="text-xl font-semibold mb-2">
            About this Event
          </h2>

          <p className="text-muted-foreground leading-relaxed">
            {event.description || "No description provided."}
          </p>
        </div>

        <RegisterButton eventId={event.id} />
      </div>
    </main>
  )
}
