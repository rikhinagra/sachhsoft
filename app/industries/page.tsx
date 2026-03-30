import type { Metadata } from "next";
import Link from "next/link";
import RevealWrapper from "@/components/ui/RevealWrapper";
import { StaggerContainer, StaggerItem } from "@/components/ui/StaggerContainer";
import {
  HeartPulse,
  TrendingUp,
  ShoppingBag,
  Scale,
  Building2,
  Layers,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Industries — Deep Domain Expertise",
  description:
    "SACHHSOFT builds bespoke software across Healthcare, FinTech, E-Commerce, Legal, Real Estate, and SaaS — with deep domain expertise in each vertical.",
  alternates: { canonical: "https://sachhsoft.com/industries" },
};

const overview = [
  { icon: HeartPulse, name: "Healthcare & MedTech", id: "healthcare" },
  { icon: TrendingUp, name: "FinTech & Financial Services", id: "fintech" },
  { icon: ShoppingBag, name: "E-Commerce & Retail", id: "ecommerce" },
  { icon: Scale, name: "Legal & LegalTech", id: "legal" },
  { icon: Building2, name: "Real Estate & PropTech", id: "proptech" },
  { icon: Layers, name: "SaaS & B2B Software", id: "saas" },
];

const industries = [
  {
    id: "healthcare",
    idx: "01",
    icon: HeartPulse,
    name: "Healthcare & MedTech",
    tagline: "HIPAA-compliant. Clinically rigorous. Built to save time and lives.",
    desc: "Healthcare software is unforgiving — a wrong architecture decision doesn't just cost money, it puts patients at risk. We've built across the full healthcare stack: telehealth platforms, EHR integrations, patient portals, and medical device software. We know HIPAA inside out, and we build with compliance as a foundation, not an afterthought.",
    challenges: [
      "HIPAA & HITECH compliance from day one",
      "HL7 FHIR & EHR system integrations (Epic, Cerner, Athena)",
      "Real-time clinical data processing and alerting",
      "Patient-facing mobile apps with high accessibility standards",
      "Medical device connectivity and IoT data pipelines",
    ],
    solutions: [
      "Telehealth & Virtual Care Platforms",
      "EHR/EMR Integration & Interoperability",
      "Patient Portals & Engagement Apps",
      "Medical Device & IoT Software",
      "Clinical Decision Support Tools",
      "Healthcare Analytics Dashboards",
    ],
    tech: ["HL7 FHIR", "AWS HIPAA", "React Native", "Node.js", "PostgreSQL", "Twilio", "WebRTC", "Epic API"],
    bg: "bg-white",
  },
  {
    id: "fintech",
    idx: "02",
    icon: TrendingUp,
    name: "FinTech & Financial Services",
    tagline: "Regulated, secure, and built to process millions without flinching.",
    desc: "Financial software demands a level of precision most teams underestimate. Regulatory requirements shift, transaction volumes spike, and security vulnerabilities are existential. We've built trading platforms, payment infrastructure, compliance tools, and wealth management applications for clients who cannot afford downtime or data breaches.",
    challenges: [
      "PCI-DSS compliance and financial data security",
      "Real-time transaction processing at scale",
      "Regulatory reporting and audit trail requirements",
      "Third-party financial API integrations (Plaid, Stripe, banking APIs)",
      "Fraud detection and risk management systems",
    ],
    solutions: [
      "Payment Processing & Gateway Integration",
      "Trading & Investment Platforms",
      "Compliance & Regulatory Reporting Tools",
      "Digital Banking & Neobank Platforms",
      "Wealth Management Applications",
      "Fraud Detection & Risk Engines",
    ],
    tech: ["Stripe", "Plaid", "AWS", "Python", "PostgreSQL", "Redis", "Kafka", "Kubernetes"],
    bg: "bg-off",
  },
  {
    id: "ecommerce",
    idx: "03",
    icon: ShoppingBag,
    name: "E-Commerce & Retail",
    tagline: "From first click to checkout — fast, personalised, and built to scale.",
    desc: "E-commerce is won and lost on performance and experience. A one-second delay costs conversions. A clunky checkout loses customers forever. We build headless storefronts, personalisation engines, inventory systems, and omnichannel experiences that convert visitors into loyal customers — and scale to handle peak traffic without breaking.",
    challenges: [
      "Sub-second page loads at high traffic volumes",
      "Personalisation at scale without sacrificing privacy",
      "Omnichannel inventory and order management",
      "Complex promotion, discount, and loyalty logic",
      "Third-party marketplace and logistics integrations",
    ],
    solutions: [
      "Headless & Composable Commerce Platforms",
      "Custom Storefront Development",
      "Inventory & Order Management Systems",
      "Personalisation & Recommendation Engines",
      "Loyalty & Rewards Programmes",
      "Marketplace & Multi-Vendor Platforms",
    ],
    tech: ["Next.js", "Shopify", "Algolia", "Stripe", "Contentful", "Vercel", "Redis", "Elasticsearch"],
    bg: "bg-white",
  },
  {
    id: "legal",
    idx: "04",
    icon: Scale,
    name: "Legal & LegalTech",
    tagline: "Automating the repetitive. Accelerating the billable.",
    desc: "Legal teams are drowning in documents, deadlines, and manual processes that should have been automated years ago. We build case management systems, document automation tools, e-signature workflows, and compliance platforms that free lawyers to focus on what only they can do — and dramatically reduce operational overhead for law firms and legal departments.",
    challenges: [
      "Secure document storage, versioning, and access control",
      "Complex workflow automation across multi-party processes",
      "Court filing integrations and deadline management",
      "AI-powered document review and contract analysis",
      "Client portal and matter management systems",
    ],
    solutions: [
      "Case & Matter Management Systems",
      "Document Automation & Assembly",
      "E-Signature & Contract Lifecycle Management",
      "Legal Research & AI Document Review",
      "Client Portals & Communication Tools",
      "Compliance & Regulatory Tracking Platforms",
    ],
    tech: ["Node.js", "React", "PostgreSQL", "AWS S3", "OpenAI", "DocuSign API", "Stripe", "Elasticsearch"],
    bg: "bg-off",
  },
  {
    id: "proptech",
    idx: "05",
    icon: Building2,
    name: "Real Estate & PropTech",
    tagline: "Making property data actionable and experiences unforgettable.",
    desc: "Real estate is being reshaped by data, visualisation, and digital-first buyer expectations. We build property marketplaces, CRM platforms, virtual tour experiences, and asset management tools that give agents, buyers, and investors the clarity they need to make faster, smarter decisions.",
    challenges: [
      "Aggregating and normalising property data from multiple sources",
      "Real-time listing updates and availability management",
      "3D visualisation, virtual tours, and floor plan rendering",
      "Complex search, filter, and mapping experiences",
      "Transaction management and document workflows",
    ],
    solutions: [
      "Property Search & Marketplace Platforms",
      "Virtual Tour & 3D Visualisation Tools",
      "Real Estate CRM & Agent Platforms",
      "Asset & Portfolio Management Software",
      "Mortgage & Transaction Workflow Tools",
      "Investment Analytics Dashboards",
    ],
    tech: ["React", "Next.js", "Mapbox", "Google Maps API", "Three.js", "Node.js", "PostgreSQL", "AWS"],
    bg: "bg-white",
  },
  {
    id: "saas",
    idx: "06",
    icon: Layers,
    name: "SaaS & B2B Software",
    tagline: "Multi-tenant. API-first. Built to grow from 10 users to 10 million.",
    desc: "SaaS architecture is deceptively complex. Multi-tenancy, usage-based billing, enterprise SSO, API rate limiting, and white-labelling all need to be designed correctly from the start — or you'll spend years paying down technical debt. We've built SaaS platforms from scratch and scaled them to enterprise, with the architecture decisions that make the difference.",
    challenges: [
      "Multi-tenant data isolation and security architecture",
      "Usage-based and subscription billing complexity",
      "Enterprise SSO, SAML, and permission systems",
      "API design, versioning, and developer experience",
      "White-labelling and custom domain support",
    ],
    solutions: [
      "Multi-Tenant SaaS Platform Development",
      "Subscription & Usage-Based Billing Systems",
      "Enterprise SSO & Role-Based Access Control",
      "API-First Architecture & Developer Portals",
      "Analytics, Reporting & Embedded BI",
      "White-Label & Multi-Brand Platforms",
    ],
    tech: ["React", "Next.js", "Node.js", "PostgreSQL", "Stripe Billing", "AWS", "Auth0", "Kubernetes"],
    bg: "bg-off",
  },
];

