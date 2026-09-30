import { NextResponse } from "next/server"
import { supabase } from "@/lib/supabase"

export async function POST(request: Request) {
  try {
    const { event_id, user_id } = await request.json()

    if (!event_id || !user_id) {
      return NextResponse.json(
        { error: "event_id and user_id are required" },
        { status: 400 }
      )
    }

    const { data, error } = await supabase
      .from("event_registrations")
      .insert({
        event_id,
        user_id,
      })
      .select()
      .single()

    if (error) {
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      )
    }

    return NextResponse.json(data, { status: 201 })
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    )
  }
}