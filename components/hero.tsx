import { Button } from "@/components/ui/button"

// The hero section shown at the top of the page.
export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-accent/60 to-background">
      <div className="mx-auto max-w-6xl px-4 py-16 text-center sm:px-6 sm:py-24">
        <span className="inline-block rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
          Your campus, all in one place
        </span>
        <h1 className="mx-auto mt-6 max-w-3xl text-balance text-4xl font-bold tracking-tight sm:text-5xl">
          Discover Events at Your College
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-pretty text-base text-muted-foreground sm:text-lg">
          Hackathons, workshops, cultural fests, and more. Find what&apos;s happening on campus and never miss out again.
        </p>
        <div className="mt-8">
          <Button
  size="lg"
  className="transition-transform hover:-translate-y-0.5"
  nativeButton={false}
  render={<a href="#events">Explore Events</a>}
/>
        </div>
      </div>
    </section>
  )
}
