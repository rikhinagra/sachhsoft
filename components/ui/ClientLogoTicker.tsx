"use client";

import { motion } from "framer-motion";

const clients = [
  { name: "RenewRx", domain: "renewrx.health" },
  { name: "Databahn", domain: "databahn.ai" },
  { name: "Redline Lab", domain: "redlinelab.io" },
  { name: "Rizzarr", domain: "rizzarr.com" },
  { name: "PhoneCheck", domain: "phonecheck.com" },
  { name: "SixteenNine", domain: "sixteenine.com" },
  { name: "Ainstinct", domain: "ainstinct.ai" },
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
              <div
                key={i}
                className="flex items-center gap-4 flex-shrink-0 group"
              >
                <div className="w-[120px] h-[44px] flex items-center justify-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                  <img
                    src={`https://logo.clearbit.com/${client.domain}`}
                    alt={client.name}
                    className="max-h-[36px] max-w-[110px] object-contain"
                    onError={(e) => {
                      // Fallback to company name text if logo fails
                      const parent = (e.currentTarget as HTMLImageElement).parentElement;
                      if (parent) {
                        (e.currentTarget as HTMLImageElement).style.display = "none";
                        parent.innerHTML = `<span style="font-family:var(--font-outfit);font-size:13px;font-weight:500;letter-spacing:0.06em;color:#4a4740;white-space:nowrap">${client.name}</span>`;
                      }
                    }}
                  />
                </div>
                {/* Divider dot */}
                <div className="w-1 h-1 rounded-full bg-rule flex-shrink-0" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
