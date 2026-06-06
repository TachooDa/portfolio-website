"use client";

import { motion } from "framer-motion";

const skills = [
  {
    name: "Excel",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" aria-hidden>
        <rect x="2" y="3" width="20" height="18" rx="2" fill="currentColor" />
        <path
          d="M7 7h10M7 12h10M7 17h10"
          stroke="#0ea5e9"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    ),
  },
  {
    name: "SQL",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" aria-hidden>
        <ellipse cx="12" cy="6" rx="7" ry="3" fill="currentColor" />
        <path
          d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6"
          stroke="#34d399"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    ),
  },
  {
    name: "Power BI",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" aria-hidden>
        <rect x="3" y="6" width="4" height="12" rx="1" fill="currentColor" />
        <rect x="9" y="9" width="3" height="9" rx="1" fill="currentColor" />
        <rect x="14" y="4" width="3" height="14" rx="1" fill="currentColor" />
        <rect x="19" y="12" width="2" height="6" rx="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "Python",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" aria-hidden>
        <path d="M7 3h10v4H9v2H7V3zM17 21H7v-4h8v-2h2v6z" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "Tableau",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" aria-hidden>
        <circle cx="6" cy="6" r="1.4" fill="currentColor" />
        <circle cx="6" cy="10.5" r="1.4" fill="currentColor" />
        <circle cx="6" cy="15" r="1.4" fill="currentColor" />
        <rect
          x="9"
          y="5"
          width="1.6"
          height="10"
          rx="0.4"
          fill="currentColor"
        />
        <rect
          x="12"
          y="3"
          width="1.6"
          height="12"
          rx="0.4"
          fill="currentColor"
        />
        <rect
          x="15"
          y="7"
          width="1.6"
          height="8"
          rx="0.4"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    name: "Power Query",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" aria-hidden>
        <path
          d="M4 7h16M4 12h10M4 17h7"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    ),
  },
];

export function SkillsSection() {
  // compute simple summary from the skills array to avoid undefined identifiers
  const totalSkills = skills.length;

  return (
    <section id="skills" className="py-24 px-6 bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-blue-500/30 rounded-full" />
            <span className="text-sm text-slate-400 uppercase tracking-widest">
              Skills
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-50 tracking-tight mb-2">
            Tooling & Expertise
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
            Practical tools and platforms used to deliver analyses,
            visualizations, and reports.
          </p>
        </motion.div>

        {/* Icon grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
          {skills.map((s) => (
            <motion.button
              key={s.name}
              role="button"
              aria-label={s.name}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              className="flex flex-col items-center gap-2 p-3 rounded-lg bg-slate-900/50 border border-slate-800 hover:bg-slate-900/70 transition-colors"
            >
              <div className="text-slate-100 flex items-center justify-center w-12 h-12 rounded-md bg-slate-800/60">
                <div className="text-current">{s.icon}</div>
              </div>
              <span className="text-xs text-slate-300 font-medium">
                {s.name}
              </span>
            </motion.button>
          ))}
        </div>

        {/* Improved explanatory copy */}
        <p className="mt-6 text-sm text-slate-300 max-w-2xl leading-relaxed">
          Tools I actually use day-to-day — not just listed for the sake of it.
          Each one has been put to work across real projects, from wrangling
          messy datasets to building dashboards that (hopefully) make sense at
          first glance.
        </p>

        {/* simple summary (optional) */}
        <div className="mt-8">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="inline-flex items-center gap-4 text-sm text-slate-400"
          >
            <div>
              Total skills:
              <span className="text-slate-100 font-medium ml-2">
                {totalSkills}
              </span>
            </div>
          </motion.div>
        </div>
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
