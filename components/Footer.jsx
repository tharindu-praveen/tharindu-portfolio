"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#050505] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(220,38,38,0.12),transparent_28%)]" />
      <div className="absolute inset-0 hero-grid opacity-[0.035]" />

      <div className="relative z-10 mx-auto w-[92%] max-w-[1400px] py-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr_0.6fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <a href="#home" className="group inline-flex items-center gap-4">
              <div className="relative flex h-12 w-12 items-center justify-center overflow-hidden border border-white/10 bg-white/[0.03]">
                <span className="font-tech relative z-10 text-xl font-black tracking-tight text-white">
                  T<span className="text-red-600">P</span>
                </span>
                <span className="absolute inset-y-0 left-0 w-[3px] bg-red-600" />
              </div>

              <div>
                <p className="font-tech text-lg font-semibold tracking-[-0.03em] text-zinc-100">
                  Tharindu Praveen
                </p>
                <p className="text-xs uppercase tracking-[0.28em] text-zinc-500">
                  Software Engineer & Technology Builder
                </p>
              </div>
            </a>

            <p className="mt-5 max-w-xl text-sm leading-7 text-zinc-500">
              Building modern software, practical engineering solutions,
              automation concepts, and reliable digital systems.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.08, ease: "easeOut" }}
          >
            <p className="font-tech text-xs uppercase tracking-[0.3em] text-red-500">
              Navigation
            </p>

            <div className="mt-5 grid grid-cols-2 gap-3">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="group inline-flex items-center gap-2 text-sm text-zinc-500 transition hover:text-red-500"
                >
                  <span className="h-[1px] w-4 bg-white/15 transition group-hover:bg-red-500" />
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.16, ease: "easeOut" }}
          >
            <p className="font-tech text-xs uppercase tracking-[0.3em] text-red-500">
              Connect
            </p>

            <div className="mt-5 flex gap-3">
              <a
                href="https://github.com/tharindu-praveen"
                aria-label="GitHub"
                className="flex h-11 w-11 items-center justify-center border border-white/10 bg-black/30 text-zinc-400 transition hover:border-red-600/50 hover:text-red-500"
              >
                <FaGithub size={18} />
              </a>

              <a
                href="https://www.linkedin.com/in/tharindu-praveen"
                aria-label="LinkedIn"
                className="flex h-11 w-11 items-center justify-center border border-white/10 bg-black/30 text-zinc-400 transition hover:border-red-600/50 hover:text-red-500"
              >
                <FaLinkedinIn size={18} />
              </a>

              <a
                href="mailto:tharindupraveen522@gmail.com"
                aria-label="Email"
                className="flex h-11 w-11 items-center justify-center border border-white/10 bg-black/30 text-zinc-400 transition hover:border-red-600/50 hover:text-red-500"
              >
                <Mail size={18} />
              </a>
            </div>

            <a
              href="#contact"
              className="font-tech group mt-5 inline-flex items-center gap-3 border border-red-600/50 bg-red-600/10 px-4 py-2.5 text-sm font-medium text-red-500 transition hover:bg-red-600 hover:text-white"
            >
              Start a Project
              <ArrowUpRight
                size={15}
                className="transition group-hover:translate-x-[2px] group-hover:-translate-y-[2px]"
              />
            </a>
          </motion.div>
        </div>

        <div className="mt-10 flex flex-col justify-between gap-4 border-t border-white/10 pt-6 text-xs text-zinc-600 md:flex-row md:items-center">
          <p>© {year} Tharindu Praveen. All rights reserved.</p>
          <p className="font-tech uppercase tracking-[0.25em]">
            Built with Next.js / Tailwind / Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}