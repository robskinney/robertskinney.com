import { Link } from "@tanstack/react-router";

import type { Posts } from "~/lib/utils";

import { formatDate } from "~/lib/utils";
import { Card } from "./ui/card";

export function BlogList({ posts }: { posts: Posts }) {
  return (
    <div className="flex flex-col gap-4 my-8">
      {posts.map((post: any) => (
        <Link
          to="/blog/$slug"
          params={{ slug: post._meta.path }}
          key={post._meta.path}
          // className="flex flex-col space-y-1 mb-4"
        >
          <Card className="flex flex-col py-3 px-4 gap-3 shadow-s hover:shadow-l transition-all">
            <p className="tabular-nums text-muted-foreground">
              {formatDate(post.publishedAt)}
            </p>
            <p className="tracking-tight">{post.title}</p>
          </Card>
          {/* <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2"></div> */}
        </Link>
      ))}
    </div>
  );
}
