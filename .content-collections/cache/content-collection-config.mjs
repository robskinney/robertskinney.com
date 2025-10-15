// content-collections.ts
import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";
import {
  transformerMetaHighlight,
  transformerMetaWordHighlight,
  transformerNotationDiff
} from "@shikijs/transformers";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import z from "zod";
var posts = defineCollection({
  name: "posts",
  directory: "content",
  include: "**/*.mdx",
  schema: z.object({
    type: z.enum(["Blog", "Project"]),
    title: z.string(),
    description: z.string(),
    publishedAt: z.string().date(),
    link: z.url().optional(),
    image: z.string().optional(),
    tags: z.array(z.string()).optional()
  }),
  transform: async (document, context) => {
    const mdx = await compileMDX(context, document, {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [
        rehypeSlug,
        [
          rehypePrettyCode,
          {
            theme: "material-theme-palenight",
            transformers: [
              transformerMetaHighlight(),
              transformerMetaWordHighlight(),
              transformerNotationDiff({
                matchAlgorithm: "v3"
              })
            ],
            onVisitLine(node) {
              if (node.children.length === 0) {
                node.children = [{ type: "text", value: " " }];
              }
            },
            onVisitHighlightedLine(node) {
              node.properties.className.push("line--highlighted");
            },
            onVisitHighlightedWord(node) {
              node.properties.className = ["word--highlighted"];
            }
          }
        ],
        [
          rehypeAutolinkHeadings,
          {
            properties: {
              className: ["subheading-anchor"],
              ariaLabel: "Link to section"
            }
          }
        ]
      ]
    });
    return {
      ...document,
      mdx
    };
  }
});
var content_collections_default = defineConfig({
  collections: [posts]
});
export {
  content_collections_default as default
};
