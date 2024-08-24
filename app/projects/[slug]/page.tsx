"use client";
import {
  ResponsiveIframeViewer,
  ViewportSize
} from "react-responsive-iframe-viewer";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/breadcrumbs";
import Link from "next/link";

import { Tabs, Tab } from "@nextui-org/tabs";
import { Card, CardBody } from "@nextui-org/card";
import { projects } from "@/lib/data";

export default async function EmbeddedWebPage({
  params
}: {
  params: { slug: string };
}) {
  const project = projects[params.slug];

  const innerHtml = project.about;

  return (
    <div>
      <Breadcrumbs>
        <BreadcrumbItem>
          <Link href="/projects">Projects</Link>
        </BreadcrumbItem>
        <BreadcrumbItem>{project.name}</BreadcrumbItem>
      </Breadcrumbs>

      <Tabs aria-label="Tabs" className="mb-2 mt-3">
        <Tab key="about" title="About">
          <div className="w-[80vw] md:w-[60vw] h-[70vh] mx-auto">
            <Card>
              <CardBody>
                <div
                  className="pt-2"
                  dangerouslySetInnerHTML={{ __html: innerHtml }}
                />
              </CardBody>
            </Card>
          </div>
        </Tab>
        <Tab key="view" title="View">
          <Card>
            <CardBody>
              <div className="w-[80vw] md:w-[60vw] h-[70vh] mx-auto">
                <ResponsiveIframeViewer
                  enabledControls={[]}
                  size={ViewportSize.fluid}
                  src={project.link}
                  title={project.name}
                />
              </div>
            </CardBody>
          </Card>
        </Tab>
      </Tabs>
    </div>
  );
}
