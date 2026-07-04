export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["ProfessionalService", "Organization"],
    name: "SACHHSOFT",
    description:
      "Bespoke software, app, and e-commerce development agency building custom HealthTech, FinTech, and AI-integrated platforms for enterprise teams, mid-size companies, and startups.",
    url: "https://www.sachhsoft.com",
    image: "https://sachhsoft.com/og-image.jpg",
    foundingDate: "2015",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Chicago",
      addressRegion: "IL",
      addressCountry: "US",
    },
    areaServed: ["United States", "Worldwide"],
    sameAs: [
      "https://www.linkedin.com/company/sachhsoft/",
      "https://www.facebook.com/Sachhsoft/",
      "https://www.instagram.com/sachhsoft_usa/",
      "https://medium.com/@sachhsoft",
    ],
    knowsAbout: [
      "App Development",
      "E-Commerce Development",
      "Web Development",
      "HealthTech",
      "FinTech",
      "AI Integration",
      "RAG Pipelines",
      "Agentic Workflows",
      "Cloud DevOps",
      "React",
      "Next.js",
      "AWS",
      "Azure",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "SACHHSOFT Services",
      itemListElement: [
        {
          "@type": "Service",
          name: "Web Development",
          description:
            "Custom web applications built with React and Next.js, from first sketch to production release.",
        },
        {
          "@type": "Service",
          name: "App Development",
          description:
            "Native and cross-platform mobile app development for iOS and Android.",
        },
        {
          "@type": "Service",
          name: "E-commerce Development",
          description:
            "Headless storefronts, inventory systems, personalization engines, and omnichannel commerce.",
        },
        {
          "@type": "Service",
          name: "Product Design & Development",
          description:
            "MVPs and full product builds, from first sketch to production release.",
        },
        {
          "@type": "Service",
          name: "Cloud, DevOps & Infrastructure",
          description:
            "High-availability architecture on AWS and Azure, CI/CD pipelines, and containerization.",
        },
        {
          "@type": "Service",
          name: "AI & Automation Integration",
          description:
            "LLM integrations, RAG pipelines, agentic workflows, and intelligent automation.",
        },
        {
          "@type": "Service",
          name: "Teams & Talent Integration",
          description:
            "Dedicated engineers who embed directly into your workflow and tools.",
        },
      ],
    },
  };
}

export function webSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://sachhsoft.com/#website",
    name: "SACHHSOFT",
    url: "https://sachhsoft.com",
    description:
      "Bespoke software development for enterprise teams, mid-size companies, and startup founders.",
    publisher: {
      "@type": "Organization",
      name: "SACHHSOFT",
      url: "https://sachhsoft.com",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://sachhsoft.com/blog?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
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
