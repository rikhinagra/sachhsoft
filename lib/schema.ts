export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "SACHHSOFT",
    url: "https://sachhsoft.com",
    logo: "https://sachhsoft.com/logo.png",
    description:
      "Bespoke software development company building custom digital products for enterprise teams, mid-size companies, and startup founders. Based in Chicago, serving clients globally.",
    foundingDate: "2015",
    numberOfEmployees: { "@type": "QuantitativeValue", value: 60 },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Chicago",
      addressRegion: "IL",
      addressCountry: "US",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      url: "https://sachhsoft.com/start-a-project",
    },
    sameAs: [
      "https://www.linkedin.com/company/sachhsoft",
      "https://twitter.com/sachhsoft",
    ],
  };
}

export function serviceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "SACHHSOFT — Custom Software Development",
    provider: { "@type": "Organization", name: "SACHHSOFT" },
    serviceType: "Custom Software Development",
    areaServed: "Worldwide",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Software Development Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Product Design & Development",
            description:
              "Web apps, mobile experiences, MVPs, and e-commerce — designed to convert and built to last.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Cloud, DevOps & Infrastructure",
            description:
              "High-availability architectures on AWS and Azure. CI/CD pipelines and infrastructure that scales invisibly.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI & Automation Integration",
            description:
              "LLM integrations, RAG pipelines, agentic workflows, and intelligent automation embedded in your product.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Teams & Talent Integration",
            description:
              "Dedicated engineers who embed in your workflow — no bloat, immediate velocity.",
          },
        },
      ],
    },
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}
