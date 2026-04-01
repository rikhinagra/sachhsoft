import Link from "next/link";
import Image from "next/image";

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
              width={140}
              height={35}
              style={{ height: 35, width: "auto" }}
            />
            <div className="text-[12px] font-light text-white/30 mt-2 tracking-[0.08em]">
              Bespoke Software. Built for What&apos;s Next.
            </div>
            <div className="text-[11px] font-light text-white/20 mt-1 tracking-[0.06em]">
              Chicago · Global · Since 2015
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
