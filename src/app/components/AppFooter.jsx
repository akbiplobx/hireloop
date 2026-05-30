import React from "react";
import Link from "next/link";

export default function AppFooter() {
  // ক্যাটাগরি অনুযায়ী লিঙ্কসমূহ
  const footerLinks = {
    product: [
      { label: "Job discovery", href: "/jobs" },
      { label: "Worker AI", href: "/ai-match" },
      { label: "Companies", href: "/companies" },
      { label: "Salary data", href: "/salaries" },
    ],
    navigations: [
      { label: "Help center", href: "/help" },
      { label: "Career library", href: "/library" },
      { label: "Contact", href: "/contact" },
    ],
    resources: [
      { label: "Brand Guideline", href: "/brand" },
      { label: "Newsroom", href: "/news" },
    ],
  };

  return (
    <footer className="w-full bg-black text-gray-400 pt-16 pb-8 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* উপরের প্রধান সেকশন (Grid Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-zinc-900">
          
          {/* লোগো এবং ডেসক্রিপশন (২ কলাম জুড়ে থাকবে ডেস্কটপে) */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tight text-white">
              {/* Programming Hero স্টাইল কাস্টম SVG লোগো */}
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="32" height="32" rx="8" fill="url(#footerLogoGrad)" />
                <path d="M10 22V10L15 14L20 10V22" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                <defs>
                  <linearGradient id="footerLogoGrad" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#A855F7" />
                    <stop offset="1" stopColor="#6366F1" />
                  </linearGradient>
                </defs>
              </svg>
              <span>Hire<span className="text-indigo-400">loop</span></span>
            </Link>
            <p className="max-w-sm text-sm text-zinc-400 leading-relaxed">
              The AI-native career platform. Built for people who take their work seriously.
            </p>
          </div>

          {/* ডাইনামিক লিঙ্ক কলামসমূহ */}
          <div>
            <h3 className="text-sm font-semibold text-indigo-400 tracking-wider uppercase mb-4">Product</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="text-sm hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-indigo-400 tracking-wider uppercase mb-4">Navigations</h3>
            <ul className="space-y-3">
              {footerLinks.navigations.map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="text-sm hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-indigo-400 tracking-wider uppercase mb-4">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="text-sm hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* নিচের পার্ট: কপিরাইট, সোশ্যাল আইকন এবং পলিসি */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          
          {/* সোশ্যাল আইকনসমূহ */}
          <div className="flex items-center gap-3 order-2 sm:order-1">
            {/* Facebook */}
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-9 h-9 flex items-center justify-center rounded-lg bg-zinc-900 hover:bg-zinc-800 text-white transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/></svg>
            </a>
            {/* Pinterest Style / Alternative Custom Icon */}
            <a href="https://pinterest.com" target="_blank" rel="noreferrer" className="w-9 h-9 flex items-center justify-center rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.23 2.63 7.85 6.34 9.32-.09-.79-.17-2 .03-2.87.19-.79 1.22-5.17 1.22-5.17s-.31-.62-.31-1.54c0-1.44.83-2.52 1.88-2.52.88 0 1.31.67 1.31 1.46 0 .89-.57 2.22-.86 3.45-.24 1.03.52 1.87 1.54 1.87 1.85 0 3.27-1.95 3.27-4.76 0-2.49-1.79-4.23-4.34-4.23-2.95 0-4.69 2.22-4.69 4.51 0 .89.34 1.85.77 2.37.08.1.1.17.07.27-.08.33-.26 1.06-.3 1.22-.05.21-.17.26-.4.15-1.48-.69-2.41-2.85-2.41-4.59 0-3.74 2.72-7.17 7.83-7.17 4.11 0 7.31 2.93 7.31 6.85 0 4.09-2.58 7.38-6.16 7.38-1.2 0-2.33-.63-2.72-1.37l-.74 2.83c-.27 1.03-1 2.32-1.49 3.12C10.64 21.78 11.31 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2z"/></svg>
            </a>
            {/* LinkedIn */}
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-9 h-9 flex items-center justify-center rounded-lg bg-zinc-900 hover:bg-zinc-800 text-white transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
          </div>

          {/* কপিরাইট এবং পলিসি টেক্সট */}
          <div className="flex flex-col sm:flex-row items-center gap-4 text-xs text-zinc-500 order-1 sm:order-2 w-full sm:w-auto justify-between sm:justify-start">
            <span>Copyright 2026 — Hireloop</span>
            <div className="flex gap-4">
              <Link href="/terms" className="hover:text-zinc-300 transition-colors">Terms & Policy</Link>
              <Link href="/privacy" className="hover:text-zinc-300 transition-colors">Privacy Guideline</Link>
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
}

