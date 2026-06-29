"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    dot.style.display = "block";
    ring.style.display = "block";

    let dotX = 0, dotY = 0;
    let ringX = 0, ringY = 0;
    let frame: number;
    let isOnDark = false;
    let isHovering = false;

    function applyColors() {
      if (isHovering) return;
      if (isOnDark) {
        dot.style.background = "#ffffff";
        ring.style.borderColor = "rgba(255,255,255,0.4)";
      } else {
        dot.style.background = "var(--ink)";
        ring.style.borderColor = "rgba(24,22,15,0.35)";
      }
    }

    function checkBackground(x: number, y: number) {
      const el = document.elementFromPoint(x, y);
      if (!el) return;
      let node: Element | null = el;
      while (node && node !== document.body) {
        const bg = getComputedStyle(node).backgroundColor;
        if (bg && bg !== "rgba(0, 0, 0, 0)" && bg !== "transparent") {
          const match = bg.match(/\d+/g);
          if (match) {
            const [r, g, b] = match.map(Number);
            const luminance = (r * 299 + g * 587 + b * 114) / 1000;
            const wasDark = isOnDark;
            isOnDark = luminance < 128;
            if (wasDark !== isOnDark) applyColors();
          }
          return;
        }
        node = node.parentElement;
      }
      const wasDark = isOnDark;
      isOnDark = false;
      if (wasDark !== isOnDark) applyColors();
    }

    let checkCounter = 0;
    const onMove = (e: MouseEvent) => {
      dotX = e.clientX;
      dotY = e.clientY;
      checkCounter++;
      if (checkCounter % 6 === 0) {
        checkBackground(e.clientX, e.clientY);
      }
    };

    document.addEventListener("mousemove", onMove, { passive: true });

    const animate = () => {
      ringX += (dotX - ringX) * 0.12;
      ringY += (dotY - ringY) * 0.12;

      dot.style.left = dotX + "px";
      dot.style.top = dotY + "px";
      ring.style.left = ringX + "px";
      ring.style.top = ringY + "px";

      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);

    const onEnter = () => {
      isHovering = true;
      ring.style.width = "44px";
      ring.style.height = "44px";
      ring.style.borderColor = "var(--gold)";
      dot.style.background = "var(--gold)";
      dot.style.width = "8px";
      dot.style.height = "8px";
    };
    const onLeave = () => {
      isHovering = false;
      ring.style.width = "32px";
      ring.style.height = "32px";
      dot.style.width = "6px";
      dot.style.height = "6px";
      applyColors();
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
      <div
        ref={dotRef}
        style={{ display: "none" }}
        className="fixed z-[9999] w-[6px] h-[6px] bg-ink rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 transition-[width,height,background] duration-200"
      />
      <div
        ref={ringRef}
        style={{ display: "none" }}
        className="fixed z-[9998] w-[32px] h-[32px] border border-[rgba(24,22,15,0.35)] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 transition-[width,height,border-color] duration-150"
      />
    </>
  );
}
