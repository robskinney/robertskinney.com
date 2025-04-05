import { Card, CardBody, CardHeader } from "@heroui/card";
import { Quote } from "lucide-react";

export default function ExperienceQuoteCard() {
  return (
    <Card>
      <CardHeader>
        <Quote size={17} />
      </CardHeader>
      <CardBody className="flex space-y-2 justify-start text-md sm:text-lg">
        <p>
          Through my formal education at Indiana University, I learned to apply
          this enthusiasm for technology to different business cases while
          modeling network relationships in Python, performing data analysis
          with modeling algorithms in R, implementing an SAP client to support
          the procure-to-pay process, building web applications, and more.
        </p>
        <p>
          Early in my career, I am fortunate to apply and build upon these
          lessons on a daily basis. With each new analytic, automation, and ETL
          pipeline, I have the opportunity to solve problems in a creative way
          while surveying the best solution for each clients’ unique
          requirements, systems, and restrictions. I have grown to obsess over
          the details and user experience, incrementally finding new ways to
          reduce complexity and deliver value.
        </p>
      </CardBody>
    </Card>
  );
}
