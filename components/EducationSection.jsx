"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  Code2,
  Cpu,
  BookOpenCheck,
  Award,
  Wrench,
} from "lucide-react";

const educationItems = [
  {
    icon: GraduationCap,
    title: "BSc (Hons) Software Engineering",
    institute: "Birmingham City University",
    status: "Completed",
    result: "Second Class Honours",
    description:
      "Built a strong academic foundation in software engineering, system design, web development, databases, and project-based software solutions.",
    tags: ["Software Engineering", "Web Development", "Databases", "System Design"],
  },
  {
    icon: Wrench,
    title: "BEngTech (Hons) Engineering Technology",
    institute: "Uva Wellassa University of Sri Lanka",
    status: "Undergraduate",
    result: "Mechanical Engineering Technology",
    description:
      "Developing engineering knowledge through design, manufacturing, automation, CAD, industrial systems, and practical engineering applications.",
    tags: ["Engineering Design", "CAD", "Automation", "Manufacturing"],
  },
];

const learningAreas = [
  {
    icon: Code2,
    title: "Software Systems",
    text: "Full-stack development, APIs, authentication, dashboards and business platforms.",
  },
  {
    icon: Cpu,
    title: "Automation & Robotics",
    text: "Embedded systems, sensors, Arduino, ESP modules, robotics and computer vision.",
  },
  {
    icon: BookOpenCheck,
    title: "Industrial Learning",
    text: "Process mapping, layout planning, lean thinking, production flow and improvement concepts.",
  },
];

export default function EducationSection() {
  return (
    <section
      id="education"
      className="relative overflow-hidden bg-[#070707] py-24 text-white"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(220,38,38,0.12),transparent_28%),linear-gradient(to_bottom,#050505,#080808)]" />
      <div className="absolute inset-0 hero-grid opacity-[0.045]" />

      <div className="relative z-10 mx-auto w-[92%] max-w-[1400px]">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-14 flex flex-col justify-between gap-8 lg:flex-row lg:items-end"
        >
          <div>
            <div className="mb-5 flex items-center gap-4">
              <span className="font-tech text-xs font-medium uppercase tracking-[0.35em] text-red-500">
                Education
              </span>
              <div className="h-[1px] w-16 bg-red-600/70" />
              <div className="h-2 w-2 rounded-full bg-red-600" />
            </div>

            <h2 className="font-tech max-w-4xl text-4xl font-semibold tracking-[-0.04em] text-zinc-100 md:text-6xl">
              Knowledge built from software, engineering and continuous learning.
            </h2>
          </div>

          <p className="max-w-md text-base leading-8 text-zinc-400">
            My academic path connects software engineering with practical
            engineering technology and industrial problem-solving.
          </p>
        </motion.div>

        {/* Main education cards */}
        <div className="grid gap-6 lg:grid-cols-2">
          {educationItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.08,
                  ease: "easeOut",
                }}
                className="group relative overflow-hidden border border-white/10 bg-white/[0.025] p-7 transition hover:border-red-600/40 hover:bg-white/[0.04] md:p-8"
              >
                <div className="absolute right-[-18%] top-[-30%] h-80 w-80 rounded-full bg-red-600/0 blur-3xl transition group-hover:bg-red-600/10" />

                <div className="relative z-10">
                  <div className="mb-8 flex items-start justify-between gap-5">
                    <div className="flex h-14 w-14 items-center justify-center border border-red-600/40 bg-red-600/10 text-red-500">
                      <Icon size={27} />
                    </div>

                    <span className="font-tech text-sm text-zinc-500">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <p className="font-tech text-xs uppercase tracking-[0.32em] text-red-500">
                    {item.status}
                  </p>

                  <h3 className="font-tech mt-4 text-3xl font-semibold tracking-[-0.04em] text-zinc-100 md:text-4xl">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-zinc-400">{item.institute}</p>

                  <div className="mt-5 inline-flex border border-white/10 bg-black/30 px-3 py-1.5 text-sm text-zinc-300">
                    {item.result}
                  </div>

                  <p className="mt-6 text-base leading-8 text-zinc-400">
                    {item.description}
                  </p>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="border border-white/10 bg-black/30 px-3 py-1.5 text-sm text-zinc-300 transition group-hover:border-red-600/25"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Learning areas */}
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {learningAreas.map((area, index) => {
            const Icon = area.icon;

            return (
              <motion.div
                key={area.title}
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

                <h4 className="font-tech text-xl font-medium tracking-[-0.03em] text-zinc-100">
                  {area.title}
                </h4>

                <p className="mt-3 text-sm leading-7 text-zinc-400">
                  {area.text}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom strip */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mt-6 border border-white/10 bg-white/[0.025] p-6"
        >
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center border border-red-600/40 bg-red-600/10 text-red-500">
                <Award size={23} />
              </div>

              <div>
                <p className="font-tech text-lg font-medium tracking-[-0.02em] text-zinc-100">
                  Continuous learning is part of my workflow.
                </p>
                <p className="mt-1 text-sm text-zinc-500">
                  Currently growing in full-stack systems, automation, robotics,
                  cybersecurity and industrial technology.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {["Full Stack", "Automation", "Robotics", "Cybersecurity"].map(
                (item) => (
                  <span
                    key={item}
                    className="border border-white/10 bg-black/30 px-3 py-1.5 text-sm text-zinc-300"
                  >
                    {item}
                  </span>
                )
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}