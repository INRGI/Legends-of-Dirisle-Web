import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

const ADMIN_LOGIN = process.env.ADMIN_LOGIN!;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD!;
const JWT_SECRET = process.env.JWT_SECRET!;
const TOKEN_EXPIRES_IN = "1d";

export async function POST(request: Request) {
  const { login, password } = await request.json();

  if (login !== ADMIN_LOGIN || password !== ADMIN_PASSWORD) {
    return NextResponse.json({ message: "Invalid login or password" }, { status: 401 });
  }

  const token = jwt.sign({ role: "admin" }, JWT_SECRET, {
    expiresIn: TOKEN_EXPIRES_IN,
  });

  const response = NextResponse.json({ message: "Logged in" });

  response.cookies.set({
    name: "token",
    value: token,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24,
    sameSite: "strict",
  });

  return response;
}