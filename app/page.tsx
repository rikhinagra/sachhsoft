import type { Metadata } from "next";
import { faqSchema } from "@/lib/schema";
import HeroSection from "@/components/home/HeroSection";
import MarqueeSection from "@/components/home/MarqueeSection";
import AISection from "@/components/home/AISection";
import ServicesSection from "@/components/home/ServicesSection";
import ProcessSection from "@/components/home/ProcessSection";
import ReachSection from "@/components/home/ReachSection";
import TestimonialSection from "@/components/home/TestimonialSection";
import IndustriesSection from "@/components/home/IndustriesSection";
import ClientLogoTicker from "@/components/ui/ClientLogoTicker";
import CTASection from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "SACHHSOFT — Bespoke Software Development | Chicago & Global",
  description:
    "SACHHSOFT builds custom software products for enterprise teams, mid-size companies, and startup founders. HealthTech, FinTech, E-Commerce, AI integration — from Chicago, delivered globally. 15+ companies launched. 1M+ users maintained.",
  alternates: { canonical: "https://sachhsoft.com" },
};

const homeFaqs = [
  { question: "What does SACHHSOFT do?", answer: "SACHHSOFT is a bespoke software development company that builds custom digital products for enterprise teams, mid-size companies, and startup founders. We specialize in HealthTech, FinTech, E-Commerce, Legal Tech, and AI integration, delivering from Chicago globally." },
  { question: "How long does it take to build a custom software product?", answer: "Most MVPs take 8–16 weeks. Full enterprise platforms typically take 4–12 months depending on scope. Every engagement starts with a discovery phase to set a realistic, accurate timeline." },
  { question: "How much does custom software development cost?", answer: "Project budgets typically start at $25,000 for a focused MVP and scale to $500,000+ for enterprise platforms. We provide transparent pricing after a discovery call — no vague estimates." },
  { question: "Where is SACHHSOFT located?", answer: "SACHHSOFT is headquartered in Chicago, Illinois, and serves clients globally across North America, Europe, and beyond." },
  { question: "What technologies does SACHHSOFT use?", answer: "We use React, Next.js, Node.js, Python, AWS, Azure, PostgreSQL, Kubernetes, and AI/ML frameworks including OpenAI and custom LLM integrations — choosing the right stack for each client's specific needs." },
  { question: "Do you work with startups or only enterprises?", answer: "Both. We work with pre-seed startups building their first MVP, mid-size companies modernising legacy systems, and enterprise teams adding new product lines. Each engagement is tailored to your stage and budget." },
];

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
      <ClientLogoTicker />
      <CTASection />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(homeFaqs)) }}
      />
    </main>
  );
}
