import { Card, CardBody, CardHeader } from "@heroui/card";
import {
  Book,
  CheckCheck,
  RectangleEllipsis,
  SquareArrowUpRight,
} from "lucide-react";
import { Image } from "@heroui/image";
import { Divider } from "@heroui/divider";
import { Button } from "@heroui/button";
import { Chip } from "@heroui/chip";

import {
  AdditionalInfo,
  Education,
  EducationInfo,
  TechnicalSkill,
  TechnicalSkills,
} from "@/lib/data";
import { ExperienceInfo } from "@/lib/data";

export default function ResumePage() {
  return (
    <section className="flex flex-col items-center justify-center gap-6 mb-4">
      <div className="flex flex-row items-center space-x-3">
        <p className="text-4xl font-bold cursor-default">Resume</p>
        <Button
          download
          as="a"
          className="space-x-2 items-center"
          color="secondary"
          href="/Kinney_Robert_Resume.pdf"
          size="sm"
          variant="flat"
        >
          Download PDF
          <SquareArrowUpRight size={20} />
        </Button>
      </div>

      <Divider />

      <div className="flex flex-col items-center justify-center gap-3">
        <Card className="w-full">
          <CardHeader>
            <div className="flex flex-row items-center">
              <Book className="mr-1" size={20} />
              Education
            </div>
          </CardHeader>
          <CardBody>
            <div className="grid grid-cols-1 gap-2">
              {EducationInfo.map((education: Education, index: number) => (
                <Card key={index}>
                  <CardHeader className="flex items-center gap-3">
                    <Image
                      alt={education.ImageAlt}
                      height={25}
                      className="object-cover aspect-square"
                      radius="sm"
                      src={education.ImageSrc}
                    />
                    <div className="flex flex-col">
                      <p className="text-md">{education.DegreeTitle}</p>
                      <p className="text-small text-default-500">
                        {`${education.SchoolTitle} | ${education.SubSchoolTitle}`}
                      </p>
                    </div>
                    <div className="flex flex-col ml-auto text-right">
                      <p className="text-md">{education.GradMonthYear}</p>
                      <p className="text-small text-default-500">
                        {`GPA: ${education.GPA}`}
                      </p>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </CardBody>
        </Card>
        <Card className="w-full">
          <CardHeader>
            <div className="flex flex-row items-center">
              <CheckCheck className="mr-1" size={20} />
              Experience
            </div>
          </CardHeader>
          <CardBody>
            <div className="grid grid-cols-1 gap-2">
              {ExperienceInfo.map((experience: any, index: number) => (
                <Card key={index}>
                  <CardHeader className="flex items-center gap-3">
                    <Image
                      alt={experience.ImageAlt}
                      height={25}
                      radius="sm"
                      src={experience.ImageSrc}
                    />
                    <div className="flex flex-col">
                      <p className="text-md">{experience.ExperienceTitle}</p>
                      <p className="text-small text-default-500">
                        {experience.ExperienceCompany}
                      </p>
                    </div>
                    <div className="flex flex-col ml-auto text-right">
                      <p className="text-md">
                        {experience.ExperienceMonthandYears}
                      </p>
                      <p className="text-small text-default-500">
                        {experience.ExperienceLocation}
                      </p>
                    </div>
                  </CardHeader>
                  <CardBody>
                    <ul className="list-disc px-6 text-sm">
                      {experience.Additional.map(
                        (additional: any, index: any) => (
                          <li key={index}>{additional}</li>
                        )
                      )}
                    </ul>
                  </CardBody>
                </Card>
              ))}
            </div>
          </CardBody>
        </Card>
        {TechnicalSkills.map((category: TechnicalSkill, index: number) => (
          <Card key={index}>
            <CardHeader>
              <div className="flex flex-row items-center">
                {category.icon}
                {category.title}
              </div>
            </CardHeader>
            <CardBody>
              <div className="flex flex-wrap justify-center gap-1 items-center w-[80vw]">
                {category.items.map((skill: string, index: number) => (
                  <Chip
                    key={index}
                    className="cursor-default"
                    color="secondary"
                    variant="flat"
                  >
                    {skill}
                  </Chip>
                ))}
              </div>
            </CardBody>
          </Card>
        ))}

        <Card>
          <CardHeader>
            <div className="flex flex-row items-center">
              <RectangleEllipsis className="mr-1.5" size={20} />
              Additional
            </div>
          </CardHeader>
          <CardBody>
            <ul className="list-disc px-6 text-sm w-[80vw]">
              {AdditionalInfo.map((additional: any, index: any) => (
                <li key={index}>{additional}</li>
              ))}
            </ul>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}
