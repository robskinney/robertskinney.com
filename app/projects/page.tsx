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

import { ExperienceInfo, Project } from "@/lib/data";
import Link from "next/link";
import { Projects } from "@/lib/data";

export default function ProjectsPage() {
  return (
    <section className="flex flex-col items-center justify-center gap-6 mb-4">
      <p className="text-4xl font-bold cursor-default">Projects</p>

      <Divider />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {Projects.map((item: Project, index: number) => (
          <Link key={index} href={`/projects/${item.slug}`}>
            <Card className="hover:scale-[1.01] transition-all w-full">
              <CardHeader>
                <p className="text-xl font-bold">{item.name}</p>
              </CardHeader>
              <CardBody className="grid grid-cols-2 gap-4 w-fit">
                <Card>
                  <Image
                    alt={`${item.name} Splash Page`}
                    className="object-cover aspect-auto"
                    height={200}
                    src={item.image}
                    // width={600}
                  />
                </Card>
                <Card className="p-2 space-y-1 text-xs" radius="lg">
                  {/* <CardBody className="w-full space-y-1 text-xs"> */}
                  {item.tags.map((tag: any, index: number) => (
                    <Chip
                      key={index}
                      className="min-w-full"
                      color="secondary"
                      size="md"
                      variant="flat"
                    >
                      <p className="flex text-wrap text-xs ">{tag}</p>
                    </Chip>
                  ))}
                  {/* </CardBody> */}
                </Card>
              </CardBody>
            </Card>
          </Link>
        ))}
      </div>

      {/* <div className="flex flex-col items-center justify-center gap-3">
        <Card>
          <CardHeader>
            <div className="flex flex-row items-center">
              <Book className="mr-1" size={20} />
              Education
            </div>
          </CardHeader>
          <CardBody className="min-w-96">
            <div className="flex flex-col space-y-2 w-[80vw]">
              {EducationInfo.map((education: any, index: number) => (
                <Card key={index}>
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
                </Card>
              ))}
            </div>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <div className="flex flex-row items-center">
              <CheckCheck className="mr-1" size={20} />
              Experience
            </div>
          </CardHeader>
          <CardBody className="min-w-96">
            <div className="flex flex-col space-y-2 w-[80vw]">
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
      </div> */}
    </section>
  );
}

// import { Card, CardBody, CardHeader } from "@heroui/card";
// import { Image } from "@heroui/image";
// import { Divider } from "@heroui/divider";
// import { Chip } from "@heroui/chip";
// import Link from "next/link";
// import { Projects } from "@/lib/data";

// export default function ProjectsPage() {
//   const projectEntries = Object.entries(Projects);

//   return (
//     <section className="flex flex-col items-center justify-center gap-6">
//       <p className="text-4xl font-bold cursor-default">Project Highlights</p>
//       <Divider />

//       {/* <div className="flex flex-col items-center justify-center gap-3"> */}
// <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//   {projectEntries.map(([key, item]: any, index) => (
//     <Link key={index} href={`/projects/${item.slug}`}>
//       <Card className="hover:scale-[1.02] transition-all w-full h-56">
//         <CardHeader>
//           <p className="text-xl font-bold cursor-default">{item.name}</p>
//         </CardHeader>
//         <CardBody className="flex flex-row gap-4">
//           <Card>
//             <Image
//               alt={`${item.name} Splash Page`}
//               className="shadow-lg outline-1"
//               height={150}
//               radius="lg"
//               src={item.image}
//               width={200}
//             />
//           </Card>
//           <Card className="w-1/2" radius="lg">
//             <CardBody className="w-full space-y-1 text-xs">
//               {item.tags.map((tag: any, index: number) => (
//                 <Chip
//                   key={index}
//                   className="min-w-full"
//                   color="secondary"
//                   size="md"
//                   variant="flat"
//                 >
//                   <p className="flex text-wrap text-xs ">{tag}</p>
//                 </Chip>
//               ))}
//             </CardBody>
//           </Card>
//         </CardBody>
//       </Card>
//     </Link>
//   ))}
// </div>
//       {/* </div> */}
//     </section>
//   );
// }
