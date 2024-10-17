import { Divider } from "@nextui-org/divider";

import CoverPhoto from "@/components/CoverPhoto";
import IntroductoryHeader from "@/components/IntroductoryHeader";
import CoverQuoteCard from "@/components/CoverQuoteCard";
import EducationCard from "@/components/EducationCard";
import ExperienceCard from "@/components/ExperienceCard";
import ExperienceQuoteCard from "@/components/ExperienceQuoteCard";
import SkillsCard from "@/components/SkillsCard";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-6 mb-4">
      <div className="flex flex-col sm:flex-row items-center space-x-8 space-y-4 sm:space-y-0">
        <CoverPhoto />
        <IntroductoryHeader />
      </div>
      <Divider />
      <div className="mx-auto w-full max-w-screen-xl px-2.5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <CoverQuoteCard />
          <EducationCard />
          <ExperienceCard />
          <ExperienceQuoteCard />
          <div className="col-span-full">
            <SkillsCard />
          </div>
        </div>
      </div>
    </section>
  );
}
