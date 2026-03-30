"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only on devices with a precise pointer (mouse/trackpad), not touch
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    // Show cursors
    dot.style.display = "block";
    ring.style.display = "block";

    let dotX = 0, dotY = 0;
    let ringX = 0, ringY = 0;
    let frame: number;

    const onMove = (e: MouseEvent) => {
      dotX = e.clientX;
      dotY = e.clientY;
    };

    document.addEventListener("mousemove", onMove, { passive: true });

    const animate = () => {
      // Ring lags slightly behind dot for the trailing effect
      ringX += (dotX - ringX) * 0.12;
      ringY += (dotY - ringY) * 0.12;

      dot.style.left = dotX + "px";
      dot.style.top = dotY + "px";
      ring.style.left = ringX + "px";
      ring.style.top = ringY + "px";

      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);

    // Scale up ring on interactive elements
    const onEnter = () => {
      ring.style.width = "44px";
      ring.style.height = "44px";
      ring.style.borderColor = "var(--gold)";
      dot.style.background = "var(--gold)";
      dot.style.width = "8px";
      dot.style.height = "8px";
    };
    const onLeave = () => {
      ring.style.width = "32px";
      ring.style.height = "32px";
      ring.style.borderColor = "rgba(24,22,15,0.35)";
      dot.style.background = "var(--ink)";
      dot.style.width = "6px";
      dot.style.height = "6px";
    };

    const interactives = document.querySelectorAll("a, button");
    interactives.forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(frame);
      interactives.forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
    };
  }, []);

  return (
    <>
      {/* Dot */}
      <div
        ref={dotRef}
        style={{ display: "none" }}
        className="fixed z-[9999] w-[6px] h-[6px] bg-ink rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 transition-[width,height,background] duration-200"
      />
      {/* Ring */}
      <div
        ref={ringRef}
        style={{ display: "none" }}
        className="fixed z-[9998] w-[32px] h-[32px] border border-[rgba(24,22,15,0.35)] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 transition-[width,height,border-color] duration-150"
      />
    </>
  );
}
