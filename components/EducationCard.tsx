import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Book } from "lucide-react";

import { EducationInfo } from "@/lib/data";

export default function EducationCard() {
  return (
    // <Card className="flex max-w-[400px] mt-3 md:mt-0">
    <Card className="hover:scale-[1.02] transition-all">
      <CardHeader>
        <div className="flex flex-row items-center">
          <Book className="mr-1" size={20} />
          Education
        </div>
      </CardHeader>
      <CardBody>
        <div className="flex flex-col space-y-1.5">
          {EducationInfo.map((education: any, index: number) => (
            <Card key={index}>
              <CardHeader className="flex gap-3">
                <Image
                  alt={education.ImageAlt}
                  height={25}
                  radius="sm"
                  src={education.ImageSrc}
                />
                <div className="flex flex-col">
                  <p className="text-md">{education.DegreeTitle}</p>
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