export default function IndustriesPage() {
  return (
    <main>
      {/* ── Hero ── */}
      <section className="bg-ink pt-[152px] pb-[100px] px-16 max-lg:px-8 max-md:px-6 max-md:pt-[120px] max-md:pb-16">
        <div className="max-w-[1280px] mx-auto">
          <RevealWrapper>
            <div className="text-[11px] tracking-[0.2em] uppercase text-gold mb-6 flex items-center gap-3">
              <span className="block w-6 h-px bg-gold/40" />
              Industries We Serve
              <span className="block w-6 h-px bg-gold/40" />
            </div>
            <h1
              className="font-serif font-light text-white leading-none tracking-[-0.03em] max-w-[800px]"
              style={{ fontSize: "clamp(40px, 7vw, 96px)" }}
            >
              Deep Domain
              <br />
              <em className="italic text-gold-lt">Expertise.</em>
            </h1>
            <p className="text-[17px] font-light text-white/50 leading-[1.8] mt-8 max-w-[560px]">
              We don&apos;t learn your industry on your budget. Every vertical
              we serve comes with years of accumulated domain knowledge,
              regulatory awareness, and battle-tested patterns.
            </p>

            {/* Quick nav */}
            <div className="flex flex-wrap gap-3 mt-12">
              {overview.map((ind) => (
                <a
                  key={ind.id}
                  href={`#${ind.id}`}
                  className="text-[11px] font-medium tracking-[0.1em] uppercase text-white/50 border border-white/15 px-5 py-2.5 no-underline hover:border-gold hover:text-gold transition-all duration-200"
                >
                  {ind.name}
                </a>
              ))}
            </div>
          </RevealWrapper>
        </div>
      </section>

      {/* ── Overview Grid ── */}
      <section className="bg-white border-t border-rule">
        <div className="max-w-[1280px] mx-auto px-16 py-[80px] max-lg:px-8 max-md:px-6 max-md:py-14">
          <StaggerContainer className="grid grid-cols-3 border-t border-l border-rule max-lg:grid-cols-2 max-sm:grid-cols-1">
            {overview.map((ind) => {
              const Icon = ind.icon;
              return (
                <StaggerItem key={ind.id}>
                  <a
                    href={`#${ind.id}`}
                    className="group relative p-10 border-r border-b border-rule hover:bg-off transition-colors duration-200 no-underline overflow-hidden block h-full max-md:p-7"
                  >
                    <span className="mb-5 block text-gold">
                      <Icon size={24} strokeWidth={1.5} />
                    </span>
                    <h2 className="font-serif text-[20px] font-normal text-ink leading-tight">
                      {ind.name}
                    </h2>
                    <span className="absolute top-9 right-8 text-[16px] text-gold opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      →
                    </span>
                  </a>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* ── Industry Deep-Dives ── */}
      {industries.map((ind) => {
        const Icon = ind.icon;
        return (
          <section
            key={ind.id}
            id={ind.id}
            className={`${ind.bg} py-[100px] px-16 border-t border-rule max-lg:px-8 max-md:px-6 max-md:py-16`}
          >
            <div className="max-w-[1280px] mx-auto">
              <RevealWrapper className="grid grid-cols-[3fr_2fr] gap-20 items-start max-lg:grid-cols-1 max-lg:gap-12">
                {/* Left */}
                <div>
                  <div className="flex items-center gap-4 mb-8">
                    <span className="font-serif text-[13px] text-muted">{ind.idx}</span>
                    <span className="block w-8 h-px bg-rule" />
                    <span className="text-gold">
                      <Icon size={20} strokeWidth={1.5} />
                    </span>
                  </div>
                  <h2
                    className="font-serif font-normal text-ink leading-[1.1] tracking-[-0.02em] mb-4"
                    style={{ fontSize: "clamp(28px, 3.5vw, 48px)" }}
                  >
                    {ind.name}
                  </h2>
                  <p className="text-[14px] font-medium text-gold tracking-[0.02em] mb-6">
                    {ind.tagline}
                  </p>
                  <p className="text-[16px] font-light text-body-text leading-[1.8] mb-10 max-w-[560px]">
                    {ind.desc}
                  </p>

                  {/* Challenges */}
                  <div className="mb-10">
                    <div className="text-[10px] font-medium tracking-[0.2em] uppercase text-muted mb-5">
                      Challenges We Solve
                    </div>
                    <ul className="space-y-3">
                      {ind.challenges.map((c) => (
                        <li key={c} className="flex items-start gap-3">
                          <CheckCircle2 size={15} strokeWidth={1.5} className="text-gold flex-shrink-0 mt-0.5" />
                          <span className="text-[14px] font-light text-body-text leading-[1.6]">{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right */}
                <div className="flex flex-col gap-6">
                  {/* Solutions */}
                  <div className={`p-10 border border-rule max-md:p-8 ${ind.bg === "bg-white" ? "bg-off" : "bg-white"}`}>
                    <div className="text-[10px] font-medium tracking-[0.2em] uppercase text-muted mb-6">
                      What We Build
                    </div>
                    <ul className="space-y-3">
                      {ind.solutions.map((s) => (
                        <li key={s} className="flex items-center gap-3 text-[13px] font-light text-body-text">
                          <span className="w-1 h-1 rounded-full bg-gold flex-shrink-0" />
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech */}
                  <div className={`p-10 border border-rule max-md:p-8 ${ind.bg === "bg-white" ? "bg-off" : "bg-white"}`}>
                    <div className="text-[10px] font-medium tracking-[0.2em] uppercase text-muted mb-5">
                      Technologies
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {ind.tech.map((t) => (
                        <span
                          key={t}
                          className="text-[11px] font-normal tracking-[0.08em] px-4 py-2 border border-rule text-ink bg-white hover:border-gold hover:text-gold transition-colors duration-200 cursor-default"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    href="/start-a-project"
                    className="text-[12px] font-medium tracking-[0.14em] uppercase text-ink bg-gold px-8 py-[16px] no-underline text-center hover:bg-gold-lt hover:tracking-[0.18em] transition-all duration-200"
                  >
                    Start a {ind.name.split(" ")[0]} Project →
                  </Link>
                </div>
              </RevealWrapper>
            </div>
          </section>
        );
      })}

      {/* ── CTA ── */}
      <section className="bg-ink py-[100px] px-16 border-t border-white/10 max-lg:px-8 max-md:px-6 max-md:py-16">
        <RevealWrapper className="max-w-[1280px] mx-auto flex items-center justify-between gap-12 max-lg:flex-col max-lg:items-start max-lg:gap-10">
          <div>
            <h2
              className="font-serif font-light text-white leading-none tracking-[-0.025em]"
              style={{ fontSize: "clamp(30px, 4.5vw, 60px)" }}
            >
              Don&apos;t see your industry?
              <br />
              <em className="italic text-gold-lt">Let&apos;s talk anyway.</em>
            </h2>
            <p className="text-[15px] font-light text-white/45 mt-5 max-w-[460px] leading-[1.7]">
              We&apos;ve built across verticals not listed here. If your
              problem is complex, high-stakes, and needs to be done right —
              we want to hear about it.
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
