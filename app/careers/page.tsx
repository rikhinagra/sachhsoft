import type { Metadata } from "next";
import Link from "next/link";
import RevealWrapper from "@/components/ui/RevealWrapper";
import { StaggerContainer, StaggerItem } from "@/components/ui/StaggerContainer";
import { ArrowUpRight, Briefcase, Heart, Zap, Globe, Users, Code2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Careers — Join SACHHSOFT",
  description:
    "We're not hiring right now, but we're always interested in exceptional people. If you're a builder, designer, or engineer who cares deeply about craft — send us your CV.",
  alternates: { canonical: "https://sachhsoft.com/careers" },
};

const values = [
  {
    icon: Code2,
    title: "Craft over speed",
    desc: "We take pride in what we ship. Every line of code, every design decision, every architecture choice. It matters.",
  },
  {
    icon: Heart,
    title: "Ownership mentality",
    desc: "We treat every client's product like our own. No hand-holding required. You take responsibility and see things through.",
  },
  {
    icon: Zap,
    title: "Bias for action",
    desc: "We move fast without cutting corners. Ideas become prototypes, prototypes become products. Momentum is a habit here.",
  },
  {
    icon: Globe,
    title: "Global mindset",
    desc: "We work across time zones, industries, and cultures. Curiosity about the world makes us better builders.",
  },
  {
    icon: Users,
    title: "Collaboration first",
    desc: "The best work happens together. We communicate openly, share context freely, and lift each other up.",
  },
  {
    icon: Briefcase,
    title: "Outcomes over effort",
    desc: "We're not here to look busy. We're here to deliver real results for real clients. Impact is what we measure.",
  },
];

const perks = [
  "Remote-first culture with flexibility",
  "Work on products used by thousands",
  "Direct access to founders and leadership",
  "Fast career growth in a scaling team",
  "Competitive compensation",
  "Work across diverse industries and tech stacks",
  "A team that genuinely cares about craft",
  "Regular team meetups and collaborations",
];

