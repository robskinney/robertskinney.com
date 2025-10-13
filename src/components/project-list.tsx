import { Link } from "@tanstack/react-router";

import type { Post, Posts } from "~/lib/utils";

import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

export function ProjectList({ posts }: { posts: Posts }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-8">
      {posts.map((post: Post) => (
        <Link
          to="/projects/$slug"
          params={{ slug: post._meta.path }}
          key={post._meta.path}
          // className="flex flex-col space-y-1 mb-4"
        >
          <Card className="flex flex-col py-3 px-4 gap-3 shadow-s hover:shadow-l transition-all">
            <p className="tracking-tight">{post.title}</p>
            {post.tags && (
              <div className="flex flex-wrap gap-1">
                {post.tags.map((tag: string) => {
                  return (
                    <Badge
                      className="flex gap-1.5 text-xs rounded-full"
                      variant="secondary"
                    >
                      {tag}
                    </Badge>
                  );
                })}
              </div>
            )}
          </Card>
          {/* <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2"></div> */}
        </Link>
      ))}
    </div>
  );
}
