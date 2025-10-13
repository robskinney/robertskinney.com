import { FlaskConical } from "lucide-react";
import FadeInSection from "~/components/fade-in-section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import { Separator } from "~/components/ui/separator";
import { H5, Muted, P } from "~/components/ui/typography";
import { experience } from "~/lib/data";

export default function Experience() {
  return (
    <FadeInSection className="flex flex-col gap-6">
      <Separator />

      <div className="flex flex-row items-center gap-2">
        <FlaskConical className="text-muted-foreground size-4" />
        <H5>Experience</H5>
      </div>

      <Accordion
        type="single"
        collapsible
        className="w-full space-y-3"
        defaultValue="item-1"
      >
        {experience.map((item, index) => (
          <AccordionItem
            key={index}
            value={`item-${index + 1}`}
            className="rounded-md border! shadow-m"
          >
            <AccordionTrigger className="flex justify-between items-center w-full bg-card text-lg border-b hover:cursor-pointer px-6 data-[state=open]:rounded-b-none">
              <div className="flex flex-col w-3/4">
                <H5 className="text-md text-card-foreground">{item.title}</H5>
                <Muted>{item.company}</Muted>
              </div>

              <div className="flex flex-col h-full w-1/4 justify-center text-right ">
                <Muted className="hidden sm:block">{item.durationLong}</Muted>
                <Muted className="block sm:hidden">{item.durationShort}</Muted>
              </div>
            </AccordionTrigger>

            <AccordionContent
              asChild
              className="text-muted-foreground px-6 pt-4"
            >
              <ul className="list-disc px-4">
                {item.content.map((item, index) => (
                  <li>
                    <P key={index} className="text-foreground">
                      {item}
                    </P>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </FadeInSection>
  );
}
