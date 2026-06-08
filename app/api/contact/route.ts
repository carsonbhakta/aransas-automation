import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { createServerSupabaseClient } from "@/lib/supabase-server";

// -------------------------------------------------------------------
// Simple in-memory rate limiter. Resets on serverless cold starts,
// which is fine for Phase 1 — it prevents accidental hammering, not
// determined attackers. Swap for Upstash if stronger limits are needed.
// -------------------------------------------------------------------
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 3;
const RATE_WINDOW_MS = 10 * 60 * 1000; // 10 minutes

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (entry && now < entry.resetAt) {
    if (entry.count >= RATE_LIMIT) return false;
    entry.count++;
    return true;
  }

  rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
  return true;
}

// -------------------------------------------------------------------
// Validation schema (mirrors the client-side schema)
// -------------------------------------------------------------------
const schema = z.object({
  name: z.string().min(1).max(100),
  businessName: z.string().min(1).max(150),
  email: z.string().email(),
  phone: z.string().max(30).optional(),
  message: z.string().min(10).max(3000),
  website: z.string().max(0).optional(), // honeypot — must be empty
});

export async function POST(req: NextRequest) {
  // Rate limit by IP
  const forwardedFor = req.headers.get("x-forwarded-for");
  const ip = forwardedFor ? forwardedFor.split(",")[0].trim() : "unknown";

  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { error: "Too many submissions. Please wait a few minutes and try again." },
      { status: 429 }
    );
  }

  // Parse request body
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Validate
  const result = schema.safeParse(body);
  if (!result.success) {
    return NextResponse.json(
      { error: "Please check your submission and try again." },
      { status: 400 }
    );
  }

  const { name, businessName, email, phone, message, website } = result.data;

  // Honeypot check — silently succeed so bots don't know they were caught
  if (website) {
    return NextResponse.json({ success: true });
  }

  // Insert into Supabase
  const supabase = createServerSupabaseClient();
  const { error } = await supabase.from("contact_submissions").insert({
    name,
    business_name: businessName,
    email,
    phone: phone || null,
    message,
  });

  if (error) {
    console.error("[contact] Supabase insert error:", error.message);
    return NextResponse.json(
      { error: "Something went wrong on our end. Please try again." },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true });
}