export default function CareersPage() {
  return (
    <main>
      {/* ── Hero ── */}
      <section className="bg-ink pt-[152px] pb-[100px] px-16 max-lg:px-8 max-md:px-6 max-md:pt-[120px] max-md:pb-16">
        <div className="max-w-[1280px] mx-auto">
          <RevealWrapper>
            <div className="text-[11px] tracking-[0.2em] uppercase text-gold mb-6 flex items-center gap-3">
              <span className="block w-6 h-px bg-gold/40" />
              Careers
              <span className="block w-6 h-px bg-gold/40" />
            </div>
            <h1
              className="font-serif font-light text-white leading-none tracking-[-0.03em] max-w-[800px]"
              style={{ fontSize: "clamp(40px, 7vw, 96px)" }}
            >
              Build things that
              <br />
              <em className="italic text-gold-lt">actually matter.</em>
            </h1>
            <p className="text-[17px] font-light text-white/50 leading-[1.8] mt-8 max-w-[560px]">
              We are a team of builders, designers, and engineers who care
              deeply about craft. If that sounds like you, we want to hear from
              you, even when we are not actively hiring.
            </p>
          </RevealWrapper>
        </div>
      </section>

      {/* ── No Open Roles ── */}
      <section className="bg-white border-t border-rule py-[100px] px-16 max-lg:px-8 max-md:px-6 max-md:py-16">
        <div className="max-w-[1280px] mx-auto">
          <RevealWrapper>
            <div className="grid grid-cols-[3fr_2fr] gap-20 items-start max-lg:grid-cols-1 max-lg:gap-12">
              <div>
                <div className="text-[10px] font-medium tracking-[0.22em] uppercase text-muted mb-8">
                  Open Roles
                </div>
                <div className="border border-rule p-12 bg-off max-md:p-8">
                  <div className="w-10 h-px bg-gold mb-8" />
                  <h2
                    className="font-serif font-normal text-ink leading-[1.2] tracking-[-0.02em] mb-5"
                    style={{ fontSize: "clamp(24px, 3vw, 38px)" }}
                  >
                    No open roles right now.
                  </h2>
                  <p className="text-[15px] font-light text-body-text leading-[1.8] mb-8 max-w-[480px]">
                    We are growing steadily and new positions open regularly.
                    If you are exceptional at what you do, send us your CV
                    anyway. The right people always find a place here.
                  </p>
                  <div className="inline-flex flex-col items-center">
                    <a
                      href="mailto:hello@sachhsoft.com"
                      className="inline-flex items-center gap-3 text-[12px] font-medium tracking-[0.14em] uppercase text-ink bg-gold px-8 py-[16px] no-underline hover:bg-gold-lt hover:tracking-[0.18em] transition-all duration-200"
                    >
                      Send Your CV
                      <ArrowUpRight size={14} />
                    </a>
                    <p className="text-[12px] font-light text-muted mt-4 tracking-[0.04em]">
                      hello@sachhsoft.com
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-12 max-lg:pt-0">
                <div className="text-[10px] font-medium tracking-[0.22em] uppercase text-muted mb-8">
                  Who We Look For
                </div>
                <ul className="space-y-5">
                  {[
                    "Engineers who write clean, maintainable code",
                    "Designers who think in systems, not just screens",
                    "Product thinkers who understand business context",
                    "People who take ownership without being asked",
                    "Communicators who are direct and honest",
                    "Builders who are proud of what they ship",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="w-1 h-1 rounded-full bg-gold flex-shrink-0 mt-2" />
                      <span className="text-[14px] font-light text-body-text leading-[1.7]">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </RevealWrapper>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="bg-off border-t border-rule py-[100px] px-16 max-lg:px-8 max-md:px-6 max-md:py-16">
        <div className="max-w-[1280px] mx-auto">
          <RevealWrapper>
            <div className="text-[10px] font-medium tracking-[0.22em] uppercase text-muted mb-4">
              How We Work
            </div>
            <h2
              className="font-serif font-normal text-ink leading-[1.1] tracking-[-0.02em] mb-16 max-w-[480px]"
              style={{ fontSize: "clamp(28px, 3.5vw, 46px)" }}
            >
              Values we actually
              <br />
              <em className="italic text-gold">live by.</em>
            </h2>
          </RevealWrapper>

          <StaggerContainer className="grid grid-cols-3 gap-8 max-lg:grid-cols-2 max-sm:grid-cols-1">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <StaggerItem key={v.title}>
                  <div className="bg-white border border-rule p-8 h-full">
                    <span className="text-gold mb-5 block">
                      <Icon size={22} strokeWidth={1.5} />
                    </span>
                    <h3 className="font-serif text-[18px] font-normal text-ink mb-3">
                      {v.title}
                    </h3>
                    <p className="text-[13px] font-light text-body-text leading-[1.8]">
                      {v.desc}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* ── Perks ── */}
      <section className="bg-white border-t border-rule py-[100px] px-16 max-lg:px-8 max-md:px-6 max-md:py-16">
        <div className="max-w-[1280px] mx-auto">
          <RevealWrapper>
            <div className="grid grid-cols-[1fr_1fr] gap-20 items-start max-lg:grid-cols-1 max-lg:gap-12">
              <div>
                <div className="text-[10px] font-medium tracking-[0.22em] uppercase text-muted mb-4">
                  Why SACHHSOFT
                </div>
                <h2
                  className="font-serif font-normal text-ink leading-[1.1] tracking-[-0.02em]"
                  style={{ fontSize: "clamp(28px, 3.5vw, 46px)" }}
                >
                  A place where
                  <br />
                  <em className="italic text-gold">great work thrives.</em>
                </h2>
                <p className="text-[15px] font-light text-body-text leading-[1.8] mt-6 max-w-[440px]">
                  We have built a culture where talented people do their best
                  work. No bureaucracy. No politics. Just a focused team
                  building products that matter.
                </p>
              </div>
              <div>
                <ul className="space-y-4">
                  {perks.map((perk) => (
                    <li key={perk} className="flex items-center gap-4 border-b border-rule pb-4 last:border-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                      <span className="text-[14px] font-light text-body-text">
                        {perk}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </RevealWrapper>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-ink py-[100px] px-16 border-t border-white/10 max-lg:px-8 max-md:px-6 max-md:py-16">
        <RevealWrapper className="max-w-[1280px] mx-auto flex items-center justify-between gap-12 max-lg:flex-col max-lg:items-start max-lg:gap-10">
          <div>
            <h2
              className="font-serif font-light text-white leading-none tracking-[-0.025em]"
              style={{ fontSize: "clamp(30px, 4.5vw, 60px)" }}
            >
              Think you belong here?
              <br />
              <em className="italic text-gold-lt">We want to know.</em>
            </h2>
            <p className="text-[15px] font-light text-white/45 mt-5 max-w-[460px] leading-[1.7]">
              No open roles does not mean no opportunity. Send us your CV, tell
              us what you do best, and we will keep you in mind when the right
              role opens up.
            </p>
          </div>
          <div className="flex flex-col items-end max-lg:items-start flex-shrink-0">
            <div className="inline-flex flex-col items-center">
              <a
                href="mailto:hello@sachhsoft.com"
                className="text-[12px] font-medium tracking-[0.14em] uppercase text-ink bg-gold px-12 py-[18px] no-underline whitespace-nowrap hover:bg-gold-lt hover:tracking-[0.18em] transition-all duration-200"
              >
                Send Your CV
              </a>
              <span className="text-[12px] font-light text-white/30 tracking-[0.06em] mt-4">
                hello@sachhsoft.com
              </span>
            </div>
          </div>
        </RevealWrapper>
      </section>
    </main>
  );
}
