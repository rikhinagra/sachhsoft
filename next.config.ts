import type { NextConfig } from "next";

const securityHeaders = [
  // Prevents your site from being embedded inside another site (anti-clickjacking)
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  // Prevents browser from guessing file types
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Controls what info is shared when visiting external links
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // Blocks camera, microphone, and location access
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  // Speeds up DNS lookups
  { key: "X-DNS-Prefetch-Control", value: "on" },
  // Content Security Policy — tailored for Sachhsoft
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      // Scripts: self + inline (required by Next.js) + GTM + tools loaded via GTM (Clarity, Albacross, Poptin)
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' *.googletagmanager.com *.clarity.ms serve.albacross.com cdn.popt.in cdnjs.cloudflare.com",
      // Styles: self + inline (Tailwind) + Google Fonts + Fontshare (Satoshi)
      "style-src 'self' 'unsafe-inline' fonts.googleapis.com api.fontshare.com",
      // Fonts: self + Google Fonts CDN + Fontshare CDN (css host + font file host)
      "font-src 'self' fonts.gstatic.com api.fontshare.com cdn.fontshare.com data:",
      // Images: self + Cloudinary + Webflow CDN + CloudFront (case study logos) + GTM/GA/Clarity/Albacross pixels
      "img-src 'self' blob: data: res.cloudinary.com cdn.prod.website-files.com *.cloudfront.net cdn-images-1.medium.com miro.medium.com *.googletagmanager.com *.google-analytics.com *.clarity.ms *.google.com *.albacross.com c.bing.com",
      // Videos: self + Webflow CDN (hero video)
      "media-src 'self' cdn.prod.website-files.com",
      // API calls: self + Google Apps Script (form submission) + GTM/GA/Clarity/Albacross/Poptin
      "connect-src 'self' script.google.com script.googleusercontent.com *.googletagmanager.com *.google-analytics.com *.analytics.google.com *.doubleclick.net *.clarity.ms *.albacross.com *.popt.in *.google.com",
      // GTM noscript fallback needs an iframe
      "frame-src 'self' *.googletagmanager.com",
      // Block Flash and plugins completely
      "object-src 'none'",
      // Prevent base URL hijacking
      "base-uri 'self'",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  // Hide "X-Powered-By: Next.js" header from hackers
  poweredByHeader: false,

  images: {
    remotePatterns: [
      { protocol: "https", hostname: "cdn-images-1.medium.com" },
      { protocol: "https", hostname: "miro.medium.com" },
    ],
  },

  async headers() {
    return [
      {
        // Apply security headers to ALL pages
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
