import path from "path";
import fs from "fs";

import { compileMDX } from "next-mdx-remote/rsc";

const rootDirectory = path.join(process.cwd(), "content");

export const getPostBySlug = async (slug: any) => {
  const realSlug = slug.replace(/\.mdx$/, "");
  const filePath = path.join(rootDirectory, `${realSlug}.mdx`);

  const fileContent = fs.readFileSync(filePath, { encoding: "utf8" });

  const { frontmatter, content } = await compileMDX({
    source: fileContent,
    options: { parseFrontmatter: true }
  });

  return { meta: { ...frontmatter, slug: realSlug }, content };
};
