import type { Metadata } from "next";
import { NavigationProvider } from "@/context/navigation-context";
import { Navbar } from "@/components/navbar";
import { MainContent } from "@/components/main-content";
import "./globals.css";

export const metadata: Metadata = {
  title: "Faraj Hafidh - Data Analyst",
  description:
    "Portfolio of Faraj Hafidh, Data Analyst specializing in analytics solutions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-slate-950 antialiased text-slate-50">
        <NavigationProvider>
          <Navbar />
          <MainContent />
        </NavigationProvider>
      </body>
    </html>
  );
}
