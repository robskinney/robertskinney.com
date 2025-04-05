import { Card, CardBody, CardHeader } from "@heroui/card";
import { Image } from "@heroui/image";
import { Book } from "lucide-react";

import { EducationInfo } from "@/lib/data";

export default function EducationCard() {
  return (
    <Card>
      <CardHeader>
        <div className="flex flex-row items-center">
          <Book className="mr-1" size={20} />
          Education
        </div>
      </CardHeader>
      <CardBody>
        <div className="flex flex-col space-y-1.5">
          {EducationInfo.map((education: any, index: number) => (
            <Card key={index} className="flex flex-col h-full justify-center">
              <CardHeader className="flex flex-row gap-3">
                <Image
                  alt={education.ImageAlt}
                  height={25}
                  width={25}
                  radius="sm"
                  src={education.ImageSrc}
                />
                <div className="flex flex-col">
                  <p className="text-md">{education.DegreeTitleShort}</p>
                  <p className="text-small text-default-500">
                    {`${education.SchoolTitle} (${education.GradMonthYearShort})`}
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
