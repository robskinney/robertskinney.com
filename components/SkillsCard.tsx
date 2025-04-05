import { Card, CardBody, CardHeader } from "@heroui/card";
import { BicepsFlexed } from "lucide-react";
import { Chip } from "@heroui/chip";

import { OverviewSkills } from "@/lib/data";

export default function SkillsCard() {
  return (
    <Card>
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
              variant="flat"
              className="cursor-default m-1"
              color="secondary"
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
