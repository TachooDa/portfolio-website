import { Navbar, MainContent } from "@/components";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 pt-14 md:pt-0 md:pl-[260px]">
      <Navbar />
      <MainContent />
    </div>
  );
}
