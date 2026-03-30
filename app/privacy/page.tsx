import type { Metadata } from "next";
import RevealWrapper from "@/components/ui/RevealWrapper";

export const metadata: Metadata = {
  title: "Privacy Policy — SACHHSOFT",
  description:
    "SACHHSOFT's Privacy Policy. Learn how we collect, use, and protect your information.",
  alternates: { canonical: "https://sachhsoft.com/privacy" },
};

const sections = [
  {
    title: "1. Who We Are",
    content: `SACHHSOFT is a software design and development company headquartered in Chicago, Illinois, United States. We build bespoke digital products for startups, scale-ups, and enterprises across a range of industries.

When this Privacy Policy refers to "SACHHSOFT", "we", "us", or "our", it means SACHHSOFT and its team. When it refers to "you" or "your", it means any person who visits our website, contacts us, or engages with our services.`,
  },
  {
    title: "2. Information We Collect",
    content: `We collect information in the following ways:

Information you provide directly: When you fill out a contact form, start a project inquiry, subscribe to updates, or send us an email, you may provide us with your name, email address, company name, phone number, and details about your project or enquiry.

Information collected automatically: When you visit our website, we may automatically collect technical information such as your IP address, browser type, operating system, referring URLs, and pages visited. This information is collected through standard server logs and analytics tools.

Communications: If you email or message us, we retain those communications to respond to your enquiries and improve our services.`,
  },
  {
    title: "3. How We Use Your Information",
    content: `We use the information we collect to:

Respond to your enquiries and project requests in a timely manner. Provide, operate, and improve our website and services. Send you updates or information you have requested. Understand how visitors use our website so we can improve the experience. Comply with legal obligations where required.

We do not sell, rent, or trade your personal information to third parties for their marketing purposes.`,
  },
  {
    title: "4. Cookies and Tracking",
    content: `Our website uses cookies and similar tracking technologies to enhance your browsing experience and collect analytics data. Cookies are small text files stored on your device.

We use analytics cookies to understand how visitors interact with our website, including which pages are visited most and how long visitors stay. These help us improve our content and user experience.

You can control cookies through your browser settings. Most browsers allow you to refuse or delete cookies. Please note that disabling cookies may affect the functionality of certain parts of our website.`,
  },
  {
    title: "5. Third-Party Services",
    content: `We may use third-party services to operate our website and business, including analytics providers, email platforms, and hosting services. These providers may have access to your information only to perform specific tasks on our behalf and are obligated to protect your information.

Our website may contain links to third-party websites. We are not responsible for the privacy practices of those websites and encourage you to review their privacy policies independently.`,
  },
  {
    title: "6. Data Retention",
    content: `We retain your personal information only for as long as necessary to fulfil the purposes for which it was collected, including responding to your enquiry, fulfilling a contract, or complying with legal requirements.

If you would like us to delete your information, please contact us at the address below and we will action your request promptly.`,
  },
  {
    title: "7. Data Security",
    content: `We take the security of your personal information seriously. We implement appropriate technical and organisational measures to protect your data against unauthorised access, disclosure, alteration, or destruction.

However, no method of transmission over the internet or electronic storage is completely secure. While we strive to protect your personal information, we cannot guarantee its absolute security.`,
  },
  {
    title: "8. Your Rights",
    content: `Depending on your location, you may have certain rights regarding your personal information, including:

The right to access the personal information we hold about you. The right to request correction of inaccurate information. The right to request deletion of your personal information. The right to withdraw consent where processing is based on consent. The right to lodge a complaint with a relevant data protection authority.

To exercise any of these rights, please contact us using the details below.`,
  },
  {
    title: "9. Children's Privacy",
    content: `Our website and services are not directed at individuals under the age of 16. We do not knowingly collect personal information from children. If you believe we have inadvertently collected information from a child, please contact us immediately and we will take steps to delete it.`,
  },
  {
    title: "10. Changes to This Policy",
    content: `We may update this Privacy Policy from time to time to reflect changes in our practices or for legal and regulatory reasons. When we make changes, we will update the effective date at the top of this page.

We encourage you to review this policy periodically to stay informed about how we protect your information.`,
  },
  {
    title: "11. Contact Us",
    content: `If you have any questions, concerns, or requests regarding this Privacy Policy or how we handle your personal information, please contact us at:

SACHHSOFT
Chicago, Illinois, United States
Email: hello@sachhsoft.com`,
  },
];

export default function PrivacyPage() {
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
              Privacy Policy
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
              At SACHHSOFT, we respect your privacy and are committed to being transparent about how we collect, use, and protect your personal information. This policy explains our practices clearly and honestly.
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
