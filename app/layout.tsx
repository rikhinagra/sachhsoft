import type { Metadata } from "next";
import { Instrument_Serif } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import WhatsAppFloat from "@/components/ui/WhatsAppFloat";
import { organizationSchema, webSiteSchema } from "@/lib/schema";

const instrumentSerif = Instrument_Serif({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "SACHHSOFT — Bespoke Software Development | USA & Global",
    template: "%s | SACHHSOFT",
  },
  description:
    "SACHHSOFT builds custom software, mobile apps, and e-commerce platforms for HealthTech, FinTech, and AI — from USA delivered globally.",
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
    google: [
      "eNquyVXs0LTgbkx2GAHNFu7wO_9ATgseyz1qChcEgfo",
      "mWEpG4SinxnDFq1r7rqxPJkTNAHObzJj16Aq8Pr3Cv0",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${instrumentSerif.variable}`}>
      <head>
        {/* Google Tag Manager */}
        <script dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-MNZDG9T6');` }} />
        {/* End Google Tag Manager */}
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link href="https://api.fontshare.com/v2/css?f[]=satoshi@300,400,500,600,700&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([organizationSchema(), webSiteSchema()]),
          }}
        />
      </head>
      <body suppressHydrationWarning>
        {/* Google Tag Manager (noscript) */}
        <noscript dangerouslySetInnerHTML={{ __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MNZDG9T6" height="0" width="0" style="display:none;visibility:hidden"></iframe>` }} />
        {/* End Google Tag Manager (noscript) */}
        <CustomCursor />
        <Nav />
        {children}
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
