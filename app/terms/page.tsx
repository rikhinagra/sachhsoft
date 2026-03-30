import type { Metadata } from "next";
import RevealWrapper from "@/components/ui/RevealWrapper";

export const metadata: Metadata = {
  title: "Terms of Service — SACHHSOFT",
  description:
    "SACHHSOFT's Terms of Service. Read the terms and conditions that govern your use of our website and services.",
  alternates: { canonical: "https://sachhsoft.com/terms" },
};

const sections = [
  {
    title: "1. Acceptance of Terms",
    content: `By accessing or using the SACHHSOFT website at sachhsoft.com, or by engaging SACHHSOFT for any services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or services.

These terms apply to all visitors, clients, and any other parties who access or use our website or engage our services. SACHHSOFT reserves the right to update these terms at any time, and continued use of our website or services following any changes constitutes acceptance of the revised terms.`,
  },
  {
    title: "2. Services",
    content: `SACHHSOFT provides bespoke software design and development services, including but not limited to product design, web and mobile application development, cloud and DevOps infrastructure, AI and automation integration, and team augmentation.

The specific scope, timeline, deliverables, and fees for any engagement are agreed upon separately through a written proposal, statement of work, or client agreement. These Terms of Service govern the general relationship between SACHHSOFT and any party interacting with our website or services and are supplemented by any specific project agreements.`,
  },
  {
    title: "3. Intellectual Property",
    content: `All content on the SACHHSOFT website, including but not limited to text, graphics, logos, images, and design, is the property of SACHHSOFT and is protected by applicable copyright and intellectual property laws. You may not reproduce, distribute, or use any content from this website without our prior written permission.

With respect to client projects, intellectual property ownership is governed by the specific client agreement in place for that engagement. Unless otherwise agreed in writing, upon full payment of all fees, clients receive ownership of the custom code and deliverables produced specifically for their project. SACHHSOFT retains the right to use the work for portfolio and marketing purposes unless otherwise agreed.`,
  },
  {
    title: "4. Client Responsibilities",
    content: `Clients engaging SACHHSOFT for services agree to provide accurate, complete, and timely information necessary for the successful completion of the project. This includes providing feedback, approvals, content, access credentials, and any other materials as reasonably requested.

Delays caused by a client's failure to provide required information, approvals, or materials in a timely manner may result in project timeline adjustments and additional fees. SACHHSOFT is not responsible for delays or outcomes attributable to client-side inaction.`,
  },
  {
    title: "5. Payment Terms",
    content: `Payment terms for any engagement are outlined in the relevant proposal, invoice, or client agreement. Unless otherwise agreed, invoices are due within the period specified on the invoice.

Late payments may incur interest charges as specified in the client agreement. SACHHSOFT reserves the right to pause or suspend work on any project where payment obligations are not met in accordance with the agreed terms.`,
  },
  {
    title: "6. Confidentiality",
    content: `SACHHSOFT respects the confidentiality of client information. We do not share client project details, business information, or proprietary data with third parties without the client's consent, except as required by law or as necessary to deliver the agreed services using trusted third-party tools and services.

Where a mutual non-disclosure agreement is required, SACHHSOFT is willing to enter into such an agreement prior to the commencement of any project.`,
  },
  {
    title: "7. Limitation of Liability",
    content: `To the maximum extent permitted by applicable law, SACHHSOFT shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our website or services, even if SACHHSOFT has been advised of the possibility of such damages.

SACHHSOFT's total liability to any client for any claim arising out of or relating to a specific engagement shall not exceed the total fees paid by that client for the relevant project in the twelve months preceding the claim.`,
  },
  {
    title: "8. Warranties and Disclaimers",
    content: `SACHHSOFT will perform services with reasonable skill and care in accordance with industry standards. We make no warranty that our website will be uninterrupted, error-free, or free of viruses or other harmful components.

The website and its content are provided on an "as is" basis. SACHHSOFT disclaims all warranties, express or implied, to the fullest extent permitted by law, including warranties of merchantability, fitness for a particular purpose, and non-infringement.`,
  },
  {
    title: "9. Third-Party Links",
    content: `Our website may contain links to third-party websites or services. These links are provided for convenience only. SACHHSOFT has no control over the content or practices of third-party websites and is not responsible for their content, privacy practices, or terms. Accessing any third-party website is done at your own risk.`,
  },
  {
    title: "10. Termination",
    content: `Either party may terminate a client engagement in accordance with the terms set out in the applicable client agreement. SACHHSOFT reserves the right to terminate or suspend access to our website or services at any time, with or without cause, and without prior notice.

Upon termination of an engagement, payment for all work completed up to the date of termination is due in accordance with the agreed payment terms.`,
  },
  {
    title: "11. Governing Law",
    content: `These Terms of Service are governed by and construed in accordance with the laws of the State of Illinois, United States, without regard to conflict of law principles. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts located in Chicago, Illinois.`,
  },
  {
    title: "12. Changes to These Terms",
    content: `We may revise these Terms of Service at any time by updating this page. The revised terms will be effective immediately upon posting. We encourage you to review these terms periodically. Your continued use of our website or services after any changes constitutes your acceptance of the revised terms.`,
  },
  {
    title: "13. Contact Us",
    content: `If you have any questions about these Terms of Service, please contact us at:

SACHHSOFT
Chicago, Illinois, United States
Email: hello@sachhsoft.com`,
  },
];

export default function TermsPage() {
  return (
    <main>
      {/* ── Hero ── */}
      <section className="bg-ink pt-[152px] pb-[80px] px-16 max-lg:px-8 max-md:px-6 max-md:pt-[120px] max-md:pb-12">
        <div className="max-w-[1280px] mx-auto">
          <RevealWrapper>
            <div className="text-[11px] tracking-[0.2em] uppercase text-gold mb-6 flex items-center gap-3">
              <span className="block w-6 h-px bg-gold/40" />
              Legal
              <span className="block w-6 h-px bg-gold/40" />
            </div>
            <h1
              className="font-serif font-light text-white leading-none tracking-[-0.03em]"
              style={{ fontSize: "clamp(36px, 6vw, 80px)" }}
            >
              Terms of Service
            </h1>
            <p className="text-[14px] font-light text-white/35 mt-6 tracking-[0.04em]">
              Effective date: January 1, 2026
            </p>
          </RevealWrapper>
        </div>
      </section>

      {/* ── Content ── */}
      <section className="bg-white border-t border-rule py-[80px] px-16 max-lg:px-8 max-md:px-6 max-md:py-14">
        <div className="max-w-[860px] mx-auto">
          <RevealWrapper>
            <p className="text-[16px] font-light text-body-text leading-[1.9] mb-16 border-l-2 border-gold pl-6">
              These Terms of Service govern your use of the SACHHSOFT website and any services provided by SACHHSOFT. Please read them carefully before engaging with us.
            </p>
          </RevealWrapper>

          <div className="space-y-14">
            {sections.map((section) => (
              <RevealWrapper key={section.title}>
                <div className="border-t border-rule pt-10">
                  <h2 className="font-serif text-[22px] font-normal text-ink mb-5 tracking-[-0.01em]">
                    {section.title}
                  </h2>
                  <div className="space-y-4">
                    {section.content.split("\n\n").map((para, i) => (
                      <p key={i} className="text-[15px] font-light text-body-text leading-[1.9]">
                        {para}
                      </p>
                    ))}
                  </div>
                </div>
              </RevealWrapper>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
