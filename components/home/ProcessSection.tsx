import RevealWrapper from "@/components/ui/RevealWrapper";

const steps = [
  {
    num: "01",
    title: "Discovery & Strategy",
    desc: "We start by understanding your domain, users, constraints, and growth trajectory, building a strategic foundation before writing a single line of code.",
  },
  {
    num: "02",
    title: "Architecture & Design",
    desc: "System architecture, data models, and UI/UX design are crafted simultaneously by our senior engineers and designers working as one team.",
  },
  {
    num: "03",
    title: "Engineering & Delivery",
    desc: "AI-augmented development sprints with continuous integration, automated QA, and transparent progress. Faster cycles, fewer surprises.",
  },
  {
    num: "04",
    title: "Scale & Partnership",
    desc: "We don't disappear at launch. We monitor, iterate, and scale your product alongside your business, with an average relationship of 2.5 years.",
  },
];

export default function ProcessSection() {
  return (
    <section className="bg-off" aria-labelledby="process-heading">
      <div className="max-w-[1280px] mx-auto px-16 py-[120px] max-lg:px-8 max-md:px-6 max-md:py-16">
        {/* Header */}
        <RevealWrapper className="mb-16">
          <div className="text-[11px] tracking-[0.2em] uppercase text-muted mb-5 flex items-center gap-3">
            <span className="block w-6 h-px bg-rule" />
            How We Work
          </div>
          <h2
            id="process-heading"
            className="font-serif font-light leading-none tracking-[-0.025em] text-ink"
            style={{ fontSize: "clamp(36px, 5.5vw, 78px)" }}
          >
            A Process Built for<br />
            <em className="italic text-gold">Precision.</em>
          </h2>
        </RevealWrapper>

        {/* Steps grid */}
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
  );
}
