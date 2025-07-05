import { NextResponse } from "next/server";
import { verifyPassword } from "@/lib/auth";

export async function POST(req: Request) {
  const { password } = await req.json();
  if (verifyPassword(password)) {
    return NextResponse.json({ success: true });
  } else {
    return NextResponse.json({ success: false }, { status: 401 });
  }
}
