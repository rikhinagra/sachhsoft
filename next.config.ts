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
      // Scripts: self + inline (required by Next.js)
      "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
      // Styles: self + inline (Tailwind) + Google Fonts
      "style-src 'self' 'unsafe-inline' fonts.googleapis.com",
      // Fonts: self + Google Fonts CDN
      "font-src 'self' fonts.gstatic.com data:",
      // Images: self + Cloudinary + Webflow CDN + CloudFront (case study logos)
      "img-src 'self' blob: data: res.cloudinary.com cdn.prod.website-files.com *.cloudfront.net",
      // API calls: self + Google Apps Script (form submission)
      "connect-src 'self' script.google.com script.googleusercontent.com",
      // No iframes needed
      "frame-src 'none'",
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
