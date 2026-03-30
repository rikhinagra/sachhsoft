import Link from "next/link";
import RevealWrapper from "@/components/ui/RevealWrapper";

export default function CTASection() {
  return (
    <section id="contact" className="bg-ink py-[120px] px-16 max-lg:px-8 max-md:px-6 max-md:py-16">
      <RevealWrapper className="max-w-[1280px] mx-auto grid grid-cols-[1fr_auto] gap-20 items-center max-lg:grid-cols-1 max-lg:gap-12">
        {/* Left */}
        <div>
          <h2
            className="font-serif font-light leading-none tracking-[-0.025em] text-white"
            style={{ fontSize: "clamp(36px, 5.5vw, 78px)" }}
          >
            Ready to Build<br />
            Something <em className="italic text-gold-lt">Exceptional?</em>
          </h2>
          <p className="text-[16px] font-light text-white/50 leading-[1.7] mt-5 max-w-[520px]">
            Tell us about your project. We review every submission personally
            and respond within one business day. No automated replies, no
            sales sequences.
          </p>
        </div>

        {/* Right — CTA */}
        <div className="flex flex-col gap-4 items-end max-lg:items-start">
          <Link
            href="/start-a-project"
            className="text-[12px] font-medium tracking-[0.14em] uppercase text-ink bg-gold px-12 py-[18px] no-underline whitespace-nowrap hover:bg-gold-lt hover:tracking-[0.18em] transition-all duration-200"
          >
            Start a Project
          </Link>
          <span className="text-[12px] font-light text-white/30 tracking-[0.06em]">
            Responds within 1 business day
          </span>
        </div>
      </RevealWrapper>
    </section>
  );
}
