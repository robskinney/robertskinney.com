import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.date(),
    github: z.string().url().optional(),
    link: z.string().url().optional(),
    image: z.string(),
    tags: z.array(z.string()),
  }),
});

export const collections = { projects };
