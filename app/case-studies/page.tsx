import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import RevealWrapper from "@/components/ui/RevealWrapper";
import { StaggerContainer, StaggerItem } from "@/components/ui/StaggerContainer";
import { ArrowUpRight } from "lucide-react";

// Inline SVG logos for clients without image URLs
const AinstinctLogo = () => (
  <svg viewBox="0 0 108 72" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 w-auto text-ink">
    <circle cx="36" cy="36" r="30.525" stroke="currentColor" strokeWidth="10.95" />
    <circle cx="99" cy="61" r="9" fill="currentColor" />
    <path d="M96 0H108L78 72H66L96 0Z" fill="currentColor" />
  </svg>
);

const LexGoLogo = () => (
  <span style={{ fontFamily: '"Playfair Display", serif', fontWeight: 800, fontSize: "20px", letterSpacing: "-0.5px", color: "#0a1f44", whiteSpace: "nowrap" }}>
    LexGo<span style={{ color: "#d4af37" }}>Solutions</span>
  </span>
);

const SixteenNineLogo = () => (
  <span style={{ fontFamily: "var(--font-outfit)", fontWeight: 900, fontSize: "19px", letterSpacing: "0.14em", color: "#18160f" }}>
    SIXTEENINE™
  </span>
);

export const metadata: Metadata = {
  title: "Case Studies — Real Results, Real Clients",
  description:
    "See how SACHHSOFT has helped startups and enterprises launch products, scale platforms, and solve complex engineering challenges across Healthcare, FinTech, Legal, and more.",
  alternates: { canonical: "https://sachhsoft.com/case-studies" },
};

