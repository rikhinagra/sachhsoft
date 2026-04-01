import type { Metadata } from "next";
import Link from "next/link";
import RevealWrapper from "@/components/ui/RevealWrapper";
import {
  MonitorSmartphone,
  Cloud,
  BrainCircuit,
  Users,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Services — Full-Spectrum Engineering",
  description:
    "Product design & development, cloud & DevOps infrastructure, AI & automation integration, and dedicated team augmentation — delivered by SACHHSOFT from Chicago, globally.",
  alternates: { canonical: "https://sachhsoft.com/services" },
  openGraph: {
    title: "Services — Full-Spectrum Software Engineering | SACHHSOFT",
    description: "Product design, cloud DevOps, AI integration, and dedicated team augmentation. Bespoke engineering from Chicago, delivered globally.",
    url: "https://sachhsoft.com/services",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Services — SACHHSOFT",
    description: "Product design, cloud DevOps, AI integration, and dedicated team augmentation.",
    images: ["/og-image.jpg"],
  },
};

const services = [
  {
    id: "product-design",
    idx: "01",
    icon: MonitorSmartphone,
    name: "Product Design & Development",
    tagline: "From first sketch to production: shipped fast, built to last.",
    desc: "We design and engineer digital products end-to-end. Whether you're launching a new MVP, rebuilding an ageing platform, or scaling an e-commerce experience, our teams combine product thinking with engineering rigour to ship software that users love and businesses depend on.",
    deliverables: [
      "UX Research & Information Architecture",
      "UI Design & Interactive Prototyping",
      "Web Application Development (React, Next.js)",
      "Mobile Apps (React Native, iOS, Android)",
      "E-Commerce & Headless Commerce",
      "API Design & Third-Party Integrations",
      "QA, Automated Testing & Launch Support",
    ],
    tech: ["React", "Next.js", "TypeScript", "React Native", "Java", "Kotlin", "Swift", "Figma", "Node.js", "GraphQL", "PostgreSQL", "Stripe"],
    bg: "bg-white",
  },
  {
    id: "cloud-devops",
    idx: "02",
    icon: Cloud,
    name: "Cloud, DevOps & Infrastructure",
    tagline: "Scale invisibly. Deploy with confidence. Never go down.",
    desc: "Reliability is not optional. It is the product. We architect cloud environments on AWS and Azure that absorb traffic spikes without flinching, automate your deployment pipelines, and harden your infrastructure against failure. You ship faster. Your users never notice.",
    deliverables: [
      "Cloud Architecture Design (AWS, Azure, GCP)",
      "Kubernetes & Container Orchestration",
      "CI/CD Pipeline Automation",
      "Infrastructure as Code (Terraform, Pulumi)",
      "Monitoring, Alerting & Observability",
      "Security Hardening & Compliance (SOC 2, HIPAA)",
      "Disaster Recovery & High Availability Planning",
    ],
    tech: ["AWS", "Azure", "Kubernetes", "Docker", "Terraform", "GitHub Actions", "Datadog", "Prometheus", "ArgoCD"],
    bg: "bg-off",
  },
  {
    id: "ai-automation",
    idx: "03",
    icon: BrainCircuit,
    name: "AI & Automation Integration",
    tagline: "LLMs, agents, and automation, built into the core of your product.",
    desc: "We don't bolt AI onto the side of your product. We embed it into the foundation. From LLM-powered features and RAG knowledge systems to fully autonomous agentic workflows, we help companies move from AI experiments to production systems that actually work at scale.",
    deliverables: [
      "LLM Integration (OpenAI, Anthropic, Gemini)",
      "RAG Pipelines & Knowledge Bases",
      "Agentic Workflow Design & Engineering",
      "AI-Powered Feature Development",
      "Custom Fine-Tuning & Model Evaluation",
      "Intelligent Document Processing",
      "Workflow Automation & RPA",
    ],
    tech: ["OpenAI", "Anthropic Claude", "LangChain", "LlamaIndex", "Pinecone", "Python", "FastAPI", "pgvector", "Zapier"],
    bg: "bg-white",
  },
  {
    id: "team-augmentation",
    idx: "04",
    icon: Users,
    name: "Teams & Talent Integration",
    tagline: "Senior engineers who embed in your team. No ramp-up, immediate velocity.",
    desc: "When you need to move faster than your current team allows, we place experienced engineers directly inside your workflow. We use your tools, join your standups, and commit to your codebase. No account managers in the middle, no offshore handoffs. Just exceptional engineers who feel like they've been there from day one.",
    deliverables: [
      "Dedicated Senior Engineers & Tech Leads",
      "Full Sprint Integration (Jira, Linear, Notion)",
      "Architecture & Code Review Consulting",
      "Staff Augmentation (1–50+ engineers)",
      "CTO-as-a-Service & Technical Advisory",
      "Legacy System Modernisation",
      "Fractional Engineering Leadership",
    ],
    tech: ["Any stack", "Jira", "Linear", "GitHub", "Slack", "Notion", "Figma", "Confluence", "Loom"],
    bg: "bg-off",
  },
];

