import { NextResponse } from "next/server";

// Uses Upstash Redis REST API directly (no SDK needed)
const UPSTASH_URL = process.env.UPSTASH_REDIS_REST_URL;
const UPSTASH_TOKEN = process.env.UPSTASH_REDIS_REST_TOKEN;

async function redisCommand(command: string[]) {
  if (!UPSTASH_URL || !UPSTASH_TOKEN) {
    return null;
  }
  const res = await fetch(`${UPSTASH_URL}/${command.join("/")}`, {
    headers: { Authorization: `Bearer ${UPSTASH_TOKEN}` },
    cache: "no-store",
  });
  return res.json();
}

export async function GET() {
  try {
    const result = await redisCommand(["INCR", "visitors"]);
    const count = result?.result ?? 0;
    return NextResponse.json({ count });
  } catch {
    return NextResponse.json({ count: 0 });
  }
}
