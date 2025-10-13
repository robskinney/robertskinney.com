import { FileUser } from "lucide-react";
import FadeInSection from "~/components/fade-in-section";
import { H3, H5, Muted } from "~/components/ui/typography";

export default function AboutMe() {
  return (
    <FadeInSection className="flex flex-col gap-6">
      <div className="flex flex-row items-center gap-2">
        <FileUser className="text-muted-foreground size-4" />
        <H5>About Me</H5>
      </div>

      <H3>
        Hello! I'm{" "}
        <span className="text-primary dark:text-foreground">
          Robert Kinney.
        </span>{" "}
        I am a full-stack developer based in New York City.
      </H3>

      <Muted>
        As a passionate enthusiast in all things technology, I often find myself
        digging deep into the functionality of items we interact with in
        everyday life. From reviving a hopeless laptop with a lightweight
        version of Linux, watching a freshly built computer POST for the first
        time, all the way up to standing with a CV axle in hand during a
        transmission-out procedure on my car, I am no stranger to stepping
        outside of my comfort zone.
      </Muted>
    </FadeInSection>
  );
}
