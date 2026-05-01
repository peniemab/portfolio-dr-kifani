"use client";

import { motion, useScroll } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  
  return (
    <motion.div
      style={{
        scaleX: scrollYProgress,
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "3px",
        originX: 0,
        backgroundColor: "var(--primary)",
        zIndex: 9999,
        boxShadow: "0 0 10px var(--primary)"
      }}
    />
  );
}
