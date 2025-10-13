"use client";

import { motion } from "framer-motion";
import { cn } from "~/lib/utils";

export default function FadeInSection({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} // start faded + pushed down
      whileInView={{ opacity: 1, y: 0 }} // fade in + slide up
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }} // trigger once when 20% in view
      className={cn(className, "w-full")}
    >
      {children}
    </motion.div>
  );
}
