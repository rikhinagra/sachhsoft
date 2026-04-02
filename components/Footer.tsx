import Link from "next/link";
import Image from "next/image";

const socialLinks = [
  {
    href: "https://www.linkedin.com/company/sachhsoft/",
    label: "LinkedIn",
    svg: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect x="2" y="9" width="4" height="12"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    href: "https://www.facebook.com/Sachhsoft/",
    label: "Facebook",
    svg: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
      </svg>
    ),
  },
  {
    href: "https://www.instagram.com/sachhsoft_usa/",
    label: "Instagram",
    svg: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
      </svg>
    ),
  },
  {
    href: "https://medium.com/@sachhsoft",
    label: "Medium",
    svg: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.54 12a6.8 6.8 0 0 1-6.77 6.82A6.8 6.8 0 0 1 0 12a6.8 6.8 0 0 1 6.77-6.82A6.8 6.8 0 0 1 13.54 12zm7.42 0c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
      </svg>
    ),
  },
];

const footerLinks: Record<string, { label: string; href: string }[]> = {
  Services: [
    { label: "Product Design & Dev", href: "/services#product-design" },
    { label: "Cloud & DevOps", href: "/services#cloud-devops" },
    { label: "AI & Automation", href: "/services#ai-automation" },
    { label: "Team Augmentation", href: "/services#team-augmentation" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Blog", href: "/blog" },
    { label: "Careers", href: "/careers" },
  ],
  Industries: [
    { label: "HealthTech", href: "/industries#healthcare" },
    { label: "FinTech", href: "/industries#fintech" },
    { label: "E-Commerce", href: "/industries#ecommerce" },
    { label: "Legal Tech", href: "/industries#legal" },
  ],
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink border-t border-white/8 px-16 pt-14 pb-12 max-lg:px-8 max-md:px-6">
      <div className="max-w-[1280px] mx-auto">
        {/* Top row */}
        <div className="flex justify-between items-start mb-12 gap-10 flex-wrap max-lg:flex-col">
          {/* Brand */}
          <div>
            <Image
              src="/logo.png"
              alt="SACHHSOFT"
              width={355}
              height={60}
              style={{ height: 18, width: "auto" }}
            />
            <div className="text-[12px] font-light text-white/30 mt-2 tracking-[0.08em]">
              Bespoke Software. Built for What&apos;s Next.
            </div>
            <div className="text-[11px] font-light text-white/20 mt-1 tracking-[0.06em]">
              Chicago · Global · Since 2015
            </div>
            {/* Social icons */}
            <div className="flex items-center gap-4 mt-5">
              {socialLinks.map(({ href, label, svg }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-white/30 hover:text-white transition-colors duration-200"
                >
                  {svg}
                </Link>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <div className="flex gap-10 flex-wrap max-md:gap-8">
            {Object.entries(footerLinks).map(([col, links]) => (
              <div key={col}>
                <div className="text-[10px] font-medium tracking-[0.2em] uppercase text-white/25 mb-4">
                  {col}
                </div>
                {links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="block text-[13px] font-light text-white/50 no-underline mb-2.5 tracking-[0.02em] hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex justify-between items-center pt-8 border-t border-white/8 flex-wrap gap-4">
          <p className="text-[12px] font-light text-white/25 tracking-[0.04em]">
            © {year} SACHHSOFT. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-[11px] font-light tracking-[0.12em] uppercase text-white/20">
            <Link href="/privacy" className="no-underline hover:text-white/50 transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="no-underline hover:text-white/50 transition-colors">
              Terms
            </Link>
            <span>Chicago · Global</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
