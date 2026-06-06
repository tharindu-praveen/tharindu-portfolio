"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Server,
  Database,
  Cpu,
  Wrench,
  TerminalSquare,
} from "lucide-react";

const skillGroups = [
  {
    icon: Code2,
    title: "Frontend Development",
    description: "Modern, responsive and interactive user interfaces.",
    skills: ["React", "Next.js", "JavaScript", "Tailwind CSS", "Framer Motion"],
    level: 88,
  },
  {
    icon: Server,
    title: "Backend Development",
    description: "APIs, authentication, server logic and business systems.",
    skills: ["Node.js", "Express", "PHP", "REST APIs", "JWT"],
    level: 85,
  },
  {
    icon: Database,
    title: "Database & Data",
    description: "Structured data handling, database design and integration.",
    skills: ["MongoDB", "MySQL", "Firebase", "Mongoose"],
    level: 80,
  },
  {
    icon: Cpu,
    title: "Automation & Embedded",
    description: "Practical automation concepts with sensors and controllers.",
    skills: ["Arduino", "ESP32", "Sensors", "Motor Control"],
    level: 75,
  },
  {
    icon: Wrench,
    title: "Engineering Tools",
    description: "Engineering design, layout planning and technical drawings.",
    skills: ["AutoCAD", "SolidWorks", "Engineering Drawing", "Process Mapping"],
    level: 78,
  },
  {
    icon: TerminalSquare,
    title: "Tools & Deployment",
    description: "Development workflow, testing, hosting and deployment.",
    skills: ["Git", "VS Code", "Postman", "VPS", "aaPanel", "PM2"],
    level: 82,
  },
];

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#050505] py-24 text-white"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_10%,rgba(220,38,38,0.12),transparent_28%),linear-gradient(to_bottom,#070707,#050505)]" />
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
                Skills
              </span>
              <div className="h-[1px] w-16 bg-red-600/70" />
              <div className="h-2 w-2 rounded-full bg-red-600" />
            </div>

            <h2 className="font-tech max-w-4xl text-4xl font-semibold tracking-[-0.04em] text-zinc-100 md:text-6xl">
              Technical skills shaped by software and engineering.
            </h2>
          </div>

          <p className="max-w-md text-base leading-8 text-zinc-400">
            My skill set combines full-stack development, deployment knowledge,
            automation concepts and engineering design tools.
          </p>
        </motion.div>

        {/* Skills grid */}
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;

            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.07,
                  ease: "easeOut",
                }}
                className="group relative overflow-hidden border border-white/10 bg-white/[0.025] p-7 transition hover:border-red-600/40 hover:bg-white/[0.04]"
              >
                <div className="absolute right-[-25%] top-[-25%] h-56 w-56 rounded-full bg-red-600/0 blur-3xl transition group-hover:bg-red-600/10" />

                <div className="relative z-10">
                  <div className="mb-6 flex items-start justify-between gap-4">
                    <div className="flex h-13 w-13 items-center justify-center border border-white/10 bg-black/30 text-red-500 transition group-hover:border-red-600/40">
                      <Icon size={24} />
                    </div>

                    <span className="font-tech text-sm text-zinc-500">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="font-tech text-2xl font-medium tracking-[-0.03em] text-zinc-100">
                    {group.title}
                  </h3>

                  <p className="mt-3 min-h-[56px] text-sm leading-7 text-zinc-400">
                    {group.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="border border-white/10 bg-black/30 px-3 py-1.5 text-sm text-zinc-300 transition group-hover:border-red-600/25"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="mt-7">
                    <div className="mb-2 flex items-center justify-between">
                      <span className="font-tech text-xs uppercase tracking-[0.25em] text-zinc-500">
                        Focus Level
                      </span>
                      <span className="font-tech text-sm text-red-500">
                        {group.level}%
                      </span>
                    </div>

                    <div className="h-[2px] w-full bg-white/10">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${group.level}%` }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{
                          duration: 1,
                          delay: 0.2 + index * 0.06,
                          ease: "easeOut",
                        }}
                        className="h-full bg-red-600"
                      />
                    </div>
                  </div>
                </div>
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
          className="mt-8 border border-white/10 bg-white/[0.025] p-6"
        >
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p className="font-tech text-lg font-medium tracking-[-0.02em] text-zinc-100">
              Core mindset: build clean, useful and reliable systems.
            </p>

            <div className="flex flex-wrap gap-3 text-sm text-zinc-400">
              <span className="border border-white/10 px-3 py-1.5">
                Problem Solving
              </span>
              <span className="border border-white/10 px-3 py-1.5">
                Clean UI
              </span>
              <span className="border border-white/10 px-3 py-1.5">
                System Thinking
              </span>
              <span className="border border-white/10 px-3 py-1.5">
                Automation
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}