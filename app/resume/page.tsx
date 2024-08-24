"use client";
import {
  ResponsiveIframeViewer,
  ViewportSize
} from "react-responsive-iframe-viewer";

import { title } from "@/components/primitives";
import { Card, CardBody } from "@nextui-org/card";

export default function ResumePage() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className={title()}>Resume</h1>
      <Card className="mt-4">
        <CardBody>
          <div className="w-[80vw] md:w-[60vw] h-[50vh] md:h-[75vh] mx-auto">
            <ResponsiveIframeViewer
              enabledControls={[]}
              size={ViewportSize.fluid}
              src="/Kinney_Robert_Resume.pdf"
              title="Robert Kinney's Resume"
            />
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
