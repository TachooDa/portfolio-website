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
    title: "Patient Visit Analysis (Analyst Builder Project)",
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
  "Microsoft Excel": "bg-slate-800 text-slate-300 hover:bg-slate-700",
  "Power Query": "bg-slate-800 text-slate-300 hover:bg-slate-700",
  "Power Pivot": "bg-slate-800 text-slate-300 hover:bg-slate-700",
  PostgreSQL: "bg-slate-800 text-slate-300 hover:bg-slate-700",
  "Power BI": "bg-slate-800 text-slate-300 hover:bg-slate-700",
  Python: "bg-slate-800 text-slate-300 hover:bg-slate-700",
  SQL: "bg-slate-800 text-slate-300 hover:bg-slate-700",
  Tableau: "bg-slate-800 text-slate-300 hover:bg-slate-700",
  MySQL: "bg-slate-800 text-slate-300 hover:bg-slate-700",
  Excel: "bg-slate-800 text-slate-300 hover:bg-slate-700",
  DAX: "bg-slate-800 text-slate-300 hover:bg-slate-700",
};

function getTagColor(tag: string) {
  return tagColorMap[tag] ?? "bg-slate-800 text-slate-300 hover:bg-slate-700";
}

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="py-32 px-6 relative overflow-hidden bg-slate-950"
    >
      {/* Subtle gradient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-slate-900/50 rounded-full blur-3xl" />
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
              Projects
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-slate-50 tracking-tight mb-4">
            Featured Work
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
            A selection of data analytics and business intelligence projects
            showcasing end-to-end analysis, visualization, and actionable
            insights.
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {projects.map((project, i) => (
            <motion.a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="group rounded-lg border border-slate-800 bg-slate-900/50 backdrop-blur-sm overflow-hidden hover:border-slate-700 transition-all duration-300 flex flex-col"
            >
              {/* Image container */}
              <div className="relative h-56 overflow-hidden bg-slate-800/60">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-75 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />

                {/* Index badge */}
                <div className="absolute top-4 left-4 text-xs font-semibold text-slate-500 group-hover:text-slate-300 transition-colors">
                  {project.index}
                </div>

                {/* External link indicator */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg
                    className="w-5 h-5 text-slate-400 group-hover:text-slate-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4m-4-6l6-6m0 0l-6 6"
                    />
                  </svg>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Title */}
                <h3 className="text-lg font-bold text-slate-100 mb-3 group-hover:text-slate-50 transition-colors duration-200 leading-snug line-clamp-2">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-400 leading-relaxed mb-5 line-clamp-3 flex-grow">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`text-xs px-3 py-1 rounded-full border border-slate-700 transition-all duration-200 ${getTagColor(
                        tag,
                      )}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="flex items-center gap-2 text-sm text-slate-400 group-hover:text-slate-200 transition-colors duration-200">
                  <span>View on GitHub</span>
                  <svg
                    className="w-4 h-4 -translate-x-1 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-all duration-200"
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
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* View all projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center"
        >
          <a
            href="https://github.com/TachooDa"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-slate-800 bg-slate-900/50 hover:bg-slate-800/50 hover:border-slate-700 text-slate-300 hover:text-slate-100 transition-all duration-300 group"
          >
            <span>View All Projects</span>
            <svg
              className="w-4 h-4 -translate-x-1 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-all duration-200"
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
        </motion.div>
      </div>
    </section>
  );
}
