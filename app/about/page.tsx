import type { Metadata } from "next";
import Link from "next/link";
import RevealWrapper from "@/components/ui/RevealWrapper";
import { StaggerContainer, StaggerItem } from "@/components/ui/StaggerContainer";
import CountUp from "@/components/ui/CountUp";
import { Gem, Handshake, Zap, MessageSquare } from "lucide-react";

export const metadata: Metadata = {
  title: "About — Who We Are",
  description:
    "SACHHSOFT is a bespoke software development studio founded in Chicago. We build exceptional digital products for enterprise teams, mid-size companies, and startup founders — globally.",
  alternates: { canonical: "https://sachhsoft.com/about" },
  openGraph: {
    title: "About SACHHSOFT — Bespoke Software Studio, Chicago",
    description: "60 expert engineers. 15+ companies launched. 1M+ users maintained. We build software that moves markets.",
    url: "https://sachhsoft.com/about",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About SACHHSOFT",
    description: "60 expert engineers. 15+ companies launched. 1M+ users maintained.",
    images: ["/og-image.jpg"],
  },
};

const values = [
  {
    icon: Gem,
    title: "Craft",
    desc: "We build to last, not just to ship. Every architecture decision, every line of code, every design interaction is intentional: built for the product you have today and the scale you'll need tomorrow.",
  },
  {
    icon: Handshake,
    title: "Partnership",
    desc: "We don't disappear at launch. Our average client relationship spans two and a half years because we embed as strategic partners, not just a vendor executing a ticket queue.",
  },
  {
    icon: MessageSquare,
    title: "Clarity",
    desc: "No jargon, no hidden blockers, no surprises. We communicate with radical transparency: weekly updates, honest timelines, and a single point of contact who knows your product inside and out.",
  },
  {
    icon: Zap,
    title: "Velocity",
    desc: "Speed without compromise. Our AI-augmented workflows, battle-tested frameworks, and 60+ expert engineers let us move faster than any agency you've worked with, without cutting corners.",
  },
];

const team = [
  { initials: "RP", name: "Rikhi Pal Singh", role: "Co-Founder & CEO", photo: "/team/rikhi_pal_singh.jpeg" },
  { initials: "SS", name: "Simrandeep Singh", role: "Co-Founder & CTO", photo: null },
  { initials: "AB", name: "Aditya Bilagi", role: "Head of Engineering", photo: null },
];

const stats = [
  { num: "15+", label: "Companies Launched" },
  { num: "12+", label: "Countries Served" },
  { num: "60+", label: "Expert Engineers" },
  { num: "2.5yr", label: "Avg. Engagement" },
];

