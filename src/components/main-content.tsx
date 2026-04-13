"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useNavigation } from "@/context/navigation-context";
import { HeroSection } from "./hero-section";
import { AboutSection } from "./about-section";
import { ProjectsSection } from "./projects-section";
import { SkillsSection } from "./skills-section";
import { ContactSection } from "./contact-section";

const views = {
  hero: HeroSection,
  about: AboutSection,
  projects: ProjectsSection,
  skills: SkillsSection,
  contact: ContactSection,
};

export function MainContent() {
  const { activeView } = useNavigation();

  const CurrentView = views[activeView as keyof typeof views] || HeroSection;

  return (
    <main>
      <AnimatePresence mode="wait">
        <motion.div
          key={activeView}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <CurrentView />
        </motion.div>
      </AnimatePresence>
    </main>
  );
}
