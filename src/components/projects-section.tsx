"use client";

import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "FNP (Ferns & Petals) Sales & Revenue Analysis",
    description:
      "An analysis of 1,000 orders and $3.5 million in revenue across 7 product categories revealed seasonal revenue dominance with 80% concentration in peak months.",
    tags: ["Microsoft Excel", "Power Query", "Power Pivot"],
    link: "https://github.com/TachooDa/fnp_analysis",
    image: "/fnp.png",
    index: "01",
  },
  {
    id: 2,
    title: "Customer Segmentation & Retention Analysis",
    description:
      "Actionable business insights combining Cohort Retention Analysis and RFM Customer Segmentation to understand when customers churn and which are worth retaining.",
    tags: ["PostgreSQL", "Microsoft Excel", "Power BI"],
    link: "https://github.com/TachooDa/Customer-Segmentation-Analysis",
    image: "/sql_1.png",
    index: "02",
  },
  {
    id: 3,
    title: "Walmart Branch Sales Performance Analysis",
    description:
      "Analysis of Walmart's 2019–2023 performance showing falling sales and AOV, strong Q4 seasonality, and heavy revenue concentration in key categories and DFW region.",
    tags: ["Python", "SQL", "Tableau"],
    link: "https://github.com/TachooDa/walmart-sales-performance-analysis",
    image: "/wm_3.jpeg",
    index: "03",
  },
  {
    id: 4,
    title: "Patient Visit Analysis",
    description:
      "Explores patient visits, diagnosis trends, and visit utilization using a healthcare dataset to identify patterns in diagnoses and healthcare usage.",
    tags: ["MySQL", "Power BI", "Excel"],
    link: "https://github.com/TachooDa/patien-visits-analysis",
    image: "/sql_2_p.png",
    index: "04",
  },
  {
    id: 5,
    title: "Uber Ride Hailing Analysis",
    description:
      "Deep dive into Uber ride-hailing data to uncover demand patterns, peak hours, geographic trends, and pricing behavior across 2024 dataset.",
    tags: ["Python", "PostgreSQL", "Power BI"],
    link: "https://github.com/TachooDa/Uber-Ride-Data-Analytics-Dataset-2024",
    image: "/ubert_viz.png",
    index: "05",
  },
  {
    id: 6,
    title: "Warehouse & Retail Sales Analysis",
    description:
      "Exploratory analysis of retail and beverage warehouse sales from 2017–2020, answering six key business questions through SQL-driven data cleaning and analysis.",
    tags: ["PostgreSQL", "Power BI", "Microsoft Excel"],
    link: "https://github.com/TachooDa/warehouse_retail_sales_analytics",
    image: "/warehouse.png",
    index: "06",
  },
];

const tagColorMap: Record<string, string> = {
  "Microsoft Excel": "border-green-500/40 text-green-400 bg-green-500/10",
  "Power Query": "border-cyan-500/40 text-cyan-400 bg-cyan-500/10",
  "Power Pivot": "border-cyan-500/40 text-cyan-400 bg-cyan-500/10",
  PostgreSQL: "border-cyan-500/40 text-cyan-400 bg-cyan-500/10",
  "Power BI": "border-yellow-500/40 text-yellow-400 bg-yellow-500/10",
  Python: "border-green-500/40 text-green-400 bg-green-500/10",
  SQL: "border-cyan-500/40 text-cyan-400 bg-cyan-500/10",
  Tableau: "border-yellow-500/40 text-yellow-400 bg-yellow-500/10",
  MySQL: "border-cyan-500/40 text-cyan-400 bg-cyan-500/10",
  Excel: "border-green-500/40 text-green-400 bg-green-500/10",
  DAX: "border-yellow-500/40 text-yellow-400 bg-yellow-500/10",
};

function getTagColor(tag: string) {
  return (
    tagColorMap[tag] ?? "border-slate-500/40 text-slate-400 bg-slate-500/10"
  );
}

export function ProjectsSection() {
  return (
    <section
      id="projects"
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
        <div className="absolute top-1/4 left-1/3 w-80 h-80 bg-cyan-500/4 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-green-500/4 rounded-full blur-3xl" />
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
            <span className="text-slate-400 text-sm">
              ls ./projects/ --sort=impact
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-50 tracking-tight">
            Featured{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400">
              Projects
            </span>
          </h2>
          <div className="mt-3 h-px w-24 bg-gradient-to-r from-cyan-500/60 to-transparent" />
          <p className="mt-4 text-sm text-slate-500">
            // {projects.length} projects · data analysis · business
            intelligence
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="group rounded-lg border border-slate-700/80 bg-slate-900/60 overflow-hidden hover:border-cyan-500/40 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden bg-slate-800/60">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />
                {/* Scanline overlay */}
                <div
                  className="absolute inset-0 opacity-[0.05] pointer-events-none"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,1) 2px, rgba(0,0,0,1) 4px)",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent" />

                {/* Index badge */}
                <div className="absolute top-3 left-3 text-xs text-slate-600 bg-slate-950/80 border border-slate-700/60 px-2 py-0.5 rounded">
                  [{project.index}]
                </div>

                {/* Hover: view on github label */}
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-[10px] text-cyan-400 bg-slate-950/90 border border-cyan-500/30 px-2 py-0.5 rounded">
                    github ↗
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                {/* Title bar */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="text-sm font-bold text-slate-100 leading-snug group-hover:text-cyan-300 transition-colors duration-200 line-clamp-2">
                    {project.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-xs text-slate-500 leading-relaxed mb-4 line-clamp-2 border-l border-slate-700/80 pl-3">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`text-[10px] px-2 py-0.5 rounded border font-mono ${getTagColor(tag)}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between w-full py-2 px-3 rounded border border-slate-700/60 hover:border-cyan-500/50 hover:bg-cyan-500/5 text-slate-500 hover:text-cyan-400 transition-all duration-200 group/link text-xs"
                >
                  <span>
                    <span className="text-green-400">$</span> open ./project_
                    {project.index}
                  </span>
                  <svg
                    className="w-3.5 h-3.5 -translate-x-1 group-hover/link:translate-x-0 opacity-0 group-hover/link:opacity-100 transition-all duration-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer prompt */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex items-center gap-3 text-xs text-slate-600"
        >
          <span className="text-green-400">$</span>
          <span>more projects at</span>
          <a
            href="https://github.com/TachooDa"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-500 hover:text-cyan-300 transition-colors underline underline-offset-2"
          >
            github.com/TachooDa
          </a>
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
