import React from "react";

export default function PricingPage() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      description: "Perfect for job seekers starting their journey.",
      features: [
        "Apply to 15 jobs / month",
        "Basic profile builder",
        "Public resume link",
        "Community support",
      ],
      buttonText: "Get Started",
      isPopular: false,
    },
    {
      name: "Pro",
      price: "$19",
      description: "Ideal for active professionals seeking faster results.",
      features: [
        "Unlimited job applications",
        "AI Resume Optimizer",
        "Priority candidate badge",
        "Direct recruiter messaging",
        "Advanced analytics",
      ],
      buttonText: "Upgrade to Pro",
      isPopular: true, // এটি মাঝখানের কার্ডটিকে হাইলাইট করবে
    },
    {
      name: "Enterprise",
      price: "$99",
      description: "Best for teams and companies looking to hire talent.",
      features: [
        "Post unlimited job openings",
        "Advanced talent search filters",
        "Dedicated account manager",
        "ATS Integration",
        "Custom branding",
      ],
      buttonText: "Contact Sales",
      isPopular: false,
    },
  ];

  return (
    <div className="w-full min-h-screen bg-black text-white font-sans py-16 px-4 relative overflow-hidden">
      
      {/* ব্যাকগ্রাউন্ড গ্লো ইফেক্ট */}
      <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-indigo-600/10 rounded-full blur-[130px] pointer-events-none"></div>
      <div className="absolute bottom-[-100px] right-10 w-[300px] h-[300px] bg-purple-600/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* পেজ হেডার */}
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight mb-4">
            Simple, Transparent{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400">
              Pricing
            </span>
          </h1>
          <p className="text-sm sm:text-base text-zinc-400 max-w-md mx-auto leading-relaxed">
            Choose the perfect plan for your career goals. No hidden fees. Cancel anytime.
          </p>
        </div>

        {/* প্রাইসিং কার্ডস গ্রিড */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`p-8 rounded-2xl bg-zinc-900/40 border backdrop-blur-md transition-all duration-300 flex flex-col justify-between relative ${
                plan.isPopular
                  ? "border-indigo-500 shadow-[0_0_30px_rgba(79,70,229,0.15)] md:scale-105 z-20"
                  : "border-zinc-800/80 hover:border-zinc-700/80 z-10"
              }`}
            >
              {/* পপুলার ব্যাজ */}
              {plan.isPopular && (
                <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-3 py-1 rounded-full bg-indigo-600 text-white text-[10px] font-bold uppercase tracking-wider">
                  Most Popular
                </span>
              )}

              <div>
                {/* প্ল্যান নেম ও প্রাইস */}
                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-xs text-zinc-500 mb-6 min-h-[32px]">{plan.description}</p>
                
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl sm:text-5xl font-black tracking-tight text-white">{plan.price}</span>
                  {plan.price !== "Contact Sales" && <span className="text-sm text-zinc-500">/month</span>}
                </div>

                {/* ফিচার লিস্ট */}
                <ul className="space-y-3.5 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-zinc-400">
                      <svg className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* অ্যাকশন বাটন */}
              <button
                type="button"
                className={`w-full py-2.5 rounded-xl text-xs font-semibold tracking-wide transition-all ${
                  plan.isPopular
                    ? "bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/20"
                    : "bg-zinc-800 hover:bg-zinc-700 text-zinc-200 hover:text-white"
                }`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}