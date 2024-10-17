import { Card, CardBody } from "@nextui-org/card";
import { Image } from "@nextui-org/image";

export default function CoverPhoto() {
  return (
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
  );
}
