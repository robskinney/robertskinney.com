"use client";

import { Card, CardBody, CardHeader } from "@heroui/card";
import {
  AppWindow,
  Book,
  CheckCheck,
  MemoryStick,
  RectangleEllipsis,
  SquareArrowUpRight,
} from "lucide-react";
import { Image } from "@heroui/image";
import { Divider } from "@heroui/divider";
import { Button } from "@heroui/button";
import { Chip } from "@heroui/chip";

import { AdditionalInfo, EducationInfo, TechnicalSkills } from "@/lib/data";
import { ExperienceInfo } from "@/lib/data";

export default function ResumePage() {
  return (
    <section className="flex flex-col items-center justify-center gap-6 mb-4">
      <div className="flex flex-row items-center space-x-3">
        <p className="text-4xl font-bold cursor-default">Resume</p>
        <Button
          download
          as="a"
          className="space-x-2 items-center hover:scale-105 transition-all"
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

      <Card className="flex mt-3 md:mt-0 hover:scale-[1.005] transition-all">
        <CardHeader>
          <div className="flex flex-row items-center">
            <Book className="mr-1" size={20} />
            Education
          </div>
        </CardHeader>
        <CardBody className="min-w-96">
          <div className="flex flex-col space-y-2 w-[80vw]">
            {EducationInfo.map((education: any, index: number) => (
              <Card key={index} className="hover:scale-[1.01] transition-all">
                <CardHeader className="flex items-center gap-3">
                  <Image
                    alt={education.ImageAlt}
                    height={25}
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
                <CardBody>
                  <ul className="list-disc px-6 text-sm">
                    {education.Additional.map((additional: any, index: any) => (
                      <li key={index}>{additional}</li>
                    ))}
                  </ul>
                </CardBody>
              </Card>
            ))}
          </div>
        </CardBody>
      </Card>

      <Card className="flex mt-3 md:mt-0 hover:scale-[1.005] transition-all">
        <CardHeader>
          <div className="flex flex-row items-center">
            <CheckCheck className="mr-1" size={20} />
            Experience
          </div>
        </CardHeader>
        <CardBody className="min-w-96">
          <div className="flex flex-col space-y-2 w-[80vw]">
            {ExperienceInfo.map((experience: any, index: number) => (
              <Card key={index} className="hover:scale-[1.01] transition-all">
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

      <Card className="flex mt-3 md:mt-0 hover:scale-[1.005] transition-all">
        <CardHeader>
          <div className="flex flex-row items-center">
            <AppWindow className="mr-1.5" size={20} />
            Tools and Environments
          </div>
        </CardHeader>
        <CardBody>
          <div className="flex flex-wrap justify-center items-center w-[80vw]">
            {TechnicalSkills.ToolsAndEnvironments.map(
              (skill: string, index: number) => (
                <Chip
                  key={index}
                  className="cursor-default m-1 hover:scale-[1.1] transition-all"
                  color="secondary"
                  variant="flat"
                >
                  {skill}
                </Chip>
              )
            )}
          </div>
        </CardBody>
      </Card>

      <Card className="flex mt-3 md:mt-0 hover:scale-[1.005] transition-all">
        <CardHeader>
          <div className="flex flex-row items-center">
            <MemoryStick className="mr-1.5" size={20} />
            Programming Skills
          </div>
        </CardHeader>
        <CardBody>
          <div className="flex flex-wrap justify-center items-center w-[80vw]">
            {TechnicalSkills.Programming.map((skill: string, index: number) => (
              <Chip
                key={index}
                className="cursor-default m-1 hover:scale-[1.1] transition-all"
                color="secondary"
                variant="flat"
              >
                {skill}
              </Chip>
            ))}
          </div>
        </CardBody>
      </Card>

      <Card className="flex mt-3 md:mt-0 hover:scale-[1.005] transition-all">
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
    </section>
  );
}
