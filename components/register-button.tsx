"use client"

import { useState } from "react"

export function RegisterButton({ eventId }: { eventId: string }) {
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState("")

  async function handleRegister() {
    setLoading(true)
    setMessage("")
try {
  const response = await fetch("/api/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      event_id: eventId,
      user_id: "c114209b-8fe5-4838-851c-42d2c64d882c",
    }),
  })

  const data = await response.json()

  if (!response.ok) {
    setMessage(data.error || "Registration failed")
    return
  }

  setMessage("🎉 Successfully registered!")
}
    catch (error) {
      setMessage("Something went wrong")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="mt-8">
      <button
        onClick={handleRegister}
        disabled={loading}
        className="w-full rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground disabled:opacity-50"
      >
        {loading ? "Registering..." : "Register for Event"}
      </button>

      {message && (
        <p className="mt-3 text-center text-sm text-muted-foreground">
          {message}
        </p>
      )}
    </div>
  )
}