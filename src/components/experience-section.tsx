"use client";

import { motion } from "framer-motion";

const skillsJourney = [
  {
    period: "2023",
    skill: "Data Analysis & SQL",
    icon: "📊",
    description:
      "Started learning SQL and fundamental data analysis concepts. Built first queries and understood database structures.",
    achievements: [
      "Completed SQL basics course",
      "Built first data queries",
      "Understood relational databases",
    ],
    color: "from-blue-500 to-cyan-500",
  },
  {
    period: "2024 Q1",
    skill: "Python & Data Processing",
    icon: "🐍",
    description:
      "Learned Python programming with focus on data manipulation using Pandas, NumPy, and data visualization libraries.",
    achievements: [
      "Mastered Pandas & NumPy",
      "Created data cleaning pipelines",
      "Built Python automation scripts",
    ],
    color: "from-purple-500 to-pink-500",
  },
  {
    period: "2024 Q2",
    skill: "Business Intelligence Tools",
    icon: "📈",
    description:
      "Developed expertise in Power BI and Tableau for creating interactive dashboards and data storytelling.",
    achievements: [
      "Built 5+ Power BI dashboards",
      "Learned advanced DAX formulas",
      "Created executive reports",
    ],
    color: "from-orange-500 to-red-500",
  },
  {
    period: "2024 Q3",
    skill: "Advanced Analytics",
    icon: "🎯",
    description:
      "Explored machine learning basics, statistical analysis, and predictive modeling for real-world datasets.",
    achievements: [
      "Learned ML fundamentals",
      "Built predictive models",
      "Performed A/B testing analysis",
    ],
    color: "from-emerald-500 to-teal-500",
  },
  {
    period: "2024 Q4",
    skill: "Excel & Advanced Techniques",
    icon: "📑",
    description:
      "Mastered advanced Excel techniques including Power Query, Power Pivot, and complex formula creation.",
    achievements: [
      "Mastered Power Query",
      "Created complex pivot tables",
      "Automated Excel workflows",
    ],
    color: "from-indigo-500 to-blue-500",
  },
];

export function ExperienceSection() {
  return (
    <section id="skills-journey" className="py-20 px-6 bg-slate-900/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-50">
            Skills Journey
          </h2>
          <p className="text-lg text-slate-400">
            My learning path and progression in data analytics and tech skills
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 md:transform md:-translate-x-1/2" />

          {/* Timeline items */}
          <div className="space-y-12">
            {skillsJourney.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`relative pl-8 md:pl-0 ${
                  index % 2 === 0
                    ? "md:mr-auto md:w-1/2 md:pr-12"
                    : "md:ml-auto md:w-1/2 md:pl-12"
                }`}
              >
                {/* Timeline dot with gradient */}
                <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full transform -translate-x-1.5 md:-translate-x-2 mt-2 border-2 border-slate-950" />

                {/* Card */}
                <motion.div
                  whileHover={{ y: -8 }}
                  className={`bg-gradient-to-br ${item.color}/10 to-slate-800/50 rounded-lg border border-slate-700 p-6 hover:border-blue-500/50 transition-all duration-300 backdrop-blur-sm`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-start gap-4">
                      <div className="text-3xl">{item.icon}</div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-50">
                          {item.skill}
                        </h3>
                        <p
                          className={`bg-gradient-to-r ${item.color} bg-clip-text text-transparent font-semibold`}
                        >
                          {item.period}
                        </p>
                      </div>
                    </div>
                  </div>

                  <p className="text-slate-300 mb-4 text-sm leading-relaxed">
                    {item.description}
                  </p>

                  {/* Achievements */}
                  <div className="space-y-2">
                    {item.achievements.map((achievement, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 text-sm text-slate-300"
                      >
                        <div
                          className={`w-2 h-2 rounded-full bg-gradient-to-r ${item.color}`}
                        />
                        {achievement}
                      </div>
                    ))}
                  </div>

                  {/* Progress indicator */}
                  <div className="mt-4 pt-4 border-t border-slate-700/50">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-slate-400">
                        Proficiency
                      </span>
                      <span className="text-xs text-slate-300 font-semibold">
                        {80 + index * 5}%
                      </span>
                    </div>
                    <div className="w-full bg-slate-700/30 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${80 + index * 5}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className={`h-full rounded-full bg-gradient-to-r ${item.color}`}
                      />
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
