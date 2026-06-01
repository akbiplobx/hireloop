import React from "react";

export default function StatsSection() {
  const stats = [
    {
      id: 1,
      value: "50K",
      label: "Active Jobs",
      icon: (
        <svg className="w-5 h-5 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      id: 2,
      value: "12K",
      label: "Companies",
      icon: (
        <svg className="w-5 h-5 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      id: 3,
      value: "2M",
      label: "Job Seekers",
      icon: (
        <svg className="w-5 h-5 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7a3 3 0 110 6 3 3 0 010-6z" />
        </svg>
      ),
    },
    {
      id: 4,
      value: "97%",
      label: "Satisfaction Rate",
      icon: (
        <svg className="w-5 h-5 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="w-full bg-black text-white pt-24 pb-40 px-4 relative overflow-hidden min-h-[750px] flex items-center justify-center">
      
      {/* গ্লোব ব্যাকগ্রাউন্ড - যা টেক্সট ও কার্ডের নিচে অ্যাবসলিউটলি প্লেসড থাকবে */}
      <div 
        className="absolute inset-0 z-0 bg-no-repeat pointer-events-none"
        style={{
          backgroundImage: `url('/globe.png')`,
          backgroundSize: '1150px',
          backgroundPosition: 'center -110px', // ইমেজটিকে ঠিক হেডিংয়ের পেছনে সেট করার জন্য পজিশন
        }}
      />

      {/* অতিরিক্ত ডার্ক ওভারলে (ইমেজের টপ ও বটম এজ স্মুথ করার জন্য) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black/90 pointer-events-none z-0"></div>

      <div className="max-w-6xl w-full mx-auto relative z-10 text-center">
        {/* প্রধান হেডিং */}
        <h2 className="text-2xl sm:text-4xl font-normal text-zinc-300 tracking-tight max-w-2xl mx-auto leading-tight mb-24 relative z-20">
          Assisting over <span className="font-semibold text-white">15,000 job seekers</span> <br />
          find their dream positions.
        </h2>

        {/* ৪টি কার্ডের গ্রিড লেআউট - যা গ্লোবের গায়ে ভেসে থাকবে */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 text-left relative z-20 mt-12">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="p-6 sm:p-7 rounded-2xl bg-zinc-950/80 border border-zinc-900 backdrop-blur-md hover:border-zinc-800 transition-all duration-300 group flex flex-col justify-between min-h-[160px] sm:min-h-[175px]"
            >
              <div className="mb-4 text-zinc-500 group-hover:text-white transition-colors duration-300">
                {stat.icon}
              </div>

              <div>
                <div className="text-3xl sm:text-4.5xl font-bold tracking-tight text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-[11px] sm:text-xs text-zinc-500 font-medium tracking-wide">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}