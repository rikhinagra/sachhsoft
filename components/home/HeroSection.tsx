"use client";

import { useRef, useState } from "react";
import Link from "next/link";

const stats = [
  { num: "50", sup: "+", label: "Companies Launched" },
  { num: "40", sup: "%", label: "Faster to Market" },
  { num: "1M", sup: "+", label: "Users Maintained" },
  { num: "60", sup: "", label: "Expert Engineers" },
];

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(true);

  const toggleVideo = () => {
    if (!videoRef.current) return;
    playing ? videoRef.current.pause() : videoRef.current.play();
    setPlaying(!playing);
  };

  return (
    <section
      className="relative w-full overflow-hidden flex items-end"
      style={{ height: "100svh", minHeight: "700px" }}
    >
      {/* ── Video background ── */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover object-center"
          aria-hidden="true"
        >
          <source
            src="https://cdn.prod.website-files.com/68641725731e05d19cf0bccc/68b76366ba34f91dd6356daf_Sachhsoft%20Hero%20v11%20%28compressed%29-transcode.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      {/* ── Cinematic overlays ── */}
      {/* 1. Radial vignette from edges */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 100% 100% at 50% 50%, transparent 30%, rgba(24,22,15,0.25) 65%, rgba(24,22,15,0.75) 100%)",
        }}
      />
      {/* 2. Golden brand tint */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{ background: "rgba(184,151,90,0.05)", mixBlendMode: "multiply" }}
      />
      {/* 3. Top gradient — keeps nav readable */}
      <div
        className="absolute top-0 left-0 right-0 z-[2] h-[200px] pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(24,22,15,0.55) 0%, transparent 100%)",
        }}
      />
      {/* 4. Bottom gradient — lifts text */}
      <div
        className="absolute bottom-0 left-0 right-0 z-[2] pointer-events-none"
        style={{
          height: "75%",
          background:
            "linear-gradient(to top, rgba(24,22,15,0.97) 0%, rgba(24,22,15,0.82) 30%, rgba(24,22,15,0.35) 60%, transparent 100%)",
        }}
      />
      {/* 5. Film grain texture */}
      <div
        className="absolute inset-0 z-[3] pointer-events-none"
        style={{
          opacity: 0.025,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
          animation: "grain 0.5s steps(2) infinite",
        }}
      />

      {/* ── Hero content ── */}
      <div className="relative z-10 w-full px-16 pb-20 grid grid-cols-[1fr_auto] items-end gap-16 max-lg:grid-cols-1 max-lg:px-8 max-md:px-6 max-md:pb-14 max-md:gap-6">
        {/* Left — headline + descriptor + CTA */}
        <div>
          {/* Kicker */}
          <div
            className="flex items-center gap-3 text-[10px] font-medium tracking-[0.24em] uppercase text-gold mb-6"
            style={{ animation: "fadeUp 0.8s ease 0.2s both" }}
          >
            <span className="block w-7 h-px bg-gold" />
            Bespoke Software · Chicago &amp; Global
          </div>

          {/* H1 — the most important SEO element */}
          <h1
            className="font-serif font-light leading-[0.93] tracking-[-0.03em] text-white mb-9"
            style={{
              fontSize: "clamp(44px, 8.5vw, 118px)",
              animation: "fadeUp 0.9s ease 0.35s both",
            }}
          >
            We Build<br />
            Software that<br />
            <em className="font-light italic text-gold-lt">Moves Markets.</em>
          </h1>

          {/* Descriptor row */}
          <div
            className="flex gap-10 flex-wrap pt-7 border-t border-white/10 mb-11"
            style={{ animation: "fadeUp 0.8s ease 0.5s both" }}
          >
            <div>
              <div className="text-[10px] font-medium tracking-[0.2em] uppercase text-white/30 mb-1.5">
                What We Do
              </div>
              <p className="text-[14px] font-light text-white/65 leading-relaxed max-w-[240px]">
                Custom digital products — from MVP to enterprise scale — built for your domain, your users, and your growth.
              </p>
            </div>
            <div>
              <div className="text-[10px] font-medium tracking-[0.2em] uppercase text-white/30 mb-1.5">
                Who We Serve
              </div>
              <p className="text-[14px] font-light text-white/65 leading-relaxed max-w-[240px]">
                Enterprise teams, mid-size companies, and startup founders building next-generation solutions.
              </p>
            </div>
          </div>

          {/* CTAs */}
          <div
            className="flex items-center gap-6 flex-wrap"
            style={{ animation: "fadeUp 0.8s ease 0.6s both" }}
          >
            <Link
              href="/start-a-project"
              className="text-[12px] font-semibold tracking-[0.16em] uppercase text-ink bg-gold px-11 py-4 no-underline hover:bg-gold-lt transition-all duration-200 hover:tracking-[0.2em]"
            >
              Start a Project
            </Link>
            <Link
              href="#work"
              className="text-[13px] font-normal text-white/60 no-underline flex items-center gap-2 hover:text-white hover:gap-3.5 transition-all duration-200"
            >
              View our work <span className="text-lg leading-none">→</span>
            </Link>
          </div>
        </div>

        {/* Right — stats column */}
        <div
          className="flex flex-col border-l border-white/10 pl-12 max-lg:border-l-0 max-lg:pl-0 max-lg:border-t max-lg:border-white/10 max-lg:pt-6 max-lg:grid max-lg:grid-cols-4 max-md:grid-cols-2"
          style={{ animation: "fadeUp 0.8s ease 0.7s both" }}
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="py-5 border-b border-white/10 first:border-t first:border-white/10 max-lg:border-b-0 max-lg:border-t-0 max-lg:border-r max-lg:border-white/10 max-lg:last:border-r-0 max-lg:px-5 max-lg:py-4 max-md:border-r-0 max-md:border-b max-md:border-white/10 max-md:px-0 max-md:py-4"
            >
              <div className="font-serif font-semibold leading-none tracking-[-0.02em] text-white text-[42px] max-md:text-[36px]">
                {s.num}
                <span className="text-gold-lt">{s.sup}</span>
              </div>
              <div className="text-[10px] font-normal tracking-[0.14em] uppercase text-white/30 mt-1">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video play/pause toggle */}
      <button
        onClick={toggleVideo}
        className="absolute bottom-20 right-16 z-10 w-11 h-11 border border-white/15 rounded-full bg-white/5 backdrop-blur-md text-white/55 text-sm flex items-center justify-center hover:border-gold hover:bg-[rgba(184,151,90,0.12)] hover:text-gold-lt transition-all duration-200 max-md:right-6"
        style={{ animation: "fadeIn 1s ease 1.2s both" }}
        aria-label={playing ? "Pause video" : "Play video"}
      >
        {playing ? "⏸" : "▶"}
      </button>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 max-md:hidden"
        style={{ animation: "fadeIn 1s ease 1.4s both" }}
        aria-hidden="true"
      >
        <div
          className="relative w-px h-12 overflow-hidden"
          style={{
            background:
              "linear-gradient(to bottom, transparent, rgba(255,255,255,0.35))",
          }}
        >
          <div
            className="absolute w-full h-full"
            style={{
              background:
                "linear-gradient(to bottom, transparent, #b8975a, transparent)",
              animation: "scrollDrop 1.8s ease infinite",
              top: "-100%",
            }}
          />
        </div>
        <span className="text-[9px] font-normal tracking-[0.22em] uppercase text-white/28">
          Scroll
        </span>
      </div>
    </section>
  );
}
