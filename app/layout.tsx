import type { Metadata } from "next";
import { Cormorant, Outfit } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import { organizationSchema, serviceSchema } from "@/lib/schema";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600"],
  display: "swap",
});

const cormorant = Cormorant({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "SACHHSOFT — Bespoke Software Development | Chicago & Global",
    template: "%s | SACHHSOFT",
  },
  description:
    "SACHHSOFT builds bespoke custom software products for enterprise teams, mid-size companies, and startup founders. HealthTech, FinTech, E-Commerce, AI integration — from Chicago, delivered globally.",
  keywords: [
    "custom software development",
    "bespoke software company",
    "software development Chicago",
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
    google: "your-google-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${outfit.variable} ${cormorant.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([organizationSchema(), serviceSchema()]),
          }}
        />
      </head>
      <body>
        <CustomCursor />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