const caseStudies: {
  id: string; idx: string; client: string; industry: string; headline: string;
  desc: string; metrics: { value: string; sup: string; label: string }[];
  tech: string[]; accent: string; bg: string; featured: boolean;
  logoUrl?: string; logoSvg?: React.ReactNode; logoInvert?: boolean;
}[] = [
  {
    id: "renewrx",
    idx: "01",
    client: "RenewRx",
    industry: "Healthcare & MedTech",
    logoUrl: "https://cdn.prod.website-files.com/677eb93874391ef718526bb9/6900554b1cf1f6b0feed728e_renewrx-r-logo.svg",
    headline: "Built the platform powering next-generation maternal care for diabetic pregnancies.",
    desc: "RenewRx is reimagining prenatal care for women with gestational diabetes and metabolic conditions. We built their full product stack: a patient-facing mobile app with AI-powered meal and glucose tracking, a real-time provider dashboard, and EHR integration. Care teams now have live visibility into patient progress between visits, without adding work or staff.",
    metrics: [
      { value: "29%", sup: "", label: "C-section rate vs. 42% standard of care" },
      { value: "5.4%", sup: "", label: "NICU admissions vs. 9–12% standard" },
      { value: "89", sup: "mg/dL", label: "Mean 3rd-trimester glucose vs. ~111 standard" },
    ],
    tech: ["React Native", "Node.js", "AWS HIPAA", "HL7 FHIR", "AI/ML", "PostgreSQL", "Twilio"],
    accent: "#2dd4bf",
    bg: "bg-white",
    featured: true,
  },
  {
    id: "phonecheck",
    idx: "02",
    client: "PhoneCheck",
    industry: "Mobile Technology & Device Certification",
    logoUrl: "/logos/phonecheck.webp",
    headline: "Built the platform bringing trust to the global secondary device market.",
    desc: "PhoneCheck is the leading source of device certification for buyers and sellers of used phones, tablets, and smartwatches. We built their cloud-enabled certification platform featuring an 80-point automated diagnostic, ADISA-certified data erasure, lock detection, battery health checks, and device history reports. Everything is accessible via dashboard and open API, designed for high-volume wholesale dealers processing thousands of devices a month.",
    metrics: [
      { value: "40+", sup: "", label: "Units certified per hour" },
      { value: "80", sup: "pt", label: "Automated diagnostic scan" },
      { value: "<2", sup: "min", label: "Avg. platform support response" },
    ],
    tech: ["React", "Node.js", "AWS", "PostgreSQL", "Open API", "Cloud Dashboard", "AI/ML"],
    accent: "#6366f1",
    bg: "bg-off",
    featured: false,
  },
  {
    id: "databahn",
    idx: "03",
    client: "Databahn",
    industry: "Cybersecurity & Data Pipeline Management",
    logoUrl: "https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67ebaa6ba00e7b767d1db02e_logo.avif",
    logoInvert: true,
    headline: "Built the AI-powered data pipeline platform trusted by global enterprise security teams.",
    desc: "Databahn's founding team had a vision: simplify how enterprises collect, manage, and route their security and observability data. We built their full platform from the Smart Edge collection layer, through the Highway orchestration engine and Cruz AI data engineer, all the way to the Reef intelligence hub. Global enterprises now have real-time pipeline control with 500+ integrations and deep partnerships with Microsoft Sentinel, AWS Security Lake, and Splunk.",
    metrics: [
      { value: "$350K", sup: "", label: "Annual client savings in SIEM costs" },
      { value: "99%", sup: "", label: "Data visibility achieved" },
      { value: "500+", sup: "", label: "Platform integrations" },
    ],
    tech: ["React", "Node.js", "Python", "AWS", "Kafka", "PostgreSQL", "Kubernetes", "AI/ML"],
    accent: "#f59e0b",
    bg: "bg-white",
    featured: false,
  },
  {
    id: "lexgo",
    idx: "04",
    client: "LexGo Solutions",
    industry: "Legal & LegalTech",
    logoSvg: <LexGoLogo />,
    headline: "Built the AI-powered platform helping personal injury firms 2x their caseload without hiring.",
    desc: "LexGo Solutions pairs dedicated case management specialists with AI-powered workflows to help personal injury firms scale without the overhead of hiring. We built their full platform including 24/7 AI intake automation, medical record intelligence, predictive case valuation, and smart document generation. PI firms can now handle more cases faster while their attorneys focus entirely on high-value work.",
    metrics: [
      { value: "2K+", sup: "", label: "Cases processed annually" },
      { value: "40%", sup: "", label: "Faster case resolution" },
      { value: "14", sup: "days", label: "Client onboarding time" },
    ],
    tech: ["React", "Next.js", "Node.js", "OpenAI", "PostgreSQL", "Stripe", "AWS"],
    accent: "#d4af37",
    bg: "bg-off",
    featured: false,
  },
  {
    id: "chicago-indian-arts",
    idx: "05",
    client: "Chicago Indian Arts",
    industry: "Arts, Culture & Non-Profit",
    logoUrl: "https://res.cloudinary.com/dom3oj7ya/image/upload/v1770979601/CIA-logo-black_snmlaz.webp",
    headline: "Designed and built the digital home for Chicago's most ambitious Indian cultural platform.",
    desc: "Chicago Indian Arts is a non-profit founded by Jigar Shah to celebrate Indian cultural heritage through three flagship programs: the Chicago Indian Literature Festival, Chicago Indian Fashion Week, and the Wildlife Photography &amp; Visual Arts Festival. We designed and developed their complete website and digital platform including event registration, program pages, gallery, vendor and brand intake forms, press and media section, and a donation system. The result is a premium online presence worthy of their world-class events at Navy Pier, Congress Plaza Hotel, and the Art Institute of Chicago.",
    metrics: [
      { value: "10K+", sup: "", label: "Cumulative event attendees" },
      { value: "3", sup: "", label: "Flagship programs launched" },
      { value: "2025", sup: "", label: "Founded & live within the year" },
    ],
    tech: ["Next.js", "React", "Node.js", "Vercel", "PostgreSQL", "Stripe"],
    accent: "#f97316",
    bg: "bg-white",
    featured: false,
  },
  {
    id: "taylors-tacos",
    idx: "06",
    client: "Taylor's Tacos",
    industry: "Food, Hospitality & Catering",
    logoUrl: "/logos/taylors-tacos.webp",
    headline: "Built the digital platform for Chicago's #1 taco catering company.",
    desc: "Taylor's Tacos is a Chicago-born catering company founded by Taylor and Maya Mason on the West Side of Chicago, serving over half a million tacos since 2016. We built their complete digital presence including catering booking forms, staffed event menus, delivery and pick-up ordering, an events calendar, and a quote request system. This beloved Chicago institution now has the online home it deserves to serve corporate clients, schools, non-profits, medical teams, and weddings across the city.",
    metrics: [
      { value: "500K+", sup: "", label: "Tacos served since founding" },
      { value: "10", sup: "yrs", label: "In business & growing" },
      { value: "5", sup: "", label: "Service categories served" },
    ],
    tech: ["Next.js", "React", "Node.js", "Vercel", "Stripe", "PostgreSQL"],
    accent: "#22c55e",
    bg: "bg-off",
    featured: false,
  },
  {
    id: "rizzarr",
    idx: "07",
    client: "RIZZARR",
    industry: "AI & Creator Economy",
    logoUrl: "https://d15o1r2675r1cy.cloudfront.net/static/images/rizzarr-logo-updated.png",
    headline: "Built the AI-powered content intelligence platform solving the $8B branded content problem.",
    desc: "RIZZARR is an AI-powered content intelligence platform founded by award-winning journalist Ashley M. Williams and CTO Christopher Peters, formerly Zapier's first data scientist who helped grow the company from $1.2M to a multi-billion dollar enterprise. We built their full platform including an AI creator matching engine, predictive campaign scoring, real-time performance analytics, a brand-creator marketplace, and an experimentation hub. Brands like American Heart Association, JP Morgan Chase, and Comcast NBC Universal now use it to co-create authentic, measurable content with vetted, purpose-driven creators.",
    metrics: [
      { value: "$8B", sup: "", label: "Branded content problem being solved" },
      { value: "92%", sup: "", label: "Brand fit score on platform" },
      { value: "4.6x", sup: "", label: "Projected reach multiplier" },
    ],
    tech: ["React", "Next.js", "Node.js", "Python", "AI/ML", "PostgreSQL", "AWS"],
    accent: "#a855f7",
    bg: "bg-white",
    featured: false,
  },
  {
    id: "sixteenine",
    idx: "08",
    client: "SIXTEENINE",
    industry: "Fashion & Streetwear E-Commerce",
    logoSvg: <SixteenNineLogo />,
    headline: "Built the premium Shopify storefront for a bold, unapologetic streetwear brand.",
    desc: "SIXTEENINE is a premium streetwear brand built on the philosophy of being bold and unapologetic. We built their complete Shopify storefront including custom collection pages, product detail pages with size guides and limited stock alerts, a global ambassador and affiliate program, community showcase section, and a frictionless checkout experience. The result is a premium digital presence that matches their identity and converts browsers into buyers.",
    metrics: [
      { value: "$69", sup: "", label: "Premium price point per piece" },
      { value: "Global", sup: "", label: "Ambassador & affiliate network" },
      { value: "100%", sup: "", label: "Custom Shopify theme built from scratch" },
    ],
    tech: ["Shopify", "Liquid", "JavaScript", "CSS", "Shopify Payments", "Affiliate Integration"],
    accent: "#18160f",
    bg: "bg-off",
    featured: false,
  },
  {
    id: "ainstinct",
    idx: "09",
    client: "aInstinct",
    industry: "AI Creative Technology",
    logoSvg: <AinstinctLogo />,
    headline: "Built the platform for the next era of AI-native brand content and virtual influence.",
    desc: "aInstinct is a marketplace connecting brands with AI-native creators and content, where human instinct directs every piece of work that ships. We built their platform and digital presence, enabling global brands like Crocs, Zara, Lululemon, and Oakley to commission AI-generated editorial campaigns, virtual influence, and performance creative at scale. The philosophy behind it: AI can generate anything, but knowing what matters takes human instinct.",
    metrics: [
      { value: "6", sup: "", label: "Global brand clients including Zara and Lululemon" },
      { value: "5", sup: "", label: "AI content service categories" },
      { value: "2026", sup: "", label: "Built and launched" },
    ],
    tech: ["React", "Next.js", "Node.js", "AI/ML", "AWS", "Vercel"],
    accent: "#ec4899",
    bg: "bg-white",
    featured: false,
  },
];

