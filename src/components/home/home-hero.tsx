import { DatabaseZap, Layers } from "lucide-react";
import { Card } from "~/components//ui/card";
import { Badge } from "~/components/ui/badge";
import { H2, H3, H4, H5 } from "../ui/typography";

export default function HomeHero() {
  return (
    <Card className="relative w-full h-[calc(100vh-14rem)] overflow-hidden">
      <img
        alt="Robert Kinney's Headshot"
        src="/robert-ny.webp"
        width={1600}
        height={1067}
        loading="eager"
        decoding="async"
        fetchPriority="high"
        className="absolute inset-0 w-full h-full object-cover object-[60%_center] sm:object-[30%_center]"
      />

      <div className="absolute inset-0 flex flex-row items-end justify-between p-5 gap-2">
        <Card className="relative flex flex-col p-3 bg-secondary/80 dark:bg-card/60 backdrop-blur-sm border-none gap-2">
          <H3>Robert Kinney</H3>
          <div className="flex flex-wrap gap-1.5 items-center cursor-default">
            <Badge
              className="flex gap-1.5 text-xs rounded-full"
              variant="secondary"
            >
              <Layers className="h-3 w-3" />
              <p>Full-Stack Developer</p>
            </Badge>
            <Badge
              className="flex gap-1.5 text-xs rounded-full"
              variant="secondary"
            >
              <DatabaseZap className="h-3 w-3" />
              <p>Data-Driven</p>
            </Badge>
          </div>
        </Card>

        {/* <Button
          className="relative flex flex-col p-3 bg-black/10 backdrop-blur-sm border-none"
          variant="secondary"
          size="icon"
        >
          <ArrowDown className="w-10 h-10 text-white animate-bounce" />
        </Button> */}
      </div>
    </Card>
  );
}
