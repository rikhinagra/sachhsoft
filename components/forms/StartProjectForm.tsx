"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Gem,
  Zap,
  Brain,
  Handshake,
  Lock,
  Check,
  ArrowLeft,
  ChevronRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Step = 1 | 2 | 3;

function OptionCard({
  value, title, desc, selected, onSelect,
}: {
  value: string; title: string; desc: string; selected: boolean; onSelect: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className="relative text-left border p-6 transition-all duration-200 hover:-translate-y-0.5"
      style={{
        borderColor: selected ? "#0E6CFB" : "#e4e1da",
        background: selected ? "rgba(184,151,90,0.08)" : "#ffffff",
      }}
    >
      {selected && (
        <span className="absolute top-3.5 right-4 bg-[rgba(184,151,90,0.12)] rounded-full w-5 h-5 flex items-center justify-center text-gold">
          <Check size={11} strokeWidth={2.5} />
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
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");

  const [projectType, setProjectType] = useState("");
  const [industry, setIndustry] = useState("");
  const [projectDesc, setProjectDesc] = useState("");
  const [timeline, setTimeline] = useState("");

  const [source, setSource] = useState("");
  const [priorAgency, setPriorAgency] = useState("");
  const [additionalInfo, setAdditionalInfo] = useState("");

  const proofPoints: { icon: LucideIcon; title: string; desc: string }[] = [
    { icon: Gem,       title: "Fully Bespoke. No Templates.", desc: "Every line of code is written for your specific domain, users, and growth trajectory." },
    { icon: Zap,       title: "Accelerated Delivery",         desc: "Our modern development workflow and seasoned 60-person team get you to market faster, without compromising quality." },
    { icon: Brain,     title: "Deep Domain Expertise",        desc: "HealthTech, FinTech, E-commerce, Legal Tech, Real Estate: we understand your compliance needs, not just your code." },
    { icon: Handshake, title: "Long-Term Partners",           desc: "We don't disappear at launch. Average client relationship is 2.5 years. Your growth is our mandate." },
  ];

  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [honeypot, setHoneypot] = useState("");

  const handleSubmit = async () => {
    setSubmitting(true);
    setSubmitError("");
    try {
      const payload = {
        firstName,
        lastName,
        email,
        phone,
        company,
        role,
        industry,
        projectType,
        timeline,
        description: projectDesc,
        priorAgency,
        additionalInfo,
        heardFrom: source,
        website: honeypot,
      };

      const appsScriptUrl = process.env.NEXT_PUBLIC_APPS_SCRIPT_URL;
      if (appsScriptUrl) {
        await fetch(appsScriptUrl, {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      }

      fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }).catch(() => {});

      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      setSubmitError("Something went wrong. Please email us at hello@sachhsoft.com");
    } finally {
      setSubmitting(false);
    }
  };

  const stepLabels = ["About You", "Your Project", "Final Details"];

  const inputCls =
    "w-full px-[18px] py-[14px] border border-rule bg-off text-ink font-sans text-[15px] font-light outline-none transition-all duration-200 focus:border-gold focus:bg-white placeholder:text-muted";

  const selectStyle = {
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%239b9690' stroke-width='1.5' fill='none'/%3E%3C/svg%3E")`,
    backgroundRepeat: "no-repeat" as const,
    backgroundPosition: "right 16px center",
    paddingRight: "40px",
  };

  return (
    <div className="min-h-screen bg-off">
      <input
        type="text"
        name="website"
        value={honeypot}
        onChange={(e) => setHoneypot(e.target.value)}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{ display: "none" }}
      />
      <nav className="fixed top-0 left-0 right-0 z-[200] h-[68px] flex items-center justify-between px-14 max-sm:px-4 bg-off/95 backdrop-blur-xl border-b border-rule max-md:px-6">
        <Link href="/" className="flex items-center" aria-label="SACHHSOFT Home">
          <Image
            src="/logo.png"
            alt="SACHHSOFT"
            width={355}
            height={60}
            style={{ height: 18, width: "auto", filter: "brightness(0)" }}
          />
        </Link>
        <Link href="/" className="text-[13px] font-normal text-muted no-underline flex items-center gap-2 hover:text-ink transition-colors">
          <ArrowLeft size={14} strokeWidth={1.5} /> Back to site
        </Link>
      </nav>

      <div className="grid min-h-screen max-md:grid-cols-1 max-md:block" style={{ gridTemplateColumns: "420px 1fr" }}>
        {/* ── LEFT PANEL ── */}
        <aside
          className="bg-ink px-[52px] pt-[140px] pb-[120px] sticky top-0 h-screen overflow-y-auto flex flex-col justify-between max-md:static max-md:h-auto max-md:px-8 max-md:pt-[108px] max-md:pb-16"
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
                      {i < stepLabels.length - 1 && (
                        <div className="absolute top-3.5 left-[calc(100%)] w-full h-px bg-rule z-0" />
                      )}
                      <div className="relative z-10">
                        <div
                          className="w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-semibold mb-2 transition-all duration-300 border"
                          style={{
                            background: done ? "#0E6CFB" : active ? "#18160f" : "#ffffff",
                            borderColor: done ? "#0E6CFB" : active ? "#18160f" : "#e4e1da",
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
                    Tell us who you are so we can match you with the right team from day one.
                  </p>

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
                          Last Name
                        </label>
                        <input type="text" className={inputCls} placeholder="Mitchell" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                      </div>
                    </div>
                  </div>

                  <div className="mb-7">
                    <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
                      <div>
                        <label className="block text-[11px] font-medium tracking-[0.14em] uppercase text-muted mb-2">
                          Work Email <span className="text-gold">*</span>
                        </label>
                        <input type="email" className={inputCls} placeholder="james@yourcompany.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                      </div>
                      <div>
                        <label className="block text-[11px] font-medium tracking-[0.14em] uppercase text-muted mb-2">
                          Phone Number
                        </label>
                        <input type="tel" className={inputCls} placeholder="+1 (312) 000-0000" value={phone} onChange={(e) => setPhone(e.target.value)} />
                      </div>
                    </div>
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

                  <FormNav step={1} onNext={() => setStep(2)} canProceed={!!firstName && !!email} />
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

                  {/* Project type — dropdown */}
                  <div className="mb-7">
                    <label className="block text-[11px] font-medium tracking-[0.14em] uppercase text-muted mb-2">
                      What are you looking to build? <span className="text-gold">*</span>
                    </label>
                    <select
                      className={inputCls + " appearance-none"}
                      value={projectType}
                      onChange={(e) => setProjectType(e.target.value)}
                      style={selectStyle}
                    >
                      <option value="" disabled>Select project type</option>
                      <option value="newproduct">New Product from Scratch</option>
                      <option value="rebuild">Rebuild / Modernise</option>
                      <option value="extend">Extend Existing Product</option>
                      <option value="team">Dedicated Team / Augmentation</option>
                    </select>
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
                      style={selectStyle}
                    >
                      <option value="" disabled>Select your industry</option>
                      {["Healthcare & MedTech","FinTech & Financial Services","E-Commerce & Retail","Law & Legal Technology","Real Estate & PropTech","Education & EdTech","Logistics & On-Demand","SaaS / B2B Software","Consumer Mobile","Other"].map((o) => (
                        <option key={o}>{o}</option>
                      ))}
                    </select>
                  </div>

                  {/* Description — no character limit */}
                  <div className="mb-7">
                    <label className="block text-[11px] font-medium tracking-[0.14em] uppercase text-muted mb-2">
                      Describe your project
                    </label>
                    <textarea
                      className={inputCls}
                      style={{ minHeight: "140px", resize: "vertical" }}
                      placeholder="What problem are you solving? Who are your users? What does success look like in 12 months?..."
                      value={projectDesc}
                      onChange={(e) => setProjectDesc(e.target.value)}
                    />
                  </div>

                  {/* Timeline — dropdown */}
                  <div className="mb-7">
                    <label className="block text-[11px] font-medium tracking-[0.14em] uppercase text-muted mb-2">
                      Target Timeline
                    </label>
                    <select
                      className={inputCls + " appearance-none"}
                      value={timeline}
                      onChange={(e) => setTimeline(e.target.value)}
                      style={selectStyle}
                    >
                      <option value="" disabled>Select timeline</option>
                      <option value="asap">ASAP / Urgent</option>
                      <option value="quarter">This Quarter</option>
                      <option value="half">6–12 Months</option>
                      <option value="ongoing">Ongoing / Retainer</option>
                    </select>
                  </div>

                  <FormNav step={2} onBack={() => setStep(1)} onNext={() => setStep(3)} canProceed={!!projectType && !!industry} />
                </div>
              )}

              {/* ── STEP 3: Final Details ── */}
              {step === 3 && (
                <div className="animate-[stepIn_0.4s_ease_both]">
                  <h2 className="font-serif font-light tracking-[-0.025em] leading-[.97] text-ink mb-3" style={{ fontSize: "clamp(32px, 4vw, 48px)" }}>
                    Almost <em className="italic text-gold">there.</em>
                  </h2>
                  <p className="text-[15px] font-light text-muted leading-[1.65] mb-12 max-w-[480px]">
                    A few final questions so we can prepare a meaningful, personalised response, not a boilerplate reply.
                  </p>

                  <div className="mb-7">
                    <label className="block text-[11px] font-medium tracking-[0.14em] uppercase text-muted mb-2">How did you find us?</label>
                    <select
                      className={inputCls + " appearance-none"}
                      value={source}
                      onChange={(e) => setSource(e.target.value)}
                      style={selectStyle}
                    >
                      <option value="" disabled>Select one</option>
                      {["Google / Search","LinkedIn","Referral from a colleague","Industry event or conference","Clutch or G2","Blog or article","Other"].map((o) => <option key={o}>{o}</option>)}
                    </select>
                  </div>

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

                  <div className="bg-[rgba(184,151,90,0.08)] border border-[rgba(184,151,90,0.25)] px-6 py-5 mb-10">
                    <div className="text-[10px] font-semibold tracking-[0.18em] uppercase text-gold mb-1.5">What happens next</div>
                    <p className="text-[13px] font-light text-body-text leading-[1.6]">
                      We personally review every submission and respond within <strong className="font-medium text-ink">one business day</strong> with a short intro call booking link and a few clarifying questions, not a sales pitch.
                    </p>
                  </div>

                  {submitError && (
                    <p className="text-[13px] text-red-500 mt-4">{submitError}</p>
                  )}
                  <FormNav step={3} onBack={() => setStep(2)} onNext={handleSubmit} canProceed={!!email && !submitting} isSubmit submitting={submitting} />
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
  step, onBack, onNext, canProceed, isSubmit, submitting,
}: {
  step: number;
  onBack?: () => void;
  onNext: () => void;
  canProceed: boolean;
  isSubmit?: boolean;
  submitting?: boolean;
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
        {submitting ? "Submitting..." : isSubmit ? "Submit" : "Continue"}
        <ChevronRight size={14} strokeWidth={2} />
      </button>
    </div>
  );
}
