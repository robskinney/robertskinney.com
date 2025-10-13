import { createFileRoute } from "@tanstack/react-router";
import AboutMe from "~/components/home/about-me";
import HomeHero from "~/components/home/home-hero";
import Technologies from "~/components/home/technologies";
import Experience from "~/components/home/experience";
import { ArrowDown } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <div className="flex flex-col gap-16">
      <div className="flex flex-col gap-8">
        <HomeHero />

        <ArrowDown className="mx-auto h-6 text-secondary-foreground animate-bounce duration-150" />
      </div>

      {/* <Button
        className="mx-auto p-3 bg-black/10 backdrop-blur-sm border-none"
        variant="secondary"
        size="icon"
      >
        <ArrowDown className="w-10 h-10 text-white animate-bounce" />
      </Button> */}

      <AboutMe />

      <Technologies />

      <Experience />

      {/* <Card className="grid grid-cols-3 gap-4 p-3">
        <div className="flex flex-col col-span-3 sm:col-span-1 gap-2">
          <Large>Languages</Large>
          <P className="flex flex-wrap gap-2">
            <Badge>Python</Badge>
            <Badge>SQL</Badge>
            <Badge>Java</Badge>
            <Badge>R</Badge>
            <Badge>JavaScript</Badge>
            <Badge>TypeScript</Badge>
            <Badge>HTML</Badge>
            <Badge>CSS</Badge>
          </P>
        </div>
        <div className="flex flex-col col-span-3 sm:col-span-1 gap-2">
          <Large>Data Tools</Large>
          <P className="flex flex-wrap gap-2">
            <Badge>Alteryx</Badge>
            <Badge>Power BI</Badge>
            <Badge>Tableau</Badge>
            <Badge>Microsoft Access</Badge>
            <Badge>Microsoft Excel</Badge>
          </P>
        </div>
        <div className="flex flex-col col-span-3 sm:col-span-1 gap-2">
          <Large>Front-end</Large>
          <P className="flex flex-wrap gap-2">
            <Badge>React</Badge>
            <Badge>Next.js</Badge>
            <Badge>Tailwind</Badge>
            <Badge>Typescript</Badge>
          </P>
        </div>
      </Card> */}

      {/* <Separator /> */}
    </div>
  );
}
