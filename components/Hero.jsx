"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-16"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(185,28,28,0.22),transparent_35%),linear-gradient(to_bottom,#080808,#111111)]" />

      <div className="absolute right-0 top-1/4 h-72 w-72 rounded-full bg-red-900/20 blur-3xl" />
      <div className="absolute left-0 bottom-0 h-64 w-64 rounded-full bg-red-700/10 blur-3xl" />

      <div className="section-container relative z-10 grid items-center gap-12 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-4 inline-flex rounded-full border border-red-700/50 bg-red-950/20 px-4 py-2 text-sm text-red-400">
            Software Engineer & Technology Builder
          </p>

          <h1 className="text-5xl font-bold leading-tight tracking-tight md:text-7xl">
            Tharindu <br />
            <span className="text-zinc-400">Praveen</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-400">
            I build modern web applications, backend systems, and engineering-focused
            digital solutions that combine software, automation, and practical
            problem-solving.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-red-700 px-6 py-3 text-sm font-medium text-white transition hover:bg-red-600"
            >
              View Projects
              <ArrowRight size={18} className="transition group-hover:translate-x-1" />
            </a>

            <a
              href="/cv.pdf"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-700 px-6 py-3 text-sm font-medium text-zinc-200 transition hover:border-red-700 hover:text-red-500"
            >
              Download CV
              <Download size={18} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative mx-auto hidden h-[420px] w-[420px] items-center justify-center md:flex"
        >
          <div className="absolute h-72 w-72 rounded-full border border-red-800/40 red-glow" />
          <div className="absolute h-52 w-52 rounded-full border border-zinc-700" />
          <div className="absolute h-32 w-32 rounded-full bg-gradient-to-br from-red-800 to-black shadow-2xl" />

          <div className="absolute bottom-16 left-8 rounded-2xl border border-white/10 bg-zinc-950/70 p-4 backdrop-blur-sm">
            <p className="text-sm text-zinc-500">Focused on</p>
            <p className="font-medium text-white">Software + Automation</p>
          </div>

          <div className="absolute right-8 top-20 rounded-2xl border border-white/10 bg-zinc-950/70 p-4 backdrop-blur-sm">
            <p className="text-sm text-zinc-500">Style</p>
            <p className="font-medium text-white">Clean & Professional</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}