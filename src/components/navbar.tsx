"use client";

import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

const navItems = [
  {
    label: "about",
    href: "#about",
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
    href: "#projects",
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
    href: "#skills",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z"
      />
    ),
  },
  // {
  //   label: "experience",
  //   href: "#experience",
  //   icon: (
  //     <path
  //       strokeLinecap="round"
  //       strokeLinejoin="round"
  //       strokeWidth={1.5}
  //       d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0"
  //     />
  //   ),
  // },
  {
    label: "contact",
    href: "#contact",
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
  const [activeItem, setActiveItem] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", () => {
    const sections = navItems.map((n) => n.href.replace("#", ""));
    for (const id of [...sections].reverse()) {
      const el = document.getElementById(id);
      if (el && window.scrollY >= el.offsetTop - 120) {
        setActiveItem(id);
        break;
      }
    }
  });

  return (
    <>
      {/* ── Desktop sidebar (200px) ── */}
      <motion.aside
        initial={{ x: -220, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="hidden md:flex fixed left-0 top-0 h-screen w-[200px] z-50 flex-col py-6 bg-slate-950/90 backdrop-blur-xl border-r border-slate-800/60 font-mono"
      >
        {/* ── Profile section ── */}
        <div className="flex flex-col items-center gap-3 px-4 pb-6 border-b border-slate-800/60">
          {/* Photo */}
          <Link href="/" className="relative group">
            <div className="relative w-16 h-16">
              {/* Rotating dashed ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border border-dashed border-cyan-500/40"
              />
              {/* Photo frame */}
              <div className="absolute inset-1 rounded-full border border-cyan-500/30 overflow-hidden bg-slate-900">
                <img
                  src="/profile.png"
                  alt="Faraj Hafidh"
                  className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 transition-opacity duration-200"
                />
              </div>
              {/* Status dot */}
              <motion.div
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="absolute bottom-0.5 right-0.5 w-2.5 h-2.5 rounded-full bg-green-400 border-2 border-slate-950 z-10"
              />
            </div>
          </Link>

          {/* Name */}
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 mb-0.5">
              <span className="text-green-400 text-xs">~/</span>
              <span className="text-slate-50 text-sm font-bold tracking-tight">
                faraj-hafidh
              </span>
            </div>
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="inline-block w-1.5 h-3 bg-cyan-400"
            />
          </div>
        </div>

        {/* ── Nav prompt ── */}
        <div className="px-4 pt-5 pb-2">
          <span className="text-[10px] text-slate-600">
            <span className="text-green-400">$</span> ls ./navigation/
          </span>
        </div>

        {/* ── Nav items ── */}
        <nav className="flex flex-col gap-0.5 px-3 flex-1">
          {navItems.map((item) => {
            const isActive = activeItem === item.label;
            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setActiveItem(item.label)}
                className={`flex items-center gap-3 px-3 py-2.5 rounded transition-all duration-200 group border ${
                  isActive
                    ? "text-cyan-400 bg-cyan-500/10 border-cyan-500/30"
                    : "text-slate-500 hover:text-cyan-400 hover:bg-slate-800/50 border-transparent"
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
                <span className="text-xs">
                  <span
                    className={`transition-colors ${isActive ? "text-cyan-700" : "text-slate-700 group-hover:text-cyan-700"}`}
                  >
                    ./
                  </span>
                  {item.label}
                </span>
                {/* Active indicator */}
                {isActive && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="ml-auto w-1 h-1 rounded-full bg-cyan-400"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* ── Bottom ── */}
        <div className="px-3 pt-4 border-t border-slate-800/60 flex flex-col gap-2">
          {/* Hire me */}
          <a
            href="#contact"
            className="flex items-center justify-center gap-2 w-full py-2 px-3 rounded border border-cyan-500/40 text-cyan-400 text-xs hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-200"
          >
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
              />
            </svg>
            [hire_me]
          </a>

          {/* Status */}
          <div className="flex items-center justify-center gap-2 py-1.5">
            <motion.div
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-green-400"
            />
            <span className="text-[10px] text-green-400">
              AVAILABLE_FOR_WORK
            </span>
          </div>
        </div>
      </motion.aside>

      {/* ── Mobile top bar ── */}
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="md:hidden fixed top-0 left-0 right-0 z-50 h-14 flex items-center justify-between px-5 bg-slate-950/90 backdrop-blur-xl border-b border-slate-800/60 font-mono"
      >
        {/* Mobile logo with photo */}
        <Link href="/" className="flex items-center gap-2.5">
          <div className="relative w-8 h-8">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border border-dashed border-cyan-500/40"
            />
            <div className="absolute inset-0.5 rounded-full border border-cyan-500/30 overflow-hidden bg-slate-900">
              <img
                src="/profile.png"
                alt="Faraj Hafidh"
                className="w-full h-full object-cover object-top opacity-90"
              />
            </div>
            <motion.div
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-green-400 border border-slate-950 z-10"
            />
          </div>
          <div className="flex items-center gap-1">
            <span className="text-green-400 text-xs">~/</span>
            <span className="text-slate-50 text-sm font-bold">
              faraj-hafidh
            </span>
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="inline-block w-1.5 h-3.5 bg-cyan-400 ml-0.5"
            />
          </div>
        </Link>

        {/* Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex flex-col gap-1.5 p-2 group"
          aria-label="Toggle menu"
        >
          <motion.span
            animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.2 }}
            className="block w-5 h-px bg-slate-400 group-hover:bg-cyan-400 transition-colors origin-center"
          />
          <motion.span
            animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="block w-5 h-px bg-slate-400 group-hover:bg-cyan-400 transition-colors"
          />
          <motion.span
            animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.2 }}
            className="block w-5 h-px bg-slate-400 group-hover:bg-cyan-400 transition-colors origin-center"
          />
        </button>
      </motion.nav>

      {/* Mobile dropdown */}
      <motion.div
        initial={false}
        animate={
          mobileOpen
            ? { opacity: 1, height: "auto" }
            : { opacity: 0, height: 0 }
        }
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="md:hidden fixed top-14 left-0 right-0 z-40 overflow-hidden bg-slate-950/95 backdrop-blur-xl border-b border-slate-800/60 font-mono"
      >
        <div className="px-5 py-4 flex flex-col gap-1">
          <div className="text-xs text-slate-600 mb-2 pb-2 border-b border-slate-800">
            <span className="text-green-400">$</span> ls ./navigation/
          </div>
          {navItems.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, x: -10 }}
              animate={
                mobileOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }
              }
              transition={{ duration: 0.2, delay: i * 0.05 }}
            >
              <Link
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-3 px-3 py-2.5 text-sm text-slate-500 hover:text-cyan-400 rounded hover:bg-slate-800/40 transition-all duration-200 group"
              >
                <svg
                  className="w-4 h-4 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {item.icon}
                </svg>
                <span>
                  <span className="text-slate-700 group-hover:text-cyan-700 text-xs">
                    ./
                  </span>
                  {item.label}
                </span>
                <svg
                  className="w-3 h-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-cyan-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </motion.div>
          ))}
          <div className="pt-2 mt-1 border-t border-slate-800/60">
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center w-full py-2 px-4 text-sm text-cyan-400 border border-cyan-500/40 rounded hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-200"
            >
              [hire_me]
            </a>
          </div>
        </div>
      </motion.div>
    </>
  );
}
