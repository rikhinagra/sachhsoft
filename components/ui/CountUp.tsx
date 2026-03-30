"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface CountUpProps {
  value: string; // e.g. "50+", "2.5yr", "99.9%"
  className?: string;
  style?: React.CSSProperties;
}

function parseValue(raw: string): { num: number; prefix: string; suffix: string; isFloat: boolean } {
  // Extract leading non-numeric prefix
  const prefixMatch = raw.match(/^([^0-9]*)/);
  const prefix = prefixMatch ? prefixMatch[1] : "";
  const rest = raw.slice(prefix.length);
  // Extract number (int or float)
  const numMatch = rest.match(/^(\d+\.?\d*)/);
  const numStr = numMatch ? numMatch[1] : "0";
  const num = parseFloat(numStr);
  const suffix = rest.slice(numStr.length);
  return { num, prefix, suffix, isFloat: numStr.includes(".") };
}

export default function CountUp({ value, className = "", style }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [display, setDisplay] = useState("0");
  const { num, prefix, suffix, isFloat } = parseValue(value);

  useEffect(() => {
    if (!isInView) return;

    const duration = 1800;
    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = num * eased;
      setDisplay(isFloat ? current.toFixed(1) : Math.round(current).toString());
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [isInView, num, isFloat]);

  return (
    <span ref={ref} className={className} style={style}>
      {prefix}{display}{suffix}
    </span>
  );
}
