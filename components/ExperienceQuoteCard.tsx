import { Card, CardBody, CardHeader } from "@heroui/card";
import { Quote } from "lucide-react";

export default function ExperienceQuoteCard() {
  return (
    <Card className="hover:scale-[1.02] transition-all">
      <CardHeader>
        <Quote size={17} />
      </CardHeader>
      <CardBody className="flex justify-start text-md sm:text-lg">
        My professional experience at EY has entrenched my expertise right at
        the intersection of technology and business. With a strong foundation in
        both business and technical skills, I am eager to contribute and
        continuously learn in a dynamic work environment.
      </CardBody>
    </Card>
  );
}