const differentiators = [
  {
    num: "01",
    title: "One team, full accountability",
    desc: "Design, engineering, and infrastructure under one roof. No finger-pointing between vendors. One point of contact who owns the outcome.",
  },
  {
    num: "02",
    title: "Senior talent, always",
    desc: "Every engagement is staffed with senior-level engineers and designers. No juniors learning on your budget.",
  },
  {
    num: "03",
    title: "AI-augmented velocity",
    desc: "Our engineers ship with AI tooling embedded in every workflow, moving 3× faster without compromising code quality.",
  },
  {
    num: "04",
    title: "Long-term partnerships",
    desc: "Our average client relationship is 2.5 years. We don't disappear at launch. We stay to scale what we build.",
  },
];

export default function ServicesPage() {
  return (
    <main>
      {/* ── Hero ── */}
      <section className="bg-ink pt-[152px] pb-[100px] px-16 max-lg:px-8 max-md:px-6 max-md:pt-[120px] max-md:pb-16">
        <div className="max-w-[1280px] mx-auto">
          <RevealWrapper>
            <div className="text-[11px] tracking-[0.2em] uppercase text-gold mb-6 flex items-center gap-3">
              <span className="block w-6 h-px bg-gold/40" />
              What We Build
              <span className="block w-6 h-px bg-gold/40" />
            </div>
            <h1
              className="font-serif font-light text-white leading-none tracking-[-0.03em] max-w-[800px]"
              style={{ fontSize: "clamp(40px, 7vw, 96px)" }}
            >
              Full-Spectrum
              <br />
              <em className="italic text-gold-lt">Engineering.</em>
            </h1>
            <p className="text-[17px] font-light text-white/50 leading-[1.8] mt-8 max-w-[560px]">
              Four core practices. One seamlessly accountable team. Everything
              you need to design, build, scale, and maintain exceptional
              software, without the coordination overhead.
            </p>

            {/* Quick nav */}
            <div className="flex flex-wrap gap-4 mt-12">
              {services.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="text-[11px] font-medium tracking-[0.1em] uppercase text-white/50 border border-white/15 px-5 py-2.5 no-underline hover:border-gold hover:text-gold transition-all duration-200"
                >
                  {s.idx} {s.name}
                </a>
              ))}
            </div>
          </RevealWrapper>
        </div>
      </section>

      {/* ── Service Sections ── */}
      {services.map((s) => {
        const Icon = s.icon;
        return (
          <section
            key={s.id}
            id={s.id}
            className={`${s.bg} py-[100px] px-16 border-t border-rule max-lg:px-8 max-md:px-6 max-md:py-16`}
          >
            <div className="max-w-[1280px] mx-auto">
              <RevealWrapper className="grid grid-cols-[3fr_2fr] gap-20 items-start max-lg:grid-cols-1 max-lg:gap-12">
                {/* Left */}
                <div>
                  <div className="flex items-center gap-4 mb-8">
                    <span className="font-serif text-[13px] text-muted">{s.idx}</span>
                    <span className="block w-8 h-px bg-rule" />
                    <span className="text-gold">
                      <Icon size={20} strokeWidth={1.5} />
                    </span>
                  </div>
                  <h2
                    className="font-serif font-normal text-ink leading-[1.1] tracking-[-0.02em] mb-4"
                    style={{ fontSize: "clamp(28px, 3.5vw, 48px)" }}
                  >
                    {s.name}
                  </h2>
                  <p className="text-[14px] font-medium text-gold tracking-[0.02em] mb-6">
                    {s.tagline}
                  </p>
                  <p className="text-[16px] font-light text-body-text leading-[1.8] mb-10 max-w-[560px]">
                    {s.desc}
                  </p>

                  {/* Deliverables */}
                  <div>
                    <div className="text-[10px] font-medium tracking-[0.2em] uppercase text-muted mb-5">
                      What&apos;s Included
                    </div>
                    <ul className="space-y-3">
                      {s.deliverables.map((d) => (
                        <li key={d} className="flex items-start gap-3">
                          <CheckCircle2
                            size={15}
                            strokeWidth={1.5}
                            className="text-gold flex-shrink-0 mt-0.5"
                          />
                          <span className="text-[14px] font-light text-body-text leading-[1.6]">
                            {d}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right — Tech */}
                <div className="flex flex-col gap-6">
                  <div className={`p-10 border border-rule max-md:p-8 ${s.bg === "bg-white" ? "bg-off" : "bg-white"}`}>
                    <div className="text-[10px] font-medium tracking-[0.2em] uppercase text-muted mb-6">
                      Technologies & Tools
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {s.tech.map((t) => (
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
                    Start a {s.name.split(" ")[0]} Project →
                  </Link>
                </div>
              </RevealWrapper>
            </div>
          </section>
        );
      })}

      {/* ── Why Sachhsoft ── */}
      <section className="bg-ink py-[120px] px-16 border-t border-white/10 max-lg:px-8 max-md:px-6 max-md:py-16">
        <div className="max-w-[1280px] mx-auto">
          <RevealWrapper className="mb-16 max-md:mb-10">
            <div className="text-[11px] tracking-[0.2em] uppercase text-gold mb-5 flex items-center gap-3">
              <span className="block w-6 h-px bg-gold/40" />
              Why Sachhsoft
              <span className="block w-6 h-px bg-gold/40" />
            </div>
            <h2
              className="font-serif font-light text-white leading-none tracking-[-0.025em]"
              style={{ fontSize: "clamp(30px, 4.5vw, 60px)" }}
            >
              What makes us different
              <br />
              <em className="italic text-gold-lt">from every other agency.</em>
            </h2>
          </RevealWrapper>

          <RevealWrapper delay={100}>
            <div className="grid grid-cols-2 gap-px bg-white/8 border border-white/8 max-md:grid-cols-1">
              {differentiators.map((d) => (
                <div key={d.num} className="bg-ink p-10 max-md:p-8">
                  <div className="font-serif text-[13px] text-gold/60 mb-4">{d.num}</div>
                  <h3 className="font-serif text-[22px] font-normal text-white tracking-[-0.01em] mb-3">
                    {d.title}
                  </h3>
                  <p className="text-[14px] font-light text-white/50 leading-[1.75]">
                    {d.desc}
                  </p>
                </div>
              ))}
            </div>
          </RevealWrapper>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-off py-[100px] px-16 border-t border-rule max-lg:px-8 max-md:px-6 max-md:py-16">
        <RevealWrapper className="max-w-[1280px] mx-auto flex items-center justify-between gap-12 max-lg:flex-col max-lg:items-start max-lg:gap-10">
          <div>
            <h2
              className="font-serif font-light text-ink leading-none tracking-[-0.025em]"
              style={{ fontSize: "clamp(30px, 4.5vw, 60px)" }}
            >
              Ready to talk about
              <br />
              <em className="italic text-gold">your project?</em>
            </h2>
            <p className="text-[15px] font-light text-body-text mt-5 max-w-[460px] leading-[1.7]">
              We review every submission personally and respond within one
              business day. No automated replies, no sales sequences.
            </p>
          </div>
          <div className="flex flex-col gap-4 items-end max-lg:items-start flex-shrink-0">
            <Link
              href="/start-a-project"
              className="text-[12px] font-medium tracking-[0.14em] uppercase text-ink bg-gold px-12 py-[18px] no-underline whitespace-nowrap hover:bg-gold-lt hover:tracking-[0.18em] transition-all duration-200"
            >
              Start a Project
            </Link>
            <span className="text-[12px] font-light text-muted tracking-[0.06em]">
              Responds within 1 business day
            </span>
          </div>
        </RevealWrapper>
      </section>
    </main>
  );
}
