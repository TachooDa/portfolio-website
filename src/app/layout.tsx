import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Data Analyst Portfolio | Faraj Hafidh",
  description: "Professional portfolio of Faraj Hafidh ...",
  icons: {
    icon: "/profile.ico", // tab browser
    shortcut: "/profile.ico",
    apple: "/apple-touch-icon.png", // iOS home screen
  },
  openGraph: {
    title: "Data Analyst Portfolio | Faraj Hafidh",
    description: "Showcasing data analysis projects and expertise",
    type: "website",
    images: [
      {
        url: "/profile.png", // preview saat share di sosmed/WhatsApp
        width: 1200,
        height: 630,
        alt: "Faraj Hafidh - Data Analyst Portfolio",
      },
    ],
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-950 text-slate-50`}
      >
        {children}
      </body>
    </html>
  );
}
