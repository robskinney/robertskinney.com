import Python from "@/components/icons/technology/languages/python.astro";
import SQL from "@/components/icons/technology/languages/sql.astro";
import Postgres from "@/components/icons/technology/languages/postgres.astro";
import HTML from "@/components/icons/technology/languages/html.astro";
import TypesScript from "@/components/icons/technology/languages/typescript.astro";
import JavaScript from "@/components/icons/technology/languages/javascript.astro";
import PHP from "@/components/icons/technology/languages/php.astro";
import R from "@/components/icons/technology/languages/r.astro";

import Alteryx from "@/components/icons/technology/data-tools/alteryx.astro";
import PowerBI from "@/components/icons/technology/data-tools/power-bi.astro";
import Tableau from "@/components/icons/technology/data-tools/tableau.astro";
import MicrosoftExcel from "@/components/icons/technology/data-tools/microsoft-excel.astro";
import MicrosoftAccess from "@/components/icons/technology/data-tools/microsoft-access.astro";

import AWS from "@/components/icons/technology/cloud-platforms/aws.astro";
import Azure from "@/components/icons/technology/cloud-platforms/azure.astro";
import GoogleCloud from "@/components/icons/technology/cloud-platforms/google-cloud.astro";

import Astro from "@/components/icons/technology/other/astro.astro";
import NextJS from "@/components/icons/technology/other/nextjs.astro";
import TanStack from "@/components/icons/technology/other/tanstack.astro";
import Prisma from "@/components/icons/technology/other/prisma.astro";
import Drizzle from "@/components/icons/technology/other/drizzle.astro";
import Figma from "@/components/icons/technology/other/figma.astro";
import PowerAutomate from "@/components/icons/technology/other/powerautomate.astro";
import SAP from "@/components/icons/technology/other/sap.astro";
import Visio from "@/components/icons/technology/other/visio.astro";
import Pandas from "@/components/icons/technology/languages/pandas.astro";
import Flask from "@/components/icons/technology/other/flask.astro";
import NetworkX from "@/components/icons/technology/other/networkx.astro";

export const TechnologyBadges = [
  {
    name: "Languages",
    color:
      "bg-blue-50 text-blue-900 border-blue-200/60 dark:bg-blue-950/50 dark:text-blue-200 dark:border-blue-800/40",
    items: [
      { name: "Python", icon: Python },
      { name: "SQL", icon: SQL },
      { name: "PostgreSQL", icon: Postgres },
      { name: "HTML/CSS", icon: HTML },
      { name: "TypeScript", icon: TypesScript },
      { name: "JavaScript", icon: JavaScript },
      { name: "PHP", icon: PHP },
      { name: "R", icon: R },
    ],
  },
  {
    name: "Data Tools",
    color:
      "bg-violet-50 text-violet-900 border-violet-200/60 dark:bg-violet-950/50 dark:text-violet-200 dark:border-violet-800/40",
    items: [
      { name: "Alteryx", icon: Alteryx },
      { name: "Power BI", icon: PowerBI },
      { name: "Tableau", icon: Tableau },
      { name: "Microsoft Access", icon: MicrosoftAccess },
      { name: "Microsoft Excel", icon: MicrosoftExcel },
    ],
  },
  {
    name: "Cloud Platforms",
    color:
      "bg-emerald-50 text-emerald-900 border-emerald-200/60 dark:bg-emerald-950/50 dark:text-emerald-200 dark:border-emerald-800/40",
    items: [
      { name: "Amazon Web Services", icon: AWS },
      { name: "Microsoft Azure", icon: Azure },
      { name: "Google Cloud", icon: GoogleCloud },
    ],
  },
  {
    name: "Other",
    color:
      "bg-amber-50 text-amber-900 border-amber-200/60 dark:bg-amber-950/50 dark:text-amber-200 dark:border-amber-800/40",
    items: [
      { name: "Astro", icon: Astro },
      { name: "NextJS", icon: NextJS },
      { name: "TanStack Start", icon: TanStack },
      { name: "Prisma", icon: Prisma },
      { name: "Drizzle", icon: Drizzle },
      { name: "Figma", icon: Figma },
      { name: "Microsoft Visio", icon: Visio },
      { name: "SAP S/4", icon: SAP },
      { name: "Microsoft PowerAutomate", icon: PowerAutomate },
      { name: "Pandas", icon: Pandas },
      { name: "Flask", icon: Flask },
      { name: "NetworkX", icon: NetworkX },
    ],
  },
];

export function findTechnologyBadge(tagName: string) {
  for (const category of TechnologyBadges) {
    const badge = category.items.find(
      (item) => item.name.toLowerCase() === tagName.toLowerCase(),
    );
    if (badge) {
      return { badge, color: category.color, category: category.name };
    }
  }
  return null;
}
