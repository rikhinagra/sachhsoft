import type { Metadata } from "next";
import Link from "next/link";
import {
  Landmark,
  ShieldCheck,
  HeartPulse,
  Truck,
  Building2,
  ShoppingBag,
  Diamond,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import RevealWrapper from "@/components/ui/RevealWrapper";
import { StaggerContainer, StaggerItem } from "@/components/ui/StaggerContainer";
import CountUp from "@/components/ui/CountUp";

const description =
  "SACHHSOFT connects IBM Z, IBM i and Unisys systems to modern web, cloud and AI-assisted tools without a risky rewrite.";

export const metadata: Metadata = {
  title: "Legacy & Mainframe Modernization",
  description,
  alternates: { canonical: "https://sachhsoft.com/legacy-modernization" },
  openGraph: {
    title: "Legacy & Mainframe Modernization | SACHHSOFT",
    description,
    url: "https://sachhsoft.com/legacy-modernization",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Legacy & Mainframe Modernization | SACHHSOFT",
    description,
    images: ["/og-image.jpg"],
  },
};

const stats = [
  { num: "15", sup: "+", label: "Companies launched", animate: true },
  { num: "1M", sup: "+", label: "Users maintained", animate: true },
  { num: "2.5", sup: " yrs", label: "Average client relationship", animate: true },
  { num: "2015", sup: "", label: "Building software since", animate: false },
];

const tickerItems = [
  "IBM Z",
  "IBM i",
  "COBOL",
  "Unisys",
  "Core Banking",
  "Cloud & DevOps",
  "API Integration",
  "AI Integration",
  "Data Mapping",
  "Automation",
];

const practices = [
  {
    idx: "01",
    name: "IBM Z & IBM i Integration",
    desc: "Secure APIs and integration layers that expose your existing data and business logic to modern applications, with no rewrite of the core.",
    href: "/services",
  },
  {
    idx: "02",
    name: "COBOL & Mainframe AI",
    desc: "AI-assisted analysis and documentation of COBOL and RPG code, so retiring experts' knowledge is captured and the code is easier to maintain.",
    href: "/services",
  },
  {
    idx: "03",
    name: "IBM & Unisys to Cloud",
    desc: "A phased move of data, applications and workloads to AWS or Azure, with hosting, security, monitoring and backups handled.",
    href: "/services#cloud-devops",
  },
  {
    idx: "04",
    name: "Core Banking Modernization",
    desc: "Targeted lift, shift and data-mapping from old banking software to a new platform.",
    href: "/services#core-banking",
  },
  {
    idx: "05",
    name: "Web Apps & Automation",
    desc: "Portals, dashboards and automated reporting, so your teams stop depending on green screens and manual spreadsheets.",
    href: "/services#product-design",
  },
];

const steps = [
  {
    num: "01",
    title: "Discovery & Strategy",
    desc: "We review your systems, data, constraints and risks before any code is written.",
  },
  {
    num: "02",
    title: "Architecture & Design",
    desc: "A phased roadmap, system architecture and data mapping with clear milestones and costs.",
  },
  {
    num: "03",
    title: "Engineering & Delivery",
    desc: "Small, tested stages with continuous integration, automated QA and transparent progress.",
  },
  {
    num: "04",
    title: "Scale & Partnership",
    desc: "We keep monitoring, securing and improving after launch.",
  },
];

const industries: { icon: LucideIcon; name: string; desc: string }[] = [
  {
    icon: Landmark,
    name: "Banking & FinTech",
    desc: "Core banking, payments, compliance tools and wealth platforms.",
  },
  {
    icon: ShieldCheck,
    name: "Insurance",
    desc: "Policy and claims systems connected to modern portals and analytics.",
  },
  {
    icon: HeartPulse,
    name: "Healthcare & MedTech",
    desc: "HIPAA-aware platforms and EHR integrations.",
  },
  {
    icon: Truck,
    name: "Logistics",
    desc: "Tracking, inventory and dispatch data freed from legacy back ends.",
  },
  {
    icon: Building2,
    name: "Government",
    desc: "Citizen-facing services on top of long-running core systems.",
  },
  {
    icon: ShoppingBag,
    name: "Retail & E-Commerce",
    desc: "Inventory and order systems linked to headless storefronts.",
  },
];

export default function LegacyModernizationPage() {
  const doubledTicker = [...tickerItems, ...tickerItems];

  return (
    <main>
      {/* ── Hero ── */}
      <section
        className="bg-ink pt-[152px] pb-[100px] px-16 max-lg:px-8 max-md:px-6 max-md:pt-[120px] max-md:pb-16"
        style={{
          backgroundImage:
            "radial-gradient(900px 420px at 80% -10%, rgba(14,108,251,0.18), transparent 60%)",
        }}
      >
        <div className="max-w-[1280px] mx-auto">
          <div
            className="flex items-center gap-3 text-[10px] font-medium tracking-[0.24em] uppercase text-gold mb-6"
            style={{ animation: "fadeUp 0.8s ease 0.2s both" }}
          >
            <span className="block w-7 h-px bg-gold" />
            Legacy &amp; Mainframe Modernization
          </div>

          <h1
            className="font-serif font-light leading-[1.05] tracking-[-0.03em] text-white mb-9"
            style={{
              fontSize: "clamp(34px, 6vw, 82px)",
              animation: "fadeUp 0.9s ease 0.35s both",
            }}
          >
            We Modernize
            <br />
            Systems that
            <br />
            <em className="font-light italic text-gold-lt">Run the Business.</em>
          </h1>

          <p
            className="text-[17px] font-light text-white/50 leading-[1.8] max-w-[620px]"
            style={{ animation: "fadeUp 0.8s ease 0.45s both" }}
          >
            Connect IBM Z, IBM i and Unisys platforms to modern web, cloud and
            AI-assisted tools. Your core systems keep running while your teams
            get faster, simpler ways to work with them.
          </p>

          <div
            className="flex gap-10 flex-wrap pt-7 mt-10 border-t border-white/10 mb-11"
            style={{ animation: "fadeUp 0.8s ease 0.5s both" }}
          >
            <div>
              <div className="text-[10px] font-medium tracking-[0.2em] uppercase text-white/30 mb-1.5">
                What We Do
              </div>
              <p className="text-[14px] font-light text-white/65 leading-relaxed max-w-[300px]">
                Integration layers, AI-assisted code analysis and phased cloud
                moves, with no big-bang rewrite.
              </p>
            </div>
            <div>
              <div className="text-[10px] font-medium tracking-[0.2em] uppercase text-white/30 mb-1.5">
                Who We Serve
              </div>
              <p className="text-[14px] font-light text-white/65 leading-relaxed max-w-[300px]">
                Banks, insurers, healthcare, logistics and public-sector teams
                running critical legacy platforms.
              </p>
            </div>
          </div>

          <div
            className="flex items-center gap-6 flex-wrap"
            style={{ animation: "fadeUp 0.8s ease 0.6s both" }}
          >
            <Link
              href="/start-a-project"
              className="text-[12px] font-semibold tracking-[0.16em] uppercase text-white bg-gold px-11 py-4 no-underline hover:bg-gold-lt transition-all duration-200 hover:tracking-[0.2em]"
            >
              Book a free assessment
            </Link>
            <Link
              href="/case-studies"
              className="text-[13px] font-normal text-white/60 no-underline flex items-center gap-2 hover:text-white hover:gap-3.5 transition-all duration-200"
            >
              View our work <span className="text-lg leading-none">→</span>
            </Link>
          </div>

          {/* Stats */}
          <div
            className="grid grid-cols-4 gap-6 mt-16 pt-7 border-t border-white/10 max-md:grid-cols-2 max-md:mt-12"
            style={{ animation: "fadeUp 0.8s ease 0.7s both" }}
          >
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-serif font-semibold leading-[1.05] tracking-[-0.015em] text-white text-[34px] max-md:text-[36px]">
                  {s.animate ? <CountUp value={s.num} /> : <span>{s.num}</span>}
                  <span className="text-gold-lt">{s.sup}</span>
                </div>
                <div className="text-[10px] font-normal tracking-[0.14em] uppercase text-white/30 mt-1">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Ticker ── */}
      <div className="overflow-hidden bg-gold py-3.5" aria-hidden="true">
        <div
          className="flex gap-0 whitespace-nowrap"
          style={{ animation: "marqueeScroll 28s linear infinite", width: "max-content" }}
        >
          {doubledTicker.map((item, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-9 px-9 text-[11px] font-medium tracking-[0.2em] uppercase text-white"
            >
              {item}
              <Diamond
                size={6}
                fill="currentColor"
                strokeWidth={0}
                className="text-white/60 flex-shrink-0"
              />
            </span>
          ))}
        </div>
      </div>

      {/* ── The Problem ── */}
      <section
        className="bg-ink px-16 py-[120px] max-lg:px-8 max-md:px-6 max-md:py-20"
        aria-labelledby="problem-heading"
      >
        <div className="max-w-[1280px] mx-auto">
          <RevealWrapper className="grid grid-cols-[5fr_4fr] gap-[100px] items-start max-lg:grid-cols-1 max-lg:gap-8">
            <div>
              <div className="text-[11px] tracking-[0.2em] uppercase text-white/35 mb-5 flex items-center gap-3">
                <span className="block w-6 h-px bg-white/15" />
                The Problem
              </div>
              <h2
                id="problem-heading"
                className="font-serif font-light text-white leading-[1.05] tracking-[-0.02em]"
                style={{ fontSize: "clamp(28px, 4vw, 58px)" }}
              >
                Your legacy systems still run everything. They just don&apos;t{" "}
                <em className="italic text-gold-lt">connect.</em>
              </h2>
            </div>
            <p className="text-[16px] font-light text-white/60 leading-[1.8] lg:pt-[44px]">
              The people who understand the COBOL code are retiring. Reports and
              data are locked inside old screens and batch jobs. Connecting to
              cloud and mobile apps is slow and expensive, and a full
              rip-and-replace is too risky and too costly.
            </p>
          </RevealWrapper>
        </div>
      </section>

      {/* ── What We Build ── */}
      <section
        className="px-16 py-[120px] max-lg:px-8 max-md:px-6 max-md:py-16"
        aria-labelledby="build-heading"
      >
        <div className="max-w-[1280px] mx-auto">
          <RevealWrapper className="mb-20">
            <div className="text-[11px] tracking-[0.2em] uppercase text-muted mb-5 flex items-center gap-3">
              <span className="block w-6 h-px bg-rule" />
              What We Build
            </div>
            <h2
              id="build-heading"
              className="font-serif font-light leading-[1.05] tracking-[-0.02em] text-ink"
              style={{ fontSize: "clamp(28px, 4vw, 58px)" }}
            >
              Full-Spectrum
              <br />
              <em className="italic text-gold">Modernization.</em>
            </h2>
            <p className="text-[16px] font-light text-body-text leading-[1.7] max-w-[480px] mt-6">
              Five practices. One accountable team.
            </p>
          </RevealWrapper>

          <div className="border-t border-rule">
            {practices.map((p) => (
              <Link
                key={p.idx}
                href={p.href}
                className="group grid grid-cols-[80px_1fr_1fr_120px] gap-10 items-center px-0 py-8 border-b border-rule transition-all duration-200 hover:bg-off hover:-mx-8 hover:px-8 no-underline max-lg:grid-cols-[48px_1fr] max-lg:gap-4 max-lg:py-6"
              >
                <div className="font-serif text-[16px] text-muted font-normal max-lg:text-[14px]">
                  {p.idx}
                </div>
                <div
                  className="font-serif text-ink font-normal tracking-[-0.01em] leading-[1.15]"
                  style={{ fontSize: "clamp(18px, 2.8vw, 36px)" }}
                >
                  {p.name}
                </div>
                <div className="text-[14px] font-light text-body-text leading-[1.65] max-lg:col-start-2 max-lg:-mt-2">
                  {p.desc}
                </div>
                <div className="text-[20px] text-gold text-right opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 max-lg:col-start-2 max-lg:text-left max-lg:text-[13px] max-lg:font-medium max-lg:opacity-100 max-lg:translate-x-0 max-lg:-mt-2">
                  <span className="lg:hidden">Learn more </span>→
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── How We Work ── */}
      <section
        className="bg-off px-16 py-[120px] max-lg:px-8 max-md:px-6 max-md:py-16"
        aria-labelledby="legacy-process-heading"
      >
        <div className="max-w-[1280px] mx-auto">
          <RevealWrapper className="mb-16">
            <div className="text-[11px] tracking-[0.2em] uppercase text-muted mb-5 flex items-center gap-3">
              <span className="block w-6 h-px bg-rule" />
              How We Work
            </div>
            <h2
              id="legacy-process-heading"
              className="font-serif font-light leading-[1.05] tracking-[-0.02em] text-ink"
              style={{ fontSize: "clamp(28px, 4vw, 58px)" }}
            >
              A Process Built for
              <br />
              <em className="italic text-gold">Precision.</em>
            </h2>
          </RevealWrapper>

          <RevealWrapper delay={150}>
            <div className="grid grid-cols-4 border-l border-rule max-lg:grid-cols-2 max-sm:grid-cols-1">
              {steps.map((step) => (
                <div
                  key={step.num}
                  className="p-12 border-r border-t border-rule relative max-lg:p-8 max-sm:p-7"
                >
                  <span className="font-serif text-[13px] font-normal tracking-[0.12em] text-muted mb-10 block">
                    {step.num}
                  </span>
                  <div className="w-6 h-px bg-gold mb-6" />
                  <h3 className="font-serif text-[24px] font-normal tracking-[-0.01em] text-ink mb-4 leading-[1.2]">
                    {step.title}
                  </h3>
                  <p className="text-[13px] font-light text-body-text leading-[1.7]">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </RevealWrapper>
        </div>
      </section>

      {/* ── Industries ── */}
      <section
        className="px-16 py-[120px] max-lg:px-8 max-md:px-6 max-md:py-16"
        aria-labelledby="legacy-industries-heading"
      >
        <div className="max-w-[1280px] mx-auto">
          <RevealWrapper className="mb-20">
            <div className="text-[11px] tracking-[0.2em] uppercase text-muted mb-5 flex items-center gap-3">
              <span className="block w-6 h-px bg-rule" />
              Industries We Serve
            </div>
            <h2
              id="legacy-industries-heading"
              className="font-serif font-light leading-[1.05] tracking-[-0.02em] text-ink"
              style={{ fontSize: "clamp(28px, 4vw, 58px)" }}
            >
              Deep Domain
              <br />
              <em className="italic text-gold">Expertise.</em>
            </h2>
          </RevealWrapper>

          <StaggerContainer className="grid grid-cols-3 border-t border-l border-rule max-lg:grid-cols-2 max-sm:grid-cols-1">
            {industries.map((ind) => {
              const Icon = ind.icon;
              return (
                <StaggerItem key={ind.name}>
                  <div className="relative p-10 border-r border-b border-rule max-md:p-7 h-full">
                    <span className="mb-5 block text-gold" aria-hidden="true">
                      <Icon size={24} strokeWidth={1.5} />
                    </span>
                    <h3 className="font-serif text-[22px] font-normal text-ink mb-2.5 leading-tight">
                      {ind.name}
                    </h3>
                    <p className="text-[13px] font-light text-body-text leading-[1.6]">
                      {ind.desc}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-ink py-[120px] px-16 max-lg:px-8 max-md:px-6 max-md:py-16">
        <RevealWrapper className="max-w-[1280px] mx-auto grid grid-cols-[1fr_auto] gap-20 items-center max-lg:grid-cols-1 max-lg:gap-12">
          <div>
            <h2
              className="font-serif font-light leading-[1.05] tracking-[-0.02em] text-white"
              style={{ fontSize: "clamp(28px, 4vw, 58px)" }}
            >
              Not sure where to <em className="italic text-gold-lt">start?</em>
            </h2>
            <p className="text-[16px] font-light text-white/50 leading-[1.7] mt-5 max-w-[520px]">
              Book a free 30-minute legacy assessment. We review every request
              personally and tell you honestly what to modernize, what to
              integrate and what to leave alone.
            </p>
          </div>

          <div className="flex flex-col gap-4 items-end max-lg:items-start">
            <Link
              href="/start-a-project"
              className="text-[12px] font-medium tracking-[0.14em] uppercase text-white bg-gold px-12 py-[18px] no-underline whitespace-nowrap hover:bg-gold-lt hover:tracking-[0.18em] transition-all duration-200"
            >
              Start a Project
            </Link>
            <span className="text-[12px] font-light text-white/30 tracking-[0.06em]">
              Responds within 1 business day
            </span>
          </div>
        </RevealWrapper>

        <p className="max-w-[1280px] mx-auto mt-20 pt-8 border-t border-white/10 text-[11px] font-light text-white/40 leading-[1.7] max-md:mt-12">
          IBM, Unisys and other platform names are trademarks of their
          respective owners and are used only to describe the systems we work
          with.
        </p>
      </section>
    </main>
  );
}
