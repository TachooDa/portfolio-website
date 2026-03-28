"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface StatCardProps {
  value: number;
  label: string;
  suffix?: string;
  index: number;
}

function CountUpStat({ value, label, suffix = "", index }: StatCardProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!isVisible) return;
    const increment = value / 50;
    let current = 0;
    const interval = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(interval);
      } else {
        setCount(Math.floor(current));
      }
    }, 30);
    return () => clearInterval(interval);
  }, [isVisible, value]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      onViewportEnter={() => setIsVisible(true)}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -3 }}
      className="p-4 rounded border border-slate-700/80 bg-slate-900/60 hover:border-cyan-500/40 transition-all duration-300 font-mono group"
    >
      <div className="text-xs text-slate-600 mb-1 group-hover:text-slate-500 transition-colors">
        [{String(index).padStart(2, "0")}]
      </div>
      <div className="text-3xl font-bold text-cyan-400 mb-1">
        {count}
        {suffix}
      </div>
      <div className="text-xs text-slate-500 tracking-wider uppercase">
        {label.replace(/ /g, "_")}
      </div>
    </motion.div>
  );
}

const whatIDo = [
  { icon: "BI", label: "Business Intelligence & Dashboards", color: "cyan" },
  { icon: "EDA", label: "Exploratory Data Analysis", color: "green" },
  {
    icon: "STAT",
    label: "Statistical & Inferential Analysis",
    color: "yellow",
  },
  { icon: "VIZ", label: "Data Visualization", color: "cyan" },
  { icon: "ETL", label: "ETL (Extract Transform Load)", color: "green" },
];

const colorMap: Record<string, string> = {
  cyan: "border-cyan-500/40 text-cyan-400 bg-cyan-500/10",
  green: "border-green-500/40 text-green-400 bg-green-500/10",
  yellow: "border-yellow-500/40 text-yellow-400 bg-yellow-500/10",
};

export function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 px-6 relative overflow-hidden bg-slate-950 font-mono"
    >
      {/* Grid background — same as Hero */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #22d3ee 1px, transparent 1px),
              linear-gradient(to bottom, #22d3ee 1px, transparent 1px)
            `,
            backgroundSize: "48px 48px",
          }}
        />
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-cyan-500/4 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-56 h-56 bg-green-500/4 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-green-400 text-sm">$</span>
            <span className="text-slate-400 text-sm">cat about.md</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-50 tracking-tight">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400">
              Me
            </span>
          </h2>
          <div className="mt-3 h-px w-24 bg-gradient-to-r from-cyan-500/60 to-transparent" />
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
          <CountUpStat value={5} label="Main Projects" suffix="+" index={0} />
          <CountUpStat value={5} label="Dashboard Views" suffix="+" index={1} />
          <CountUpStat
            value={10}
            label="Projects Shipped"
            suffix="+"
            index={2}
          />
          <CountUpStat value={1} label="Years Experience" index={3} />
        </div>

        {/* Main content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Journey — terminal card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="rounded-lg border border-slate-700/80 bg-slate-900/60 overflow-hidden"
          >
            {/* Title bar */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-700/60 bg-slate-800/60">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
              <span className="ml-3 text-xs text-slate-500">journey.txt</span>
            </div>
            {/* Content */}
            <div className="p-5 space-y-4 text-sm">
              <div>
                <span className="text-green-400">$ </span>
                <span className="text-slate-400">head -n 1 journey.txt</span>
              </div>
              <div className="border-l-2 border-cyan-500/40 pl-4 space-y-3 text-slate-400 leading-relaxed">
                <p>
                  Graduate in{" "}
                  <span className="text-cyan-300">Informatics Engineering</span>
                  , start specializing in data analytics. Early experience with
                  family business — customer service & stock management.
                </p>
                <p>
                  Dedicated to building{" "}
                  <span className="text-green-300">
                    end-to-end analytics solutions
                  </span>{" "}
                  that transform complex datasets into clear, actionable
                  business strategies.
                </p>
                <p>
                  Focused on bridging the gap between raw data and{" "}
                  <span className="text-cyan-300">
                    data-driven decision-making
                  </span>
                  , driving growth across organizations.
                </p>
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
          </motion.div>

          {/* What I do */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="rounded-lg border border-slate-700/80 bg-slate-900/60 overflow-hidden"
          >
            {/* Title bar */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-700/60 bg-slate-800/60">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
              <span className="ml-3 text-xs text-slate-500">services.sh</span>
            </div>
            {/* Content */}
            <div className="p-5 space-y-3 text-sm">
              <div>
                <span className="text-green-400">$ </span>
                <span className="text-slate-400">ls ./what_i_do/</span>
              </div>
              <div className="space-y-2 pt-1">
                {whatIDo.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.07 }}
                    className="flex items-center gap-3 group"
                  >
                    <span
                      className={`text-[10px] px-2 py-0.5 rounded border font-mono shrink-0 ${colorMap[item.color]}`}
                    >
                      {item.icon}
                    </span>
                    <span className="text-slate-400 group-hover:text-slate-200 transition-colors duration-200">
                      {item.label}
                    </span>
                  </motion.div>
                ))}
              </div>
              <div className="flex gap-2 pt-2">
                <span className="text-green-400">$</span>
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity, delay: 0.4 }}
                  className="inline-block w-2 h-4 bg-green-400 align-middle"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
