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
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const industries: {
  icon: LucideIcon;
  name: string;
  desc: string;
  href: string;
}[] = [
  {
    icon: HeartPulse,
    name: "Healthcare & MedTech",
    desc: "HIPAA-compliant platforms, telehealth apps, EHR integrations, and medical device software.",
    href: "/industries#healthcare",
  },
  {
    icon: TrendingUp,
    name: "FinTech & Financial Services",
    desc: "Trading platforms, payment systems, compliance tools, and wealth management applications.",
    href: "/industries#fintech",
  },
  {
    icon: ShoppingBag,
    name: "E-Commerce & Retail",
    desc: "Headless storefronts, inventory systems, personalisation engines, and omnichannel experiences.",
    href: "/industries#ecommerce",
  },
  {
    icon: Scale,
    name: "Legal & LegalTech",
    desc: "Case management, document automation, compliance platforms, and legal workflow tools.",
    href: "/industries#legal",
  },
  {
    icon: Building2,
    name: "Real Estate & PropTech",
    desc: "Property marketplaces, CRM platforms, virtual tours, and asset management software.",
    href: "/industries#proptech",
  },
  {
    icon: Layers,
    name: "SaaS & B2B Software",
    desc: "Multi-tenant platforms, API-first architectures, billing integrations, and enterprise dashboards.",
    href: "/industries#saas",
  },
];

export default function IndustriesSection() {
  return (
    <section
      id="industries"
      className="max-w-[1280px] mx-auto px-16 py-[120px] max-lg:px-8 max-md:px-6 max-md:py-16"
      aria-labelledby="industries-heading"
    >
      {/* Header */}
      <RevealWrapper className="mb-20">
        <div className="text-[11px] tracking-[0.2em] uppercase text-muted mb-5 flex items-center gap-3">
          <span className="block w-6 h-px bg-rule" />
          Industries We Serve
        </div>
        <h2
          id="industries-heading"
          className="font-serif font-light leading-none tracking-[-0.025em] text-ink"
          style={{ fontSize: "clamp(36px, 5.5vw, 78px)" }}
        >
          Deep Domain<br />
          <em className="italic text-gold">Expertise.</em>
        </h2>
      </RevealWrapper>

      {/* Industries grid */}
      <StaggerContainer className="grid grid-cols-3 border-t border-l border-rule max-lg:grid-cols-2 max-sm:grid-cols-1">
        {industries.map((ind) => {
          const Icon = ind.icon;
          return (
            <StaggerItem key={ind.name}>
              <Link
                href={ind.href}
                className="group relative p-10 border-r border-b border-rule hover:bg-off transition-colors duration-200 no-underline overflow-hidden max-md:p-7 block h-full"
              >
                <span className="mb-5 block text-gold" aria-hidden="true">
                  <Icon size={24} strokeWidth={1.5} />
                </span>
                <h3 className="font-serif text-[22px] font-normal text-ink mb-2.5 leading-tight">
                  {ind.name}
                </h3>
                <p className="text-[13px] font-light text-body-text leading-[1.6]">
                  {ind.desc}
                </p>
                <span
                  className="absolute top-9 right-8 text-[16px] text-gold opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  aria-hidden="true"
                >
                  →
                </span>
              </Link>
            </StaggerItem>
          );
        })}
      </StaggerContainer>
    </section>
  );
}
