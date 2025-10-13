import { createFileRoute } from "@tanstack/react-router";
import { BlogList } from "~/components/blog-list";
import { H3 } from "~/components/ui/typography";

import { seo } from "~/lib/seo";
import { sortedBlogPosts } from "~/lib/utils";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      ...seo({
        title: "Blog | Robert Kinney",
      }),
    ],
  }),
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <section>
      <H3>My Blog</H3>
      <BlogList posts={sortedBlogPosts} />
    </section>
  );
}
