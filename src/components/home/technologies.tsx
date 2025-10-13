import { LaptopMinimalCheck } from "lucide-react";
import FadeInSection from "~/components/fade-in-section";
import { Badge } from "~/components/ui/badge";
import { Card } from "~/components/ui/card";
import { Separator } from "~/components/ui/separator";
import { H5, P } from "~/components/ui/typography";
import { technologies } from "~/lib/data";
import { cn } from "~/lib/utils";

export default function Technologies() {
  return (
    <FadeInSection className="flex flex-col gap-6">
      <Separator />

      <div className="flex flex-row items-center gap-2">
        <LaptopMinimalCheck className="text-muted-foreground size-4" />
        <H5>Technologies</H5>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {technologies.map((section) => (
          <Card
            key={section.name}
            className={cn(
              "flex flex-col py-3 px-4 gap-3 shadow-m",
              section.name === "other" && "col-span-1 md:col-span-3"
            )}
          >
            <H5 className="text-md text-card-foreground">
              {section.name
                .replace(/-/g, " ") // convert kebab to words
                .replace(/\b\w/g, (l) => l.toUpperCase())}
            </H5>
            <div className="flex flex-wrap gap-2">
              {section.items.map((item) => (
                <Badge key={item} variant="secondary">
                  {item}
                </Badge>
              ))}
            </div>
          </Card>
        ))}
      </div>

      {/* <TechnologiesSection /> */}
    </FadeInSection>
  );
}
