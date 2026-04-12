"use client";

import { motion } from "framer-motion";
import { useNavigation } from "@/context/navigation-context";
import { useEffect, useState } from "react";

// ─── Typewriter hook ───────────────────────────────────────────────────────────
function useTypewriter(words: string[], speed = 80, pause = 1800) {
  const [display, setDisplay] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && charIdx <= current.length) {
      timeout = setTimeout(() => setCharIdx((c) => c + 1), speed);
    } else if (!deleting && charIdx > current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIdx >= 0) {
      timeout = setTimeout(() => setCharIdx((c) => c - 1), speed / 2);
    } else {
      setDeleting(false);
      setWordIdx((w) => (w + 1) % words.length);
    }

    setDisplay(current.slice(0, charIdx));
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);

  return display;
}

export function HeroSection() {
  const { setActiveView } = useNavigation();
  const roles = [
    "Data Analyst",
    "SQL Enthusiast",
    "BI Engineer",
    // "Database Professional",
    "Python for Analysts",
  ];
  const typed = useTypewriter(roles);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const handleDownloadCV = () => {
    // Open CV di tab baru
    window.open("/Faraj Hafidh_Resume.pdf", "_blank");

    // Jika ingin auto-download, uncomment bawah ini:
    // const link = document.createElement("a");
    // link.href = "/resume.pdf";
    // link.download = "Faraj_Hafidh_Resume.pdf";
    // document.body.appendChild(link);
    // link.click();
    // document.body.removeChild(link);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-32 pb-20 overflow-hidden bg-slate-950">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/8 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-slate-900/50 rounded-full blur-3xl" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-5xl w-full"
      >
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* ── LEFT CONTENT ── */}
          <div>
            {/* Badge */}
            <motion.div variants={itemVariants} className="mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-sm">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs text-slate-400 font-medium">
                  Available for opportunities
                </span>
              </div>
            </motion.div>

            {/* Main heading */}
            <motion.div variants={itemVariants}>
              <h1 className="text-6xl md:text-7xl font-bold text-slate-50 tracking-tight mb-4 leading-tight">
                Faraj
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-300">
                  Hafidh
                </span>
              </h1>
            </motion.div>

            {/* Typewriter role */}
            <motion.div variants={itemVariants} className="mb-6">
              <div className="flex items-baseline gap-3">
                <span className="text-slate-500 text-lg">I'm a</span>
                <span className="text-2xl md:text-3xl font-bold text-blue-400 min-h-[40px]">
                  {typed}
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.7, repeat: Infinity }}
                    className="inline-block w-1 h-8 bg-blue-400 ml-1 align-middle"
                  />
                </span>
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-lg text-slate-400 leading-relaxed mb-8 max-w-lg"
            >
              Transforming complex datasets into{" "}
              <span className="text-slate-300 font-medium">
                clear, actionable insights
              </span>{" "}
              using SQL, Python, and modern BI tools. Passionate about solving
              problems with data and driving meaningful business decisions.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 mb-8"
            >
              <button
                onClick={() => setActiveView("projects")}
                className="px-8 py-3 rounded-lg bg-blue-500 text-white font-semibold hover:bg-blue-600 transition-all duration-200 shadow-lg shadow-blue-500/30"
              >
                View My Work
              </button>
              <button
                onClick={() => setActiveView("contact")}
                className="px-8 py-3 rounded-lg border border-slate-700 text-slate-300 font-semibold hover:border-slate-600 hover:bg-slate-900/50 transition-all duration-200"
              >
                Get in Touch
              </button>
            </motion.div>

            {/* CV/Resume Button */}
            <motion.div variants={itemVariants} className="mb-8">
              <button
                onClick={handleDownloadCV}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg border border-blue-500/50 text-blue-400 font-medium text-sm hover:border-blue-400 hover:bg-blue-500/10 transition-all duration-200 group"
              >
                <svg
                  className="w-4 h-4 group-hover:-translate-y-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 16v-4m0 0V8m0 4H8m4 0h4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                Download CV
              </button>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex gap-4">
              {[
                {
                  label: "GitHub",
                  href: "https://github.com/TachooDa",
                  icon: (
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  ),
                },
                {
                  label: "LinkedIn",
                  href: "https://www.linkedin.com/in/faraj-hafidh",
                  icon: (
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  ),
                },
                {
                  label: "Email",
                  href: "mailto:faraj.hafidh@gmail.com",
                  icon: (
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  ),
                },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.label !== "Email" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2.5 rounded-lg border border-slate-800 bg-slate-900/50 text-slate-400 hover:text-blue-400 hover:border-blue-500/30 transition-all duration-200"
                  aria-label={social.label}
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {social.icon}
                  </svg>
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT CONTENT (Illustration/Stats) ── */}
          <motion.div
            variants={itemVariants}
            className="hidden md:flex flex-col gap-8 justify-center"
          >
            {/* Stats cards */}
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  number: "10+",
                  label: "Projects",
                },
                {
                  number: "5+",
                  label: "Dashboard Views",
                },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.05 }}
                  className="p-6 rounded-lg border border-slate-800 bg-slate-900/50 backdrop-blur-sm hover:border-blue-500/30 transition-all duration-200"
                >
                  <div className="text-3xl font-bold text-blue-400 mb-2">
                    {stat.number}
                  </div>
                  <p className="text-sm text-slate-400">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Featured badge */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 rounded-lg border border-blue-500/30 bg-blue-500/5 backdrop-blur-sm"
            >
              <p className="text-sm text-slate-400 leading-relaxed">
                Specializing in{" "}
                <span className="text-blue-400 font-medium">
                  end-to-end analytics solutions
                </span>{" "}
                that transform data into strategic insights for business growth.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <svg
          className="w-6 h-6 text-slate-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </motion.div>
    </section>
  );
}
