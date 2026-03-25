"use client";

import { motion } from "framer-motion";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: "about", href: "#about" },
    { label: "skills", href: "#skills" },
    { label: "projects", href: "#projects" },
    { label: "experience", href: "#experience" },
    { label: "contact", href: "#contact" },
  ];

  const resources = [
    { label: "github", href: "https://github.com/TachooDa", external: true },
    {
      label: "linkedin",
      href: "https://www.linkedin.com/in/faraj-hafidh-0a0527217/",
      external: true,
    },
    { label: "email", href: "mailto:faraj.hafidh@gmail.com", external: false },
    { label: "cv.pdf", href: "/cv.pdf", external: false },
  ];

  return (
    <footer className="border-t border-slate-800/60 bg-slate-950 font-mono relative overflow-hidden">
      {/* Subtle grid */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #22d3ee 1px, transparent 1px),
              linear-gradient(to bottom, #22d3ee 1px, transparent 1px)
            `,
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12 relative z-10">
        {/* Top prompt */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-xs text-slate-600 mb-8 flex items-center gap-2"
        >
          <span className="text-green-400">$</span>
          <span>cat footer.txt</span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-1.5 mb-3">
              <span className="text-green-400 text-sm">~/</span>
              <span className="text-slate-50 text-sm font-bold tracking-tight">
                faraj-hafidh
              </span>
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="inline-block w-1.5 h-4 bg-cyan-400 ml-0.5"
              />
            </div>
            <p className="text-xs text-slate-500 leading-relaxed border-l border-slate-700/60 pl-3">
              Data Analyst · Business Intelligence
              <br />
              Analytics Solutions · Indonesia
            </p>
            <div className="flex items-center gap-2 mt-4">
              <motion.div
                animate={{ opacity: [1, 0.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1.5 h-1.5 rounded-full bg-green-400"
              />
              <span className="text-[10px] text-green-400">
                AVAILABLE_FOR_WORK
              </span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="text-[10px] text-slate-600 mb-4">
              <span className="text-green-400">$</span> ls ./navigation/
            </div>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-xs text-slate-500 hover:text-cyan-400 transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <span className="text-slate-700 group-hover:text-cyan-700 transition-colors">
                      ./
                    </span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="text-[10px] text-slate-600 mb-4">
              <span className="text-green-400">$</span> ls ./resources/
            </div>
            <ul className="space-y-2">
              {resources.map((r) => (
                <li key={r.label}>
                  <a
                    href={r.href}
                    target={r.external ? "_blank" : undefined}
                    rel={r.external ? "noopener noreferrer" : undefined}
                    className="text-xs text-slate-500 hover:text-cyan-400 transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <span className="text-slate-700 group-hover:text-cyan-700 transition-colors">
                      ./
                    </span>
                    {r.label}
                    {r.external && (
                      <span className="text-slate-700 group-hover:text-slate-500 transition-colors ml-auto text-[10px]">
                        ↗
                      </span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800/60 pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <span className="text-green-400">$</span>
            <span>
              echo "© {currentYear} Faraj Hafidh · All rights reserved."
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-slate-600">
            <span>// built with</span>
            <span className="text-cyan-500">Next.js</span>
            <span>·</span>
            <span className="text-cyan-500">Tailwind</span>
            <span>·</span>
            <span className="text-cyan-500">Framer Motion</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
