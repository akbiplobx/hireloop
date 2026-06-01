import React from "react";

export default function CompaniesPage() {
  // ডেমো কোম্পানি ডেটা
  const companies = [
    { id: 1, name: "Google", location: "Mountain View, CA", openJobs: 142, logoBg: "bg-red-500/10 text-red-400" },
    { id: 2, name: "Microsoft", location: "Redmond, WA", openJobs: 98, logoBg: "bg-blue-500/10 text-blue-400" },
    { id: 3, name: "Meta", location: "Menlo Park, CA", openJobs: 65, logoBg: "bg-indigo-500/10 text-indigo-400" },
    { id: 4, name: "Amazon", location: "Seattle, WA", openJobs: 110, logoBg: "bg-orange-500/10 text-orange-400" },
    { id: 5, name: "Netflix", location: "Los Gatos, CA", openJobs: 24, logoBg: "bg-red-600/10 text-red-500" },
    { id: 6, name: "Apple", location: "Cupertino, CA", openJobs: 87, logoBg: "bg-zinc-500/10 text-zinc-300" },
  ];

  return (
    <div className="w-full min-h-screen bg-black text-white font-sans py-16 px-4">
      {/* গ্লোবাল ব্যাকগ্রাউন্ড আভা */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* পেজ হেডার */}
        <div className="mb-12">
          <h1 className="text-3xl font-bold tracking-tight mb-2">Top Companies</h1>
          <p className="text-sm text-zinc-400">
            Discover world-class companies and find your next dream workspace.
          </p>
        </div>

        {/* কোম্পানি লিস্ট গ্রিড (মোবাইলে ১টা, বড় স্ক্রিনে ৩টা কলাম) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {companies.map((company) => (
            <div
              key={company.id}
              className="p-6 rounded-xl bg-zinc-900/40 border border-zinc-800/80 backdrop-blur-md hover:border-zinc-700/80 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                {/* কোম্পানির লোগো প্লেসহোল্ডার */}
                <div className={`w-12 h-12 rounded-lg ${company.logoBg} flex items-center justify-center text-xl font-bold mb-4 group-hover:scale-105 transition-transform`}>
                  {company.name[0]}
                </div>

                {/* কোম্পানির নাম ও লোকেশন */}
                <h3 className="text-lg font-semibold text-white group-hover:text-indigo-400 transition-colors">
                  {company.name}
                </h3>
                <p className="text-xs text-zinc-500 mt-1 flex items-center gap-1">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                  {company.location}
                </p>
              </div>

              {/* ওপেন জবস কাউন্ট এবং বাটন */}
              <div className="mt-6 pt-4 border-t border-zinc-800/60 flex items-center justify-between">
                <span className="text-xs text-zinc-400">
                  <strong className="text-white font-semibold">{company.openJobs}</strong> Open Jobs
                </span>
                <button
                  type="button"
                  className="px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-indigo-600 text-white text-xs font-medium transition-colors"
                >
                  View Jobs
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}