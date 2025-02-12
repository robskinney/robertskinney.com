import { Card, CardBody } from "@heroui/card";
import { Image } from "@heroui/image";

export default function CoverPhoto() {
  return (
    <Card>
      <CardBody>
        <Image
          isBlurred
          alt="Robert Kinney's Headshot"
          src="/RobertKHeadshot.png"
          width={200}
        />
      </CardBody>
    </Card>
  );
}
