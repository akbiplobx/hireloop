"use client";
import React, { useState } from "react";
import Link from "next/link"; // Next.js-এর নিজস্ব ক্লায়েন্ট রাউটিং লিন্ক

export default function AppNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  // Better Auth-এর সেশন স্টেট (মক ডাটা, আপনার ক্লায়েন্ট দিয়ে রিপ্লেস করবেন)
  const session = null; // টেস্ট করার জন্য এটি true করতে পারেন
  const userRole = "recruiter"; // admin, recruiter, job-seeker

  const menuItems = [
    { label: "Browse Jobs", href: "/jobs" },
    { label: "Company", href: "/companies" },
    { label: "Pricing", href: "/pricing" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-black/70 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* ১. বাম পাশের অংশ: মোবাইল মেনু বাটন এবং লোগো */}
          <div className="flex items-center gap-4">
            {/* মোবাইল হ্যামবার্গার বাটন */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              type="button"
              className="sm:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Gravity Icons স্টাইলের হ্যামবার্গার আইকন */}
              <svg className="h-6 width-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>

            {/* লোগো সেকশন */}
            <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tight text-gray-900 dark:text-white">
              {/* Programming Hero স্টাইল লোগো আইকন */}
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="32" height="32" rx="8" fill="url(#logoGradient)" />
                <path d="M10 22V10L15 14L20 10V22" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                <defs>
                  <linearGradient id="logoGradient" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#A855F7" />
                    <stop offset="1" stopColor="#6366F1" />
                  </linearGradient>
                </defs>
              </svg>
              <span>Hire<span className="text-indigo-600 dark:text-indigo-400">loop</span></span>
            </Link>
          </div>

          {/* ২. মাঝখানের অংশ: ডেস্কটপ মেনু লিঙ্কসমূহ */}
          <div className="hidden sm:flex sm:space-x-8">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* ৩. ডান পাশের অংশ: Auth বাটন অথবা প্রোফাইল ড্রপডাউন */}
          <div className="flex items-center">
            {!session ? (
              <div className="flex items-center gap-4">
                <Link href="/sign-in" className="hidden lg:block text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-500">
                  Sign In
                </Link>
                <Link
                  href="/get-started"
                  className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 shadow-sm transition-colors"
                >
                  Get Started
                </Link>
              </div>
            ) : (
              /* ইউজার লগইন থাকলে প্রোফাইল ড্রপডাউন */
              <div className="relative ml-3">
                <div>
                  <button
                    onClick={() => setIsProfileOpen(!isProfileOpen)}
                    type="button"
                    className="flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    id="user-menu-button"
                  >
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="h-8 width-8 rounded-full border border-gray-200 object-cover"
                      src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                      alt="User profile"
                    />
                  </button>
                </div>

                {/* কাস্টম HTML5 ড্রপডাউন মেনু */}
                {isProfileOpen && (
                  <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white dark:bg-zinc-900 border border-gray-200 dark:border-gray-800 focus:outline-none z-50">
                    <div className="px-4 py-2 border-b border-gray-100 dark:border-gray-800">
                      <p className="text-xs text-gray-500">Signed in as</p>
                      <p className="text-sm font-semibold text-gray-900 dark:text-white truncate">user@example.com</p>
                    </div>
                    
                    <Link
                      href={`/dashboard/${userRole}`}
                      className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-zinc-800"
                    >
                      {userRole.charAt(0).toUpperCase() + userRole.slice(1)} Dashboard
                    </Link>
                    
                    <Link
                      href="/settings"
                      className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-zinc-800"
                    >
                      My Settings
                    </Link>
                    
                    <button
                      type="button"
                      className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-zinc-800"
                    >
                      Log Out
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ৪. মোবাইল রেসপন্সিভ মেনু ড্রয়ার (টগল স্টেট অনুযায়ী অন/অফ হবে) */}
      {isMobileMenuOpen && (
        <div className="sm:hidden border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-black px-2 pt-2 pb-3 space-y-1">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:text-gray-900 hover:bg-gray-50 dark:hover:bg-zinc-900"
            >
              {item.label}
            </Link>
          ))}
          {!session && (
            <div className="pt-4 mt-4 border-t border-gray-200 dark:border-gray-800 px-3">
              <Link
                href="/sign-in"
                className="block w-full text-center px-4 py-2 text-base font-medium text-indigo-600 dark:text-indigo-400 hover:bg-gray-50"
              >
                Sign In
              </Link>
            </div>
          )}
        </div>
      )}
    </nav>
  );
}