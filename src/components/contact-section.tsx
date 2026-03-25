"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formState);
    setSubmitted(true);
    setTimeout(() => {
      setFormState({ name: "", email: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  const contacts = [
    {
      key: "linkedin",
      label: "LinkedIn",
      value: "/in/faraj-hafidh",
      href: "https://www.linkedin.com/in/faraj-hafidh-0a0527217/",
      color: "cyan",
      icon: (
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      ),
    },
    {
      key: "github",
      label: "GitHub",
      value: "@TachooDa",
      href: "https://github.com/TachooDa",
      color: "green",
      icon: (
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      ),
    },
    {
      key: "email",
      label: "Email",
      value: "faraj.hafidh@gmail.com",
      href: "mailto:faraj.hafidh@gmail.com",
      color: "yellow",
      icon: (
        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
      ),
    },
  ];

  const colorMap: Record<string, string> = {
    cyan: "border-cyan-500/40 text-cyan-400 group-hover:border-cyan-400 group-hover:bg-cyan-500/5",
    green:
      "border-green-500/40 text-green-400 group-hover:border-green-400 group-hover:bg-green-500/5",
    yellow:
      "border-yellow-500/40 text-yellow-400 group-hover:border-yellow-400 group-hover:bg-yellow-500/5",
  };

  const inputBase =
    "w-full px-3 py-2 rounded bg-slate-800/60 border text-sm text-slate-200 placeholder-slate-600 focus:outline-none transition-all duration-200 font-mono";

  return (
    <section
      id="contact"
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
        <div className="absolute top-1/4 right-1/3 w-80 h-80 bg-cyan-500/4 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-green-500/4 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-green-400 text-sm">$</span>
            <span className="text-slate-400 text-sm">
              curl -X POST /api/contact
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-50 tracking-tight">
            Let's{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400">
              Connect
            </span>
          </h2>
          <div className="mt-3 h-px w-24 bg-gradient-to-r from-cyan-500/60 to-transparent" />
          <p className="mt-4 text-sm text-slate-500">
            // have a project in mind? let's talk data
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* ── Contact Form (terminal window) ── */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="rounded-lg border border-slate-700/80 bg-slate-900/60 overflow-hidden"
          >
            {/* Title bar */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-700/60 bg-slate-800/60">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
              <span className="ml-3 text-xs text-slate-500">
                send_message.sh
              </span>
            </div>

            <div className="p-5">
              {/* Prompt line */}
              <div className="text-xs text-slate-600 mb-4">
                <span className="text-green-400">$</span> ./send_message.sh --to
                faraj.hafidh@gmail.com
              </div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 gap-3"
                >
                  <div className="text-green-400 text-sm">
                    [SUCCESS] Message transmitted.
                  </div>
                  <div className="text-slate-500 text-xs">
                    // response_time: &lt; 24h
                  </div>
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    className="inline-block w-2 h-4 bg-green-400 mt-2"
                  />
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name */}
                  <div>
                    <label className="block text-xs text-slate-500 mb-1.5">
                      <span className="text-cyan-400">--name</span>{" "}
                      <span className="text-slate-600">(required)</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      onFocus={() => setFocused("name")}
                      onBlur={() => setFocused(null)}
                      required
                      placeholder="your_name"
                      className={`${inputBase} ${
                        focused === "name"
                          ? "border-cyan-500/60 bg-slate-800"
                          : "border-slate-700/60"
                      }`}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs text-slate-500 mb-1.5">
                      <span className="text-cyan-400">--email</span>{" "}
                      <span className="text-slate-600">(required)</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      onFocus={() => setFocused("email")}
                      onBlur={() => setFocused(null)}
                      required
                      placeholder="your@email.com"
                      className={`${inputBase} ${
                        focused === "email"
                          ? "border-cyan-500/60 bg-slate-800"
                          : "border-slate-700/60"
                      }`}
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs text-slate-500 mb-1.5">
                      <span className="text-cyan-400">--message</span>{" "}
                      <span className="text-slate-600">(required)</span>
                    </label>
                    <textarea
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      onFocus={() => setFocused("message")}
                      onBlur={() => setFocused(null)}
                      required
                      rows={4}
                      placeholder="your_message_here..."
                      className={`${inputBase} resize-none ${
                        focused === "message"
                          ? "border-cyan-500/60 bg-slate-800"
                          : "border-slate-700/60"
                      }`}
                    />
                  </div>

                  {/* Submit */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    type="submit"
                    className="w-full py-2.5 px-4 rounded border border-cyan-500/50 text-cyan-400 text-sm hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-200 flex items-center justify-center gap-2"
                  >
                    <span className="text-green-400">$</span>
                    ./transmit_message.sh
                    <motion.span
                      animate={{ opacity: [1, 0] }}
                      transition={{ duration: 0.8, repeat: Infinity }}
                      className="inline-block w-1.5 h-3.5 bg-cyan-400"
                    />
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>

          {/* ── Right side ── */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-4"
          >
            {/* Connect terminal window */}
            <div className="rounded-lg border border-slate-700/80 bg-slate-900/60 overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-700/60 bg-slate-800/60">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                <span className="ml-3 text-xs text-slate-500">
                  connect.json
                </span>
              </div>
              <div className="p-5 space-y-3">
                <div className="text-xs text-slate-600 mb-3">
                  <span className="text-green-400">$</span> cat connect.json
                </div>
                {contacts.map((c, i) => (
                  <motion.a
                    key={c.key}
                    href={c.href}
                    target={c.key !== "email" ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.08 }}
                    className={`flex items-center gap-3 p-3 rounded border transition-all duration-200 group ${colorMap[c.color]}`}
                  >
                    <svg
                      className="w-4 h-4 shrink-0"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      {c.icon}
                    </svg>
                    <div className="min-w-0">
                      <div className="text-xs text-slate-400 group-hover:text-slate-200 transition-colors">
                        {c.label}
                      </div>
                      <div className="text-xs text-slate-600 truncate">
                        {c.value}
                      </div>
                    </div>
                    <span className="ml-auto text-[10px] text-slate-700 group-hover:text-slate-500 transition-colors">
                      ↗
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability card */}
            <div className="rounded-lg border border-slate-700/80 bg-slate-900/60 overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-700/60 bg-slate-800/60">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                <span className="ml-3 text-xs text-slate-500">
                  availability.sh
                </span>
              </div>
              <div className="p-5 space-y-3 text-sm">
                <div className="text-xs text-slate-600">
                  <span className="text-green-400">$</span> cat status.txt
                </div>
                <div className="border-l-2 border-green-500/40 pl-3 space-y-2 text-xs text-slate-400 leading-relaxed">
                  <p>
                    Open to{" "}
                    <span className="text-cyan-300">
                      freelance collaborations
                    </span>{" "}
                    or{" "}
                    <span className="text-green-300">
                      full-time opportunities
                    </span>
                    . Happy to solve problems with data.
                  </p>
                  <p className="text-slate-500">// response_time: &lt; 24h</p>
                </div>
                <div className="flex items-center gap-2 pt-1">
                  <motion.div
                    animate={{ opacity: [1, 0.2, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="w-2 h-2 rounded-full bg-green-400"
                  />
                  <span className="text-xs text-green-400">
                    AVAILABLE_FOR_WORK
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer prompt */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex items-center gap-3 text-xs text-slate-600"
        >
          <span className="text-green-400">$</span>
          <span>echo "thanks for visiting"</span>
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
