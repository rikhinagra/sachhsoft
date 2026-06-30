import type { Metadata } from "next";
import { Instrument_Serif } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import WhatsAppFloat from "@/components/ui/WhatsAppFloat";
import { organizationSchema, serviceSchema, localBusinessSchema, webSiteSchema } from "@/lib/schema";

const instrumentSerif = Instrument_Serif({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "SACHHSOFT — Bespoke Software Development | Global",
    template: "%s | SACHHSOFT",
  },
  description:
    "SACHHSOFT builds bespoke custom software products for enterprise teams, mid-size companies, and startup founders. HealthTech, FinTech, E-Commerce, AI integration — delivered globally.",
  keywords: [
    "custom software development",
    "bespoke software company",
    "software development company",
    "HealthTech development company",
    "FinTech software development",
    "enterprise software development",
    "MVP development agency",
    "AI integration services",
    "cloud DevOps company",
    "sachhsoft",
    "software agency USA",
    "React Next.js development",
  ],
  authors: [{ name: "SACHHSOFT", url: "https://sachhsoft.com" }],
  creator: "SACHHSOFT",
  publisher: "SACHHSOFT",
  metadataBase: new URL("https://sachhsoft.com"),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sachhsoft.com",
    siteName: "SACHHSOFT",
    title: "SACHHSOFT — Bespoke Software Development",
    description:
      "We build custom digital products for enterprise teams, mid-size companies, and startup founders. Faster, smarter, bespoke.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SACHHSOFT — Bespoke Software Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SACHHSOFT — Bespoke Software Development",
    description:
      "Custom digital products for enterprise teams, mid-size companies, and startup founders.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${instrumentSerif.variable}`}>
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link href="https://api.fontshare.com/v2/css?f[]=satoshi@300,400,500,600,700&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([organizationSchema(), serviceSchema(), localBusinessSchema(), webSiteSchema()]),
          }}
        />
      </head>
      <body suppressHydrationWarning>
        <CustomCursor />
        <Nav />
        {children}
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
