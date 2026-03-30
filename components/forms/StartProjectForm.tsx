"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Building2,
  Users,
  Rocket,
  Sparkles,
  RefreshCw,
  GitBranch,
  UsersRound,
  Zap,
  Calendar,
  Clock,
  Repeat,
  Gem,
  Brain,
  Handshake,
  Lock,
  Check,
  ArrowLeft,
  ChevronRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Step = 1 | 2 | 3 | 4;

const orgTypes: { value: string; icon: LucideIcon; title: string; desc: string }[] = [
  { value: "enterprise", icon: Building2,   title: "Enterprise",         desc: "500+ employees, complex integrations, governance requirements" },
  { value: "midsize",    icon: Users,        title: "Mid-Size Company",   desc: "50–500 employees, scaling operations, modernising systems" },
  { value: "startup",    icon: Rocket,       title: "Startup / Founder",  desc: "Pre-seed to Series B, building a new product, moving fast" },
];

const projectTypes: { value: string; icon: LucideIcon; title: string; desc: string }[] = [
  { value: "newproduct", icon: Sparkles,   title: "New Product from Scratch",       desc: "MVP, greenfield platform, or new digital venture" },
  { value: "rebuild",    icon: RefreshCw,  title: "Rebuild / Modernise",            desc: "Replace legacy systems, re-platform, or rewrite" },
  { value: "extend",     icon: GitBranch,  title: "Extend Existing Product",        desc: "Add features, integrations, or scale infrastructure" },
  { value: "team",       icon: UsersRound, title: "Dedicated Team / Augmentation",  desc: "Embed engineers alongside your existing team" },
];

const timelines: { value: string; icon: LucideIcon; title: string; desc: string }[] = [
  { value: "asap",     icon: Zap,      title: "ASAP / Urgent",        desc: "Need to be live within 8–12 weeks" },
  { value: "quarter",  icon: Calendar, title: "This Quarter",         desc: "3–4 months, planned delivery" },
  { value: "half",     icon: Clock,    title: "6–12 Months",          desc: "Multi-phase build, longer planning horizon" },
  { value: "ongoing",  icon: Repeat,   title: "Ongoing / Retainer",   desc: "Continuous development and iteration" },
];

const engagements = [
  { value: "project", title: "Fixed Project", desc: "Defined scope, timeline & budget" },
  { value: "team", title: "Dedicated Team", desc: "Full-time engineers embedded with you" },
  { value: "tm", title: "Time & Material", desc: "Flexible billing as scope evolves" },
];

const budgetLabels: Record<number, { display: string; context: string }> = {
  0: { display: "$25K", context: "Discovery & rapid prototype" },
  1: { display: "$35K", context: "Small MVP or feature build" },
  2: { display: "$50K", context: "Ideal for MVP or Phase 1 product" },
  3: { display: "$75K", context: "Full MVP with backend & mobile" },
  4: { display: "$100K", context: "Mid-size product build" },
  5: { display: "$150K", context: "Multi-feature platform build" },
  6: { display: "$200K", context: "Enterprise feature set" },
  7: { display: "$250K", context: "Large-scale product or migration" },
  8: { display: "$350K", context: "Enterprise platform" },
  9: { display: "$500K", context: "Full enterprise programme" },
  10: { display: "$500K+", context: "Strategic multi-year engagement" },
};

function OptionCard({
  value, icon: Icon, title, desc, selected, onSelect,
}: {
  value: string; icon?: LucideIcon; title: string; desc: string; selected: boolean; onSelect: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className="relative text-left border p-6 transition-all duration-200 hover:-translate-y-0.5"
      style={{
        borderColor: selected ? "#b8975a" : "#e4e1da",
        background: selected ? "rgba(184,151,90,0.08)" : "#ffffff",
      }}
    >
      {selected && (
        <span className="absolute top-3.5 right-4 bg-[rgba(184,151,90,0.12)] rounded-full w-5 h-5 flex items-center justify-center text-gold">
          <Check size={11} strokeWidth={2.5} />
        </span>
      )}
      {Icon && (
        <span className="mb-3 block text-gold">
          <Icon size={20} strokeWidth={1.5} />
        </span>
      )}
      <div className="text-[14px] font-medium text-ink mb-1 tracking-[-0.01em]">{title}</div>
      <div className="text-[12px] font-light text-muted leading-[1.55]">{desc}</div>
    </button>
  );
}

