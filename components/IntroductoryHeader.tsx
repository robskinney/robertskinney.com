import { Chip } from "@heroui/chip";
import { Divider } from "@heroui/divider";
import { Spacer } from "@heroui/spacer";
import { Tooltip } from "@heroui/tooltip";
import { Database, Layers } from "lucide-react";

export default function IntroductoryHeader() {
  return (
    <div className="flex flex-col space-y-0.5">
      <h1 className="font-bold text-5xl from-[#FF1CF7] to-[#b249f8] bg-clip-text text-transparent bg-gradient-to-b cursor-default">
        Hi!
      </h1>
      <p className="text-4xl font-bold cursor-default text-wrap">
        I&apos;m Robert Kinney.
      </p>
      <Spacer y={3} />
      <Divider />
      <Spacer y={3} />
      <div className="flex flex-wrap gap-1.5 items-center cursor-default">
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
            className="pl-2 pr-1 space-x-1 cursor-default hover:scale-105 transition-all"
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
                Someone who&apos;s seen their fair share of messy data and
                isn&apos;t a stranger to operating with large datasets.
              </div>
            </div>
          }
          delay={400}
          placement="bottom"
        >
          <Chip
            avatar={<Database size={1} />}
            className="pl-2 pr-1 space-x-1 cursor-default opacity-100 hover:scale-105 transition-all"
            color="secondary"
            variant="flat"
          >
            Data-Driven
          </Chip>
        </Tooltip>
      </div>
    </div>
  );
}
