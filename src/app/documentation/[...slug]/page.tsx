import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  getAllDocumentation,
  getDocumentationBySlug,
} from "@/lib/documentation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { getCurrentTeamMembers } from "@/lib/team";
import DocActions from "@/app/components/DocActions";

type Props = {
  params: Promise<{ slug: string[] }>;
};

export async function generateStaticParams() {
  const docs = getAllDocumentation();

  const docPaths = docs.map((doc) => ({
    slug: doc.slug.split("/"),
  }));

  const sectionPaths = Array.from(
    new Set(
      docs
        .map((doc) => {
          const parts = doc.slug.split("/");
          parts.pop();
          return parts.join("/");
        })
        .filter(Boolean)
    )
  ).map((slug) => ({ slug: slug.split("/") }));

  return [...docPaths, ...sectionPaths];
}

function Breadcrumbs({ slugParts }: { slugParts: string[] }) {
  const segments = ["documentation", ...slugParts];
  const links = segments.map((part, index) => {
    const href = "/" + segments.slice(0, index + 1).join("/");
    const label =
      part.charAt(0).toUpperCase() + part.slice(1).replace(/-/g, " ");
    const isLast = index === segments.length - 1;

    return (
      <span key={href}>
        {!isLast ? (
          <>
            <Link className="text-documentation brightness-150" href={href}>
              {label}
            </Link>
            <span> / </span>
          </>
        ) : (
          <span>{label}</span>
        )}
      </span>
    );
  });

  return (
    <nav aria-label="Breadcrumbs" style={{ marginBottom: "1rem" }}>
      {links}
    </nav>
  );
}

export default async function DocumentationPage({ params }: Props) {
  const { slug: slugArray } = await params;
  const slug = slugArray.join("/");
  const allDocs = getAllDocumentation();

  const doc = getDocumentationBySlug(slug);
  const teamMembers = getCurrentTeamMembers();
  const author = teamMembers.find((m) => m.name === doc?.author);

  if (doc) {
    const categorySlug = doc.category ?? doc.slug.split("/")[0]; // fallback to first folder

    const categoryLabel =
      categorySlug.charAt(0).toUpperCase() +
      categorySlug.slice(1).replace(/-/g, " ");

    return (
      <article>
        <Breadcrumbs slugParts={slugArray} />

        {categorySlug && (
          <Link
            className="badge badge-outline badge-md badge-error"
            href={`/documentation/${categorySlug}`}
          >
            {categoryLabel}
          </Link>
        )}
        <h1 className="mb-2">{doc.title}</h1>
        <p className="text-lg">{doc.description}</p>

        <div>
          <div className="flex justify-between items-center border-b-1 border-cru-border py-5 mb-3">
            <div className="flex items-center gap-4">
              {author?.image && (
                <Image
                  src={author.image}
                  alt={author.name}
                  width={44}
                  height={44}
                  className="rounded-full border border-gray-300"
                />
              )}
              <div>
                {doc.author && (
                  <p className="text-lg">
                    <b>{doc.author}</b>
                  </p>
                )}
                {doc.date && (
                  <p>
                    {new Date(doc.date).toLocaleDateString(undefined, {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </p>
                )}
              </div>
            </div>

            <DocActions />
          </div>
        </div>

        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
          components={{
            img({ ...props }) {
              const src = props.src || "";
              const alt = props.alt || "";

              return (
                <Image
                  src={src as string}
                  alt={alt}
                  width={1200}
                  height={600}
                  className="my-4 rounded-sm height-auto max-w-full"
                />
              );
            },
          }}
        >
          {doc.content}
        </ReactMarkdown>
      </article>
    );
  }

  // 2️⃣ Otherwise render section index (like /documentation/peaks)
  const sectionDocs = allDocs.filter(
    (d) =>
      d.slug.startsWith(slug + "/") &&
      d.slug.split("/").length === slug.split("/").length + 1
  );

  if (sectionDocs.length === 0) return notFound();

  // 🧭 Derive category name (use slug if no explicit category)
  const categoryName =
    sectionDocs[0]?.category ??
    slugArray[slugArray.length - 1].replace(/-/g, " ");

  return (
    <section>
      <Breadcrumbs slugParts={slugArray} />
      <div>
        <h1>{categoryName.charAt(0).toUpperCase() + categoryName.slice(1)}</h1>
        <p className="text-lg mt-4">
          Find all of our{" "}
          {categoryName.charAt(0).toUpperCase() + categoryName.slice(1)}{" "}
          articles below
        </p>
        <hr className="mt-4" />
        <br />
        <hr className="mb-6" />
      </div>

      <ul>
        {sectionDocs.map((child) => (
          <li className="mb-4" key={child.slug}>
            <Link
              className="border-b-2 border-base-100 hover:border-documentation transition-colors duration-100"
              href={`/documentation/${child.slug}`}
            >
              <span className="text-xl">
                <strong>{child.title}</strong>
              </span>
              <span className="text-base-content/60">
                {child.description && <p>{child.description}</p>}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