export default function AboutPage() {
  return (
    <main>
      {/* ── Hero ── */}
      <section className="bg-ink pt-[152px] pb-[100px] px-16 max-lg:px-8 max-md:px-6 max-md:pt-[120px] max-md:pb-16">
        <div className="max-w-[1280px] mx-auto">
          <RevealWrapper>
            <div className="text-[11px] tracking-[0.2em] uppercase text-gold mb-6 flex items-center gap-3">
              <span className="block w-6 h-px bg-gold/40" />
              About Sachhsoft
              <span className="block w-6 h-px bg-gold/40" />
            </div>
            <h1
              className="font-serif font-light text-white leading-none tracking-[-0.03em] max-w-[860px]"
              style={{ fontSize: "clamp(40px, 7vw, 96px)" }}
            >
              We believe great
              <br />
              software{" "}
              <em className="italic text-gold-lt">changes everything.</em>
            </h1>
            <p className="text-[17px] font-light text-white/50 leading-[1.8] mt-8 max-w-[580px]">
              We&apos;re a bespoke software studio founded in Chicago, building
              the digital products that ambitious companies use to compete,
              grow, and lead their industries.
            </p>
          </RevealWrapper>
        </div>
      </section>

      {/* ── Origin Story ── */}
      <section className="bg-white py-[120px] px-16 border-t border-rule max-lg:px-8 max-md:px-6 max-md:py-16">
        <RevealWrapper className="max-w-[1280px] mx-auto grid grid-cols-[3fr_2fr] gap-20 items-start max-lg:grid-cols-1 max-lg:gap-14">
          {/* Left — story */}
          <div>
            <div className="text-[11px] tracking-[0.2em] uppercase text-gold mb-6 flex items-center gap-3">
              <span className="block w-4 h-px bg-gold" />
              Our Story
            </div>
            <h2
              className="font-serif font-light text-ink leading-[1.1] tracking-[-0.025em] mb-8"
              style={{ fontSize: "clamp(28px, 3.5vw, 48px)" }}
            >
              Built to fill a gap
              <br />
              <em className="italic text-gold">no one else would.</em>
            </h2>
            <div className="space-y-5 text-[16px] font-light text-body-text leading-[1.8]">
              <p>
                Sachhsoft was founded with a simple conviction: the market was
                full of offshore shops that moved fast and broke things, and
                boutique agencies that moved slow and charged a fortune. There
                was nothing in between: a team that could move with startup
                urgency while delivering enterprise-grade craft.
              </p>
              <p>
                We started in Chicago, taking on projects that demanded both
                strategic thinking and exceptional execution. HealthTech
                platforms that had to be HIPAA-compliant on day one. FinTech
                systems that processed millions in transactions. Marketplaces
                that had to scale to hundreds of thousands of users within
                weeks of launch.
              </p>
              <p>
                Today, we serve clients across 12+ countries, maintain over
                one million active users across our portfolio, and have built
                a team of 60+ engineers, designers, and strategists who treat
                every project like it&apos;s their own company.
              </p>
            </div>
          </div>

          {/* Right — callout */}
          <div className="flex flex-col gap-6">
            <div className="bg-ink p-10 max-md:p-8">
              <div className="font-serif text-[72px] font-light text-gold leading-none tracking-[-0.04em]">
                2017
              </div>
              <div className="text-[12px] font-medium tracking-[0.14em] uppercase text-white/40 mt-2 mb-6">
                Year Founded
              </div>
              <p className="text-[14px] font-light text-white/60 leading-[1.7]">
                From a single client in Chicago to a global studio trusted
                by companies across North America, Europe, the Middle East,
                and APAC.
              </p>
            </div>
            <div className="bg-off border border-rule p-10 max-md:p-8">
              <div className="font-serif text-[13px] italic text-ink/60 leading-[1.7] mb-5">
                &ldquo;The standard is not what the client expects. It&apos;s
                what we know is possible.&rdquo;
              </div>
              <div className="text-[12px] font-medium tracking-[0.08em] text-ink">
                Rikhi Pal Singh
              </div>
              <div className="text-[11px] font-light text-muted mt-0.5 tracking-[0.04em]">
                Co-Founder & CEO
              </div>
            </div>
          </div>
        </RevealWrapper>
      </section>

      {/* ── Values ── */}
      <section className="bg-off py-[120px] px-16 border-t border-rule max-lg:px-8 max-md:px-6 max-md:py-16">
        <div className="max-w-[1280px] mx-auto">
          <RevealWrapper className="text-center mb-16 max-md:mb-10">
            <div className="text-[11px] tracking-[0.2em] uppercase text-gold mb-5 flex items-center justify-center gap-3">
              <span className="block w-6 h-px bg-gold/40" />
              How We Work
              <span className="block w-6 h-px bg-gold/40" />
            </div>
            <h2
              className="font-serif font-light text-ink leading-none tracking-[-0.025em]"
              style={{ fontSize: "clamp(32px, 4.5vw, 60px)" }}
            >
              Principles that guide
              <br />
              <em className="italic text-gold">every decision we make.</em>
            </h2>
          </RevealWrapper>

          <RevealWrapper delay={100}>
            <div className="grid grid-cols-4 border border-rule max-lg:grid-cols-2 max-md:grid-cols-1">
              {values.map((v, i) => {
                const Icon = v.icon;
                return (
                  <div
                    key={i}
                    className="bg-white p-10 border-r border-rule last:border-r-0 max-lg:border-b max-lg:[&:nth-child(2)]:border-r-0 max-lg:[&:nth-child(3)]:border-r-0 max-lg:[&:nth-child(3)]:border-b-0 max-lg:[&:nth-child(4)]:border-r-0 max-lg:[&:nth-child(4)]:border-b-0 max-md:border-r-0 max-md:last:border-b-0 max-md:p-8 group hover:bg-ink transition-colors duration-300"
                  >
                    <div className="text-gold mb-6 group-hover:text-gold-lt transition-colors duration-300">
                      <Icon size={24} strokeWidth={1.5} />
                    </div>
                    <h3 className="font-serif text-[22px] font-normal text-ink tracking-[-0.01em] mb-4 group-hover:text-white transition-colors duration-300">
                      {v.title}
                    </h3>
                    <p className="text-[14px] font-light text-body-text leading-[1.75] group-hover:text-white/55 transition-colors duration-300">
                      {v.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </RevealWrapper>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="bg-off py-[80px] px-16 border-t border-rule max-lg:px-8 max-md:px-6 max-md:py-14">
        <StaggerContainer className="max-w-[1280px] mx-auto grid grid-cols-4 gap-px bg-rule border border-rule max-md:grid-cols-2">
          {stats.map((s) => (
            <StaggerItem key={s.label} className="bg-white text-center py-12 px-6 max-md:py-10">
              <CountUp
                value={s.num}
                className="font-serif font-light text-ink leading-none tracking-[-0.04em] mb-2 block"
                style={{ fontSize: "clamp(40px, 5vw, 64px)" }}
              />
              <div className="text-[11px] font-medium tracking-[0.14em] uppercase text-gold">
                {s.label}
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* ── Team ── TEMPORARILY COMMENTED OUT — restore when ready ──
      <section className="bg-white py-[120px] px-16 border-t border-rule max-lg:px-8 max-md:px-6 max-md:py-16">
        <div className="max-w-[1280px] mx-auto">
          <RevealWrapper className="mb-14 max-md:mb-10">
            <div className="text-[11px] tracking-[0.2em] uppercase text-gold mb-5 flex items-center gap-3">
              <span className="block w-4 h-px bg-gold" />
              The Team
            </div>
            <h2
              className="font-serif font-light text-ink leading-none tracking-[-0.025em]"
              style={{ fontSize: "clamp(30px, 4vw, 56px)" }}
            >
              The people behind
              <br />
              <em className="italic text-gold">your product.</em>
            </h2>
          </RevealWrapper>

          <StaggerContainer className="grid grid-cols-3 gap-8 max-lg:grid-cols-2 max-md:grid-cols-1">
              {team.map((member) => (
                <StaggerItem
                  key={member.name}
                  className="group flex flex-col"
                >
                  <div className="relative overflow-hidden aspect-[3/4] bg-ink mb-6">
                    {member.photo ? (
                      <img
                        src={member.photo}
                        alt={member.name}
                        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="font-serif text-[64px] font-light text-gold/40 tracking-[-0.02em]">
                          {member.initials}
                        </span>
                      </div>
                    )}
                    <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  </div>
                  <div className="w-8 h-px bg-gold mb-4" />
                  <div
                    className="font-serif font-normal text-ink tracking-[-0.01em] leading-tight mb-1.5"
                    style={{ fontSize: "clamp(20px, 2vw, 26px)" }}
                  >
                    {member.name}
                  </div>
                  <div className="text-[11px] font-medium tracking-[0.18em] uppercase text-gold">
                    {member.role}
                  </div>
                </StaggerItem>
              ))}
          </StaggerContainer>
        </div>
      </section>
      ── END TEAM SECTION ── */}

      {/* ── Manifesto ── TEMPORARILY COMMENTED OUT — restore when ready ──
      <section className="bg-off py-[120px] px-16 border-t border-rule max-lg:px-8 max-md:px-6 max-md:py-16">
        <RevealWrapper className="max-w-[800px] mx-auto text-center">
          <span
            className="font-serif text-[100px] leading-[0.7] text-gold/20 mb-6 block select-none"
            aria-hidden="true"
          >
            &ldquo;
          </span>
          <blockquote
            className="font-serif font-light italic text-ink leading-[1.5] tracking-[-0.01em]"
            style={{ fontSize: "clamp(22px, 2.8vw, 34px)" }}
          >
            We don&apos;t measure success in lines of code delivered.
            We measure it in markets moved, companies scaled, and problems
            permanently solved.
          </blockquote>
          <div className="w-8 h-px bg-rule mx-auto my-8" />
          <div className="text-[13px] font-normal tracking-[0.06em] text-ink">
            Sachhsoft — Chicago &amp; Global
          </div>
        </RevealWrapper>
      </section>
      ── END MANIFESTO SECTION ── */}

      {/* ── CTA ── */}
      <section className="bg-ink py-[100px] px-16 border-t border-white/10 max-lg:px-8 max-md:px-6 max-md:py-16">
        <RevealWrapper className="max-w-[1280px] mx-auto flex items-center justify-between gap-12 max-lg:flex-col max-lg:items-start max-lg:gap-10">
          <div>
            <h2
              className="font-serif font-light text-white leading-none tracking-[-0.025em]"
              style={{ fontSize: "clamp(32px, 5vw, 68px)" }}
            >
              Let&apos;s build something
              <br />
              <em className="italic text-gold-lt">worth building.</em>
            </h2>
            <p className="text-[15px] font-light text-white/45 mt-5 max-w-[460px] leading-[1.7]">
              Tell us about your vision. We respond within one business day,
              personally, not through an automated sequence.
            </p>
          </div>
          <div className="flex flex-col gap-4 items-end max-lg:items-start flex-shrink-0">
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
    </main>
  );
}
