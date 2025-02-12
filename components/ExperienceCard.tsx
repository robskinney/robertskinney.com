import { Card, CardBody, CardHeader } from "@heroui/card";
import { CheckCheck } from "lucide-react";
import { Image } from "@heroui/image";

import { ExperienceInfo } from "@/lib/data";

export default function ExperienceCard() {
  return (
    // <Card className="flex max-w-[400px] min-w-[200px] md:mt-0">
    (<Card className="hover:scale-[1.02] transition-all">
      <CardHeader>
        <div className="flex flex-row items-center">
          <CheckCheck className="mr-1.5" size={20} />
          Experience
        </div>
      </CardHeader>
      <CardBody>
        <div className="flex flex-col space-y-1">
          {ExperienceInfo.map((experience: any, index: number) => (
            <Card key={index}>
              <CardHeader className="flex gap-3">
                <Image
                  alt={experience.ImageAlt}
                  height={25}
                  radius="sm"
                  src={experience.ImageSrc}
                />
                <div className="flex flex-col">
                  <p className="text-md">{experience.ExperienceTitle}</p>
                  <p className="text-small text-default-500">
                    {`${experience.ExperienceCompany} (${experience.ExperienceMonthandYearsShort})`}
                  </p>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </CardBody>
    </Card>)
  );
}
