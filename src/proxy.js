import { NextResponse } from "next/server";
import { auth } from "./lib/auth"; 
import { headers } from "next/headers";

export async function proxy(request) {

  // Better Auth এর মাধ্যমে ব্যবহারকারীর সেশন চেক করা
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  // যদি ব্যবহারকারী লগইন করা না থাকে, তবে তাকে '/signin' পেজে রিডাইরেক্ট করবে
  if (!session) {
    return NextResponse.redirect(new URL('/sign-in', request.url));
  }

  // ব্যবহারকারী লগইন করা থাকলে তাকে সামনের পেজে যেতে দেবে
  return NextResponse.next();
}

// Hireloop প্রজেক্টের Company এবং Pricing পেজ প্রটেক্ট করার কনফিগারেশন
export const config = {
  matcher: [
    '/companies/:path*', 
    '/pricing/:path*'  
  ]
};