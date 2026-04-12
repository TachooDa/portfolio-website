"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    category: "Languages & Tools",
    icon: "🐍",
    skills: [
      { name: "Python", level: 80 },
      { name: "SQL", level: 90 },
      { name: "Excel", level: 85 },
    ],
  },
  {
    category: "BI & Visualization",
    icon: "📊",
    skills: [
      { name: "Power BI", level: 90 },
      { name: "Tableau", level: 80 },
      { name: "Looker", level: 75 },
      { name: "Seaborn", level: 75 },
      { name: "Matplotlib", level: 75 },
    ],
  },
  {
    category: "Libraries & Frameworks",
    icon: "📦",
    skills: [
      { name: "Pandas", level: 75 },
      { name: "NumPy", level: 75 },
    ],
  },
  {
    category: "Cloud & Databases",
    icon: "🗄️",
    skills: [
      { name: "PostgreSQL", level: 90 },
      { name: "BigQuery", level: 75 },
      { name: "MySQL", level: 90 },
    ],
  },
];

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="py-20 px-6 relative overflow-hidden bg-slate-950"
    >
      {/* Subtle gradient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-slate-900/50 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-blue-500/30 rounded-full" />
            <span className="text-sm text-slate-400 uppercase tracking-widest">
              Skills
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-slate-50 tracking-tight mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
            A comprehensive toolkit of programming languages, visualization
            platforms, libraries, and databases that power my analytics
            solutions.
          </p>
        </motion.div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((cat, catIdx) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              className="rounded-lg border border-slate-800 bg-slate-900/50 backdrop-blur-sm p-6 hover:border-slate-700 transition-all duration-300 group"
            >
              {/* Category header */}
              <div className="flex items-start gap-3 mb-6">
                <span className="text-2xl">{cat.icon}</span>
                <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-widest leading-tight">
                  {cat.category}
                </h3>
              </div>

              {/* Skills list */}
              <div className="space-y-4">
                {cat.skills.map((skill, skillIdx) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: catIdx * 0.1 + skillIdx * 0.05,
                    }}
                    className="space-y-1.5"
                  >
                    {/* Skill name and level */}
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-400 group-hover:text-slate-300 transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-xs text-slate-500 font-medium">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress bar */}
                    <div className="h-1.5 w-full bg-slate-800/50 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{
                          duration: 1,
                          delay: catIdx * 0.1 + skillIdx * 0.05,
                          ease: "easeOut",
                        }}
                        className="h-full rounded-full bg-gradient-to-r from-blue-500 to-blue-400 opacity-80"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 rounded-lg border border-slate-800 bg-slate-900/50 backdrop-blur-sm p-6"
        >
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <p className="text-sm text-slate-500 mb-1">Total Skills</p>
              <p className="text-3xl font-bold text-slate-100">
                {skillCategories.reduce((acc, c) => acc + c.skills.length, 0)}
              </p>
            </div>
            <div className="hidden sm:block w-px h-12 bg-slate-800" />
            <div>
              <p className="text-sm text-slate-500 mb-1">Categories</p>
              <p className="text-3xl font-bold text-slate-100">
                {skillCategories.length}
              </p>
            </div>
            <div className="hidden sm:block w-px h-12 bg-slate-800" />
            <div>
              <p className="text-sm text-slate-500 mb-1">Expertise</p>
              <p className="text-3xl font-bold text-slate-100">
                {Math.round(
                  skillCategories.reduce(
                    (acc, c) =>
                      acc + c.skills.reduce((s, sk) => s + sk.level, 0),
                    0,
                  ) /
                    skillCategories.reduce(
                      (acc, c) => acc + c.skills.length,
                      0,
                    ),
                )}
                %
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
//                   {/* Blinking cursor */}
//                   <div className="flex items-center gap-1.5 pt-1">
//                     <span className="text-green-400 text-xs">$</span>
//                     <motion.span
//                       animate={{ opacity: [1, 0] }}
//                       transition={{
//                         duration: 0.8,
//                         repeat: Infinity,
//                         delay: catIdx * 0.2,
//                       }}
//                       className="inline-block w-1.5 h-3 bg-green-400"
//                     />
//                   </div>
//                 </div>
//               </motion.div>
//             );
//           })}
//         </div>
