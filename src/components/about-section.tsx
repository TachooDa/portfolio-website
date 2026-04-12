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
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -2, borderColor: "rgba(59, 130, 246, 0.3)" }}
      className="p-6 rounded-lg border border-slate-800 bg-slate-950/50 backdrop-blur-sm hover:border-blue-500/30 transition-all duration-300"
    >
      <div className="text-xs text-slate-500 uppercase tracking-widest mb-2">
        {label}
      </div>
      <div className="text-4xl font-bold text-slate-100 mb-1">
        {count}
        <span className="text-lg text-slate-500">{suffix}</span>
      </div>
    </motion.div>
  );
}

const whatIDo = [
  { icon: "📊", label: "Business Intelligence & Dashboards" },
  { icon: "🔍", label: "Exploratory Data Analysis" },
  { icon: "📈", label: "Statistical & Inferential Analysis" },
  { icon: "🎨", label: "Data Visualization" },
  { icon: "⚙️", label: "ETL (Extract Transform Load)" },
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 px-6 relative overflow-hidden bg-slate-950"
    >
      {/* Subtle gradient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-900/50 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-blue-500/30 rounded-full" />
            <span className="text-sm text-slate-400 uppercase tracking-widest">
              About
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-slate-50 tracking-tight mb-4">
            About Me
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
            A data analyst passionate about transforming complex datasets into
            clear, actionable insights that drive meaningful business decisions.
          </p>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
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

        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Journey card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="rounded-lg border border-slate-800 bg-slate-900/50 backdrop-blur-sm p-8 hover:border-slate-700 transition-all duration-300"
          >
            <h3 className="text-2xl font-bold text-slate-100 mb-6 flex items-center gap-3">
              <span className="text-2xl">🎯</span> My Journey
            </h3>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                Graduate in{" "}
                <span className="text-slate-300 font-medium">
                  Informatics Engineering
                </span>
                , with a deep specialization in data analytics. My early
                experience began with family business operations—managing
                customer relationships and inventory systems.
              </p>
              <p>
                Now dedicated to building{" "}
                <span className="text-slate-300 font-medium">
                  end-to-end analytics solutions
                </span>{" "}
                that transform raw data into clear business strategies. I
                believe in bridging the gap between technical complexity and
                business clarity.
              </p>
              <p>
                Driven by the mission to enable{" "}
                <span className="text-slate-300 font-medium">
                  data-driven decision-making
                </span>{" "}
                across organizations, creating tangible impact on growth and
                efficiency.
              </p>
            </div>
          </motion.div>

          {/* What I do card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="rounded-lg border border-slate-800 bg-slate-900/50 backdrop-blur-sm p-8 hover:border-slate-700 transition-all duration-300"
          >
            <h3 className="text-2xl font-bold text-slate-100 mb-6 flex items-center gap-3">
              <span className="text-2xl">💼</span> What I Do
            </h3>
            <div className="space-y-3">
              {whatIDo.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="flex items-center gap-4 p-3 rounded-lg bg-slate-800/30 hover:bg-slate-800/50 transition-colors duration-200 group cursor-pointer"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-slate-300 group-hover:text-slate-100 transition-colors duration-200">
                    {item.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Skills section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-lg border border-slate-800 bg-slate-900/50 backdrop-blur-sm p-8"
        >
          <h3 className="text-2xl font-bold text-slate-100 mb-8 flex items-center gap-3">
            <span className="text-2xl">🛠️</span> Skills & Tools
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="text-sm font-semibold text-slate-300 uppercase tracking-widest mb-4">
                Data Analysis
              </h4>
              <div className="space-y-2">
                {["Python", "SQL", "R", "Statistics"].map((skill) => (
                  <div key={skill} className="text-slate-400 text-sm">
                    • {skill}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-slate-300 uppercase tracking-widest mb-4">
                Visualization
              </h4>
              <div className="space-y-2">
                {["Power BI", "Tableau", "Matplotlib", "Plotly"].map(
                  (skill) => (
                    <div key={skill} className="text-slate-400 text-sm">
                      • {skill}
                    </div>
                  ),
                )}
              </div>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-slate-300 uppercase tracking-widest mb-4">
                Tools & Platforms
              </h4>
              <div className="space-y-2">
                {["Excel", "Google Analytics", "Git", "Jupyter"].map(
                  (skill) => (
                    <div key={skill} className="text-slate-400 text-sm">
                      • {skill}
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
//                 <motion.span
//                   animate={{ opacity: [1, 0] }}
//                   transition={{ duration: 0.8, repeat: Infinity, delay: 0.4 }}
//                   className="inline-block w-2 h-4 bg-green-400 align-middle"
//                 />
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }
