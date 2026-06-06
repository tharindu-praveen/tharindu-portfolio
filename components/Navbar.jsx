"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function closeMenu() {
    setIsOpen(false);
  }

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="fixed left-0 top-0 z-50 h-[68px] w-full border-b border-white/10 bg-[#050505]/75 backdrop-blur-md"
      >
        <nav className="mx-auto flex h-full w-[95%] max-w-[1600px] items-center justify-between">
          {/* Logo */}
          <a href="#home" onClick={closeMenu} className="group flex items-center gap-4">
            <div className="relative flex h-11 w-11 items-center justify-center overflow-hidden border border-white/10 bg-white/[0.03]">
              <span className="font-tech relative z-10 text-lg font-black tracking-tight text-white">
                T<span className="text-red-600">P</span>
              </span>
              <span className="absolute inset-y-0 left-0 w-[3px] bg-red-600" />
              <span className="absolute inset-0 bg-red-600/0 transition group-hover:bg-red-600/10" />
            </div>

            <div className="hidden leading-tight sm:block">
              <p className="font-tech text-sm font-semibold tracking-wide text-zinc-100">
                Tharindu Praveen
              </p>
              <p className="text-[11px] uppercase tracking-[0.25em] text-zinc-500">
                Software Engineer
              </p>
            </div>
          </a>

          {/* Desktop nav */}
          <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] px-2 py-2 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="rounded-full px-4 py-2 text-sm text-zinc-400 transition hover:bg-white/[0.05] hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Right buttons */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="font-tech group hidden items-center gap-2 border border-red-600/50 bg-red-600/10 px-4 py-2 text-sm font-medium text-red-500 transition hover:bg-red-600 hover:text-white sm:inline-flex"
            >
              Contact
              <ArrowUpRight
                size={15}
                className="transition group-hover:translate-x-[2px] group-hover:-translate-y-[2px]"
              />
            </a>

            <button
              onClick={() => setIsOpen((prev) => !prev)}
              className="flex h-10 w-10 items-center justify-center border border-white/10 bg-white/[0.03] text-zinc-300 transition hover:border-red-600/50 hover:text-white lg:hidden"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm lg:hidden"
            onClick={closeMenu}
          >
            <motion.div
              initial={{ opacity: 0, y: -18, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -18, scale: 0.98 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="mx-auto mt-[78px] w-[92%] overflow-hidden border border-white/10 bg-[#080808] shadow-[0_0_40px_rgba(0,0,0,0.55)]"
            >
              <div className="border-b border-white/10 p-5">
                <p className="font-tech text-xs uppercase tracking-[0.32em] text-red-500">
                  Navigation
                </p>
                <h3 className="font-tech mt-2 text-2xl font-medium tracking-[-0.03em] text-zinc-100">
                  Explore Portfolio
                </h3>
              </div>

              <div className="p-3">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    onClick={closeMenu}
                    initial={{ opacity: 0, x: -14 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.04,
                      ease: "easeOut",
                    }}
                    className="group flex items-center justify-between border-b border-white/10 px-4 py-4 text-zinc-300 transition last:border-b-0 hover:bg-white/[0.035] hover:text-white"
                  >
                    <span className="font-tech text-base tracking-[-0.02em]">
                      {item.label}
                    </span>

                    <span className="font-tech text-xs text-zinc-600 transition group-hover:text-red-500">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </motion.a>
                ))}
              </div>

              <div className="border-t border-white/10 p-5">
                <a
                  href="#contact"
                  onClick={closeMenu}
                  className="font-tech group inline-flex w-full items-center justify-center gap-3 border border-red-600/50 bg-red-600/10 px-5 py-3 text-sm font-medium text-red-500 transition hover:bg-red-600 hover:text-white"
                >
                  Start a Conversation
                  <ArrowUpRight
                    size={16}
                    className="transition group-hover:translate-x-[2px] group-hover:-translate-y-[2px]"
                  />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}