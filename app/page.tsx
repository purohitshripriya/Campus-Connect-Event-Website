import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { EventsSection } from "@/components/events-section"
import { Footer } from "@/components/footer"

// The single page for CampusConnect. It stitches the components together.
export default function Page() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <EventsSection />
      </main>
      <Footer />
    </div>
  )
}
