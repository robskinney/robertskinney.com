"use client";

import { BreadcrumbItem, Breadcrumbs } from "@heroui/breadcrumbs";

export default function ProjectBreadcrumb({ name }: any) {
  return (
    <Breadcrumbs>
      <BreadcrumbItem href="/projects">Projects</BreadcrumbItem>
      <BreadcrumbItem>{name}</BreadcrumbItem>
    </Breadcrumbs>
  );
}
