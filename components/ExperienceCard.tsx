import { Card, CardBody, CardHeader } from "@heroui/card";
import { CheckCheck } from "lucide-react";
import { Image } from "@heroui/image";

import { ExperienceInfo } from "@/lib/data";

export default function ExperienceCard() {
  return (
    <Card>
      <CardHeader>
        <div className="flex flex-row items-center">
          <CheckCheck className="mr-1.5" size={20} />
          Experience
        </div>
      </CardHeader>
      <CardBody>
        <div className="flex flex-col space-y-1.5">
          {ExperienceInfo.map((experience: any, index: number) => (
            <Card key={index} className="flex flex-col h-full justify-center">
              <CardHeader className="flex flex-row gap-3">
                <Image
                  alt={experience.ImageAlt}
                  height={25}
                  width={25}
                  radius="sm"
                  src={experience.ImageSrc}
                />
                <div className="flex flex-col">
                  <p className="text-md text-wrap">
                    {experience.ExperienceTitleShort}
                  </p>
                  <p className="text-small text-default-500">
                    {`${experience.ExperienceCompany} (${experience.ExperienceMonthandYearsShort})`}
                  </p>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </CardBody>
    </Card>
  );
}
