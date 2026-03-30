"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Industries", href: "/industries" },
  { label: "About", href: "/about" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => setMenuOpen(false), [pathname]);

  // On home page: start transparent with white text, go dark on scroll
  // On other pages: always frosted glass light
  const isDark = isHome && !scrolled;

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-[500] flex items-center justify-between h-[72px] px-16 transition-all duration-300 max-lg:px-6"
      style={{
        background: isDark
          ? "transparent"
          : scrolled && isHome
          ? "rgba(24,22,15,0.92)"
          : "rgba(255,255,255,0.95)",
        borderBottom: isDark
          ? "1px solid transparent"
          : scrolled && isHome
          ? "1px solid rgba(255,255,255,0.10)"
          : "1px solid #e2dfd8",
        backdropFilter: isDark ? "none" : "blur(20px)",
      }}
    >
      {/* Logo */}
      <Link
        href="/"
        className="font-sans font-semibold text-[14px] tracking-[0.22em] uppercase no-underline relative z-10 transition-colors duration-300"
        style={{ color: isDark || (scrolled && isHome) ? "#ffffff" : "#18160f" }}
      >
        Sachhsoft
      </Link>

      {/* Desktop nav — centered (lg = 1024px+, hide on tablet & mobile) */}
      <ul className="hidden lg:flex gap-10 list-none absolute left-1/2 -translate-x-1/2">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-[13px] font-normal tracking-[0.05em] no-underline transition-colors duration-200"
              style={{
                color:
                  isDark || (scrolled && isHome)
                    ? "rgba(255,255,255,0.65)"
                    : "#4a4740",
              }}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Right side */}
      <div className="flex items-center gap-6">
        <Link
          href="/blog"
          className="hidden lg:block text-[13px] font-normal tracking-[0.04em] no-underline transition-colors duration-200"
          style={{
            color:
              isDark || (scrolled && isHome)
                ? "rgba(255,255,255,0.65)"
                : "#4a4740",
          }}
        >
          Blog
        </Link>
        <Link
          href="/start-a-project"
          className="text-[12px] font-medium tracking-[0.12em] uppercase no-underline px-[20px] py-[11px] whitespace-nowrap transition-colors duration-200 max-md:hidden"
          style={{
            color: isDark || (scrolled && isHome) ? "#18160f" : "#ffffff",
            background: isDark || (scrolled && isHome) ? "#b8975a" : "#18160f",
          }}
        >
          Start a Project
        </Link>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden flex flex-col gap-[5px] p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="block w-6 h-[1.5px] transition-all duration-300"
              style={{
                background: isDark || (scrolled && isHome) ? "#fff" : "#18160f",
                transform:
                  menuOpen
                    ? i === 0
                      ? "translateY(6.5px) rotate(45deg)"
                      : i === 2
                      ? "translateY(-6.5px) rotate(-45deg)"
                      : "scaleX(0)"
                    : "none",
              }}
            />
          ))}
        </button>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-[#e2dfd8] py-6 px-6 flex flex-col gap-4 lg:hidden shadow-lg">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[14px] font-normal text-[#4a4740] no-underline py-2 border-b border-[#f0eeea]"
            >
              {link.label}
            </Link>
          ))}
          <Link href="/blog" className="text-[14px] font-normal text-[#4a4740] no-underline py-2 border-b border-[#f0eeea]">
            Blog
          </Link>
          <Link
            href="/start-a-project"
            className="text-[12px] font-medium tracking-[0.12em] uppercase text-white bg-[#18160f] px-6 py-3 no-underline text-center mt-2"
          >
            Start a Project
          </Link>
        </div>
      )}
    </nav>
  );
}
