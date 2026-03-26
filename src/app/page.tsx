import {
  Navbar,
  HeroSection,
  AboutSection,
  ProjectsSection,
  SkillsSection,
  ContactSection,
  Footer,
} from "@/components";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 pt-14 md:pt-0 md:pl-[200px]">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
