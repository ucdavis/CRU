// /lib/portfolio.ts
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type PortfolioItem = {
  slug: string;
  title: string;
  type: string; // "Web Application"
  audience: string; // "UC Davis", "CAES", etc.
  description?: string;
  image?: string;
  url?: string;
  date?: string; // YYYY-MM-DD
  developers?: string[];
};

const CONTENT_DIR = path.join(process.cwd(), "content", "portfolio");

export function getAllPortfolio(): PortfolioItem[] {
  const files = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith(".md"));

  const items = files.map((file) => {
    const slug = file.replace(/\.md$/i, "");
    const raw = fs.readFileSync(path.join(CONTENT_DIR, file), "utf8");
    const { data } = matter(raw);

    const item: PortfolioItem = {
      slug,
      title: String(data.title ?? slug),
      type: String(data.type ?? "Web Application"),
      audience: String(data.audience ?? ""),
      description: data.description ? String(data.description) : undefined,
      image: data.image ? String(data.image) : undefined,
      url: data.url ? String(data.url) : undefined,
      date: data.date ? String(data.date) : undefined,
      developers: Array.isArray(data.developers)
        ? data.developers.map(String)
        : [],
    };
    return item;
  });

  // Sort: newest first by date, then title
  items.sort((a, b) => {
    const da = a.date ? new Date(a.date).getTime() : 0;
    const db = b.date ? new Date(b.date).getTime() : 0;
    return db - da || a.title.localeCompare(b.title);
  });

  return items;
}
