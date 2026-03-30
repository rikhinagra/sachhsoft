"use client";

import { motion } from "framer-motion";

// Ainstinct inline SVG
const AinstinctLogo = () => (
  <svg viewBox="0 0 108 72" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-9 w-auto">
    <circle cx="36" cy="36" r="30.525" stroke="currentColor" strokeWidth="10.95" />
    <circle cx="99" cy="61" r="9" fill="currentColor" />
    <path d="M96 0H108L78 72H66L96 0Z" fill="currentColor" />
  </svg>
);

// LexGo Solutions as styled text — matches their nav logo exactly
const LexGoLogo = () => (
  <span style={{ fontFamily: '"Playfair Display", serif', fontWeight: 800, fontSize: "22px", letterSpacing: "-0.5px", color: "#0a1f44", whiteSpace: "nowrap" }}>
    LexGo<span style={{ color: "#d4af37" }}>Solutions</span>
  </span>
);

// SixteenNine as styled text (logo is white-only, text looks cleaner)
const SixteenNineLogo = () => (
  <span style={{ fontFamily: "var(--font-outfit)", fontWeight: 900, fontSize: "21px", letterSpacing: "0.14em", color: "#18160f" }}>
    SIXTEENINE™
  </span>
);

const clients: { name: string; url?: string; svg?: React.ReactNode; dark?: boolean; invert?: boolean }[] = [
  { name: "RenewRx",    url: "https://cdn.prod.website-files.com/677eb93874391ef718526bb9/6900554b1cf1f6b0feed728e_renewrx-r-logo.svg" },
  { name: "Databahn",   url: "https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67ebaa6ba00e7b767d1db02e_logo.avif", invert: true },
  { name: "Redline Lab",url: "https://www.redlinelab.io/assets/REDLINELAB-logo-600-100-D8pVPWFE.png" },
  { name: "Rizzarr",    url: "https://d15o1r2675r1cy.cloudfront.net/static/images/rizzarr-logo-updated.png" },
  { name: "SixteenNine",svg: <SixteenNineLogo /> },
  { name: "Ainstinct",  svg: <AinstinctLogo /> },
  { name: "LexGo Solutions", svg: <LexGoLogo /> },
  { name: "Chicago Indian Arts", url: "https://res.cloudinary.com/dom3oj7ya/image/upload/v1770979601/CIA-logo-black_snmlaz.webp" },
];

export default function ClientLogoTicker() {
  // Duplicate for seamless loop
  const items = [...clients, ...clients, ...clients];

  return (
    <section className="bg-white border-t border-b border-rule py-14 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-16 mb-8 max-lg:px-8 max-md:px-6">
        <div className="text-[10px] font-medium tracking-[0.22em] uppercase text-muted text-center">
          Trusted by companies across every industry
        </div>
      </div>

      {/* Ticker */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, #ffffff, transparent)" }} />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, #ffffff, transparent)" }} />

        <div className="flex overflow-hidden">
          <motion.div
            className="flex items-center gap-16 flex-shrink-0"
            animate={{ x: ["0%", "-33.333%"] }}
            transition={{
              duration: 22,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {items.map((client, i) => (
              <div key={i} className="flex items-center gap-12 flex-shrink-0">
                {/* Logo */}
                <div className={`h-[46px] flex items-center justify-center transition-all duration-300 ${client.dark ? "bg-ink px-4 py-2" : ""}`}>
                  {client.svg ? (
                    <div className="text-ink h-[36px] flex items-center">
                      {client.svg}
                    </div>
                  ) : (
                    <img
                      src={client.url}
                      alt={client.name}
                      className="max-h-[42px] max-w-[150px] object-contain"
                      style={client.invert ? { filter: "brightness(0)" } : undefined}
                      onError={(e) => {
                        const el = e.currentTarget as HTMLImageElement;
                        el.style.display = "none";
                        const span = document.createElement("span");
                        span.style.cssText = "font-size:13px;font-weight:500;letter-spacing:0.06em;color:#4a4740;white-space:nowrap";
                        span.textContent = client.name;
                        el.parentElement?.appendChild(span);
                      }}
                    />
                  )}
                </div>
                {/* Divider */}
                <div className="w-px h-5 bg-rule flex-shrink-0" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
