"use client"

import { useState } from "react"
import { supabase } from "@/lib/supabase"

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleForgotPassword(e: React.FormEvent) {
    e.preventDefault()

    setLoading(true)
    setMessage("")

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`,
    })

    if (error) {
      setMessage(error.message)
      setLoading(false)
      return
    }

    setMessage("Password reset email sent! Check your inbox. 📩")
    setLoading(false)
  }

  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md rounded-xl border border-border p-6">
        <h1 className="text-2xl font-bold">
          Reset Your Password
        </h1>

        <p className="mt-2 text-sm text-muted-foreground">
          Enter your email and we'll send you a password reset link.
        </p>

        <form
          onSubmit={handleForgotPassword}
          className="mt-6 space-y-4"
        >
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

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-primary px-4 py-2.5 font-medium text-primary-foreground disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Reset Link"}
          </button>
        </form>

        {message && (
          <p className="mt-4 text-center text-sm text-muted-foreground">
            {message}
          </p>
        )}

        <button
          type="button"
          onClick={() => window.location.href = "/login"}
          className="mt-4 w-full text-sm text-primary hover:underline"
        >
          Back to Login
        </button>
      </div>
    </main>
  )
}