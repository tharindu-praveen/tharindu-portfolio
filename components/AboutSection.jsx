"use client";

import { motion } from "framer-motion";
import { Code2, Cpu, Wrench, GraduationCap } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Software Development",
    text: "Building modern web applications, backend systems, dashboards, and business solutions.",
  },
  {
    icon: Cpu,
    title: "Technology & Automation",
    text: "Interested in embedded systems, automation, robotics, sensors, and real-world engineering solutions.",
  },
  {
    icon: Wrench,
    title: "Practical Problem Solving",
    text: "Focused on improving processes, reducing manual work, and creating useful technical solutions.",
  },
  {
    icon: GraduationCap,
    title: "Continuous Learning",
    text: "Combining software engineering knowledge with engineering technology and industrial experience.",
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#070707] py-24 text-white"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(220,38,38,0.12),transparent_28%),linear-gradient(to_bottom,#050505,#0b0b0b)]" />
      <div className="absolute inset-0 hero-grid opacity-[0.05]" />

      <div className="relative z-10 mx-auto w-[92%] max-w-[1400px]">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-14"
        >
          <div className="mb-5 flex items-center gap-4">
            <span className="font-tech text-xs font-medium uppercase tracking-[0.35em] text-red-500">
              About Me
            </span>
            <div className="h-[1px] w-16 bg-red-600/70" />
            <div className="h-2 w-2 rounded-full bg-red-600" />
          </div>

          <h2 className="font-tech max-w-4xl text-4xl font-semibold tracking-[-0.04em] text-zinc-100 md:text-6xl">
            I build digital solutions with a practical engineering mindset.
          </h2>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[1fr_0.75fr]">
          {/* Main about card */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="relative overflow-hidden border border-white/10 bg-white/[0.025] p-8 md:p-10"
          >
            <div className="absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-red-600 via-red-500 to-transparent" />
            <div className="absolute right-[-10%] top-[-20%] h-72 w-72 rounded-full bg-red-600/10 blur-3xl" />

            <div className="relative z-10">
              <p className="text-lg leading-9 text-zinc-300 md:text-xl md:leading-10">
                I am <span className="text-white">Tharindu Praveen</span>, a
                software engineering graduate and technology-focused developer
                with a strong interest in full-stack development, automation,
                robotics, and industrial improvement.
              </p>

              <p className="mt-6 text-base leading-8 text-zinc-400 md:text-lg md:leading-9">
                My work combines software development with practical engineering
                thinking. I enjoy building web applications, backend systems,
                admin dashboards, and automation-related solutions that solve
                real problems, improve workflows, and create measurable value.
              </p>

              <p className="mt-6 text-base leading-8 text-zinc-400 md:text-lg md:leading-9">
                I like clean interfaces, reliable systems, structured code, and
                practical problem-solving. My goal is to grow as a developer and
                technology builder who can connect software, engineering, and
                automation into useful real-world solutions.
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                <div className="border border-white/10 bg-black/30 p-5">
                  <p className="font-tech text-3xl font-semibold text-red-500">
                    5+
                  </p>
                  <p className="mt-2 text-sm text-zinc-400">
                    Years development experience
                  </p>
                </div>

                <div className="border border-white/10 bg-black/30 p-5">
                  <p className="font-tech text-3xl font-semibold text-red-500">
                    10+
                  </p>
                  <p className="mt-2 text-sm text-zinc-400">
                    Projects and concepts built
                  </p>
                </div>

                <div className="border border-white/10 bg-black/30 p-5">
                  <p className="font-tech text-3xl font-semibold text-red-500">
                    360°
                  </p>
                  <p className="mt-2 text-sm text-zinc-400">
                    Software + engineering mindset
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Side profile card */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.75, delay: 0.12, ease: "easeOut" }}
            className="border border-white/10 bg-white/[0.025] p-8 md:p-10"
          >
            <h3 className="font-tech text-2xl font-medium tracking-[-0.03em] text-zinc-100">
              Focus Areas
            </h3>

            <div className="mt-8 space-y-5">
              {[
                "Full-stack web development",
                "Backend APIs and admin systems",
                "UI/UX focused interfaces",
                "Industrial automation concepts",
                "Robotics and embedded systems",
                "Process improvement solutions",
              ].map((item) => (
                <div key={item} className="flex items-center gap-4">
                  <div className="h-[1px] w-8 bg-red-600/70" />
                  <p className="text-zinc-300">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 border-t border-white/10 pt-8">
              <p className="font-tech text-xs uppercase tracking-[0.3em] text-red-500">
                Current Direction
              </p>
              <p className="mt-4 leading-8 text-zinc-400">
                Building a professional path around software engineering,
                automation, and real-world technology solutions.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Highlight cards */}
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {highlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                  ease: "easeOut",
                }}
                className="group border border-white/10 bg-white/[0.02] p-6 transition hover:border-red-600/40 hover:bg-white/[0.035]"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center border border-white/10 bg-black/30 text-red-500 transition group-hover:border-red-600/40">
                  <Icon size={22} />
                </div>

                <h4 className="font-tech text-lg font-medium tracking-[-0.02em] text-zinc-100">
                  {item.title}
                </h4>

                <p className="mt-3 text-sm leading-7 text-zinc-400">
                  {item.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}