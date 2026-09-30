"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { supabase } from "@/lib/supabase"

export default function LoginPage() {
  const router = useRouter()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState("")

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault()

    setLoading(true)
    setMessage("")

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      setMessage(error.message)
      setLoading(false)
      return
    }

    setMessage("Login successful! 🎉")

    router.push("/")
    router.refresh()
  }

  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md rounded-xl border border-border p-6">
        <h1 className="text-2xl font-bold">
          Login to Campus Connect
        </h1>

        <p className="mt-2 text-sm text-muted-foreground">
          Login to register for campus events.
        </p>

        <form onSubmit={handleLogin} className="mt-6 space-y-4">
          <div>
            <label className="text-sm font-medium">
              Email
            </label>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2"
              placeholder="your@email.com"
            />
          </div>

         <div>
            <label className="text-sm font-medium">
             Password
          </label>

         <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2"
          placeholder="••••••••"
           />

  <button
    type="button"
    onClick={() => router.push("/forgot-password")}
    className="mt-2 text-sm text-primary hover:underline"
  >
    Forgot Password?
  </button>
</div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-primary px-4 py-2.5 font-medium text-primary-foreground disabled:opacity-50"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        {message && (
          <p className="mt-4 text-center text-sm text-muted-foreground">
            {message}
          </p>
        )}
      </div>
    </main>
  )
}