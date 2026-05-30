import React from "react";

export default function Home() {
  return (
    <div className="w-full bg-black text-white font-sans min-h-[80vh] flex flex-col justify-center relative overflow-hidden py-12">
      
      {/* ব্যাকগ্রাউন্ড গ্লো ইফেক্ট */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none"></div>

      <main className="max-w-3xl mx-auto px-4 flex flex-col items-center text-center relative z-10">
        
        {/* ১. ছোট টপ ব্যাজ */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs text-zinc-300 mb-6">
          <span className="font-semibold text-zinc-200">50,000+</span> 
          <span className="text-zinc-500 uppercase tracking-wider text-[10px]">New Jobs This Month</span>
        </div>

        {/* ২. মেইন হেডিং (সাইজ কিছুটা ছোট করা হয়েছে) */}
        <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
          Find Your{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400">
            Dream Job
          </span>{" "}
          Today
        </h1>

        {/* ৩. সাব-হেডিং (ছোট ও সুনির্দিষ্ট) */}
        <p className="mt-4 text-sm sm:text-base text-zinc-400 max-w-xl leading-relaxed">
          HireLoop connects top talent with world-class companies. Browse curated opportunities and find your next role faster.
        </p>

        {/* ৪. স্লিম সার্চ বার (প্যাডিং ও সাইজ কমানো হয়েছে) */}
        <div className="w-full max-w-2xl mt-8 p-1.5 rounded-xl bg-zinc-900/80 border border-zinc-800/80 backdrop-blur-md flex flex-col sm:flex-row items-center gap-1">
          
          {/* ইনপুট ১ */}
          <div className="flex items-center gap-2 px-2 py-1.5 w-full border-b border-zinc-800 sm:border-b-0 sm:border-r sm:border-zinc-800">
            <svg className="w-4 h-4 text-zinc-500 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input 
              type="text" 
              placeholder="Job title or company" 
              className="bg-transparent w-full text-xs text-white placeholder-zinc-500 focus:outline-none"
            />
          </div>

          {/* ইনপুট ২ */}
          <div className="flex items-center gap-2 px-2 py-1.5 w-full">
            <svg className="w-4 h-4 text-zinc-500 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            </svg>
            <input 
              type="text" 
              placeholder="Location" 
              className="bg-transparent w-full text-xs text-white placeholder-zinc-500 focus:outline-none"
            />
          </div>

          {/* ছোট সার্চ বাটন */}
          <button 
            type="button" 
            className="w-full sm:w-auto px-5 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-xs transition-colors shrink-0"
          >
            Search
          </button>
        </div>

        {/* ৫. ট্রেন্ডিং পজিশন (ছোট ফন্ট) */}
        <div className="mt-5 flex flex-wrap items-center justify-center gap-2 text-xs">
          <span className="text-zinc-500">Trending:</span>
          <button type="button" className="px-2.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[11px] text-zinc-400 hover:text-white transition-colors">
            Product Designer
          </button>
          <button type="button" className="px-2.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[11px] text-zinc-400 hover:text-white transition-colors">
            AI Engineer
          </button>
        </div>

      </main>
    </div>
  );
}