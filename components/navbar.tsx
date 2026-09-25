import { GraduationCap, User } from "lucide-react"

// The top navigation bar. It stays simple and works on all screen sizes.
export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <GraduationCap className="h-5 w-5" />
          </span>
          <span className="text-lg font-bold tracking-tight">CampusConnect</span>
        </a>

        {/* Links + profile */}
        <div className="flex items-center gap-1 sm:gap-4">
          <a
            href="#"
            className="rounded-md px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            Home
          </a>
          <a
            href="#events"
            className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            Events
          </a>
          <button
            type="button"
            aria-label="Open profile"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            <User className="h-5 w-5" />
          </button>
        </div>
      </nav>
    </header>
  )
}
