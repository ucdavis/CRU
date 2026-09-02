import type { MetadataRoute } from "next";
import { getAllDocumentation } from "@/lib/documentation";
import { siteUrl } from "@/lib/siteMetadata";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const docs = getAllDocumentation();
  const documentationSections = new Set(
    docs.map((doc) => doc.slug.split("/")[0]).filter(Boolean),
  );

  return [
    { url: siteUrl, changeFrequency: "monthly", priority: 1 },
    { url: `${siteUrl}/services`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteUrl}/documentation`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${siteUrl}/portfolio`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/team`, changeFrequency: "monthly", priority: 0.7 },
    ...Array.from(documentationSections).map((section) => ({
      url: `${siteUrl}/documentation/${section}`,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    ...docs.map((doc) => ({
      url: `${siteUrl}/documentation/${doc.slug}`,
      lastModified: doc.date ? new Date(doc.date) : undefined,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
