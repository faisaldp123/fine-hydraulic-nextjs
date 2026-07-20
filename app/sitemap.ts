import type { MetadataRoute } from "next";
import { categories, siteConfig } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${siteConfig.url}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${siteConfig.url}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteConfig.url}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteConfig.url}/gallery`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
  ];

  const productPages: MetadataRoute.Sitemap = categories.map((c) => ({
    url: `${siteConfig.url}/products/${c.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  return [...staticPages, ...productPages];
}
