import React from "react";

export default function JobsPage() {
  // ডেমো জব ডেটা লিস্ট
  const jobs = [
    {
      id: 1,
      title: "Senior AI Engineer",
      company: "Hireloop AI",
      location: "San Francisco, CA",
      type: "Full-time",
      place: "Remote",
      salary: "$120K - $150K",
      tags: ["Python", "PyTorch", "LLM"],
      posted: "2 days ago",
    },
    {
      id: 2,
      title: "Product Designer",
      company: "DesignCo",
      location: "New York, NY",
      type: "Full-time",
      place: "Hybrid",
      salary: "$90K - $110K",
      tags: ["Figma", "UI/UX", "Prototyping"],
      posted: "1 day ago",
    },
    {
      id: 3,
      title: "Frontend Developer (Next.js)",
      company: "TechLoop",
      location: "Remote, Global",
      type: "Contract",
      place: "Remote",
      salary: "$80K - $100K",
      tags: ["React", "Next.js", "Tailwind"],
      posted: "3 days ago",
    },
    {
      id: 4,
      title: "DevOps Specialist",
      company: "CloudSphere",
      location: "Austin, TX",
      type: "Full-time",
      place: "On-site",
      salary: "$130K - $160K",
      tags: ["AWS", "Docker", "Kubernetes"],
      posted: "Just now",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-black text-white font-sans py-16 px-4 relative overflow-hidden">
      
      {/* ব্যাকগ্রাউন্ড গ্লো ইফেক্ট */}
      <div className="absolute top-[-50px] left-1/3 w-[500px] h-[300px] bg-indigo-600/10 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* পেজ হেডার এবং সার্চ বার */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div>
            <h1 className="text-3xl font-bold tracking-tight mb-2">Available Jobs</h1>
            <p className="text-sm text-zinc-400">
              Explore thousands of curated tech job opportunities.
            </p>
          </div>

          {/* ইনস্ট্যান্ট স্লিম সার্চ ইনপুট */}
          <div className="w-full md:w-80 p-1.5 rounded-xl bg-zinc-900/60 border border-zinc-800/80 backdrop-blur-md flex items-center gap-2">
            <svg className="w-4 h-4 text-zinc-500 shrink-0 ml-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input 
              type="text" 
              placeholder="Search title, skills or keyword..." 
              className="bg-transparent w-full text-xs text-white placeholder-zinc-500 focus:outline-none"
            />
          </div>
        </div>

        {/* জব লিস্ট ডিরেক্টরি (ভার্টিক্যাল স্ট্যাক লেআউট) */}
        <div className="space-y-4">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 backdrop-blur-md hover:border-zinc-700/80 transition-all duration-300 group flex flex-col sm:flex-row sm:items-center justify-between gap-6"
            >
              <div className="flex flex-col gap-3">
                {/* কোম্পানির নাম ও মেটা ইনফো */}
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-semibold text-indigo-400">{job.company}</span>
                  <span className="w-1 h-1 rounded-full bg-zinc-700"></span>
                  <span className="text-xs text-zinc-500">{job.location}</span>
                </div>

                {/* জবের মূল টাইটেল */}
                <h3 className="text-lg font-bold text-white group-hover:text-indigo-400 transition-colors">
                  {job.title}
                </h3>

                {/* জবের ধরন ও ব্যাজসমূহ */}
                <div className="flex flex-wrap items-center gap-2 text-[11px]">
                  <span className="px-2.5 py-0.5 rounded-full bg-zinc-800/80 text-zinc-300 border border-zinc-700/50">
                    {job.type}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-indigo-950/40 text-indigo-300 border border-indigo-900/50">
                    {job.place}
                  </span>
                  <span className="text-zinc-400 font-medium ml-1">{job.salary}</span>
                </div>

                {/* স্কিল ট্যাগস */}
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {job.tags.map((tag, idx) => (
                    <span key={idx} className="px-2 py-0.5 text-[10px] bg-zinc-950 text-zinc-500 rounded border border-zinc-800/60">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* অ্যাকশন বাটন এবং পোস্টের সময় */}
              <div className="flex sm:flex-col items-end justify-between sm:justify-center gap-2 pt-4 sm:pt-0 border-t border-zinc-800/40 sm:border-t-0 shrink-0">
                <span className="text-[11px] text-zinc-500 order-last sm:order-first">
                  {job.posted}
                </span>
                <button
                  type="button"
                  className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold transition-colors"
                >
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}