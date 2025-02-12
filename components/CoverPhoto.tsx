import { Card, CardBody } from "@nextui-org/card";
import { Image } from "@nextui-org/image";

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
