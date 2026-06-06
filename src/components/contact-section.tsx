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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await fetch("https://formspree.io/f/mlgkglaz", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formState),
    });
    if (res.ok) {
      setSubmitted(true);
      setTimeout(() => {
        setFormState({ name: "", email: "", message: "" });
        setSubmitted(false);
      }, 3000);
    }
  };

  const contacts = [
    {
      key: "linkedin",
      label: "LinkedIn",
      value: "/in/faraj-hafidh",
      href: "https://www.linkedin.com/in/faraj-hafidh-0a0527217/",
      icon: "🔗",
    },
    {
      key: "github",
      label: "GitHub",
      value: "@TachooDa",
      href: "https://github.com/TachooDa",
      icon: "🐙",
    },
    {
      key: "email",
      label: "Email",
      value: "faraj.hafidh@gmail.com",
      href: "mailto:faraj.hafidh@gmail.com",
      icon: "📧",
    },
  ];

  const inputBase =
    "w-full px-4 py-2.5 rounded-lg bg-slate-800/50 border text-sm text-slate-200 placeholder-slate-500 focus:outline-none transition-all duration-200";

  return (
    <section
      id="contact"
      className="py-32 px-6 relative overflow-hidden bg-slate-950 min-h-screen flex flex-col"
    >
      {/* Subtle gradient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-slate-900/50 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10 flex-1 flex flex-col">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-blue-500/30 rounded-full" />
            <span className="text-sm text-slate-400 uppercase tracking-widest">
              Contact
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-slate-50 tracking-tight mb-4">
            Let's Connect
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
            Have a project in mind or want to collaborate? I'd love to hear from
            you. Get in touch through the form or reach out directly via social
            media.
          </p>
        </motion.div>

        {/* Main content grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 flex-1">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="rounded-lg border border-slate-800 bg-slate-900/50 backdrop-blur-sm p-8 h-fit"
          >
            <h3 className="text-2xl font-bold text-slate-100 mb-6">
              Send a Message
            </h3>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-12 gap-3"
              >
                <div className="text-6xl">✓</div>
                <div className="text-green-400 text-sm font-medium">
                  Message sent successfully!
                </div>
                <div className="text-slate-400 text-sm">
                  I'll get back to you within 24 hours.
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    onFocus={() => setFocused("name")}
                    onBlur={() => setFocused(null)}
                    required
                    placeholder="Your name"
                    className={`${inputBase} ${
                      focused === "name"
                        ? "border-blue-500/60 bg-slate-800"
                        : "border-slate-800 hover:border-slate-700"
                    }`}
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Email
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
                        ? "border-blue-500/60 bg-slate-800"
                        : "border-slate-800 hover:border-slate-700"
                    }`}
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    onFocus={() => setFocused("message")}
                    onBlur={() => setFocused(null)}
                    required
                    rows={5}
                    placeholder="Tell me about your project or idea..."
                    className={`${inputBase} resize-none ${
                      focused === "message"
                        ? "border-blue-500/60 bg-slate-800"
                        : "border-slate-800 hover:border-slate-700"
                    }`}
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-3 px-4 rounded-lg border border-blue-500/50 bg-blue-500/10 text-blue-400 font-medium text-sm hover:bg-blue-500/20 hover:border-blue-400 transition-all duration-200"
                >
                  Send Message
                </motion.button>
              </form>
            )}
          </motion.div>

          {/* Right side - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            {/* Contact Links */}
            <div className="rounded-lg border border-slate-800 bg-slate-900/50 backdrop-blur-sm p-8">
              <h3 className="text-lg font-bold text-slate-100 mb-6">
                Connect With Me
              </h3>
              <div className="space-y-3">
                {contacts.map((c, i) => (
                  <motion.a
                    key={c.key}
                    href={c.href}
                    target={c.key !== "email" ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.08 }}
                    className="flex items-center gap-4 p-4 rounded-lg border border-slate-800 bg-slate-800/30 hover:bg-slate-800/50 hover:border-slate-700 transition-all duration-200 group"
                  >
                    <span className="text-2xl">{c.icon}</span>
                    <div className="min-w-0">
                      <div className="text-sm font-medium text-slate-300 group-hover:text-slate-100 transition-colors">
                        {c.label}
                      </div>
                      <div className="text-xs text-slate-500 truncate">
                        {c.value}
                      </div>
                    </div>
                    <svg
                      className="w-4 h-4 ml-auto text-slate-400 group-hover:text-slate-200 opacity-0 group-hover:opacity-100 transition-all"
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
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <div className="rounded-lg border border-slate-800 bg-slate-900/50 backdrop-blur-sm p-8">
              <h3 className="text-lg font-bold text-slate-100 mb-4">
                Availability
              </h3>
              <div className="space-y-3">
                <p className="text-sm text-slate-400 leading-relaxed">
                  Open to{" "}
                  <span className="text-slate-300 font-medium">
                    freelance collaborations
                  </span>{" "}
                  and{" "}
                  <span className="text-slate-300 font-medium">
                    full-time opportunities
                  </span>
                  . I'm passionate about solving problems with data.
                </p>
                <div className="flex items-center gap-2 pt-2">
                  <motion.div
                    animate={{ opacity: [1, 0.3, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="w-2.5 h-2.5 rounded-full bg-green-400"
                  />
                  <span className="text-sm text-green-400 font-medium">
                    Available for Work
                  </span>
                </div>
                <p className="text-xs text-slate-500 pt-2">
                  Response time: &lt; 24 hours
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-auto pt-16 border-t border-slate-800"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-slate-400 text-sm mb-2">
                © 2026 Faraj Hafidh. All rights reserved.
              </p>
              <p className="text-slate-500 text-xs">
                Crafted with passion for data analytics and insights.
              </p>
            </div>
            <div className="flex items-center gap-4">
              {contacts.map((c) => (
                <motion.a
                  key={c.key}
                  href={c.href}
                  target={c.key !== "email" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-slate-500 hover:text-slate-300 transition-colors"
                  aria-label={c.label}
                >
                  <span className="text-xl">{c.icon}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
