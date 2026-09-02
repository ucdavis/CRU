import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import {
  getAllDocumentation,
  getCategoryMetadata,
  getDocumentationBySlug,
} from "@/lib/documentation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { getCurrentTeamMembers } from "@/lib/team";
import DocActions from "@/app/components/DocActions";
import TeamPortrait, { hasTeamPortrait } from "@/app/components/teamPortrait";
import { createPageMetadata } from "@/lib/siteMetadata";

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
        .filter(Boolean),
    ),
  ).map((slug) => ({ slug: slug.split("/") }));

  return [...docPaths, ...sectionPaths];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const path = slug.join("/");
  const doc = getDocumentationBySlug(path);

  if (!doc) {
    return createPageMetadata({
      title: path.split("/").at(-1)?.replace(/-/g, " ") ?? "Documentation",
      description: "Documentation from the CRU team at UC Davis CAES.",
      path: `/documentation/${path}`,
    });
  }

  return createPageMetadata({
    title: doc.title,
    description:
      doc.description ?? "Documentation from the CRU team at UC Davis CAES.",
    path: `/documentation/${doc.slug}`,
  });
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
            <Link className="text-primary-color" href={href}>
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
  const categoryMeta = getCategoryMetadata();

  const doc = getDocumentationBySlug(slug);
  const teamMembers = getCurrentTeamMembers();
  const author = teamMembers.find((m) => m.name === doc?.author);

  if (doc) {
    return (
      <article>
        <Breadcrumbs slugParts={slugArray} />
        <h1 className="mb-2">{doc.title}</h1>
        <p className="text-lg">{doc.description}</p>

        <div>
          <div className="flex justify-between items-center border-b-1 border-cru-border py-5 mb-3">
            <div className="flex items-center gap-4">
              {author && hasTeamPortrait(author.slug) ? (
                <TeamPortrait
                  className="h-11 w-11"
                  name={author.name}
                  slug={author.slug}
                />
              ) : author?.image ? (
                <Image
                  src={author.image}
                  alt={author.name}
                  width={44}
                  height={44}
                  className="rounded-full border border-gray-300"
                />
              ) : null}
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
        <div className="markdown-wrapper">
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
                    width={800}
                    height={400}
                    className="my-4 rounded-sm height-auto max-w-full"
                  />
                );
              },
            }}
          >
            {doc.content}
          </ReactMarkdown>
        </div>
      </article>
    );
  }

  const sectionDocs = allDocs.filter(
    (d) =>
      d.slug.startsWith(slug + "/") &&
      d.slug.split("/").length === slug.split("/").length + 1,
  );

  if (sectionDocs.length === 0) return notFound();

  const categoryName =
    categoryMeta[slugArray[0]]?.label ??
    sectionDocs[0]?.category ??
    slugArray[slugArray.length - 1].replace(/-/g, " ");
  const categoryLink = categoryMeta[slugArray[0]]?.link;

  const featuredDocs = allDocs.filter(
    (d) =>
      d.featured &&
      (d.category === slugArray[0] || d.slug.startsWith(`${slugArray[0]}/`)),
  );

  return (
    <section>
      <Breadcrumbs slugParts={slugArray} />
      <div>
        <h1>{categoryName}</h1>
        {categoryLink &&
          slugArray[0] !== "helpdesk" &&
          slugArray[0] !== "policies" && (
            <a
              className="text-lg text-primary-color/70 underline"
              href={categoryLink}
              rel="noopener noreferrer"
              target="_blank"
            >
              {categoryLink.replace(/^https?:\/\//, "")}
              <ArrowTopRightOnSquareIcon
                aria-hidden="true"
                className="ml-1 inline-block h-4 w-4"
              />
            </a>
          )}
        <hr className="mt-4" />
        <br />
        <hr className="mb-6" />
      </div>
      {featuredDocs.length > 0 && (
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Featured Articles</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {featuredDocs.map((doc) => (
              <Link
                key={doc.slug}
                href={`/documentation/${doc.slug}`}
                className="card border border-cru-border shadow-sm hover:shadow-md hover:border-primary-color transition p-6 flex flex-col justify-between"
              >
                <h3 className="text-lg font-semibold mb-2">{doc.title}</h3>
                {doc.description && (
                  <p className="text-sm text-muted-foreground mb-2">
                    {doc.description}
                  </p>
                )}
                <span className="text-sm text-primary-color mt-auto">
                  Read more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}
      <ul>
        {sectionDocs.map((child) => (
          <li className="mb-4" key={child.slug}>
            <Link
              className="border-b-2 border-base-100 hover:border-primary-color transition-colors duration-100"
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
