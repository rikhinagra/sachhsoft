import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://sachhsoft.com";
  const now = new Date();

  return [
    { url: base,                            lastModified: now, changeFrequency: "weekly",  priority: 1.0 },
    { url: `${base}/services`,              lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/start-a-project`,       lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/case-studies`,          lastModified: now, changeFrequency: "weekly",  priority: 0.8 },
    { url: `${base}/industries`,            lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/about`,                 lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog`,                  lastModified: now, changeFrequency: "daily",   priority: 0.7 },
    { url: `${base}/industries/healthcare`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/industries/fintech`,    lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/industries/ecommerce`,  lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/careers`,               lastModified: now, changeFrequency: "weekly",  priority: 0.5 },
    { url: `${base}/privacy`,               lastModified: now, changeFrequency: "yearly",  priority: 0.2 },
    { url: `${base}/terms`,                 lastModified: now, changeFrequency: "yearly",  priority: 0.2 },
  ];
}
