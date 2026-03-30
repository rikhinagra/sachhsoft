import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import MarqueeSection from "@/components/home/MarqueeSection";
import AISection from "@/components/home/AISection";
import ServicesSection from "@/components/home/ServicesSection";
import ProcessSection from "@/components/home/ProcessSection";
import ReachSection from "@/components/home/ReachSection";
import TestimonialSection from "@/components/home/TestimonialSection";
import IndustriesSection from "@/components/home/IndustriesSection";
import CTASection from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "SACHHSOFT — Bespoke Software Development | Chicago & Global",
  description:
    "SACHHSOFT builds custom software products for enterprise teams, mid-size companies, and startup founders. HealthTech, FinTech, E-Commerce, AI integration — from Chicago, delivered globally. 50+ companies launched. 1M+ users maintained.",
  alternates: { canonical: "https://sachhsoft.com" },
};

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <MarqueeSection />
      <AISection />
      <ServicesSection />
      <ProcessSection />
      <ReachSection />
      <TestimonialSection />
      <IndustriesSection />
      <CTASection />
    </main>
  );
}
