import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type DocumentationItem = {
  slug: string; // e.g., "peaks/overview"
  title: string;
  description?: string;
  author?: string;
  date?: string;
  category?: string;
  content: string; // full markdown body
  filepath: string; // full file path (optional, useful for debugging)
};

const CONTENT_DIR = path.join(process.cwd(), "content", "documentation");

/**
 * Recursively collect all markdown files (.md or .markdown) under the documentation directory.
 */
function getAllMarkdownFiles(dir: string): string[] {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  return entries.flatMap((entry) => {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) return getAllMarkdownFiles(fullPath);

    // ✅ Accept both .md and .markdown files
    if (
      entry.isFile() &&
      (fullPath.endsWith(".md") || fullPath.endsWith(".markdown"))
    ) {
      return [fullPath];
    }

    return [];
  });
}

/**
 * Get all documentation items with front matter + markdown content.
 */
export function getAllDocumentation(): DocumentationItem[] {
  const files = getAllMarkdownFiles(CONTENT_DIR);

  const items = files.map((filePath) => {
    const raw = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(raw);

    // slug relative to CONTENT_DIR, no extension
    const slug = path
      .relative(CONTENT_DIR, filePath)
      .replace(/\\/g, "/")
      .replace(/\.(md|markdown)$/, ""); // ✅ handle both

    const item: DocumentationItem = {
      slug,
      title: String(data.title ?? slug),
      description: data.description ? String(data.description) : undefined,
      author: data.author ? String(data.author) : undefined,
      date: data.date ? String(data.date) : undefined,
      category: data.category ? String(data.category) : undefined,
      content,
      filepath: filePath,
    };

    return item;
  });

  // Sort by date (newest first), then title
  items.sort((a, b) => {
    const da = a.date ? new Date(a.date).getTime() : 0;
    const db = b.date ? new Date(b.date).getTime() : 0;
    return db - da || a.title.localeCompare(b.title);
  });

  return items;
}

/**
 * Get a single documentation page by its slug (e.g. "peaks/api").
 */
export function getDocumentationBySlug(slug: string): DocumentationItem | null {
  // ✅ Try both extensions
  const fullPathMd = path.join(CONTENT_DIR, `${slug}.md`);
  const fullPathMarkdown = path.join(CONTENT_DIR, `${slug}.markdown`);

  const fullPath = fs.existsSync(fullPathMd)
    ? fullPathMd
    : fs.existsSync(fullPathMarkdown)
    ? fullPathMarkdown
    : null;

  if (!fullPath) return null;

  const raw = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(raw);

  return {
    slug,
    title: String(data.title ?? slug),
    description: data.description ? String(data.description) : undefined,
    author: data.author ? String(data.author) : undefined,
    date: data.date ? String(data.date) : undefined,
    category: data.category ? String(data.category) : undefined,
    content,
    filepath: fullPath,
  };
}
