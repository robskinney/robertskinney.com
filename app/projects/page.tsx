import { Image } from "@nextui-org/image";
import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { Chip } from "@nextui-org/chip";
import Link from "next/link";
import { Divider } from "@nextui-org/react";

import { Projects } from "@/lib/data";

export default function ProjectsPage() {
  const projectEntries = Object.entries(Projects);

  return (
    <section className="flex flex-col items-center justify-center gap-6 mb-4">
      <p className="text-4xl font-bold cursor-default">Project Highlights</p>
      <Divider />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projectEntries.map(([key, item]: any, index) => (
          <Link key={index} href={`/projects/${item.slug}`}>
            <Card className="hover:scale-[1.02] transition-all w-full h-56">
              <CardHeader>
                <p className="text-xl font-bold cursor-default">{item.name}</p>
              </CardHeader>
              <CardBody className="flex flex-row gap-4">
                <Card>
                  <Image
                    alt={`${item.name} Splash Page`}
                    className="shadow-lg outline-1"
                    height={150}
                    radius="lg"
                    src={item.image}
                    width={200}
                  />
                </Card>
                <Card className="w-1/2" radius="lg">
                  <CardBody className="w-full space-y-1 text-xs">
                    {item.tags.map((tag: any, index: number) => (
                      <Chip
                        key={index}
                        className="min-w-full"
                        color="secondary"
                        size="md"
                        variant="flat"
                      >
                        <p className="flex text-wrap text-xs ">{tag}</p>
                      </Chip>
                    ))}
                  </CardBody>
                </Card>
              </CardBody>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}
