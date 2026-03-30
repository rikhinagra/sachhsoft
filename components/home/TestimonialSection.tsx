import RevealWrapper from "@/components/ui/RevealWrapper";

export default function TestimonialSection() {
  return (
    <section
      className="bg-white py-[120px] px-16 border-t border-b border-rule max-lg:px-8 max-md:px-6 max-md:py-16"
      aria-labelledby="testimonial-heading"
    >
      <RevealWrapper className="max-w-[1280px] mx-auto">
        <div
          className="grid grid-cols-2 gap-px bg-rule border border-rule max-lg:grid-cols-1"
        >
          {/* Quote side */}
          <div className="bg-white p-[72px] max-lg:p-12 max-md:p-8">
            <span
              className="font-serif text-[120px] leading-[0.7] text-[rgba(184,151,90,0.2)] mb-6 block select-none"
              aria-hidden="true"
            >
              &ldquo;
            </span>
            <blockquote
              id="testimonial-heading"
              className="font-serif text-ink font-light italic leading-[1.5] tracking-[-0.01em]"
              style={{ fontSize: "clamp(22px, 2.5vw, 30px)" }}
            >
              Sachhsoft didn&apos;t just build our product — they brought
              strategic clarity to every decision. We launched in 14 weeks,
              under budget, and the platform scaled to 50k users in the first
              month.
            </blockquote>
            <div className="w-8 h-px bg-rule my-9" />
            <div className="flex items-center gap-4">
              <img
                src="https://cdn.prod.website-files.com/68641725731e05d19cf0bccc/695e85c6b8685d49d7d22e0d_Kari_Cao-p-500.webp"
                alt="Kari Cao"
                className="w-10 h-10 rounded-full object-cover object-top flex-shrink-0"
              />
              <div>
                <div className="text-[14px] font-medium tracking-[0.04em] text-ink">
                  Kari Cao
                </div>
                <div className="text-[12px] font-light text-muted tracking-[0.04em] mt-0.5">
                  CEO, RenewRx
                </div>
              </div>
            </div>
          </div>

          {/* Case study side */}
          <div className="bg-off p-[72px] flex flex-col justify-between max-lg:p-12 max-md:p-8">
            <div>
              <div className="text-[10px] font-medium tracking-[0.2em] uppercase text-gold mb-5 flex items-center gap-2.5">
                <span className="block w-4 h-px bg-gold" />
                Featured Case Study
              </div>
              <h3 className="font-serif text-[28px] font-normal tracking-[-0.01em] text-ink leading-[1.2] mb-5">
                HealthTech Platform: Zero to 50K Users in 30 Days
              </h3>
              <p className="text-[14px] font-light text-body-text leading-[1.7] mb-9">
                We designed and engineered a HIPAA-compliant telehealth platform
                from scratch — architecture, mobile apps, and backend
                infrastructure — delivered in 14 weeks with a dedicated
                8-person team.
              </p>
              <div className="flex gap-10 flex-wrap">
                {[
                  { num: "14", label: "Weeks to Launch" },
                  { num: "50K", label: "Users Month 1" },
                  { num: "99.9%", label: "Uptime SLA" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="font-serif text-[40px] font-semibold text-ink tracking-[-0.02em] leading-none">
                      {stat.num}
                    </div>
                    <div className="text-[11px] font-normal tracking-[0.12em] uppercase text-muted mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </RevealWrapper>
    </section>
  );
}
