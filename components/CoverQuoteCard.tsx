import { Card, CardBody, CardHeader } from "@heroui/card";
import { Quote } from "lucide-react";

export default function CoverQuoteCard() {
  return (
    <Card>
      <CardHeader>
        <Quote size={17} />
      </CardHeader>
      <CardBody className="flex justify-start text-md sm:text-lg">
        As a passionate enthusiast in all things technology, I often find myself
        digging deep into the functionality of items we interact with in
        everyday life. From reviving a hopeless laptop with a lightweight
        version of Linux, building a computer and watching it POST for the first
        time, all the way up to standing with a CV axle in hand during a
        transmission-out procedure on my car, I always find myself stepping
        outside of my comfort zone. I have tried, failed, and tried again,
        learning a lesson with each attempt.
      </CardBody>
    </Card>
  );
}
