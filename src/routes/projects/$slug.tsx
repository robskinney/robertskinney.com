import { createFileRoute, Link, redirect } from "@tanstack/react-router";
import { ChevronLeft, ExternalLinkIcon } from "lucide-react";

import { Mdx } from "~/components/mdx-components";
import { buttonVariants } from "~/components/ui/button";
import { seo } from "~/lib/seo";
import { cn, formatDate, projectPosts } from "~/lib/utils";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "~/components/ui/breadcrumb";

import type { Post } from "~/lib/utils";
import { H3, Muted } from "~/components/ui/typography";

export const Route = createFileRoute("/projects/$slug")({
  beforeLoad: () => ({
    projectPosts,
  }),
  loader: async ({ params, context: { projectPosts } }) => {
    const slug = params.slug;
    const post = projectPosts.find((post: Post) => post._meta.path === slug);
    if (!post) {
      throw redirect({
        to: "/projects",
      });
    }

    return { post };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          ...seo({
            title: `${loaderData?.post.title} | Robert Kinney`,
            description: loaderData?.post.description,
          }),
        ]
      : [],
  }),
  component: RouteComponent,
});

function RouteComponent() {
  const { post } = Route.useLoaderData();
  return (
    <section className="">
      <article className="container relative">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/projects">Projects</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{post.title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="my-4">
          <H3>{post.title}</H3>
          {post.link && (
            <a
              href={post.link}
              className="flex flex-row gap-1 items-center text-muted-foreground hover:text-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Try it out
              <ExternalLinkIcon className="size-3" />
            </a>
          )}
        </div>
        <Mdx code={post.mdx} />
        <hr className="mt-12" />

        <div className="flex justify-center pt-6 lg:pt-10">
          <Link
            to="/projects"
            className={cn(buttonVariants({ variant: "ghost" }))}
          >
            <ChevronLeft className="mr-2 h-4 w-4" />
            Return to Projects
          </Link>
        </div>
      </article>
    </section>
  );
}