const featured = caseStudies[0];
const rest = caseStudies.slice(1);

export default function CaseStudiesPage() {
  return (
    <main>
      {/* ── Hero ── */}
      <section className="bg-ink pt-[152px] pb-[100px] px-16 max-lg:px-8 max-md:px-6 max-md:pt-[120px] max-md:pb-16">
        <div className="max-w-[1280px] mx-auto">
          <RevealWrapper>
            <div className="text-[11px] tracking-[0.2em] uppercase text-gold mb-6 flex items-center gap-3">
              <span className="block w-6 h-px bg-gold/40" />
              Our Work
              <span className="block w-6 h-px bg-gold/40" />
            </div>
            <h1
              className="font-serif font-light text-white leading-none tracking-[-0.03em] max-w-[800px]"
              style={{ fontSize: "clamp(40px, 7vw, 96px)" }}
            >
              Results that speak
              <br />
              <em className="italic text-gold-lt">for themselves.</em>
            </h1>
            <p className="text-[17px] font-light text-white/50 leading-[1.8] mt-8 max-w-[560px]">
              We measure our success by our clients&apos; outcomes — not lines of
              code shipped. Every case study here represents a real problem
              solved, a real product launched, and a real business transformed.
            </p>
          </RevealWrapper>
        </div>
      </section>

      {/* ── Featured Case Study ── */}
      <section className="bg-white border-t border-rule py-[100px] px-16 max-lg:px-8 max-md:px-6 max-md:py-16">
        <div className="max-w-[1280px] mx-auto">
          <RevealWrapper>
            <div className="text-[10px] font-medium tracking-[0.22em] uppercase text-muted mb-10">
              Featured Project
            </div>
            <div className="grid grid-cols-[3fr_2fr] gap-20 items-start max-lg:grid-cols-1 max-lg:gap-12">
              {/* Left */}
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <span className="font-serif text-[13px] text-muted">{featured.idx}</span>
                  <span className="block w-8 h-px bg-rule" />
                  <span
                    className="text-[10px] font-medium tracking-[0.16em] uppercase px-3 py-1 border"
                    style={{ color: featured.accent, borderColor: `${featured.accent}40` }}
                  >
                    {featured.industry}
                  </span>
                </div>

                {/* Logo */}
                <div className="mb-7 h-10 flex items-center">
                  {featured.logoSvg ? (
                    <div>{featured.logoSvg}</div>
                  ) : featured.logoUrl ? (
                    <img
                      src={featured.logoUrl}
                      alt={featured.client}
                      className="max-h-10 max-w-[180px] object-contain"
                      style={featured.logoInvert ? { filter: "brightness(0)" } : undefined}
                    />
                  ) : (
                    <span className="text-[13px] font-medium tracking-[0.1em] uppercase text-ink">{featured.client}</span>
                  )}
                </div>

                <h2
                  className="font-serif font-normal text-ink leading-[1.1] tracking-[-0.02em] mb-6"
                  style={{ fontSize: "clamp(26px, 3.5vw, 48px)" }}
                >
                  {featured.headline}
                </h2>

                <p className="text-[16px] font-light text-body-text leading-[1.8] mb-10 max-w-[560px]">
                  {featured.desc}
                </p>

                {/* Tech */}
                <div className="flex flex-wrap gap-2 mb-10">
                  {featured.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-normal tracking-[0.08em] px-4 py-2 border border-rule text-ink bg-off hover:border-gold hover:text-gold transition-colors duration-200 cursor-default"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <Link
                  href="/start-a-project"
                  className="inline-flex items-center gap-3 text-[12px] font-medium tracking-[0.14em] uppercase text-ink bg-gold px-8 py-[16px] no-underline hover:bg-gold-lt hover:tracking-[0.18em] transition-all duration-200"
                >
                  Start a Similar Project
                  <ArrowUpRight size={14} />
                </Link>
              </div>

              {/* Right — Metrics */}
              <div className="flex flex-col gap-4">
                {featured.metrics.map((m) => (
                  <div
                    key={m.label}
                    className="p-10 border border-rule bg-off max-md:p-8"
                  >
                    <div
                      className="font-serif font-light leading-none tracking-[-0.03em] mb-2"
                      style={{ fontSize: "clamp(40px, 5vw, 64px)", color: featured.accent }}
                    >
                      {m.value}
                      {m.sup && (
                        <span className="text-[0.4em] align-super ml-0.5 font-normal">{m.sup}</span>
                      )}
                    </div>
                    <div className="text-[12px] font-light tracking-[0.08em] text-muted uppercase">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </RevealWrapper>
        </div>
      </section>

      {/* ── Case Studies Grid ── */}
      <section className="bg-off border-t border-rule py-[100px] px-16 max-lg:px-8 max-md:px-6 max-md:py-16">
        <div className="max-w-[1280px] mx-auto">
          <RevealWrapper>
            <div className="text-[10px] font-medium tracking-[0.22em] uppercase text-muted mb-12">
              More Work
            </div>
          </RevealWrapper>

          <StaggerContainer className="grid grid-cols-2 gap-8 max-lg:grid-cols-1 max-md:gap-6">
            {rest.map((cs) => (
              <StaggerItem key={cs.id}>
                <div className="group bg-white border border-rule p-10 flex flex-col h-full hover:border-gold/40 transition-all duration-300 max-md:p-8">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-4">
                      <span className="font-serif text-[13px] text-muted">{cs.idx}</span>
                      <span className="block w-6 h-px bg-rule" />
                      <span
                        className="text-[10px] font-medium tracking-[0.14em] uppercase px-3 py-1 border"
                        style={{ color: cs.accent, borderColor: `${cs.accent}40` }}
                      >
                        {cs.industry}
                      </span>
                    </div>
                  </div>

                  {/* Logo / Client */}
                  <div className="h-9 flex items-center mb-4">
                    {cs.logoSvg ? (
                      <div>{cs.logoSvg}</div>
                    ) : cs.logoUrl ? (
                      <img
                        src={cs.logoUrl}
                        alt={cs.client}
                        className="max-h-9 max-w-[160px] object-contain"
                        style={cs.logoInvert ? { filter: "brightness(0)" } : undefined}
                      />
                    ) : (
                      <span className="text-[11px] font-medium tracking-[0.16em] uppercase text-muted">{cs.client}</span>
                    )}
                  </div>

                  {/* Headline */}
                  <h3
                    className="font-serif font-normal text-ink leading-[1.2] tracking-[-0.02em] mb-5"
                    style={{ fontSize: "clamp(20px, 2vw, 26px)" }}
                  >
                    {cs.headline}
                  </h3>

                  <p className="text-[14px] font-light text-body-text leading-[1.8] mb-8 flex-grow">
                    {cs.desc}
                  </p>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4 mb-8 border-t border-rule pt-8">
                    {cs.metrics.map((m) => (
                      <div key={m.label}>
                        <div
                          className="font-serif font-light leading-none tracking-[-0.02em] mb-1"
                          style={{ fontSize: "clamp(22px, 2.5vw, 32px)", color: cs.accent }}
                        >
                          {m.value}
                          {m.sup && (
                            <span className="text-[0.45em] align-super ml-0.5 font-normal">{m.sup}</span>
                          )}
                        </div>
                        <div className="text-[10px] font-light tracking-[0.06em] text-muted uppercase leading-[1.4]">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Tech */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {cs.tech.slice(0, 4).map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-normal tracking-[0.06em] px-3 py-1.5 border border-rule text-ink hover:border-gold hover:text-gold transition-colors duration-200 cursor-default"
                      >
                        {t}
                      </span>
                    ))}
                    {cs.tech.length > 4 && (
                      <span className="text-[10px] font-normal tracking-[0.06em] px-3 py-1.5 border border-rule text-muted">
                        +{cs.tech.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* CTA */}
                  <Link
                    href="/start-a-project"
                    className="inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.14em] uppercase text-gold no-underline group-hover:gap-3 transition-all duration-200"
                  >
                    Start a Similar Project
                    <ArrowUpRight size={13} />
                  </Link>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
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
              Ready to be our
              <br />
              <em className="italic text-gold-lt">next case study?</em>
            </h2>
            <p className="text-[15px] font-light text-white/45 mt-5 max-w-[460px] leading-[1.7]">
              Tell us about your product, your problem, and your timeline. We&apos;ll
              tell you exactly how we&apos;d approach it — no fluff, no obligation.
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
