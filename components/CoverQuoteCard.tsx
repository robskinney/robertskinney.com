import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Quote } from "lucide-react";

export default function CoverQuoteCard() {
  return (
    <Card className="hover:scale-[1.02] transition-all">
      <CardHeader>
        <Quote size={17} />
      </CardHeader>
      <CardBody className="flex justify-start text-md sm:text-lg">
        Since a young age, I have been fascinated by the rapidly developing
        world of technology around us. My passion for understanding how things
        work led me to build my first computer at 14, and has since sprouted
        into a pursuit of knowledge through formal education, personal projects,
        and hands-on experience.
      </CardBody>
    </Card>
  );
}
