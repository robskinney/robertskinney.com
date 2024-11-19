import { Chip } from "@nextui-org/chip";
import { Divider } from "@nextui-org/divider";
import { Spacer } from "@nextui-org/spacer";
import { Tooltip } from "@nextui-org/tooltip";
import { Database, Layers } from "lucide-react";

export default function IntroductoryHeader() {
  return (
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
                A jack of all trades who can be a valuable asset on any team.
              </div>
            </div>
          }
          delay={400}
          placement="bottom"
        >
          <Chip
            avatar={<Layers size={1} />}
            className="cursor-default hover:scale-105 transition-all"
            color="secondary"
            variant="flat"
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
                An individual who&apos;s seen their fair share of messy data and
                isn&apos;t a stranger to performing large alterations.
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
            className="cursor-default hover:scale-105 transition-all"
          >
            Data-Driven
          </Chip>
        </Tooltip>
      </div>
    </div>
  );
}
