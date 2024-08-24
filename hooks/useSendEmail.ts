import { useToast } from "@/components/ui/use-toast";

function useSendEmail() {
  const { toast } = useToast();

  const sendEmail = async (data: any) => {
    const apiEndpoint = "/api/email";

    try {
      const res = await fetch(apiEndpoint, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json" // Make sure to include content-type if sending JSON
        }
      });

      const response = await res.json();

      if (res.ok) {
        toast({
          title: "Message",
          description: "Message sent successfully."
        });
      } else {
        throw new Error(response.message || "Unknown error");
      }
    } catch (err) {
      toast({
        title: "Message",
        description: "Message could not be sent."
      });
    }
  };

  return { sendEmail };
}

export default useSendEmail;
