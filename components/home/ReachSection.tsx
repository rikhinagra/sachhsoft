"use client";

// import { useEffect, useRef } from "react"; // restore when map video is uncommented
import RevealWrapper from "@/components/ui/RevealWrapper";
import { StaggerContainer, StaggerItem } from "@/components/ui/StaggerContainer";
import CountUp from "@/components/ui/CountUp";

const stats = [
  {
    value: "12+",
    label: "Countries",
    desc: "Global client presence spanning North America, Europe, the Middle East, and APAC",
  },
  {
    value: "2.5yr",
    label: "Avg. Client Relationship",
    desc: "We don't disappear at launch — our average engagement lasts two and a half years",
  },
  {
    value: "8",
    label: "Industries",
    desc: "Deep domain expertise across HealthTech, FinTech, Legal, Real Estate, SaaS, and more",
  },
];

export default function ReachSection() {
  // const videoRef = useRef<HTMLVideoElement>(null); // restore when map video is uncommented
  // useEffect(() => { ... }, []); // restore when map video is uncommented

  return (
    <section className="bg-ink overflow-hidden" aria-labelledby="reach-heading">
      {/* Stats */}
      <div className="max-w-[1280px] mx-auto px-16 pt-[120px] pb-16 max-lg:px-8 max-md:px-6 max-md:pt-20 max-md:pb-10">
        <RevealWrapper className="text-center mb-16 max-md:mb-10">
          <div className="text-[11px] tracking-[0.2em] uppercase text-gold mb-5 flex items-center justify-center gap-3">
            <span className="block w-6 h-px bg-gold/40" />
            Reach &amp; Impact
            <span className="block w-6 h-px bg-gold/40" />
          </div>
          <h2
            id="reach-heading"
            className="font-serif font-light text-white leading-none tracking-[-0.025em]"
            style={{ fontSize: "clamp(32px, 5vw, 64px)" }}
          >
            Numbers that speak<br />
            <em className="italic text-gold-lt">louder than words.</em>
          </h2>
        </RevealWrapper>

        <StaggerContainer className="grid grid-cols-3 border-t border-white/10 max-md:grid-cols-1">
          {stats.map((s, i) => (
            <StaggerItem key={i} className="py-12 px-8 text-center border-b border-white/10 border-r last:border-r-0 max-lg:px-5 max-md:border-r-0 max-md:py-8">
              <CountUp
                value={s.value}
                className="font-serif font-light text-white leading-none tracking-[-0.04em] mb-3 block"
                style={{ fontSize: "clamp(52px, 7vw, 96px)" }}
              />
              <div className="text-[12px] font-medium tracking-[0.14em] uppercase text-gold mb-3">
                {s.label}
              </div>
              <p className="text-[13px] font-light text-white/40 leading-[1.65] max-w-[220px] mx-auto">
                {s.desc}
              </p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      {/* World Map Video — TEMPORARILY COMMENTED OUT — restore when ready
      <video
        ref={videoRef}
        muted
        playsInline
        preload="metadata"
        poster="https://cdn.prod.website-files.com/68641725731e05d19cf0bccc/687a5c60baead985ec0c985c_dotted-world-map.webp"
        className="w-full h-auto block"
        style={{ mixBlendMode: "lighten" }}
        aria-hidden="true"
      >
        <source
          src="https://github.com/rikhinagra/sachhsoft-squeeze-page/raw/refs/heads/main/public/videos/animated%20-map.webm"
          type="video/webm"
        />
        <source
          src="https://github.com/rikhinagra/sachhsoft-squeeze-page/raw/refs/heads/main/public/videos/animated%20-map.mp4"
          type="video/mp4"
        />
      </video>
      END WORLD MAP VIDEO */}
    </section>
  );
}
