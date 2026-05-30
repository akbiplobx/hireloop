"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function AuthPage() {
  // ইউজার বর্তমানে সাইন-আপ পেজে আছে নাকি লগইন পেজে তা ট্র্যাক করার জন্য স্টেট
  const [isSignUp, setIsSignUp] = useState(true); 
  
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ফর্ম সাবমিট (Better Auth)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      if (isSignUp) {
        // Better Auth Sign Up Call
        // const { data, error } = await authClient.signUp.email({
        //   email: formData.email,
        //   password: formData.password,
        //   name: formData.name,
        // });
        setStatus({ type: "success", message: "Account created successfully! Welcome to Hireloop." });
      } else {
        // Better Auth Sign In Call
        // const { data, error } = await authClient.signIn.email({
        //   email: formData.email,
        //   password: formData.password,
        // });
        setStatus({ type: "success", message: "Logged in successfully! Redirecting..." });
      }
    } catch (err) {
      setStatus({ type: "error", message: err.message || "Something went wrong." });
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      // await authClient.signIn.social({ provider: "google" });
      console.log("Google Auth Triggered");
    } catch (err) {
      setStatus({ type: "error", message: "Google authentication failed." });
    }
  };

  return (
    <div className="w-full bg-black text-white min-h-[85vh] flex items-center justify-center relative overflow-hidden px-4 py-12">
      {/* ব্যাকগ্রাউন্ড ইউনিক গ্লো ইফেক্ট */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="w-full max-w-md p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800/80 backdrop-blur-md shadow-2xl relative z-10">
        
        {/* ডাইনামিক হেডিং */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-black tracking-tight">
            {isSignUp ? "Create your account" : "Welcome back"}
          </h2>
          <p className="text-zinc-500 text-xs mt-1">
            {isSignUp ? "Start your journey with Hireloop" : "Log in to continue your career growth"}
          </p>
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

        {/* ফর্ম */}
        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* ইউজার যদি সাইন-আপ মোডে থাকে, শুধু তখনই 'Name' ইনপুট ফিল্ডটি দেখাবে */}
          {isSignUp && (
            <div>
              <label className="block text-[11px] font-medium text-zinc-400 uppercase tracking-wider mb-1.5">Full Name</label>
              <input
                type="text"
                name="name"
                required={isSignUp}
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full px-3 py-2.5 text-xs bg-zinc-950 border border-zinc-800 rounded-lg text-white placeholder-zinc-600 focus:outline-none focus:border-indigo-500 transition-colors"
              />
            </div>
          )}

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
            />
          </div>

          <div>
            <label className="block text-[11px] font-medium text-zinc-400 uppercase tracking-wider mb-1.5">Password</label>
            <input
              type="password"
              name="password"
              required
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              className="w-full px-3 py-2.5 text-xs bg-zinc-950 border border-zinc-800 rounded-lg text-white placeholder-zinc-600 focus:outline-none focus:border-indigo-500 transition-colors"
            />
          </div>

          {/* প্রধান সাবমিট বাটন (ডাইনামিক টেক্সট) */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs transition-colors shadow-lg shadow-indigo-600/10 disabled:opacity-50 mt-2"
          >
            {loading ? "Processing..." : isSignUp ? "Create Account" : "Sign In"}
          </button>
        </form>

        {/* ডিভাইডার */}
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-zinc-800"></div></div>
          <div className="relative flex justify-center text-[10px] uppercase"><span className="bg-transparent px-2 text-zinc-500">Or continue with</span></div>
        </div>

        {/* গুগল বাটন */}
        <button
          onClick={handleGoogleSignIn}
          type="button"
          className="w-full py-2.5 rounded-lg bg-zinc-950 border border-zinc-800 hover:bg-zinc-900 text-white font-medium text-xs transition-colors flex items-center justify-center gap-2"
        >
          <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
            <path fill="#EA4335" d="M12.24 10.285V14.4h6.887c-.275 1.565-1.88 4.604-6.887 4.604-4.33 0-7.866-3.577-7.866-8s3.536-8 7.866-8c2.46 0 4.105 1.025 5.047 1.926l3.227-3.11C18.436 2.114 15.618 1 12.24 1 5.48 1 0 6.48 0 13.24s5.48 12.24 12.24 12.24c7.055 0 11.75-4.962 11.75-11.944 0-.804-.087-1.417-.19-1.97H12.24z"/>
          </svg>
          <span>Continue with Google</span>
        </button>

        {/* নিচে এখানে ডাইনামিক বাটন ও লিঙ্কটি এড করা হয়েছে */}
        <p className="text-center text-xs text-zinc-500 mt-6">
          {isSignUp ? "Already have an account? " : "Don't have an account? "}
          <button
            type="button"
            onClick={() => {
              setIsSignUp(!isSignUp);
              setStatus({ type: "", message: "" }); // মোড চেঞ্জ হলে মেসেজ ক্লিয়ার হবে
            }}
            className="text-indigo-400 hover:underline font-medium bg-transparent border-none cursor-pointer focus:outline-none"
          >
            {isSignUp ? "Log in" : "Sign up"}
          </button>
        </p>

      </div>
    </div>
  );
}