export default function StartProjectForm() {
  const [step, setStep] = useState<Step>(1);
  const [submitted, setSubmitted] = useState(false);

  // Form state
  const [orgType, setOrgType] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");

  const [projectType, setProjectType] = useState("");
  const [industry, setIndustry] = useState("");
  const [projectDesc, setProjectDesc] = useState("");

  const [timeline, setTimeline] = useState("");
  const [budget, setBudget] = useState(2);
  const [engagement, setEngagement] = useState("");

  const [source, setSource] = useState("");
  const [priorAgency, setPriorAgency] = useState("");
  const [additionalInfo, setAdditionalInfo] = useState("");
  const [ndaRequired, setNdaRequired] = useState(false);

  const proofPoints: { icon: LucideIcon; title: string; desc: string }[] = [
    { icon: Gem,       title: "Fully Bespoke. No Templates.", desc: "Every line of code is written for your specific domain, users, and growth trajectory." },
    { icon: Zap,       title: "Accelerated Delivery",         desc: "Our modern development workflow and seasoned 60-person team get you to market faster, without compromising quality." },
    { icon: Brain,     title: "Deep Domain Expertise",        desc: "HealthTech, FinTech, E-commerce, Legal Tech, Real Estate: we understand your compliance needs, not just your code." },
    { icon: Handshake, title: "Long-Term Partners",           desc: "We don't disappear at launch. Average client relationship is 2.5 years. Your growth is our mandate." },
  ];

  const handleSubmit = async () => {
    // TODO: connect to API route or email service (Resend, etc.)
    setSubmitted(true);
  };

  const stepLabels = ["About You", "Your Project", "Scope & Budget", "Final Details"];

  const inputCls =
    "w-full px-[18px] py-[14px] border border-rule bg-off text-ink font-sans text-[15px] font-light outline-none transition-all duration-200 focus:border-gold focus:bg-white placeholder:text-muted";

  return (
    <div className="min-h-screen bg-off">
      {/* Nav override */}
      <nav className="fixed top-0 left-0 right-0 z-[200] h-[68px] flex items-center justify-between px-14 bg-off/95 backdrop-blur-xl border-b border-rule max-md:px-6">
        <Link href="/" className="font-sans font-semibold text-[14px] tracking-[0.22em] uppercase text-ink no-underline">
          Sachhsoft
        </Link>
        <Link href="/" className="text-[13px] font-normal text-muted no-underline flex items-center gap-2 hover:text-ink transition-colors">
          <ArrowLeft size={14} strokeWidth={1.5} /> Back to site
        </Link>
      </nav>

      <div className="grid min-h-screen max-md:grid-cols-1" style={{ gridTemplateColumns: "420px 1fr" }}>
        {/* ── LEFT PANEL (sticky dark) ── */}
        <aside
          className="bg-ink px-[52px] py-[120px] sticky top-0 h-screen overflow-y-auto flex flex-col justify-between max-md:static max-md:h-auto max-md:px-8 max-md:py-20"
        >
          <div>
            <div className="text-[10px] font-medium tracking-[0.22em] uppercase text-gold mb-7 flex items-center gap-2.5">
              <span className="block w-5 h-px bg-gold" />
              Start a Project
            </div>
            <h1
              className="font-serif font-light leading-[.97] tracking-[-0.02em] text-white mb-8"
              style={{ fontSize: "clamp(38px, 4vw, 52px)" }}
            >
              Bespoke Software.<br />
              Built for<br />
              <em className="italic text-gold-lt">What&apos;s Next.</em>
            </h1>
            <p className="text-[15px] font-light text-white/50 leading-[1.75] mb-12">
              We craft <strong className="text-white/80 font-normal">custom digital products</strong> for enterprise teams, mid-size companies, and visionary founders, not templated solutions. Every engagement begins with deep discovery and ends with software that performs at scale.
            </p>

            <div className="flex flex-col gap-0">
              {proofPoints.map((p) => {
                const PIcon = p.icon;
                return (
                <div key={p.title} className="flex items-start gap-4 py-5 border-b border-white/7 first:border-t first:border-white/7">
                  <div className="w-9 h-9 rounded-lg bg-[rgba(184,151,90,0.12)] border border-[rgba(184,151,90,0.2)] flex items-center justify-center text-gold flex-shrink-0 mt-0.5">
                    <PIcon size={16} strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="text-[14px] font-medium text-white/80 mb-1">{p.title}</div>
                    <div className="text-[12px] font-light text-white/38 leading-[1.6]">{p.desc}</div>
                  </div>
                </div>
                );
              })}
            </div>
          </div>

          {/* Bottom trust */}
          <div className="pt-10 mt-10">
            <div className="flex items-start gap-3 mb-4">
              <img
                src="https://cdn.prod.website-files.com/68641725731e05d19cf0bccc/695e85c6b8685d49d7d22e0d_Kari_Cao-p-500.webp"
                alt="Kari Cao"
                className="w-[34px] h-[34px] rounded-full object-cover object-top flex-shrink-0"
              />
              <div>
                <p className="text-[12px] font-light text-white/40 leading-[1.55] italic">
                  &ldquo;Sachhsoft didn&apos;t just build our product. They brought strategic clarity to every decision. We launched in 14 weeks.&rdquo;
                </p>
                <p className="text-[11px] font-normal text-white/25 tracking-[0.06em] mt-1">
                  Kari Cao · CEO, RenewRx
                </p>
              </div>
            </div>
            <p className="text-[11px] text-white/20 leading-[1.6] mt-6 flex items-start gap-2">
              <Lock size={11} strokeWidth={1.5} className="flex-shrink-0 mt-0.5" />
              Your information is kept strictly confidential. We review every submission personally and respond within one business day. No automated sales sequences. No spam.
            </p>
          </div>
        </aside>

        {/* ── RIGHT PANEL (form) ── */}
        <main className="bg-white px-[72px] py-[120px] overflow-y-auto max-md:px-8 max-md:py-16">
          {!submitted ? (
            <>
              {/* Progress indicators */}
              <div className="flex items-center mb-14">
                {stepLabels.map((label, i) => {
                  const s = (i + 1) as Step;
                  const active = step === s;
                  const done = step > s;
                  return (
                    <div key={label} className="flex-1 relative">
                      {/* Connector line */}
                      {i < stepLabels.length - 1 && (
                        <div className="absolute top-3.5 left-[calc(100%)] w-full h-px bg-rule z-0" />
                      )}
                      <div className="relative z-10">
                        <div
                          className="w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-semibold mb-2 transition-all duration-300 border"
                          style={{
                            background: done ? "#b8975a" : active ? "#18160f" : "#ffffff",
                            borderColor: done ? "#b8975a" : active ? "#18160f" : "#e4e1da",
                            color: done || active ? "#ffffff" : "#9b9690",
                          }}
                        >
                          {done ? <Check size={12} strokeWidth={2.5} /> : s}
                        </div>
                        <div
                          className="text-[11px] font-normal tracking-[0.1em] uppercase transition-colors duration-300"
                          style={{ color: active ? "#18160f" : "#9b9690", fontWeight: active ? 500 : 400 }}
                        >
                          {label}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* ── STEP 1: About You ── */}
              {step === 1 && (
                <div className="animate-[stepIn_0.4s_ease_both]">
                  <h2 className="font-serif font-light tracking-[-0.025em] leading-[.97] text-ink mb-3" style={{ fontSize: "clamp(32px, 4vw, 48px)" }}>
                    Let&apos;s start with <em className="italic text-gold">you.</em>
                  </h2>
                  <p className="text-[15px] font-light text-muted leading-[1.65] mb-12 max-w-[480px]">
                    Tell us who you are and the nature of your organisation. This helps us match you with the right team from day one.
                  </p>

                  {/* Org type */}
                  <div className="mb-7">
                    <label className="block text-[11px] font-medium tracking-[0.14em] uppercase text-muted mb-2">
                      I represent a: <span className="text-gold">*</span>
                    </label>
                    <div className="grid grid-cols-3 gap-3 max-sm:grid-cols-1">
                      {orgTypes.map((o) => (
                        <OptionCard key={o.value} {...o} selected={orgType === o.value} onSelect={() => setOrgType(o.value)} />
                      ))}
                    </div>
                  </div>

                  {/* Name */}
                  <div className="mb-7">
                    <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
                      <div>
                        <label className="block text-[11px] font-medium tracking-[0.14em] uppercase text-muted mb-2">
                          First Name <span className="text-gold">*</span>
                        </label>
                        <input type="text" className={inputCls} placeholder="James" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                      </div>
                      <div>
                        <label className="block text-[11px] font-medium tracking-[0.14em] uppercase text-muted mb-2">
                          Last Name <span className="text-gold">*</span>
                        </label>
                        <input type="text" className={inputCls} placeholder="Mitchell" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                      </div>
                    </div>
                  </div>

                  <div className="mb-7">
                    <label className="block text-[11px] font-medium tracking-[0.14em] uppercase text-muted mb-2">
                      Work Email <span className="text-gold">*</span>
                    </label>
                    <input type="email" className={inputCls} placeholder="james@yourcompany.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                  </div>

                  <div className="mb-7">
                    <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
                      <div>
                        <label className="block text-[11px] font-medium tracking-[0.14em] uppercase text-muted mb-2">Company</label>
                        <input type="text" className={inputCls} placeholder="Acme Corp" value={company} onChange={(e) => setCompany(e.target.value)} />
                      </div>
                      <div>
                        <label className="block text-[11px] font-medium tracking-[0.14em] uppercase text-muted mb-2">Your Role</label>
                        <input type="text" className={inputCls} placeholder="CTO, Founder, Product Lead…" value={role} onChange={(e) => setRole(e.target.value)} />
                      </div>
                    </div>
                  </div>

                  <FormNav step={1} onNext={() => setStep(2)} canProceed={!!orgType && !!firstName && !!email} />
                </div>
              )}

              {/* ── STEP 2: Your Project ── */}
              {step === 2 && (
                <div className="animate-[stepIn_0.4s_ease_both]">
                  <h2 className="font-serif font-light tracking-[-0.025em] leading-[.97] text-ink mb-3" style={{ fontSize: "clamp(32px, 4vw, 48px)" }}>
                    Tell us about <em className="italic text-gold">your project.</em>
                  </h2>
                  <p className="text-[15px] font-light text-muted leading-[1.65] mb-12 max-w-[480px]">
                    No need for a perfect brief. We want to understand your problem, your users, and the outcome you&apos;re building toward.
                  </p>

                  {/* Project type */}
                  <div className="mb-7">
                    <label className="block text-[11px] font-medium tracking-[0.14em] uppercase text-muted mb-2">
                      What are you looking to build? <span className="text-gold">*</span>
                    </label>
                    <div className="grid grid-cols-2 gap-3 max-sm:grid-cols-1">
                      {projectTypes.map((p) => (
                        <OptionCard key={p.value} {...p} selected={projectType === p.value} onSelect={() => setProjectType(p.value)} />
                      ))}
                    </div>
                  </div>

                  {/* Industry */}
                  <div className="mb-7">
                    <label className="block text-[11px] font-medium tracking-[0.14em] uppercase text-muted mb-2">
                      Industry / Domain <span className="text-gold">*</span>
                    </label>
                    <select
                      className={inputCls + " appearance-none"}
                      value={industry}
                      onChange={(e) => setIndustry(e.target.value)}
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%239b9690' stroke-width='1.5' fill='none'/%3E%3C/svg%3E")`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "right 16px center",
                        paddingRight: "40px",
                      }}
                    >
                      <option value="" disabled>Select your industry</option>
                      {["Healthcare & MedTech","FinTech & Financial Services","E-Commerce & Retail","Law & Legal Technology","Real Estate & PropTech","Education & EdTech","Logistics & On-Demand","SaaS / B2B Software","Consumer Mobile","Other"].map((o) => (
                        <option key={o}>{o}</option>
                      ))}
                    </select>
                  </div>

                  {/* Description */}
                  <div className="mb-7">
                    <label className="block text-[11px] font-medium tracking-[0.14em] uppercase text-muted mb-2">
                      Describe your project <span className="text-gold">*</span>
                    </label>
                    <textarea
                      className={inputCls}
                      style={{ minHeight: "140px", resize: "vertical" }}
                      placeholder="What problem are you solving? Who are your users? What does success look like in 12 months?..."
                      value={projectDesc}
                      onChange={(e) => setProjectDesc(e.target.value.slice(0, 1000))}
                    />
                    <div className="text-[11px] text-muted text-right mt-1.5 tracking-[0.04em]">
                      {projectDesc.length} / 1000
                    </div>
                  </div>

                  <FormNav step={2} onBack={() => setStep(1)} onNext={() => setStep(3)} canProceed={!!projectType && !!industry && projectDesc.length >= 30} />
                </div>
              )}

              {/* ── STEP 3: Scope & Budget ── */}
              {step === 3 && (
                <div className="animate-[stepIn_0.4s_ease_both]">
                  <h2 className="font-serif font-light tracking-[-0.025em] leading-[.97] text-ink mb-3" style={{ fontSize: "clamp(32px, 4vw, 48px)" }}>
                    Scope &amp; <em className="italic text-gold">investment.</em>
                  </h2>
                  <p className="text-[15px] font-light text-muted leading-[1.65] mb-12 max-w-[480px]">
                    There are no wrong answers here. Budget transparency helps us propose the right team structure and engagement model for your goals.
                  </p>

                  {/* Timeline */}
                  <div className="mb-7">
                    <label className="block text-[11px] font-medium tracking-[0.14em] uppercase text-muted mb-2">
                      Target timeline <span className="text-gold">*</span>
                    </label>
                    <div className="grid grid-cols-2 gap-3 max-sm:grid-cols-1">
                      {timelines.map((t) => (
                        <OptionCard key={t.value} {...t} selected={timeline === t.value} onSelect={() => setTimeline(t.value)} />
                      ))}
                    </div>
                  </div>

                  {/* Budget slider */}
                  <div className="mb-7">
                    <label className="block text-[11px] font-medium tracking-[0.14em] uppercase text-muted mb-2">
                      Estimated project investment <span className="text-gold">*</span>
                    </label>
                    <div className="text-center mb-8">
                      <div className="font-serif font-semibold text-[64px] tracking-[-0.03em] text-ink leading-none">
                        {budgetLabels[budget].display}
                      </div>
                      <div className="text-[12px] font-normal tracking-[0.12em] uppercase text-muted mt-1.5">
                        Estimated Budget
                      </div>
                      <div className="text-[13px] font-light text-gold italic mt-2">
                        {budgetLabels[budget].context}
                      </div>
                    </div>
                    <input
                      type="range"
                      min={0}
                      max={10}
                      value={budget}
                      onChange={(e) => setBudget(Number(e.target.value))}
                      className="w-full mb-4"
                      style={{ accentColor: "#18160f" }}
                    />
                    <div className="flex justify-between text-[11px] text-muted tracking-[0.04em]">
                      <span>$25K</span><span>$100K</span><span>$250K</span><span>$500K+</span>
                    </div>
                  </div>

                  {/* Engagement model */}
                  <div className="mb-7">
                    <label className="block text-[11px] font-medium tracking-[0.14em] uppercase text-muted mb-2">
                      Preferred engagement model{" "}
                      <span className="text-[11px] font-light normal-case tracking-normal text-muted">(optional, we can advise)</span>
                    </label>
                    <div className="grid grid-cols-3 gap-3 max-sm:grid-cols-1">
                      {engagements.map((e) => (
                        <OptionCard key={e.value} value={e.value} title={e.title} desc={e.desc} selected={engagement === e.value} onSelect={() => setEngagement(e.value)} />
                      ))}
                    </div>
                  </div>

                  <FormNav step={3} onBack={() => setStep(2)} onNext={() => setStep(4)} canProceed={!!timeline} />
                </div>
              )}

              {/* ── STEP 4: Final Details ── */}
              {step === 4 && (
                <div className="animate-[stepIn_0.4s_ease_both]">
                  <h2 className="font-serif font-light tracking-[-0.025em] leading-[.97] text-ink mb-3" style={{ fontSize: "clamp(32px, 4vw, 48px)" }}>
                    Almost <em className="italic text-gold">there.</em>
                  </h2>
                  <p className="text-[15px] font-light text-muted leading-[1.65] mb-12 max-w-[480px]">
                    A few final questions so we can prepare a meaningful, personalised response, not a boilerplate reply.
                  </p>

                  {/* Source */}
                  <div className="mb-7">
                    <label className="block text-[11px] font-medium tracking-[0.14em] uppercase text-muted mb-2">How did you find us?</label>
                    <select
                      className={inputCls + " appearance-none"}
                      value={source}
                      onChange={(e) => setSource(e.target.value)}
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%239b9690' stroke-width='1.5' fill='none'/%3E%3C/svg%3E")`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "right 16px center",
                        paddingRight: "40px",
                      }}
                    >
                      <option value="" disabled>Select one</option>
                      {["Google / Search","LinkedIn","Referral from a colleague","Industry event or conference","Clutch or G2","Blog or article","Other"].map((o) => <option key={o}>{o}</option>)}
                    </select>
                  </div>

                  {/* Prior agency experience */}
                  <div className="mb-7">
                    <label className="block text-[11px] font-medium tracking-[0.14em] uppercase text-muted mb-2">Have you worked with a software agency before?</label>
                    <div className="grid grid-cols-2 gap-3 max-sm:grid-cols-1">
                      {[
                        { value: "yes", title: "Yes, I have", desc: "I have prior experience with outsourced development" },
                        { value: "no", title: "No, first time", desc: "This is my first time engaging a development partner" },
                      ].map((o) => (
                        <OptionCard key={o.value} value={o.value} title={o.title} desc={o.desc} selected={priorAgency === o.value} onSelect={() => setPriorAgency(o.value)} />
                      ))}
                    </div>
                  </div>

                  {/* Additional info */}
                  <div className="mb-7">
                    <label className="block text-[11px] font-medium tracking-[0.14em] uppercase text-muted mb-2">Anything else you&apos;d like us to know?</label>
                    <textarea
                      className={inputCls}
                      style={{ minHeight: "120px", resize: "vertical" }}
                      placeholder="Links to existing products, competitors, design references, or anything that helps us understand your context…"
                      value={additionalInfo}
                      onChange={(e) => setAdditionalInfo(e.target.value)}
                    />
                  </div>

                  {/* NDA */}
                  <label className="flex items-start gap-3 px-[18px] py-4 border border-rule cursor-pointer hover:border-gold/50 hover:bg-[rgba(184,151,90,0.04)] transition-all mb-10">
                    <input type="checkbox" className="mt-1 flex-shrink-0" style={{ accentColor: "#b8975a" }} checked={ndaRequired} onChange={(e) => setNdaRequired(e.target.checked)} />
                    <div className="text-[13px] font-light text-body-text leading-[1.55]">
                      <strong className="font-medium text-ink">I require an NDA</strong> before sharing full project details. Please send one before our first call.
                    </div>
                  </label>

                  {/* Highlight box */}
                  <div className="bg-[rgba(184,151,90,0.08)] border border-[rgba(184,151,90,0.25)] px-6 py-5 mb-10">
                    <div className="text-[10px] font-semibold tracking-[0.18em] uppercase text-gold mb-1.5">What happens next</div>
                    <p className="text-[13px] font-light text-body-text leading-[1.6]">
                      We personally review every submission and respond within <strong className="font-medium text-ink">one business day</strong> with a short intro call booking link and a few clarifying questions, not a sales pitch.
                    </p>
                  </div>

                  <FormNav step={4} onBack={() => setStep(3)} onNext={handleSubmit} canProceed={!!email} isSubmit />
                </div>
              )}
            </>
          ) : (
            /* ── SUCCESS STATE ── */
            <div className="text-center py-10 animate-[stepIn_0.5s_ease_both]">
              <div className="w-[72px] h-[72px] rounded-full bg-[rgba(184,151,90,0.08)] border border-[rgba(184,151,90,0.3)] flex items-center justify-center text-gold mx-auto mb-8">
                <Check size={28} strokeWidth={1.5} />
              </div>
              <h2 className="font-serif font-light tracking-[-0.02em] text-ink mb-4 leading-[1.05]" style={{ fontSize: "clamp(36px, 5vw, 48px)" }}>
                You&apos;re in <em className="italic text-gold">good hands.</em>
              </h2>
              <p className="text-[16px] font-light text-muted leading-[1.75] max-w-[480px] mx-auto mb-10">
                We&apos;ve received your submission and will review it personally. Expect a response within one business day. No automation, just a real conversation.
              </p>

              {/* Timeline */}
              <div className="flex border border-rule mb-10 max-sm:flex-col">
                {[
                  { time: "~24h", label: "First response" },
                  { time: "~48h", label: "Intro call booked" },
                  { time: "~1wk", label: "Proposal sent" },
                ].map((t) => (
                  <div key={t.label} className="flex-1 py-6 px-5 border-r border-rule last:border-r-0 text-center max-sm:border-r-0 max-sm:border-b max-sm:last:border-b-0">
                    <div className="font-serif text-[28px] font-semibold text-gold tracking-[-0.01em]">{t.time}</div>
                    <div className="text-[11px] tracking-[0.1em] uppercase text-muted mt-1">{t.label}</div>
                  </div>
                ))}
              </div>

              <Link
                href="/"
                className="text-[12px] font-medium tracking-[0.14em] uppercase text-white bg-ink px-10 py-4 no-underline hover:bg-gold transition-colors duration-200"
              >
                Back to Sachhsoft
              </Link>
            </div>
          )}
        </main>
      </div>

      <style>{`
        @keyframes stepIn {
          from { opacity: 0; transform: translateX(20px); }
          to   { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}

function FormNav({
  step, onBack, onNext, canProceed, isSubmit,
}: {
  step: number;
  onBack?: () => void;
  onNext: () => void;
  canProceed: boolean;
  isSubmit?: boolean;
}) {
  return (
    <div className="flex items-center justify-between pt-10 border-t border-rule mt-10">
      {onBack ? (
        <button
          type="button"
          onClick={onBack}
          className="text-[13px] font-normal text-muted bg-transparent border-none flex items-center gap-2 hover:text-ink transition-colors font-sans"
        >
          <ArrowLeft size={14} strokeWidth={1.5} /> Back
        </button>
      ) : (
        <div />
      )}
      <button
        type="button"
        onClick={onNext}
        disabled={!canProceed}
        className="flex items-center gap-2.5 text-[12px] font-semibold tracking-[0.16em] uppercase text-white bg-ink px-12 py-4 border-none transition-all duration-200 hover:bg-gold hover:tracking-[0.2em] disabled:bg-rule disabled:text-muted disabled:cursor-not-allowed disabled:tracking-[0.16em] font-sans"
      >
        {isSubmit ? "Submit" : "Continue"}
        <ChevronRight size={14} strokeWidth={2} />
      </button>
    </div>
  );
}
