import Link from "next/link";
import { Divider } from "@heroui/react";
import { SquareArrowUpRight } from "lucide-react";
import { Button } from "@heroui/button";

import { Projects } from "@/lib/data";
import { getPageContent } from "@/lib/mdx";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = Projects.find((item: any) => item.slug === slug);

  if (!project) {
    return <p>Project not found</p>;
  }

  const { content } = await getPageContent(slug);

  return (
    <section className="flex flex-col items-center justify-center gap-6 mb-4">
      <div className="flex flex-col sm:flex-row items-center gap-3">
        <p className="text-4xl font-bold cursor-default">{project.name}</p>

        <Link href={project.link} target="_blank">
          <Button
            className="space-x-2 items-center hover:scale-105 transition-all"
            color="secondary"
            size="sm"
            variant="flat"
          >
            Visit Site
            <SquareArrowUpRight size={20} />
          </Button>
        </Link>
      </div>

      <Divider />

      <article className="prose lg:prose-xl dark:prose-invert">
        {content}
      </article>
    </section>
  );
}
