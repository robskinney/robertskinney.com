import { title } from "@/components/primitives";
import { Image } from "@nextui-org/image";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import { Chip } from "@nextui-org/chip";
import { SquareArrowUpRight } from "lucide-react";
import Link from "next/link";
import { projects } from "@/lib/data"; // Ensure this imports the updated projects data

export default function ProjectsPage() {
  // Convert the projects object into an array of project entries
  const projectEntries = Object.entries(projects);

  return (
    <div>
      <h1 className={title()}>Project Highlights</h1>

      <div className="flex flex-col pt-5 space-y-5 mb-5">
        {projectEntries.map(([key, item]: any, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row space-x-1.5">
              <p className="text-xl font-bold cursor-default">{item.name}</p>
              <SquareArrowUpRight size={20} color="#b249f8" />
            </CardHeader>
            <CardBody>
              <div className="flex space-x-3 w-full">
                <Card isFooterBlurred radius="lg" className="border-none">
                  <Image
                    alt={`${item.name} Splash Page`}
                    className="object-cover"
                    width={300}
                    src={item.image}
                  />
                  <CardFooter
                    className={`justify-center border-1 overflow-hidden py-1 absolute rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10 ${
                      item.visual === "Dark"
                        ? "before:bg-white/10 border-white/20"
                        : "before:bg-white/10 border-black/20"
                    }`}
                  >
                    <Link href={`/projects/${item.slug}`}>
                      <Button
                        className={`text-tiny ${
                          item.visual === "Dark"
                            ? "text-white bg-black/20"
                            : "text-black bg-black/20"
                        }`}
                        variant="flat"
                        color="default"
                        radius="lg"
                        size="sm"
                      >
                        Learn More
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
                <Card className="flex max-w-[350px]">
                  <CardHeader>Features</CardHeader>
                  <CardBody>
                    <div className="flex flex-col space-y-1">
                      {item.tags.map((tag: any, index: number) => (
                        <Chip
                          variant="flat"
                          color="secondary"
                          size="md"
                          classNames={{
                            base: "flex flex-wrap"
                          }}
                          key={index}
                        >
                          {tag}
                        </Chip>
                      ))}
                    </div>
                  </CardBody>
                </Card>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
}
