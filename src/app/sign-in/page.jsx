"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function SignIn() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [status, setStatus] = useState({ type: "", message: "" }); // type: "success" or "error"
  const [loading, setLoading] = useState(false);

  // ইনপুট চেঞ্জ হ্যান্ডলার
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Better Auth এর মাধ্যমে সাইন-ইন সাবমিট
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      // এখানে আপনার Better Auth ক্লায়েন্ট কল হবে
      // const { data, error } = await authClient.signIn.email({
      //   email: formData.email,
      //   password: formData.password,
      // });

      // ডামি টেস্ট সাকসেস স্টেট:
      if (formData.email && formData.password) {
        setStatus({ type: "success", message: "Logged in successfully! Redirecting..." });
      } else {
        throw new Error("Please fill in all fields.");
      }
    } catch (err) {
      setStatus({ type: "error", message: err.message || "Invalid email or password." });
    } finally {
      setLoading(false);
    }
  };

  // গুগল সাইন-ইন হ্যান্ডলার
  const handleGoogleSignIn = async () => {
    try {
      // await authClient.signIn.social({ provider: "google" });
      console.log("Google Sign-In Triggered");
    } catch (err) {
      setStatus({ type: "error", message: "Google authentication failed." });
    }
  };

  return (
    <div className="w-full bg-black text-white min-h-[85vh] flex items-center justify-center relative overflow-hidden px-4 py-12">
      {/* ব্যাকগ্রাউন্ড ইউনিক গ্লো ইফেক্ট */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="w-full max-w-md p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800/80 backdrop-blur-md shadow-2xl relative z-10">
        
        {/* লোগো ও হেডিং */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-black tracking-tight">Welcome back</h2>
          <p className="text-zinc-500 text-xs mt-1">Log in to continue your career growth</p>
        </div>

        {/* সাকসেস বা এরর মেসেজ অ্যালার্ট */}
        {status.message && (
          <div className={`p-3 rounded-lg text-xs font-medium mb-5 border ${
            status.type === "success" 
              ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-400" 
              : "bg-rose-500/10 border-rose-500/20 text-rose-400"
          }`}>
            {status.type === "success" ? "✓ " : "✕ "} {status.message}
          </div>
        )}

        {/* সাইন-ইন ফর্ম */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-[11px] font-medium text-zinc-400 uppercase tracking-wider mb-1.5">Email Address</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full px-3 py-2.5 text-xs bg-zinc-950 border border-zinc-800 rounded-lg text-white placeholder-zinc-600 focus:outline-none focus:border-indigo-500 transition-colors"
              autoComplete="email"
            />
          </div>

          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label className="block text-[11px] font-medium text-zinc-400 uppercase tracking-wider">Password</label>
              <Link href="/forgot-password" className="text-[11px] text-indigo-400 hover:underline">
                Forgot password?
              </Link>
            </div>
            <input
              type="password"
              name="password"
              required
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              className="w-full px-3 py-2.5 text-xs bg-zinc-950 border border-zinc-800 rounded-lg text-white placeholder-zinc-600 focus:outline-none focus:border-indigo-500 transition-colors"
              autoComplete="current-password"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs transition-colors shadow-lg shadow-indigo-600/10 disabled:opacity-50 mt-2"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        {/* ডিভাইডার */}
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-zinc-800"></div></div>
          <div className="relative flex justify-center text-[10px] uppercase"><span className="bg-black px-2 text-zinc-500">Or continue with</span></div>
        </div>

        {/* গুগল বাটন */}
        <button
          onClick={handleGoogleSignIn}
          type="button"
          className="w-full py-2.5 rounded-lg bg-zinc-950 border border-zinc-800 hover:bg-zinc-900 text-white font-medium text-xs transition-colors flex items-center justify-center gap-2"
        >
          {/* গুগল আইকন SVG */}
          <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
            <path fill="#EA4335" d="M12.24 10.285V14.4h6.887c-.275 1.565-1.88 4.604-6.887 4.604-4.33 0-7.866-3.577-7.866-8s3.536-8 7.866-8c2.46 0 4.105 1.025 5.047 1.926l3.227-3.11C18.436 2.114 15.618 1 12.24 1 5.48 1 0 6.48 0 13.24s5.48 12.24 12.24 12.24c7.055 0 11.75-4.962 11.75-11.944 0-.804-.087-1.417-.19-1.97H12.24z"/>
          </svg>
          <span>Continue with Google</span>
        </button>

        {/* ক্রিয়েট অ্যাকাউন্ট লিঙ্ক (Redirect Option) */}
        <p className="text-center text-xs text-zinc-500 mt-6">
          Don't have an account?{" "}
          <Link href="/get-started" className="text-indigo-400 hover:underline font-medium">
            Create account
          </Link>
        </p>

      </div>
    </div>
  );
}