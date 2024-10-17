import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { BicepsFlexed } from "lucide-react";
import { Chip } from "@nextui-org/chip";

import { OverviewSkills } from "@/lib/data";

export default function SkillsCard() {
  return (
    <Card className="hover:scale-[1.02] transition-all">
      <CardHeader>
        <div className="flex flex-row items-center">
          <BicepsFlexed className="mr-1.5" size={20} />
          Skills
        </div>
      </CardHeader>
      <CardBody>
        <div className="flex flex-wrap justify-center items-center">
          {OverviewSkills.map((skill: string, index: number) => (
            <Chip
              className="cursor-default m-1 hover:scale-[1.1] transition-all"
              color="secondary"
              variant="flat"
              key={index}
            >
              {skill}
            </Chip>
          ))}
        </div>
      </CardBody>
    </Card>
  );
}
