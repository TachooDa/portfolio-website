"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setVisible(latest > 400);
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.button
      onClick={scrollToTop}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={visible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.2 }}
      className="fixed bottom-6 right-6 z-50 flex flex-col items-center justify-center w-10 h-10 rounded border border-cyan-500/40 bg-slate-950/90 backdrop-blur-md text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400 transition-colors duration-200 font-mono group"
      aria-label="Scroll to top"
    >
      <svg
        className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform duration-200"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4.5 15.75l7.5-7.5 7.5 7.5"
        />
      </svg>
      <span className="text-[8px] tracking-widest leading-none">TOP</span>
    </motion.button>
  );
}
