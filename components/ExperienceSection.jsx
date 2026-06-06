"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Factory,
  GraduationCap,
  Zap,
} from "lucide-react";

const experienceData = [
  {
    icon: Code2,
    code: "EXP-01",
    title: "Software Development",
    subtitle: "Freelance Developer",
    period: "Jan 2023 — Present",
    company: "Remote / Client Projects",
    description:
      "Building websites, web applications, backend systems, admin dashboards, and digital solutions for small and medium-sized businesses.",
    focus: ["Web Apps", "Backend APIs", "Business Systems", "Deployment"],
    tools: ["React", "Next.js", "PHP", "Node.js", "MongoDB", "MySQL"],
  },
  {
    icon: BriefcaseBusiness,
    code: "EXP-02",
    title: "Interactive Web Experience",
    subtitle: "Full Stack Developer — Trainee",
    period: "Aug 2023 — Dec 2023",
    company: "ALDTAN (PVT) LTD",
    description:
      "Worked on frontend development and interactive 3D/VR web application concepts, gaining practical exposure to real development workflows.",
    focus: ["Frontend", "3D Web", "Debugging", "Team Workflow"],
    tools: ["JavaScript", "A-Frame", "HTML", "CSS", "Web Development"],
  },
  {
    icon: Factory,
    code: "EXP-03",
    title: "Industrial Engineering Exposure",
    subtitle: "Industrial Intern",
    period: "2025 — Present",
    company: "Flintec Transducers",
    description:
      "Studying production environments, layout planning, process flow, automation opportunities, and industrial improvement concepts.",
    focus: ["Process Mapping", "Layout Planning", "Automation", "Lean Thinking"],
    tools: ["AutoCAD", "SolidWorks", "Arduino", "Process Flow", "Lean"],
  },
  {
    icon: GraduationCap,
    code: "EXP-04",
    title: "Academic Foundation",
    subtitle: "Software + Engineering",
    period: "Academic Journey",
    company: "Software Engineering / Engineering Technology",
    description:
      "A combined academic foundation shaped by software engineering, engineering technology, technical design, automation, and research-based learning.",
    focus: ["Software Engineering", "Engineering Design", "Research", "Automation"],
    tools: ["Software Engineering", "CAD", "Robotics", "Databases", "Systems"],
  },
];

const smoothEase = [0.22, 1, 0.36, 1];

