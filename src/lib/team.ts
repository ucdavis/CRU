import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CONTENT_DIR = path.join(process.cwd(), "content", "team");

export type TeamMember = {
  name: string;
  role: string;
  image: string;
  pronouns?: string;
  email?: string;
  phone?: string;
  categories: string[];
  slug: string;
};

export function getCurrentTeamMembers(): TeamMember[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];

  const filenames = fs.readdirSync(CONTENT_DIR);

  return filenames
    .filter((file) => file.endsWith(".md"))
    .map((filename) => {
      const slug = filename.replace(/\.md$/, "");
      const filePath = path.join(CONTENT_DIR, filename);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data } = matter(fileContents);

      return {
        name: data.name,
        role: data.role,
        image: data.image,
        phone: data.phone || "",
        pronouns: data.pronouns || "",
        email: data.email || "", // ← NEW
        categories: data.categories || [],
        slug,
      };
    })
    .filter((member) => member.categories.includes("current"));
}
