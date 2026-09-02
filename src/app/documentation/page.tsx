import Link from "next/link";
import { Metadata } from "next";
import { getAllDocumentation, getCategoryMetadata } from "@/lib/documentation";
import DocumentationCategoryIcon from "@/app/components/documentationCategoryIcon";
import { createPageMetadata } from "@/lib/siteMetadata";

export const metadata: Metadata = createPageMetadata({
  title: "Documentation",
  description: "Guides, policies, and support resources from the UC Davis CAES Computing Resources Unit.",
  path: "/documentation",
});

export default function Documentation() {
  const docs = getAllDocumentation();
  const categoryMeta = getCategoryMetadata();

  // Build category summary
  const categoryMap: Record<string, number> = {};
  docs.forEach((doc) => {
    const top = doc.slug.split("/")[0];
    categoryMap[top] = (categoryMap[top] || 0) + 1;
  });

  const sections = Object.entries(categoryMap).map(([slug, count]) => ({
    slug,
    count,
    ...categoryMeta[slug],
    label:
      categoryMeta[slug]?.label ??
      slug.charAt(0).toUpperCase() + slug.slice(1).replace(/-/g, " "),
  }));

  return (
    <>
      <p className="text-lg">
        Choose a section below to find helpful articles and resources.
      </p>

      <hr className="my-8" />

      {/* Category cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {sections.map((section) => (
          <Link
            key={section.slug}
            href={section.url ?? `/documentation/${section.slug}`}
            className="card flex flex-col justify-between border border-cru-border p-6 shadow-sm transition hover:border-primary-color hover:shadow-md"
          >
            <div>
              <DocumentationCategoryIcon
                category={section.slug}
                className="mb-4 h-10 w-10"
              />
              <h2 className="font-bold text-xl mb-2">{section.label}</h2>
              {section.description && (
                <p className="text-sm text-muted-foreground mb-4">
                  {section.description}
                </p>
              )}
            </div>
            <div className="text-sm">
              {section.count} article
              {section.count !== 1 ? "s" : ""}
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
