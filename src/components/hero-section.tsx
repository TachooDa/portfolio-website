"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";

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

// ─── Scanline grid background ──────────────────────────────────────────────────
function TerminalGrid() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Grid lines */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #22d3ee 1px, transparent 1px),
            linear-gradient(to bottom, #22d3ee 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />
      {/* Scanline sweep */}
      <motion.div
        className="absolute left-0 right-0 h-32 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, transparent, rgba(34,211,238,0.03), transparent)",
        }}
        animate={{ y: ["-10%", "110%"] }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
      />
      {/* Corner brackets */}
      {[
        "top-6 left-6",
        "top-6 right-6",
        "bottom-6 left-6",
        "bottom-6 right-6",
      ].map((pos, i) => (
        <div key={i} className={`absolute ${pos} w-6 h-6`}>
          <div
            className="w-full h-full border-cyan-500/40"
            style={{
              borderTopWidth: i < 2 ? "1px" : "0",
              borderBottomWidth: i >= 2 ? "1px" : "0",
              borderLeftWidth: i % 2 === 0 ? "1px" : "0",
              borderRightWidth: i % 2 === 1 ? "1px" : "0",
            }}
          />
        </div>
      ))}
      {/* Ambient glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-green-500/5 rounded-full blur-3xl" />
    </div>
  );
}

// ─── Animated counter ──────────────────────────────────────────────────────────
function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v) + suffix);
  const [val, setVal] = useState("0" + suffix);

  useEffect(() => {
    const controls = animate(count, to, { duration: 2, ease: "easeOut" });
    const unsub = rounded.on("change", setVal);
    return () => {
      controls.stop();
      unsub();
    };
  }, [to]);

  return <span>{val}</span>;
}

// ─── Skill tag pill ────────────────────────────────────────────────────────────
const skills = [
  { label: "SQL", color: "cyan" },
  { label: "Tableau", color: "cyan" },
  { label: "PostgreSQL", color: "cyan" },
  { label: "Looker Studio", color: "cyan" },
  { label: "Python", color: "green" },
  { label: "Microsoft Excel", color: "green" },
  { label: "Data Modelling", color: "green" },
  { label: "Exploratory Data Analysis", color: "green" },
  { label: "Power BI", color: "yellow" },
  // { label: "Customer Analytics", color: "yellow" },
  { label: "Descriptive Analysis", color: "yellow" },
  // { label: "Excel", color: "green" },
  // { label: "DAX", color: "yellow" },
  // { label: "Pandas", color: "green" },
];

const colorMap: Record<string, string> = {
  cyan: "border-cyan-500/50 text-cyan-400 bg-cyan-500/10 hover:bg-cyan-500/20 hover:border-cyan-400",
  green:
    "border-green-500/50 text-green-400 bg-green-500/10 hover:bg-green-500/20 hover:border-green-400",
  yellow:
    "border-yellow-500/50 text-yellow-400 bg-yellow-500/10 hover:bg-yellow-500/20 hover:border-yellow-400",
};

// ─── Main HeroSection ──────────────────────────────────────────────────────────
export function HeroSection() {
  const roles = [
    "Data Analyst",
    "SQL Enthusiast",
    "Database Management",
    "BI Engineer",
    "Python For Analyst",
  ];
  const typed = useTypewriter(roles);
  const [booted, setBooted] = useState(false);
  const [bootLines, setBootLines] = useState<string[]>([]);

  const bootSequence = [
    "> Initializing portfolio.exe...",
    "> Loading data modules... [OK]",
    "> Connecting to database... [OK]",
    "> Rendering analyst profile...",
  ];

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setBootLines((prev) => [...prev, bootSequence[i]]);
      i++;
      if (i >= bootSequence.length) {
        clearInterval(interval);
        setTimeout(() => setBooted(true), 400);
      }
    }, 340);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden bg-slate-950 font-mono">
      <TerminalGrid />

      {/* Boot screen overlay */}
      {!booted && (
        <motion.div
          className="absolute inset-0 z-50 bg-slate-950 flex flex-col items-start justify-center px-12 font-mono"
          animate={booted ? { opacity: 0 } : { opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-green-400 text-sm space-y-1">
            {bootLines.map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
              >
                {line}
              </motion.div>
            ))}
            <span className="inline-block w-2 h-4 bg-green-400 animate-pulse ml-1" />
          </div>
        </motion.div>
      )}

      {booted && (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 max-w-6xl w-full"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* ── LEFT ── */}
            <div>
              {/* Terminal prompt badge */}
              <motion.div variants={itemVariants} className="mb-5">
                <span className="text-xs font-mono text-green-400 bg-green-400/10 border border-green-400/30 px-3 py-1.5 rounded">
                  <span className="text-slate-500 mr-1">$</span> whoami
                </span>
              </motion.div>

              {/* Name */}
              <motion.h1
                variants={itemVariants}
                className="text-5xl md:text-6xl font-bold mb-3 text-slate-50 tracking-tight leading-none"
              >
                Faraj
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400">
                  Hafidh
                </span>
              </motion.h1>

              {/* Typewriter role */}
              <motion.div
                variants={itemVariants}
                className="flex items-center gap-2 mb-6 h-8"
              >
                <span className="text-slate-500 text-sm">~/role:</span>
                <span className="text-cyan-400 text-lg font-semibold tracking-wide">
                  {typed}
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.7, repeat: Infinity }}
                    className="inline-block w-0.5 h-5 bg-cyan-400 ml-0.5 align-middle"
                  />
                </span>
              </motion.div>

              {/* Description */}
              <motion.p
                variants={itemVariants}
                className="text-slate-400 text-sm leading-relaxed mb-8 max-w-md border-l-2 border-cyan-500/40 pl-4"
              >
                Transforming raw data into{" "}
                <span className="text-cyan-300">actionable insights</span> using
                SQL, Excel, Python, and modern BI tools. Turning numbers into
                decisions.
                <br />
                <span className="text-cyan-300">Help Me.</span>
                to get my first internship or fulltime as a data analyst and
                start my career in data analytics.
              </motion.p>

              {/* Stats row */}
              <motion.div
                variants={itemVariants}
                className="grid grid-cols-3 gap-4 mb-8 p-4 border border-slate-800 rounded bg-slate-900/50"
              >
                {[
                  { label: "datasets_analyzed", val: 10, suffix: "+" },
                  { label: "yrs_experience", val: 1, suffix: "", prefix: "" },
                  { label: "projects_shipped", val: 10, suffix: "+" },
                ].map((s) => (
                  <div key={s.label} className="text-center">
                    <div className="text-2xl font-bold text-cyan-400">
                      {s.prefix}
                      <Counter to={s.val} suffix={s.suffix} />
                    </div>
                    <div className="text-[10px] text-slate-500 mt-0.5 tracking-wider">
                      {s.label}
                    </div>
                  </div>
                ))}
              </motion.div>

              {/* CTA buttons */}
              <motion.div
                variants={itemVariants}
                className="flex gap-3 flex-wrap mb-8"
              >
                <Link href="#projects">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="px-6 py-2.5 rounded text-sm font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors duration-200 shadow-lg shadow-cyan-500/25"
                  >
                    ./view_projects
                  </motion.button>
                </Link>
                <a href="/Faraj Hafidh_Resume.pdf" download>
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="px-6 py-2.5 rounded text-sm font-semibold text-cyan-400 border border-cyan-500/50 hover:bg-cyan-500/10 transition-colors duration-200 flex items-center gap-2"
                  >
                    <svg
                      className="w-3.5 h-3.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
                      />
                    </svg>
                    download_cv.pdf
                  </motion.button>
                </a>
                <Link href="#contact">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="px-6 py-2.5 rounded text-sm font-semibold text-slate-400 border border-slate-700 hover:border-slate-500 hover:text-slate-200 transition-colors duration-200"
                  >
                    ./contact
                  </motion.button>
                </Link>
              </motion.div>

              {/* Social links */}
              <motion.div variants={itemVariants} className="flex gap-5">
                {[
                  {
                    label: "github",
                    href: "https://github.com/TachooDa",
                    icon: (
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    ),
                  },
                  {
                    label: "linkedin",
                    href: "https://www.linkedin.com/in/faraj-hafidh",
                    icon: (
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    ),
                  },
                  {
                    label: "email",
                    href: "mailto:faraj.hafidh@gmail.com",
                    icon: (
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    ),
                  },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target={s.label !== "email" ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="text-slate-500 hover:text-cyan-400 transition-colors duration-200"
                    aria-label={s.label}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      {s.icon}
                    </svg>
                  </a>
                ))}
              </motion.div>
            </div>

            {/* ── RIGHT ── */}
            <motion.div variants={itemVariants} className="flex flex-col gap-6">
              {/* Photo */}
              <div className="flex justify-center">
                <div className="relative w-48 h-48">
                  {/* Glow ring */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-500/30 to-green-500/30 blur-xl" />

                  {/* Rotating dashed border */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 12,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute inset-0 rounded-full border-2 border-dashed border-cyan-500/40"
                  />

                  {/* Photo frame */}
                  <div className="absolute inset-2 rounded-full border border-cyan-500/60 overflow-hidden bg-slate-900">
                    <img
                      src="/formal.png"
                      alt="Faraj Hafidh"
                      className="w-full h-full object-cover object-top opacity-90"
                    />
                    {/* Scanline overlay */}
                    <div
                      className="absolute inset-0 opacity-[0.06] pointer-events-none"
                      style={{
                        backgroundImage:
                          "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.8) 2px, rgba(0,0,0,0.8) 4px)",
                      }}
                    />
                  </div>

                  {/* Status badge */}
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-700 whitespace-nowrap">
                    <motion.div
                      animate={{ opacity: [1, 0.2, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="w-1.5 h-1.5 rounded-full bg-green-400"
                    />
                    <span className="text-[10px] font-mono text-green-400">
                      AVAILABLE_FOR_WORK
                    </span>
                  </div>
                </div>
              </div>
              {/* Terminal window */}
              <div className="rounded-lg border border-slate-700/80 bg-slate-900/80 overflow-hidden shadow-2xl shadow-cyan-500/5 backdrop-blur-sm">
                {/* Title bar */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-700/60 bg-slate-800/60">
                  <div className="w-3 h-3 rounded-full bg-red-500/70" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <div className="w-3 h-3 rounded-full bg-green-500/70" />
                  <span className="ml-3 text-xs text-slate-500 font-mono">
                    analyst@portfolio:~
                  </span>
                </div>

                {/* Terminal body */}
                <div className="p-5 font-mono text-sm space-y-2">
                  {[
                    {
                      prompt: "$",
                      cmd: "cat profile.json",
                      color: "text-slate-300",
                    },
                  ].map((line, i) => (
                    <div key={i} className="flex gap-2">
                      <span className="text-green-400">{line.prompt}</span>
                      <span className={line.color}>{line.cmd}</span>
                    </div>
                  ))}
                  <div className="text-slate-400 pl-4 border-l border-slate-700 space-y-1 pt-1">
                    <div>
                      <span className="text-cyan-400">"name"</span>
                      <span className="text-slate-500">: </span>
                      <span className="text-green-300">"Faraj Hafidh"</span>
                      <span className="text-slate-500">,</span>
                    </div>
                    <div>
                      <span className="text-cyan-400">"role"</span>
                      <span className="text-slate-500">: </span>
                      <span className="text-green-300">"Data Analyst"</span>
                      <span className="text-slate-500">,</span>
                    </div>
                    <div>
                      <span className="text-cyan-400">"status"</span>
                      <span className="text-slate-500">: </span>
                      <span className="text-yellow-300">
                        "available_for_work"
                      </span>
                      <span className="text-slate-500">,</span>
                    </div>
                    <div>
                      <span className="text-cyan-400">"location"</span>
                      <span className="text-slate-500">: </span>
                      <span className="text-green-300">"Indonesia"</span>
                    </div>
                    <div>
                      <span className="text-cyan-400">"Industry Interest"</span>
                      <span className="text-slate-500">: </span>
                      <span className="text-green-300">
                        "E-commerce, Fintech, Edtech"
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-2 pt-1">
                    <span className="text-green-400">$</span>
                    <motion.span
                      animate={{ opacity: [1, 0] }}
                      transition={{ duration: 0.8, repeat: Infinity }}
                      className="inline-block w-2 h-4 bg-green-400 align-middle"
                    />
                  </div>
                </div>
              </div>

              {/* Skill tags */}
              <div className="rounded-lg border border-slate-700/80 bg-slate-900/50 p-5">
                <div className="text-xs text-slate-500 mb-3 font-mono">
                  $ ls ./skills/
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, i) => (
                    <motion.span
                      key={skill.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.05 * i, duration: 0.3 }}
                      whileHover={{ scale: 1.08, y: -2 }}
                      className={`text-xs px-3 py-1.5 rounded border font-mono cursor-default transition-all duration-200 ${colorMap[skill.color]}`}
                    >
                      {skill.label}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mt-16 flex flex-col items-center gap-1 text-slate-600"
          >
            <span className="text-[10px] font-mono tracking-widest">
              SCROLL
            </span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
