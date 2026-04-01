import type { Metadata } from "next";
import BlogGrid from "@/components/blog/BlogGrid";

export const metadata: Metadata = {
  title: "Blog — Insights & Ideas",
  description:
    "Thinking on software, product strategy, HealthTech, FinTech, AI, and what it takes to build exceptional digital products — from the team at SACHHSOFT.",
  alternates: { canonical: "https://sachhsoft.com/blog" },
  openGraph: {
    title: "Blog — Software Insights from SACHHSOFT",
    description: "Thinking on software, product strategy, HealthTech, FinTech, AI, and what it takes to build exceptional digital products.",
    url: "https://sachhsoft.com/blog",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog — SACHHSOFT",
    description: "Software, product strategy, HealthTech, FinTech, and AI insights.",
    images: ["/og-image.jpg"],
  },
};

export default function BlogPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-ink pt-[152px] pb-[80px] px-16 max-lg:px-8 max-md:px-6 max-md:pt-[120px] max-md:pb-14">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-[11px] tracking-[0.2em] uppercase text-gold mb-6 flex items-center gap-3">
            <span className="block w-6 h-px bg-gold/40" />
            Insights &amp; Ideas
            <span className="block w-6 h-px bg-gold/40" />
          </div>
          <h1
            className="font-serif font-light text-white leading-none tracking-[-0.025em] max-w-[720px]"
            style={{ fontSize: "clamp(36px, 5.5vw, 72px)" }}
          >
            We share what we&apos;re<br />
            <em className="italic text-gold-lt">thinking about.</em>
          </h1>
          <p className="text-[16px] font-light text-white/50 leading-[1.7] mt-6 max-w-[520px]">
            Strategy, engineering, product design — perspectives from the team
            building software for the world&apos;s most ambitious companies.
          </p>
        </div>
      </section>

      {/* Divider line */}
      <div className="h-px bg-rule" />

      {/* Blog Grid */}
      <section className="bg-off py-[80px] px-16 max-lg:px-8 max-md:px-6 max-md:py-14">
        <div className="max-w-[1280px] mx-auto">
          <BlogGrid />
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-ink py-[80px] px-16 max-lg:px-8 max-md:px-6 border-t border-white/10">
        <div className="max-w-[1280px] mx-auto flex items-center justify-between gap-10 max-md:flex-col max-md:items-start">
          <div>
            <h2
              className="font-serif font-light text-white leading-none tracking-[-0.02em]"
              style={{ fontSize: "clamp(28px, 3.5vw, 48px)" }}
            >
              Ready to build something{" "}
              <em className="italic text-gold-lt">exceptional?</em>
            </h2>
            <p className="text-[14px] font-light text-white/40 mt-3 max-w-[440px] leading-[1.7]">
              Tell us about your project. We respond within one business day.
            </p>
          </div>
          <a
            href="/start-a-project"
            className="text-[12px] font-medium tracking-[0.14em] uppercase text-ink bg-gold px-12 py-[18px] no-underline whitespace-nowrap hover:bg-gold-lt hover:tracking-[0.18em] transition-all duration-200 flex-shrink-0"
          >
            Start a Project
          </a>
        </div>
      </section>
    </main>
  );
}
