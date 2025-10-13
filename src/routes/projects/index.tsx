import { createFileRoute } from "@tanstack/react-router";

import { ProjectList } from "~/components/project-list";
import { H3 } from "~/components/ui/typography";
import { seo } from "~/lib/seo";
import { sortedProjectPosts } from "~/lib/utils";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      ...seo({
        title: "Projects | Robert Kinney",
      }),
    ],
  }),
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <section>
      <H3>My Projects</H3>
      <ProjectList posts={sortedProjectPosts} />
    </section>
  );
}
