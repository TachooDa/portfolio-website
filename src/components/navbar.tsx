"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigation } from "@/context/navigation-context";

const navItems = [
  {
    label: "home",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2.25 12l8.954-8.954c.78-.78 2.05-.78 2.828 0l8.956 8.954m-17.414 0a2.25 2.25 0 00-1.414 2.06v12.002a1.5 1.5 0 001.97 1.414l2.423-1.102c.712-.323 1.518-.323 2.23 0l2.423 1.102c.712.324 1.518.323 2.23 0l2.423-1.102c.712-.323 1.518-.323 2.23 0l2.423 1.102c1.07.487 2.202-.652 1.97-1.414V4.25a2.25 2.25 0 00-1.5-2.06V3a.75.75 0 00-.75-.75H15a.75.75 0 00-.75.75v1.5H9V3.75A.75.75 0 008.25 3H4.5a.75.75 0 00-.75.75v.309z"
      />
    ),
  },
  {
    label: "about",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
      />
    ),
  },
  {
    label: "projects",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z"
      />
    ),
  },
  {
    label: "skills",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z"
      />
    ),
  },
  {
    label: "contact",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
      />
    ),
  },
];

export function Navbar() {
  const { activeView, setActiveView } = useNavigation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* ── Desktop Sidebar ── */}
      <motion.aside
        initial={{ x: -260, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="hidden xl:flex fixed left-0 top-0 h-screen w-[260px] z-50 flex-col py-8 bg-slate-950/95 backdrop-blur-xl border-r border-slate-800/60"
      >
        {/* ── Profile Section ── */}
        <div className="flex flex-col items-center gap-4 px-4 pb-8 border-b border-slate-800/60">
          {/* Photo with rotating border - Click to go home */}
          <button
            onClick={() => setActiveView("home")}
            className="relative group"
          >
            <div className="relative w-20 h-20">
              {/* Rotating dashed ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-0 rounded-full border-2 border-dashed border-blue-500/40 group-hover:border-blue-500/60 transition-colors"
              />
              {/* Photo frame */}
              <div className="absolute inset-1 rounded-full border border-blue-500/40 overflow-hidden bg-slate-900 group-hover:border-blue-500/60 transition-colors">
                <img
                  src="/formal.png"
                  alt="Faraj Hafidh"
                  className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 transition-opacity duration-200 cursor-pointer"
                />
              </div>
              {/* Status dot */}
              <motion.div
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-green-400 border-2 border-slate-950 z-10"
              />
            </div>
          </button>

          {/* Name */}
          <div className="text-center">
            <h3 className="text-slate-50 text-sm font-bold tracking-tight">
              Faraj Hafidh
            </h3>
            <p className="text-slate-500 text-xs mt-0.5">Data Analyst</p>
          </div>
        </div>

        {/* ── Nav Items ── */}
        <nav className="flex flex-col gap-1 px-3 py-6 flex-1">
          {navItems.map((item) => {
            const isActive = activeView === item.label;
            return (
              <button
                key={item.label}
                onClick={() => setActiveView(item.label)}
                className={`flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all duration-200 group border text-left w-full ${
                  isActive
                    ? "text-blue-400 bg-blue-500/10 border-blue-500/30"
                    : "text-slate-500 hover:text-blue-400 hover:bg-slate-800/30 border-transparent"
                }`}
              >
                <svg
                  className="w-4 h-4 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {item.icon}
                </svg>
                <span className="text-xs font-medium capitalize">
                  {item.label}
                </span>
                {isActive && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="ml-auto w-1.5 h-1.5 rounded-full bg-blue-400"
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* ── Bottom CTA ── */}
        <div className="px-3 pt-6 border-t border-slate-800/60 space-y-3">
          <button
            onClick={() => setActiveView("contact")}
            className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-lg border border-blue-500/40 bg-blue-500/10 text-blue-400 text-xs font-medium hover:bg-blue-500/20 hover:border-blue-400 transition-all duration-200"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
            Hire Me
          </button>

          {/* Status */}
          <div className="flex items-center justify-center gap-2 py-2">
            <motion.div
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-green-400"
            />
            <span className="text-[10px] text-green-400 font-medium">
              Available
            </span>
          </div>
        </div>
      </motion.aside>

      {/* ── Mobile Top Bar ── */}
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="xl:hidden fixed top-0 left-0 right-0 z-50 h-16 flex items-center justify-between px-6 bg-slate-950/95 backdrop-blur-xl border-b border-slate-800/60"
      >
        {/* ── Logo - Click to go home ── */}
        <button
          onClick={() => {
            setActiveView("home");
            setMobileOpen(false);
          }}
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <div className="relative w-10 h-10">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-0 rounded-full border-2 border-dashed border-blue-500/40"
            />
            <div className="absolute inset-0.5 rounded-full border border-blue-500/40 overflow-hidden bg-slate-900">
              <img
                src="/formal.png"
                alt="Faraj Hafidh"
                className="w-full h-full object-cover object-top opacity-90"
              />
            </div>
            <motion.div
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-green-400 border border-slate-950 z-10"
            />
          </div>
          <span className="text-slate-50 font-bold text-sm">Faraj Hafidh</span>
        </button>

        {/* ── Hamburger Menu ── */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex flex-col gap-1.5 p-2 group"
          aria-label="Toggle menu"
        >
          <motion.span
            animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.2 }}
            className="block w-5 h-px bg-slate-400 group-hover:bg-blue-400 transition-colors origin-center"
          />
          <motion.span
            animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="block w-5 h-px bg-slate-400 group-hover:bg-blue-400 transition-colors"
          />
          <motion.span
            animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.2 }}
            className="block w-5 h-px bg-slate-400 group-hover:bg-blue-400 transition-colors origin-center"
          />
        </button>
      </motion.nav>

      {/* ── Mobile Dropdown ── */}
      <motion.div
        initial={false}
        animate={
          mobileOpen
            ? { opacity: 1, height: "auto" }
            : { opacity: 0, height: 0 }
        }
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="xl:hidden fixed top-16 left-0 right-0 z-40 overflow-hidden bg-slate-950/95 backdrop-blur-xl border-b border-slate-800/60"
      >
        <div className="px-6 py-4 flex flex-col gap-2">
          {navItems.map((item, i) => (
            <motion.button
              key={item.label}
              onClick={() => {
                setActiveView(item.label);
                setMobileOpen(false);
              }}
              initial={{ opacity: 0, x: -10 }}
              animate={
                mobileOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }
              }
              transition={{ duration: 0.2, delay: i * 0.05 }}
              className="flex items-center gap-3 px-4 py-2.5 text-sm text-slate-500 hover:text-blue-400 rounded-lg hover:bg-slate-800/40 transition-all duration-200 group w-full text-left"
            >
              <svg
                className="w-4 h-4 shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {item.icon}
              </svg>
              <span className="capitalize font-medium">{item.label}</span>
            </motion.button>
          ))}
          <button
            onClick={() => {
              setActiveView("contact");
              setMobileOpen(false);
            }}
            className="mt-2 py-2.5 px-4 text-sm text-blue-400 border border-blue-500/40 rounded-lg hover:bg-blue-500/10 transition-all duration-200 w-full"
          >
            Hire Me
          </button>
        </div>
      </motion.div>
    </>
  );
}
