import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "src/content/blog");

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  author: string;
  locale: string;
}

export interface Post extends PostMeta {
  contentHtml: string;
}

export function getAllPosts(locale: string): PostMeta[] {
  if (!fs.existsSync(postsDirectory)) return [];
  const fileNames = fs.readdirSync(postsDirectory);
  const allPosts = fileNames
    .filter((f) => f.endsWith(`.${locale}.md`))
    .map((fileName) => {
      const slug = fileName.replace(`.${locale}.md`, "");
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);
      return {
        slug,
        title: data.title || "",
        date: data.date || "",
        excerpt: data.excerpt || "",
        author: data.author || "D8labs",
        locale,
      } as PostMeta;
    });

  return allPosts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPost(slug: string, locale: string): Promise<Post | null> {
  const fullPath = path.join(postsDirectory, `${slug}.${locale}.md`);
  if (!fs.existsSync(fullPath)) return null;
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const processed = await remark().use(html).process(content);
  const contentHtml = processed.toString();
  return {
    slug,
    title: data.title || "",
    date: data.date || "",
    excerpt: data.excerpt || "",
    author: data.author || "D8labs",
    locale,
    contentHtml,
  };
}
