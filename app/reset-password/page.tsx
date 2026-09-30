"use client"

import { useState } from "react"
import { supabase } from "@/lib/supabase"
import { useRouter } from "next/navigation"

export default function ResetPasswordPage() {
  const router = useRouter()

  const [password, setPassword] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleResetPassword(e: React.FormEvent) {
    e.preventDefault()

    setLoading(true)
    setMessage("")

    const { error } = await supabase.auth.updateUser({
      password,
    })

    if (error) {
      setMessage(error.message)
      setLoading(false)
      return
    }

    setMessage("Password updated successfully! 🎉")

    setTimeout(() => {
      router.push("/login")
    }, 1500)
  }

  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md rounded-xl border border-border p-6">
        <h1 className="text-2xl font-bold">
          Set New Password
        </h1>

        <p className="mt-2 text-sm text-muted-foreground">
          Enter a new password for your Campus Connect account.
        </p>

        <form
          onSubmit={handleResetPassword}
          className="mt-6 space-y-4"
        >
          <div>
            <label className="text-sm font-medium">
              New Password
            </label>

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={6}
              className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2"
              placeholder="Enter new password"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-primary px-4 py-2.5 font-medium text-primary-foreground disabled:opacity-50"
          >
            {loading ? "Updating..." : "Update Password"}
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