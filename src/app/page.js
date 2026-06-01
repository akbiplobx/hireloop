import React from "react";
import Hero from "@/components/Hero";
import StatsSection from "@/components/StatsSection";
import CTASection from "@/components/CTASection";
import PricingPage from "./pricing/page";
import FeaturesSection from "@/components/FeaturesSection";
import JobDiscovery from "@/components/JobDiscovery";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-black text-white overflow-x-hidden flex flex-col">
      {/* ১. হিরো সেকশন */}
      <Hero />

      {/* ২. স্ট্যাটস সেকশন (গ্লোব ব্যাকগ্রাউন্ড সহ) */}
      <StatsSection />
      <JobDiscovery></JobDiscovery>
      <FeaturesSection></FeaturesSection>
      <PricingPage></PricingPage>
      <CTASection></CTASection>
    </main>
  );
}