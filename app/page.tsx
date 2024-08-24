import { Image } from "@nextui-org/image";
import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { Chip } from "@nextui-org/chip";
import { Tooltip } from "@nextui-org/tooltip";
import {
  BicepsFlexed,
  Book,
  CheckCheck,
  Database,
  Layers,
  Quote
} from "lucide-react";
import { Divider, Spacer } from "@nextui-org/react";

export default function Home() {
  return (
    // <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
    <section className="flex flex-col items-center justify-center gap-4">
      <div className="flex flex-col sm:flex-row items-center space-x-8">
        <div className="flex flex-wrap pb-3">
          <Card>
            <CardBody>
              <div className="flex flex-row space-x-3">
                <div className="flex flex-col">
                  <Image
                    isBlurred
                    alt="Robert Kinney's Headshot"
                    src="/RobertKHeadshot.png"
                    width={200}
                  />
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
        <div className="flex flex-col space-y-0.5">
          <h1 className="font-bold text-5xl from-[#FF1CF7] to-[#b249f8] bg-clip-text text-transparent bg-gradient-to-b cursor-default">
            Hi!
          </h1>
          <p className="text-4xl font-bold cursor-default">
            I&apos;m Robert Kinney.
          </p>
          <Spacer y={3} />
          <Divider />
          <Spacer y={3} />
          <div className="flex flex-wrap space-x-1 items-center cursor-default">
            <Tooltip
              content={
                <div className="max-w-52 px-1 py-2 space-y-0.5">
                  <div className="cursor-default text-small font-bold">
                    Full-Stack Developer
                  </div>
                  <div className="text-tiny cursor-default">
                    A jack of all trades but a master of none who can be a
                    valuable asset on any team.
                  </div>
                </div>
              }
              delay={400}
              placement="bottom"
            >
              <Chip
                color="secondary"
                variant="flat"
                className="cursor-default"
                avatar={<Layers size={1} />}
              >
                Full-Stack Developer
              </Chip>
            </Tooltip>

            <Tooltip
              content={
                <div className="max-w-52 px-1 py-2 space-y-0.5">
                  <div className="text-small font-bold cursor-default">
                    Data-Driven
                  </div>
                  <div className="text-tiny cursor-default">
                    An individual who&apos;s seen their fair share of messy data
                    and isn&apos;t a stranger to performing large alterations.
                  </div>
                </div>
              }
              delay={400}
              placement="bottom"
            >
              <Chip
                color="secondary"
                variant="flat"
                avatar={<Database size={1} />}
                className="cursor-default"
              >
                Data-Driven
              </Chip>
            </Tooltip>
          </div>
        </div>
      </div>
      <Divider />
      <Spacer y={1} />
      <div className="flex flex-col md:flex-row space-x-0 md:space-x-4">
        <Card className="flex max-w-[400px]">
          <CardBody>
            <Quote className="pb-2" />
            Since a young age, I have been fascinated by the rapidly developing
            world of technology around us. My passion for understanding how
            things work led me to build my first computer at 14, and has since
            sprouted into a pursuit of knowledge through formal education,
            personal projects, and hands-on experience.
          </CardBody>
        </Card>
        <Card className="flex max-w-[400px] mt-3 md:mt-0">
          <CardHeader>
            <div className="flex flex-row items-center">
              <Book className="mr-1" size={20} />
              Education
            </div>
          </CardHeader>
          <CardBody>
            <div className="flex flex-col space-y-1">
              <Card className="max-w-[400px]">
                <CardHeader className="flex gap-3">
                  <Image
                    alt="Indiana University's logo"
                    height={25}
                    radius="sm"
                    src="/IULogo.webp"
                  />
                  <div className="flex flex-col">
                    <p className="text-md">MS in Information Systems</p>
                    <p className="text-small text-default-500">
                      Indiana University &apos;23
                    </p>
                  </div>
                </CardHeader>
              </Card>
              <Card className="max-w-[400px]">
                <CardHeader className="flex gap-3">
                  <Image
                    alt="Indiana University's logo"
                    height={25}
                    radius="sm"
                    src="/IULogo.webp"
                  />
                  <div className="flex flex-col">
                    <p className="text-md">BS in Informatics</p>
                    <p className="text-small text-default-500">
                      Indiana University &apos;22
                    </p>
                  </div>
                </CardHeader>
              </Card>
            </div>
          </CardBody>
        </Card>
      </div>

      <div className="flex flex-col md:flex-row space-x-0 md:space-x-4">
        <Card className="flex max-w-[400px] min-w-[200px] md:mt-0">
          <CardHeader>
            <div className="flex flex-row items-center">
              <CheckCheck className="mr-1" size={20} />
              Experience
            </div>
          </CardHeader>
          {/* <Divider /> */}
          <CardBody>
            {/* <Spacer y={1} /> */}
            <div className="flex flex-col space-y-1">
              <Card className="max-w-[400px]">
                <CardHeader className="flex gap-3">
                  <Image
                    alt="EY's logo"
                    height={25}
                    radius="sm"
                    src="/EYLogo.png"
                  />
                  <div className="flex flex-col">
                    <p className="text-md">Tax Technology Consultant</p>
                    <p className="text-small text-default-500">
                      Ernst & Young (&apos;23-&apos;24)
                    </p>
                  </div>
                </CardHeader>
              </Card>
              <Card className="max-w-[400px]">
                <CardHeader className="flex gap-3">
                  <Image
                    alt="Indiana University's logo"
                    height={25}
                    radius="sm"
                    src="/IULogo.webp"
                  />
                  <div className="flex flex-col">
                    <p className="text-md">Graduate Assistant</p>
                    <p className="text-small text-default-500">
                      Indiana University (&apos;22-&apos;23)
                    </p>
                  </div>
                </CardHeader>
              </Card>
            </div>
          </CardBody>
        </Card>
        <Card className="flex max-w-[400px] mt-3 md:mt-0">
          <CardBody>
            <Quote className="pb-2" />
            My professional experience at EY has entrenched my expertise right
            at the intersection of technology and business. With a strong
            foundation in both business and technical skills, I am eager to
            contribute and continuously learn in a dynamic work environment.
          </CardBody>
        </Card>
      </div>
      <Card className="flex max-w-[450] mb-5">
        <CardHeader>
          <div className="flex flex-row items-center">
            <BicepsFlexed className="mr-1" size={20} />
            Skills
          </div>
        </CardHeader>
        {/* <Divider /> */}
        <CardBody>
          <div className="flex flex-wrap">
            <Chip
              className="cursor-default m-1"
              color="secondary"
              variant="flat"
            >
              Python
            </Chip>
            <Chip
              className="cursor-default m-1"
              color="secondary"
              variant="flat"
            >
              Alteryx
            </Chip>
            <Chip
              className="cursor-default m-1"
              color="secondary"
              variant="flat"
            >
              SQL
            </Chip>
            <Chip
              className="cursor-default m-1"
              color="secondary"
              variant="flat"
            >
              SAP
            </Chip>
            <Chip
              className="cursor-default m-1"
              color="secondary"
              variant="flat"
            >
              PowerBI
            </Chip>
            <Chip
              className="cursor-default m-1"
              color="secondary"
              variant="flat"
            >
              Microsoft Access
            </Chip>
            <Chip
              className="cursor-default m-1"
              color="secondary"
              variant="flat"
            >
              Microsoft Excel
            </Chip>
            <Chip
              className="cursor-default m-1"
              color="secondary"
              variant="flat"
            >
              PowerAutomate
            </Chip>
            <Chip
              className="cursor-default m-1"
              color="secondary"
              variant="flat"
            >
              React/Next.js
            </Chip>
            <Chip
              className="cursor-default m-1"
              color="secondary"
              variant="flat"
            >
              HTML
            </Chip>
            <Chip
              className="cursor-default m-1"
              color="secondary"
              variant="flat"
            >
              CSS
            </Chip>
            <Chip
              className="cursor-default m-1"
              color="secondary"
              variant="flat"
            >
              Spanish
            </Chip>
          </div>
        </CardBody>
      </Card>
    </section>
  );
}
