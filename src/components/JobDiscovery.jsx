import React from "react";

export default function JobDiscovery() {
  const jobs = [
    {
      id: 1,
      title: "Frontend Developer",
      description: "Showcase your commitment to diversity and inclusion by highlighting initiatives",
      location: "New York, USA",
      type: "Hybrid",
      salary: "€25–€40/hour",
    },
    {
      id: 2,
      title: "Frontend Developer",
      description: "Showcase your commitment to diversity and inclusion by highlighting initiatives",
      location: "New York, USA",
      type: "Hybrid",
      salary: "€25–€40/hour",
    },
    {
      id: 3,
      title: "Frontend Developer",
      description: "Showcase your commitment to diversity and inclusion by highlighting initiatives",
      location: "New York, USA",
      type: "Hybrid",
      salary: "€25–€40/hour",
    },
    {
      id: 4,
      title: "Frontend Developer",
      description: "Showcase your commitment to diversity and inclusion by highlighting initiatives",
      location: "New York, USA",
      type: "Hybrid",
      salary: "€25–€40/hour",
    },
    {
      id: 5,
      title: "Frontend Developer",
      description: "Showcase your commitment to diversity and inclusion by highlighting initiatives",
      location: "New York, USA",
      type: "Hybrid",
      salary: "€25–€40/hour",
    },
    {
      id: 6,
      title: "Frontend Developer",
      description: "Showcase your commitment to diversity and inclusion by highlighting initiatives",
      location: "New York, USA",
      type: "Hybrid",
      salary: "€25–€40/hour",
    },
  ];

  return (
    <section className="w-full bg-black text-white py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
        {/* টপ ব্যাজ/ট্যাগ */}
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="w-1.5 h-1.5 bg-indigo-500 rounded-sm"></span>
          <span className="text-xs font-semibold tracking-[0.2em] text-zinc-400 uppercase">
            SMART JOB DISCOVERY
          </span>
          <span className="w-1.5 h-1.5 bg-indigo-500 rounded-sm"></span>
        </div>

        {/* মেইন হেডিং */}
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-center text-white mb-16 max-w-xl mx-auto leading-[1.15]">
          The roles you'd never find by searching
        </h2>

        {/* ৩ কলামের জব কার্ড গ্রিড লেআউট */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mb-16">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="p-8 rounded-3xl bg-zinc-950/40 border border-zinc-900/60 backdrop-blur-md flex flex-col justify-between min-h-[280px] hover:border-zinc-800 transition-all duration-300 group"
            >
              <div>
                {/* জব টাইটেল */}
                <h3 className="text-xl font-semibold text-zinc-100 mb-3 tracking-wide group-hover:text-white transition-colors duration-200">
                  {job.title}
                </h3>
                
                {/* ডেসক্রিপশন */}
                <p className="text-xs sm:text-sm text-zinc-500 font-light leading-relaxed mb-6">
                  {job.description}
                </p>

                {/* ব্যাজসমূহ (ট্যাগস) */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {/* লোকেশন ব্যাজ */}
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-900/80 border border-zinc-800 text-[11px] text-zinc-400 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-pink-400/80"></span>
                    {job.location}
                  </div>
                  
                  {/* টাইপ ব্যাজ */}
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-900/80 border border-zinc-800 text-[11px] text-zinc-400 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-pink-400/80"></span>
                    {job.type}
                  </div>

                  {/* স্যালারি ব্যাজ */}
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-900/80 border border-zinc-800 text-[11px] text-zinc-400 font-medium w-full sm:w-auto mt-1 sm:mt-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-pink-400/80"></span>
                    {job.salary}
                  </div>
                </div>
              </div>

              {/* এপ্লাই নাও বাটন লিংক */}
              <button
                type="button"
                className="flex items-center gap-1.5 text-xs font-semibold text-zinc-300 hover:text-white transition-colors duration-200 w-fit pt-2"
              >
                Apply Now 
                <svg className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          ))}
        </div>

        {/* বটম মেইন অ্যাকশন বাটন */}
        <button
          type="button"
          className="px-6 py-3 rounded-xl bg-white text-black hover:bg-zinc-200 text-xs sm:text-sm font-semibold transition-all duration-200 shadow-md whitespace-nowrap"
        >
          View all job open
        </button>

      </div>
    </section>
  );
}