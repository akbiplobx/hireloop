"use client";
import React, { useState } from "react";
import Link from "next/link"; 
import { useRouter } from "next/navigation"; 
import { Button } from "@heroui/react"; 
import { authClient } from "@/lib/auth-client"; // আপনার auth-client পাথ

export default function AppNavbar() {
  const router = useRouter(); 
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  
  const { data: session, isPending } = authClient.useSession(); 
  const user = session?.user; // Better Auth সেশন থেকে ইউজার ডাটা নেওয়া
  const userRole = "recruiter"; // admin, recruiter, job-seeker

  const menuItems = [
    { label: "Browse Jobs", href: "/jobs" },
    { label: "Company", href: "/companies" },
    { label: "Pricing", href: "/pricing" },
  ];

  // সাইন-আউট হ্যান্ডেল করার আসল ফাংশন
  const handleSignOut = async () => {
    try {
      await authClient.signOut({
        fetchOptions: {
          onSuccess: () => {
            setIsProfileOpen(false); // ড্রপডাউন বন্ধ করবে
            router.push("/sign-in"); // লগআউট হলে সাইন-ইন পেজে রিডাইরেক্ট করবে
            router.refresh(); // পেজ রিফ্রেশ করে স্টেট আপডেট করবে
          },
        },
      });
    } catch (error) {
      console.error("Sign out failed:", error);
    }
  };

  if (isPending) {
    return <div className="h-16 bg-white dark:bg-black w-full border-b border-gray-200 dark:border-gray-800" />; // লোডিং স্টেট
  }

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-black/70 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* ১. বাম পাশের অংশ: লোগো */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              type="button"
              className="sm:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>

            <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tight text-gray-900 dark:text-white">
              <span>Hire<span className="text-indigo-600 dark:text-indigo-400">loop</span></span>
            </Link>
          </div>

          {/* ২. মাঝখানের অংশ: ডেস্কটপ মেনু */}
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
              /* ইউজার লগইন থাকলে প্রোফাইল ও লগআউট সেকশন */
              <div className="flex items-center gap-4">
                {user && (
                  <div className="hidden sm:flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                    <span>Hi, {user.name || "User"}</span>
                    <Button onClick={handleSignOut} variant="ghost" size="sm" color="danger">
                      Sign Out
                    </Button>
                  </div>
                )}

                {/* প্রোফাইল ইমেজ বাটন */}
                <div className="relative ml-3">
                  <button
                    onClick={() => setIsProfileOpen(!isProfileOpen)}
                    type="button"
                    className="flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    <img
                      className="h-8 w-8 rounded-full border border-gray-200 object-cover"
                      src={user?.image || "https://i.pravatar.cc/150"}
                      alt="User profile"
                    />
                  </button>

                  {/* প্রোফাইল ড্রপডাউন মেনু */}
                  {isProfileOpen && (
                    <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white dark:bg-zinc-900 border border-gray-200 dark:border-gray-800 focus:outline-none z-50">
                      <div className="px-4 py-2 border-b border-gray-100 dark:border-gray-800">
                        <p className="text-xs text-gray-500">Signed in as</p>
                        <p className="text-sm font-semibold text-gray-900 dark:text-white truncate">{user?.email}</p>
                      </div>
                      
                      <Link
                        href={`/dashboard/${userRole}`}
                        className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-zinc-800"
                        onClick={() => setIsProfileOpen(false)}
                      >
                        Dashboard
                      </Link>
                      
                      <Link
                        href="/settings"
                        className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-zinc-800"
                        onClick={() => setIsProfileOpen(false)}
                      >
                        My Settings
                      </Link>
                      
                     
                      <button
                        onClick={handleSignOut}
                        type="button"
                        className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-zinc-800 font-medium"
                      >
                        Log Out
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}