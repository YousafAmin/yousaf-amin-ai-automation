"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import clsx from "clsx";

export function GlowCard({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
      className={clsx(
        "glow-border card-glass group relative overflow-hidden rounded-2xl p-6 transition-colors duration-300 hover:border-white/20 sm:p-8",
        className,
      )}
    >
      {children}
    </motion.div>
  );
}
