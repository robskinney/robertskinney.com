import { createFileRoute, Link, redirect } from "@tanstack/react-router";
import { ChevronLeft } from "lucide-react";

import { Mdx } from "~/components/mdx-components";
import { buttonVariants } from "~/components/ui/button";
import { seo } from "~/lib/seo";
import { cn, formatDate, Post } from "~/lib/utils";
import { allPosts } from "content-collections";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "~/components/ui/breadcrumb";
import { H3, Muted } from "~/components/ui/typography";

export const Route = createFileRoute("/blog/$slug")({
  beforeLoad: () => ({
    allPosts,
  }),
  loader: async ({ params, context: { allPosts } }) => {
    const slug = params.slug;
    const post = allPosts.find((post: Post) => post._meta.path === slug);
    if (!post) {
      throw redirect({
        to: "/blog",
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
        {/* <Link
            to="/blog"
            className={cn(
              buttonVariants({ variant: "ghost" })
              // "absolute left-[-200px] top-30 hidden xl:inline-flex"
            )}
          >
            <ChevronLeft className="mr-2 h-4 w-4" />
            See all posts
          </Link> */}

        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/blog">Blog</Link>
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
          {post.publishedAt && (
            <time dateTime={post.publishedAt}>
              <Muted>Published on {formatDate(post.publishedAt)}</Muted>
            </time>
          )}
        </div>
        <Mdx code={post.mdx} />
        <hr className="mt-12" />

        <div className="flex justify-center pt-6 lg:pt-10">
          <Link to="/blog" className={cn(buttonVariants({ variant: "ghost" }))}>
            <ChevronLeft className="mr-2 h-4 w-4" />
            Return to Blog
          </Link>
        </div>
      </article>
    </section>
  );
}
