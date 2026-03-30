import Link from "next/link";
import RevealWrapper from "@/components/ui/RevealWrapper";

const services = [
  {
    idx: "01",
    name: "Product Design & Development",
    desc: "Web apps, mobile experiences, MVPs, and e-commerce — designed to convert and built to last. From first sketch to production release.",
    href: "/services#product-design",
  },
  {
    idx: "02",
    name: "Cloud, DevOps & Infrastructure",
    desc: "High-availability architectures on AWS and Azure. CI/CD pipelines, containerisation, and infrastructure that scales invisibly.",
    href: "/services#cloud-devops",
  },
  {
    idx: "03",
    name: "AI & Automation Integration",
    desc: "LLM integrations, RAG pipelines, agentic workflows, and intelligent automation embedded directly into your product.",
    href: "/services#ai-automation",
  },
  {
    idx: "04",
    name: "Teams & Talent Integration",
    desc: "Dedicated engineers who embed in your workflow, tools, and rhythm — no bloat, no ramp-up friction, just immediate velocity.",
    href: "/services#team-augmentation",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="max-w-[1280px] mx-auto px-16 py-[120px] max-lg:px-8 max-md:px-6 max-md:py-16">
      {/* Section header */}
      <RevealWrapper className="mb-20">
        <div className="text-[11px] tracking-[0.2em] uppercase text-muted mb-5 flex items-center gap-3">
          <span className="block w-6 h-px bg-rule" />
          What We Build
        </div>
        <h2
          className="font-serif font-light leading-none tracking-[-0.025em] text-ink"
          style={{ fontSize: "clamp(36px, 5.5vw, 78px)" }}
        >
          Full-Spectrum<br />
          <em className="italic text-gold">Engineering.</em>
        </h2>
        <p className="text-[16px] font-light text-body-text leading-[1.7] max-w-[480px] mt-6">
          Three core practices. One seamlessly accountable team.
        </p>
      </RevealWrapper>

      {/* Services list */}
      <div className="border-t border-rule">
        {services.map((s) => (
          <Link
            key={s.idx}
            href={s.href}
            className="group grid grid-cols-[80px_1fr_1fr_120px] gap-10 items-center px-0 py-8 border-b border-rule transition-all duration-200 hover:bg-off hover:-mx-8 hover:px-8 no-underline max-lg:grid-cols-[48px_1fr] max-lg:gap-4 max-lg:py-6"
          >
            <div className="font-serif text-[16px] text-muted font-normal max-lg:text-[14px]">{s.idx}</div>
            <div
              className="font-serif text-ink font-normal tracking-[-0.01em] leading-[1.15]"
              style={{ fontSize: "clamp(18px, 2.8vw, 36px)" }}
            >
              {s.name}
            </div>
            <div className="text-[14px] font-light text-body-text leading-[1.65] max-lg:hidden">
              {s.desc}
            </div>
            <div className="text-[20px] text-gold text-right opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 max-lg:hidden">
              →
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
