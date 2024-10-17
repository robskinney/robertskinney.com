import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Textarea,
  useDisclosure
} from "@nextui-org/react";
import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import React from "react";
// import { Toast } from "@radix-ui/react-toast";
// import useSendEmail from "@/hooks/useSendEmail";
import Link from "next/link";

// export function sendEmail(data: any) {

//   const apiEndpoint = "/api/email";

//   fetch(apiEndpoint, {
//     method: "POST",
//     body: JSON.stringify(data)
//   })
//     .then((res) => res.json())
//     .then((response) => {
//       toast({
//         title: "Message",
//         description: "Message sent successfully."
//       });
//     })
//     .catch((err) => {
//       toast({
//         title: "Message",
//         description: "Message could not be sent."
//       });
//     });
// }

//     .then((response) => {
//       alert(response.message);
//     })
//     .catch((err) => {
//       alert(err);
//     });
// }

export default function ContactForm() {
  // const { sendEmail } = useSendEmail();
  // const { isOpen, onOpen, onClose } = useDisclosure();

  // const formSchema = z.object({
  //   name: z.string().min(1, {
  //     message: "Name is required"
  //   }),
  //   email: z.string().email({ message: "Invalid email address" }).min(1, {
  //     message: "Email is required"
  //   }),
  //   message: z.string().min(1, {
  //     message: "Message is required"
  //   })
  // });

  // const {
  //   handleSubmit,
  //   control,
  //   reset,
  //   formState: { errors },
  //   trigger
  // } = useForm({
  //   resolver: zodResolver(formSchema),
  //   defaultValues: {
  //     name: "",
  //     email: "",
  //     message: ""
  //   },
  //   mode: "onBlur" // Validate on blur to show errors as soon as fields lose focus
  // });

  // Function to handle form submission
  // function onSubmit(values: z.infer<typeof formSchema>) {
  //   sendEmail(values);
  //   reset(); // Reset form after submission
  //   onClose(); // Close modal after submission
  // }

  return (
    <>
      {/* <Button color="secondary" size="sm" variant="flat" onPress={onOpen}>
        Contact Me
      </Button> */}
      <Link href="mailto:robertskinney@outlook.com?Subject=Inquiry to Robert Kinney">
        <Button color="secondary" size="sm" variant="flat">
          Contact Me
        </Button>
      </Link>

      {/* <Modal
        backdrop="blur"
        isOpen={isOpen}
        placement="top-center"
        onClose={onClose}
      >
        <ModalContent>
          <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
            <ModalHeader className="flex flex-col gap-1">
              Contact Me
            </ModalHeader>
            <ModalBody>
              <Controller
                name="name"
                control={control}
                render={({ field }) => (
                  <div>
                    <Input
                      {...field}
                      label="Name"
                      placeholder="John Doe"
                      variant="bordered"
                      onBlur={() => trigger("name")} // Trigger validation on blur
                    />
                    {errors.name && (
                      <p className="text-red-600 text-sm mt-1">
                        {errors.name.message}
                      </p>
                    )}
                  </div>
                )}
              />
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <div>
                    <Input
                      {...field}
                      label="Email"
                      placeholder="john.doe@example.com"
                      type="email"
                      variant="bordered"
                      onBlur={() => trigger("email")} // Trigger validation on blur
                    />
                    {errors.email && (
                      <p className="text-red-600 text-sm mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                )}
              />
              <Controller
                name="message"
                control={control}
                render={({ field }) => (
                  <div>
                    <Textarea
                      {...field}
                      label="Message"
                      placeholder="Enter your message"
                      variant="bordered"
                      onBlur={() => trigger("message")} // Trigger validation on blur
                    />
                    {errors.message && (
                      <p className="text-red-600 text-sm mt-1">
                        {errors.message.message}
                      </p>
                    )}
                  </div>
                )}
              />
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="flat" onPress={onClose}>
                Close
              </Button>
              <Button color="primary" type="submit">
                Send
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal> */}
    </>
  );
}
