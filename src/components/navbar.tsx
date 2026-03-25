"use client";

import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 20);
  });

  const navItems = [
    { label: "about", href: "#about" },
    { label: "skills", href: "#skills" },
    { label: "projects", href: "#projects" },
    { label: "experience", href: "#experience" },
    { label: "contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 z-50 w-full font-mono transition-all duration-500 ${
        scrolled
          ? "bg-slate-950/90 backdrop-blur-xl border-b border-cyan-500/10 shadow-lg shadow-slate-950/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-1.5">
            <span className="text-green-400 text-sm">~/</span>
            <span className="text-slate-50 text-sm font-bold tracking-tight">
              faraj-hafidh
            </span>
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="inline-block w-2 h-4 bg-cyan-400 ml-0.5 align-middle group-hover:bg-green-400 transition-colors"
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-0">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="relative px-4 py-2 text-sm text-slate-500 hover:text-cyan-400 transition-colors duration-200 group"
              >
                <span className="text-slate-700 group-hover:text-cyan-600 transition-colors">
                  ./
                </span>
                {item.label}
                {/* Underline on hover */}
                <motion.span
                  className="absolute bottom-1 left-4 right-4 h-px bg-cyan-500/60"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </Link>
            ))}

            {/* CTA */}
            <a href="#contact" className="ml-4">
              <motion.span
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="inline-block px-4 py-1.5 text-sm text-cyan-400 border border-cyan-500/50 rounded hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-200 cursor-pointer"
              >
                [hire_me]
              </motion.span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 group"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <motion.span
              animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
              className="block w-5 h-px bg-slate-400 group-hover:bg-cyan-400 transition-colors origin-center"
            />
            <motion.span
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="block w-5 h-px bg-slate-400 group-hover:bg-cyan-400 transition-colors"
            />
            <motion.span
              animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
              className="block w-5 h-px bg-slate-400 group-hover:bg-cyan-400 transition-colors origin-center"
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        initial={false}
        animate={
          isOpen ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }
        }
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="md:hidden overflow-hidden bg-slate-950/95 backdrop-blur-xl border-t border-slate-800/60"
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-1">
          {/* Terminal prompt header */}
          <div className="text-xs text-slate-600 mb-2 pb-2 border-b border-slate-800">
            <span className="text-green-400">$</span> ls ./navigation/
          </div>

          {navItems.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, x: -10 }}
              animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
              transition={{ duration: 0.2, delay: i * 0.05 }}
            >
              <Link
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2 px-3 py-2.5 text-sm text-slate-500 hover:text-cyan-400 rounded hover:bg-slate-800/40 transition-all duration-200 group"
              >
                <span className="text-slate-700 group-hover:text-cyan-600 transition-colors text-xs">
                  ./
                </span>
                {item.label}
                <svg
                  className="w-3 h-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-cyan-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </motion.div>
          ))}

          <div className="pt-2 mt-1 border-t border-slate-800/60">
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center w-full py-2 px-4 text-sm text-cyan-400 border border-cyan-500/40 rounded hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-200"
            >
              [hire_me]
            </a>
          </div>
        </div>
      </motion.div>
    </motion.nav>
  );
}
