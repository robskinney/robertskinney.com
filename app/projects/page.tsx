import { title } from "@/components/primitives";
import { Image } from "@nextui-org/image";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import { BicepsFlexed } from "lucide-react";
import { Chip } from "@nextui-org/chip";
import { Divider } from "@nextui-org/react";

export default function ProjectsPage() {
  return (
    <div>
      <h1 className={title()}>Project Highlights</h1>

      <div className="flex flex-col pt-5 min-w-32 space-y-5 mb-5">
        <Card>
          <CardHeader>
            <p className="text-xl font-bold cursor-default">Rocket Tutoring</p>
          </CardHeader>
          <CardBody>
            <div className="flex flex-row space-x-3">
              <Card isFooterBlurred radius="lg" className="border-none">
                <Image
                  alt="Rocket Tutoring Splash Page"
                  className="object-cover"
                  width={300}
                  src="/RocketTutoringSplash.png"
                />
                <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                  <p className="text-tiny text-white/80">Rocket Tutoring</p>
                  <Button
                    className="text-tiny text-white bg-black/20"
                    variant="flat"
                    color="default"
                    radius="lg"
                    size="sm"
                  >
                    Read More
                  </Button>
                </CardFooter>
              </Card>
              <Card className="flex max-w-[350]">
                <CardHeader>Features</CardHeader>
                <CardBody>
                  <div className="flex flex-col space-y-1">
                    <Chip
                      className="cursor-default min-w-full"
                      color="secondary"
                      variant="flat"
                    >
                      Live Meetings
                    </Chip>
                    <Chip
                      className="cursor-default min-w-full"
                      color="secondary"
                      variant="flat"
                    >
                      Chat
                    </Chip>
                    <Chip
                      className="cursor-default min-w-full"
                      color="secondary"
                      variant="flat"
                    >
                      Stripe Payments
                    </Chip>
                    <Chip
                      className="cursor-default min-w-full"
                      color="secondary"
                      variant="flat"
                    >
                      Scheduling Assistant
                    </Chip>
                    <Chip
                      className="cursor-default min-w-full"
                      color="secondary"
                      variant="flat"
                    >
                      Site Administration
                    </Chip>
                  </div>
                </CardBody>
              </Card>
            </div>
          </CardBody>
        </Card>

        <Divider />

        <Card>
          <CardHeader>
            <p className="text-xl font-bold cursor-default">CelebGuessr</p>
          </CardHeader>
          <CardBody>
            <div className="flex flex-row space-x-3">
              <Card isFooterBlurred radius="lg" className="border-none">
                <Image
                  alt="CGuessr Splash Page"
                  className="object-cover"
                  width={300}
                  src="/CGuessrSplash.png"
                />
                <CardFooter className="justify-between before:bg-white/ border-black/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                  <p className="text-tiny text-black/80">CGuessr</p>
                  <Button
                    className="text-tiny text-black bg-black/20"
                    variant="flat"
                    color="default"
                    radius="lg"
                    size="sm"
                  >
                    Read More
                  </Button>
                </CardFooter>
              </Card>
              <Card className="flex max-w-[350]">
                <CardHeader>Features</CardHeader>
                <CardBody>
                  <div className="flex flex-col space-y-1">
                    <Chip
                      className="cursor-default min-w-full"
                      color="secondary"
                      variant="flat"
                    >
                      New Celebrity Daily
                    </Chip>
                    <Chip
                      className="cursor-default min-w-full"
                      color="secondary"
                      variant="flat"
                    >
                      Share Feature
                    </Chip>
                    <Chip
                      className="cursor-default min-w-full"
                      color="secondary"
                      variant="flat"
                    >
                      Helpful Hints
                    </Chip>
                  </div>
                </CardBody>
              </Card>
            </div>
          </CardBody>
        </Card>

        <Divider />

        <Card>
          <CardHeader>
            <p className="text-xl font-bold cursor-default">Gorilla Carts</p>
          </CardHeader>
          <CardBody>
            <div className="flex flex-row space-x-3">
              <Card isFooterBlurred radius="lg" className="border-none">
                <Image
                  alt="Gorilla Carts Splash Page"
                  className="object-cover"
                  width={300}
                  src="/GorillaCartsSplash.png"
                />
                <CardFooter className="justify-between before:bg-white/ border-black/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                  <p className="text-tiny text-black/80">Gorilla Carts</p>
                  <Button
                    className="text-tiny text-black bg-black/20"
                    variant="flat"
                    color="default"
                    radius="lg"
                    size="sm"
                  >
                    Read More
                  </Button>
                </CardFooter>
              </Card>
              <Card className="flex max-w-[350]">
                <CardHeader>Features</CardHeader>
                <CardBody>
                  <div className="flex flex-col space-y-1">
                    <Chip
                      className="cursor-default min-w-full"
                      color="secondary"
                      variant="flat"
                    >
                      Place Orders
                    </Chip>
                    <Chip
                      className="cursor-default min-w-full"
                      color="secondary"
                      variant="flat"
                    >
                      Modify Product BOMs
                    </Chip>
                    <Chip
                      className="cursor-default min-w-full"
                      color="secondary"
                      variant="flat"
                    >
                      Modify Customers
                    </Chip>
                    <Chip
                      className="cursor-default min-w-full"
                      color="secondary"
                      variant="flat"
                    >
                      Modify Materials
                    </Chip>
                  </div>
                </CardBody>
              </Card>
            </div>
          </CardBody>
        </Card>

        <Divider />

        <Card>
          <CardHeader>
            <p className="text-xl font-bold cursor-default">AutoTrackr</p>
          </CardHeader>
          <CardBody>
            <div className="flex flex-row space-x-3">
              <Card isFooterBlurred radius="lg" className="border-none">
                <Image
                  alt="AutoTrackr Splash Page"
                  className="object-cover"
                  width={300}
                  src="/AutoTrackrSplash.png"
                />
                <CardFooter className="justify-between before:bg-white/ border-black/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                  <p className="text-tiny text-black/80">AutoTrackr</p>
                  <Button
                    className="text-tiny text-black bg-black/20"
                    variant="flat"
                    color="default"
                    radius="lg"
                    size="sm"
                  >
                    Read More
                  </Button>
                </CardFooter>
              </Card>
              <Card className="flex max-w-[350]">
                <CardHeader>Features</CardHeader>
                <CardBody>
                  <div className="flex flex-col space-y-1">
                    <Chip
                      className="cursor-default min-w-full"
                      color="secondary"
                      variant="flat"
                    >
                      Add/Edit Events
                    </Chip>
                    <Chip
                      className="cursor-default min-w-full"
                      color="secondary"
                      variant="flat"
                    >
                      Add/Edit Attendees
                    </Chip>
                  </div>
                </CardBody>
              </Card>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
