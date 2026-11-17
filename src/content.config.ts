import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // coerce: Pages CMS may write the date as a quoted string
    publishedAt: z.coerce.date(),
    github: z.string().url().optional(),
    link: z.string().url().optional(),
    tags: z.array(z.string()),
  }),
});

const legal = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/legal" }),
  schema: z.object({
    title: z.string(),
    app: z.string().regex(/^[a-z0-9]+(-[a-z0-9]+)*$/),
    appName: z.string(),
    kind: z.enum(["privacy", "terms", "support"]),
    updatedAt: z.coerce.date(),
  }),
});

export const collections = { projects, legal };
