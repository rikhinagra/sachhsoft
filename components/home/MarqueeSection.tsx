import { Diamond } from "lucide-react";

const items = [
  "Bespoke Software",
  "Enterprise Platforms",
  "HealthTech",
  "FinTech",
  "E-Commerce",
  "Startup MVPs",
  "Cloud & DevOps",
  "Mobile Applications",
  "Next-Gen Solutions",
  "AI Integration",
  "Product Design",
  "Team Augmentation",
];

export default function MarqueeSection() {
  const doubled = [...items, ...items];

  return (
    <div className="overflow-hidden bg-gold py-3.5" aria-hidden="true">
      <div
        className="flex gap-0 whitespace-nowrap"
        style={{ animation: "marqueeScroll 28s linear infinite", width: "max-content" }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-9 px-9 text-[11px] font-medium tracking-[0.2em] uppercase text-ink"
          >
            {item}
            <Diamond size={6} fill="currentColor" strokeWidth={0} className="text-ink/60 flex-shrink-0" />
          </span>
        ))}
      </div>
    </div>
  );
}
