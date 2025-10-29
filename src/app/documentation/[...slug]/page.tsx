import Link from "next/link";
import { Metadata } from "next";
import { getAllDocumentation, getCategoryMetadata } from "@/lib/documentation";
import { DocumentIcon } from "@heroicons/react/24/outline";

export const metadata: Metadata = {
  title: "Documentation",
};

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
            className="card border border-cru-border shadow-sm hover:shadow-md hover:border-documentation transition p-6 flex flex-col justify-between"
          >
            <div>
              <h2 className="font-bold text-xl mb-2">{section.label}</h2>
              {section.description && (
                <p className="text-sm text-muted-foreground mb-4">
                  {section.description}
                </p>
              )}
            </div>
            <div className="flex">
              <DocumentIcon className="h-5 w-5 mr-1" /> {section.count} article
              {section.count !== 1 ? "s" : ""}
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
