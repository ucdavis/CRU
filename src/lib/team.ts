import fs from "fs";
import path from "path";
import matter from "gray-matter";

const teamDirectory = path.join(process.cwd(), "content", "team");

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
  if (!fs.existsSync(teamDirectory)) return [];

  const filenames = fs.readdirSync(teamDirectory);

  return filenames
    .filter((file) => file.endsWith(".md"))
    .map((filename) => {
      const slug = filename.replace(/\.md$/, "");
      const filePath = path.join(teamDirectory, filename);
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
