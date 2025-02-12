import Link from "next/link";
import { Divider } from "@nextui-org/divider";
import { SquareArrowUpRight } from "lucide-react";
import { Button } from "@nextui-org/button";

import { Projects } from "@/lib/data";
import { getPostBySlug } from "@/lib/mdx";
import ProjectBreadcrumb from "@/components/ProjectBreadcrumb";

const getPageContent = async (slug: any) => {
  const { meta, content } = await getPostBySlug(slug);

  return { meta, content };
};

export default async function Page({ params }: any) {
  const { content } = await getPageContent(params.slug);
  const project = Projects[params.slug];

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
