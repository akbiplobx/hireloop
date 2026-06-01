import React from "react";

export default function CTASection() {
  return (
    <section className="w-full bg-black text-white py-32 px-4 relative overflow-hidden flex items-center justify-center min-h-[600px]">
      
      {/* ১. cta-bg.png ব্যাকগ্রাউন্ড ইমেজ */}
      <div 
        className="absolute inset-0 z-0 bg-no-repeat pointer-events-none mix-blend-screen"
        style={{
          backgroundImage: `url('/cta-bg.png')`,
          backgroundSize: '1200px',
          backgroundPosition: 'center top',
        }}
      />

      {/* ২. জাদুকরী মাস্ক ওভারলে - যা ওপরের কাটা দাগটিকে স্মুথলি ফেড (fade) করে দেবে */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/20 to-black pointer-events-none z-10" />

      {/* ৩. ব্যাকগ্রাউন্ড লাইটিং গ্লো ইফেক্ট (২য় ইমেজের মতো উজ্জ্বল আভার জন্য) */}
      <div className="absolute top-[20px] left-1/2 -translate-x-1/2 w-[650px] h-[220px] bg-indigo-500/30 rounded-full blur-[80px] pointer-events-none z-0"></div>

      {/* কন্টেন্ট সেকশন - z-20 করা হয়েছে যেন টেক্সট ও বাটনে ক্লিক করা যায় */}
      <div className="max-w-3xl mx-auto relative z-25 text-center flex flex-col items-center">
        
        {/* প্রধান হেডিং */}
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-6 max-w-2xl leading-[1.15]">
          Your next role is <br />
          already looking for you
        </h2>

        {/* সাব-টেক্সট */}
        <p className="text-sm sm:text-base text-zinc-400 font-light max-w-lg mb-10 tracking-wide leading-relaxed">
          Build a profile in three minutes. The matches start arriving tomorrow morning.
        </p>

        {/* অ্যাকশন বাটনসমূহ */}
        <div className="flex flex-row items-center justify-center gap-4 w-full">
          <button
            type="button"
            className="px-6 py-3 rounded-xl bg-white text-black hover:bg-zinc-200 text-xs sm:text-sm font-semibold transition-all duration-200 shadow-lg shadow-white/5 whitespace-nowrap"
          >
            Create a free account
          </button>

          <button
            type="button"
            className="px-6 py-3 rounded-xl bg-zinc-950/40 border border-zinc-800/80 backdrop-blur-md text-zinc-300 hover:text-white hover:border-zinc-700 transition-all duration-200 text-xs sm:text-sm font-medium whitespace-nowrap"
          >
            View pricing
          </button>
        </div>

      </div>
    </section>
  );
}