export default function ExperienceSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const active = experienceData[activeIndex];
  const ActiveIcon = active.icon;

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % experienceData.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const progressHeight =
    experienceData.length > 1
      ? `${(activeIndex / (experienceData.length - 1)) * 100}%`
      : "0%";

  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-[#050505] py-14 text-white lg:min-h-screen lg:py-16"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(220,38,38,0.13),transparent_28%),linear-gradient(to_bottom,#070707,#050505)]" />
      <div className="absolute inset-0 hero-grid opacity-[0.045]" />

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-128px)] w-[92%] max-w-[1450px] flex-col justify-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-8 flex flex-col justify-between gap-5 lg:flex-row lg:items-end"
        >
          <div>
            <div className="mb-4 flex items-center gap-4">
              <span className="font-tech text-xs font-medium uppercase tracking-[0.35em] text-red-500">
                Experience
              </span>
              <div className="h-[1px] w-16 bg-red-600/70" />
              <div className="h-2 w-2 rounded-full bg-red-600" />
            </div>

            <h2 className="font-tech max-w-4xl text-4xl font-semibold tracking-[-0.04em] text-zinc-100 md:text-5xl xl:text-[3.4rem]">
              My career path connects software, industry and engineering.
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-zinc-400 xl:text-base xl:leading-8">
            A compact animated timeline showing the key experience areas that
            shape my professional direction.
          </p>
        </motion.div>

        <div className="grid gap-5 xl:grid-cols-[0.92fr_1.08fr]">
          {/* Animated timeline */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="relative overflow-hidden border border-white/10 bg-white/[0.025] p-5 md:p-6 xl:min-h-[560px]"
          >
            <div className="absolute right-[-20%] top-[-20%] h-80 w-80 rounded-full bg-red-600/10 blur-3xl" />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.02),transparent)]" />

            <div className="relative z-10 flex h-full flex-col">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="font-tech text-xs uppercase tracking-[0.32em] text-red-500">
                    Career Timeline
                  </p>
                  <h3 className="font-tech mt-2 text-2xl font-medium tracking-[-0.03em] text-zinc-100">
                    Experience Route
                  </h3>
                </div>

                <p className="font-tech text-sm text-zinc-500">
                  {String(activeIndex + 1).padStart(2, "0")} /{" "}
                  {String(experienceData.length).padStart(2, "0")}
                </p>
              </div>

              {/* Timeline body - no fixed height, so no overlap */}
              <div className="relative mt-3">
                {/* Base line */}
                <div className="absolute bottom-0 left-[24px] top-0 w-[1px] bg-white/10" />

                {/* Animated progress line */}
                <motion.div
                  animate={{ height: progressHeight }}
                  transition={{ duration: 0.7, ease: smoothEase }}
                  className="absolute left-[24px] top-0 w-[1px] bg-gradient-to-b from-red-500 via-red-600 to-red-900"
                />

                {/* Moving glow */}
                <motion.div
                  animate={{ top: progressHeight }}
                  transition={{ duration: 0.7, ease: smoothEase }}
                  className="absolute left-[17px] h-4 w-4 -translate-y-1/2 rounded-full bg-red-600 shadow-[0_0_22px_rgba(220,38,38,0.8)]"
                />

                <div className="space-y-3">
                  {experienceData.map((item, index) => {
                    const Icon = item.icon;
                    const isActive = index === activeIndex;
                    const isPast = index < activeIndex;

                    return (
                      <button
                        key={item.title}
                        onClick={() => setActiveIndex(index)}
                        onMouseEnter={() => setActiveIndex(index)}
                        className="group relative flex w-full gap-4 text-left"
                      >
                        {/* Dot */}
                        <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center">
                          <div
                            className={`flex h-10 w-10 items-center justify-center border bg-[#080808] transition ${
                              isActive
                                ? "border-red-600 text-red-500 shadow-[0_0_24px_rgba(220,38,38,0.25)]"
                                : isPast
                                ? "border-red-600/45 text-red-500"
                                : "border-white/10 text-zinc-500 group-hover:border-red-600/40 group-hover:text-red-500"
                            }`}
                          >
                            <Icon size={18} />
                          </div>
                        </div>

                        {/* Timeline card */}
                        <div
                          className={`flex-1 border p-3 transition ${
                            isActive
                              ? "border-red-600/55 bg-red-600/[0.07]"
                              : "border-white/10 bg-black/25 hover:border-red-600/40 hover:bg-white/[0.035]"
                          }`}
                        >
                          <div className="flex items-center justify-between gap-4">
                            <p className="font-tech text-[10px] uppercase tracking-[0.28em] text-red-500">
                              {item.code}
                            </p>

                            <p className="font-tech text-[11px] text-zinc-500">
                              {item.period}
                            </p>
                          </div>

                          <h4 className="font-tech mt-1 truncate text-sm font-medium tracking-[-0.02em] text-zinc-100">
                            {item.title}
                          </h4>

                          <p className="mt-1 truncate text-xs text-zinc-500">
                            {item.subtitle}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="mt-5 border border-white/10 bg-black/30 p-3">
                <div className="flex items-center gap-3">
                  <Zap size={15} className="text-red-500" />
                  <p className="font-tech text-[10px] uppercase tracking-[0.25em] text-zinc-400">
                    Current Direction
                  </p>
                </div>
                <p className="mt-2 text-xs leading-5 text-zinc-400">
                  Full-stack development, automation, robotics and industrial
                  improvement.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right active content */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.75, delay: 0.08, ease: "easeOut" }}
            className="relative overflow-hidden border border-white/10 bg-white/[0.025] p-6 md:p-7 xl:min-h-[560px]"
          >
            <div className="absolute right-[-20%] top-[-30%] h-96 w-96 rounded-full bg-red-600/10 blur-3xl" />
            <div className="absolute bottom-0 left-0 h-[3px] w-full bg-gradient-to-r from-red-600 via-red-500 to-transparent" />

            <AnimatePresence mode="wait">
              <motion.div
                key={active.title}
                initial={{ opacity: 0, y: 18, scale: 0.985 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -18, scale: 0.985 }}
                transition={{ duration: 0.55, ease: smoothEase }}
                className="relative z-10"
              >
                <div className="mb-6 flex flex-col justify-between gap-5 md:flex-row md:items-start">
                  <div>
                    <p className="font-tech text-xs uppercase tracking-[0.32em] text-red-500">
                      {active.code} / {active.period}
                    </p>

                    <h3 className="font-tech mt-4 text-3xl font-semibold tracking-[-0.04em] text-zinc-100 md:text-5xl xl:text-[3rem]">
                      {active.title}
                    </h3>

                    <p className="mt-3 text-base text-zinc-400">
                      {active.subtitle}
                    </p>

                    <p className="mt-2 text-sm text-zinc-500">
                      {active.company}
                    </p>
                  </div>

                  <div className="flex h-14 w-14 shrink-0 items-center justify-center border border-red-600/40 bg-red-600/10 text-red-500">
                    <ActiveIcon size={27} />
                  </div>
                </div>

                <p className="max-w-4xl text-sm leading-7 text-zinc-400 md:text-base md:leading-8">
                  {active.description}
                </p>

                <div className="mt-6">
                  <p className="font-tech text-xs uppercase tracking-[0.3em] text-zinc-500">
                    Focus Areas
                  </p>

                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    {active.focus.map((item, index) => (
                      <div
                        key={item}
                        className="border border-white/10 bg-black/25 p-4"
                      >
                        <p className="font-tech text-xs text-red-500">
                          {String(index + 1).padStart(2, "0")}
                        </p>
                        <p className="mt-2 text-sm leading-6 text-zinc-400">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6">
                  <p className="font-tech text-xs uppercase tracking-[0.3em] text-zinc-500">
                    Tools / Technologies
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {active.tools.map((tool) => (
                      <span
                        key={tool}
                        className="border border-white/10 bg-black/30 px-3 py-1.5 text-xs text-zinc-300"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-7 flex flex-col gap-4 border-t border-white/10 pt-5 md:flex-row md:items-center md:justify-between">
                  <p className="max-w-md text-xs leading-6 text-zinc-500">
                    This timeline shows how my experience connects software,
                    engineering and practical problem-solving.
                  </p>

                  <a
                    href="#contact"
                    className="font-tech inline-flex w-fit items-center gap-3 border border-red-600/50 bg-red-600/10 px-5 py-3 text-sm font-medium text-red-500 transition hover:bg-red-600 hover:text-white"
                  >
                    Contact Me
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}