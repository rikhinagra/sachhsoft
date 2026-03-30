import RevealWrapper from "@/components/ui/RevealWrapper";

const metrics = [
  { val: "3×", desc: "Faster MVP\nprototyping" },
  { val: "40%", desc: "Reduction in\ntime-to-market" },
  { val: "60%", desc: "Fewer QA cycles\nwith AI testing" },
];

const pills = [
  "GitHub Copilot",
  "AI Code Review",
  "Automated QA",
  "LLM Integration",
  "Generative UI",
  "RAG Pipelines",
  "Agentic Workflows",
];

export default function AISection() {
  return (
    <section className="bg-ink" aria-labelledby="ai-heading">
      <div className="max-w-[1280px] mx-auto px-16 py-[120px] max-lg:px-8 max-md:px-6 max-md:py-20">
      <RevealWrapper className="grid grid-cols-[5fr_4fr] gap-[100px] items-start max-lg:grid-cols-1 max-lg:gap-12">
        {/* Left */}
        <div>
          <div className="text-[11px] tracking-[0.2em] uppercase text-white/35 mb-5 flex items-center gap-3">
            <span className="block w-6 h-px bg-white/15" />
            AI-Powered Development
          </div>
          <h2
            id="ai-heading"
            className="font-serif font-light text-white leading-none tracking-[-0.025em]"
            style={{ fontSize: "clamp(36px, 5.5vw, 78px)" }}
          >
            We Don&apos;t Just Use AI —<br />
            We <em className="italic text-gold-lt">Build With It.</em>
          </h2>
          <p className="text-[16px] font-light text-white/60 leading-[1.8] mt-7">
            Every engineer at SACHHSOFT ships with AI-augmented tooling —
            Copilot-assisted code, automated test generation, AI-driven
            architecture review. The result: dramatically faster sprints, fewer
            regressions, and codebases designed to scale from day one.
          </p>
          <div className="flex flex-wrap gap-2 mt-10">
            {pills.map((pill) => (
              <span
                key={pill}
                className="text-[11px] font-normal tracking-[0.1em] uppercase px-[18px] py-[9px] border border-white/14 text-white/55 hover:border-gold hover:text-gold-lt transition-colors duration-200 cursor-default"
              >
                {pill}
              </span>
            ))}
          </div>
        </div>

        {/* Right — metrics */}
        <div className="flex flex-col">
          {metrics.map((m, i) => (
            <div
              key={i}
              className="py-7 border-b border-white/8 first:border-t first:border-white/8 flex items-center justify-between gap-6"
            >
              <div className="font-serif font-semibold text-[52px] text-gold-lt tracking-[-0.02em] leading-none flex-shrink-0 max-md:text-[42px]">
                {m.val}
              </div>
              <div className="text-[13px] font-light text-white/50 text-right leading-[1.6] min-w-0 overflow-hidden">
                {m.desc.replace("\n", " ")}
              </div>
            </div>
          ))}
        </div>
      </RevealWrapper>
      </div>
    </section>
  );
}
