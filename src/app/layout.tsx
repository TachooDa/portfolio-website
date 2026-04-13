import type { Metadata } from "next";
import { NavigationProvider } from "@/context/navigation-context";
import { Navbar } from "@/components/navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Faraj Hafidh - Data Analyst",
  description:
    "Portfolio of Faraj Hafidh, Data Analyst specializing in analytics solutions.",
  icons: {
    icon: "/profile.ico", // favicon utama
    shortcut: "/profile.ico", // shortcut icon
    apple: "/apple-touch-icon.png", // icon untuk iOS
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-slate-950 antialiased text-slate-50 min-h-screen">
        <NavigationProvider>
          <Navbar />
          <div className="pt-16 xl:pt-0 xl:ml-[260px]">{children}</div>
        </NavigationProvider>
      </body>
    </html>
  );
}
//       </body>
//     </html>
//   );
// }
