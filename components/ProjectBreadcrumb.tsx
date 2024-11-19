"use client"

import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/breadcrumbs";

export default function ProjectBreadcrumb({ name }: any) {
  return (
    <Breadcrumbs>
      <BreadcrumbItem href="/projects">Projects</BreadcrumbItem>
      <BreadcrumbItem>{name}</BreadcrumbItem>
    </Breadcrumbs>
  );
}
