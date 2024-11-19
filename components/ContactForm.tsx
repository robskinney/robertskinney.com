import { Button } from "@nextui-org/react";
import React from "react";
import Link from "next/link";

export default function ContactForm() {
  return (
    <>
      <Link href="mailto:robertskinney@outlook.com?Subject=Inquiry to Robert Kinney">
        <Button color="secondary" size="sm" variant="flat">
          Contact Me
        </Button>
      </Link>
    </>
  );
}
