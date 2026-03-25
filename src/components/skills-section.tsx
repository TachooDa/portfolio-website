"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    category: "Languages & Tools",
    file: "languages.sh",
    icon: "LANG",
    color: "cyan",
    skills: [
      { name: "Python", level: 80 },
      { name: "SQL", level: 90 },
      { name: "Excel", level: 85 },
    ],
  },
  {
    category: "BI & Visualization",
    file: "bi_tools.sh",
    icon: "VIZ",
    color: "yellow",
    skills: [
      { name: "Power BI", level: 88 },
      { name: "Tableau", level: 78 },
      { name: "Looker", level: 70 },
      { name: "Plotly", level: 75 },
      { name: "Matplotlib", level: 80 },
    ],
  },
  {
    category: "Libraries & Frameworks",
    file: "libraries.sh",
    icon: "LIB",
    color: "green",
    skills: [
      { name: "Pandas", level: 75 },
      { name: "NumPy", level: 75 },
    ],
  },
  {
    category: "Cloud & Databases",
    file: "databases.sh",
    icon: "DB",
    color: "yellow",
    skills: [
      { name: "PostgreSQL", level: 85 },
      { name: "BigQuery", level: 72 },
      { name: "MySQL", level: 80 },
    ],
  },
];

const colorMap: Record<string, { bar: string; badge: string; text: string }> = {
  cyan: {
    bar: "bg-cyan-400",
    badge: "border-cyan-500/40 text-cyan-400 bg-cyan-500/10",
    text: "text-cyan-400",
  },
  green: {
    bar: "bg-green-400",
    badge: "border-green-500/40 text-green-400 bg-green-500/10",
    text: "text-green-400",
  },
  yellow: {
    bar: "bg-yellow-400",
    badge: "border-yellow-500/40 text-yellow-400 bg-yellow-500/10",
    text: "text-yellow-400",
  },
};

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="py-20 px-6 relative overflow-hidden bg-slate-950 font-mono"
    >
      {/* Grid background */}
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
        <div className="absolute top-1/3 right-1/3 w-80 h-80 bg-cyan-500/4 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-yellow-500/4 rounded-full blur-3xl" />
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
            <span className="text-slate-400 text-sm">cat skills.json | jq</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-50 tracking-tight">
            Skills &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400">
              Technologies
            </span>
          </h2>
          <div className="mt-3 h-px w-24 bg-gradient-to-r from-cyan-500/60 to-transparent" />
          <p className="mt-4 text-sm text-slate-500">
            // toolkit for data analysis, visualization & insights generation
          </p>
        </motion.div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {skillCategories.map((cat, catIdx) => {
            const c = colorMap[cat.color];
            return (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: catIdx * 0.08 }}
                className="rounded-lg border border-slate-700/80 bg-slate-900/60 overflow-hidden hover:border-cyan-500/30 transition-all duration-300 group"
              >
                {/* Terminal title bar */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-700/60 bg-slate-800/60">
                  <div className="w-2 h-2 rounded-full bg-red-500/70" />
                  <div className="w-2 h-2 rounded-full bg-yellow-500/70" />
                  <div className="w-2 h-2 rounded-full bg-green-500/70" />
                  <span className="ml-2 text-[10px] text-slate-500 truncate">
                    {cat.file}
                  </span>
                </div>

                {/* Card content */}
                <div className="p-4 space-y-4">
                  {/* Category label */}
                  <div className="flex items-center gap-2">
                    <span
                      className={`text-[10px] px-2 py-0.5 rounded border font-mono ${c.badge}`}
                    >
                      {cat.icon}
                    </span>
                    <span className="text-xs text-slate-400 truncate">
                      {cat.category}
                    </span>
                  </div>

                  {/* Skill bars */}
                  <div className="space-y-3">
                    {cat.skills.map((skill, skillIdx) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.4,
                          delay: catIdx * 0.08 + skillIdx * 0.06,
                        }}
                        className="space-y-1"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-slate-400 group-hover:text-slate-300 transition-colors">
                            {skill.name}
                          </span>
                          <span className={`text-[10px] ${c.text}`}>
                            {skill.level}%
                          </span>
                        </div>
                        {/* Progress bar */}
                        <div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{
                              duration: 0.8,
                              delay: catIdx * 0.08 + skillIdx * 0.06,
                              ease: "easeOut",
                            }}
                            className={`h-full rounded-full ${c.bar} opacity-80`}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Blinking cursor */}
                  <div className="flex items-center gap-1.5 pt-1">
                    <span className="text-green-400 text-xs">$</span>
                    <motion.span
                      animate={{ opacity: [1, 0] }}
                      transition={{
                        duration: 0.8,
                        repeat: Infinity,
                        delay: catIdx * 0.2,
                      }}
                      className="inline-block w-1.5 h-3 bg-green-400"
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Footer prompt */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex items-center gap-3 text-xs text-slate-600"
        >
          <span className="text-green-400">$</span>
          <span>skills.length</span>
          <span className="text-cyan-400">→</span>
          <span className="text-slate-400">
            {skillCategories.reduce((acc, c) => acc + c.skills.length, 0)} tools
            mastered
          </span>
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            className="inline-block w-1.5 h-3.5 bg-green-400"
          />
        </motion.div>
      </div>
    </section>
  );
}
