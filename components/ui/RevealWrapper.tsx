"use client";

import { motion } from "framer-motion";

interface RevealWrapperProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export default function RevealWrapper({
  children,
  className = "",
  delay = 0,
}: RevealWrapperProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.75,
        delay: delay / 1000,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
