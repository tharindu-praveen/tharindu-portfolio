"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  ArrowUpRight,
  Globe,
  Layers,
  Cpu,
  Bot,
  Database,
  MonitorCog,
  Code2,
  CircuitBoard,
  Sprout,
  Droplet,
  Smartphone,
  Truck,
} from "lucide-react";

const projectGroups = [
  {
    name: "Web & Software",
    projects: [
      {
        icon: Globe,
        title: "SoMET Website",
        type: "Full-Stack Web Application",
        description:
          "A full-stack alumni management platform with member registration, admin dashboard, document uploads, role-based access control, and digital ID card generation.",
        tech: ["Next.js", "Node.js", "MongoDB", "JWT"],
        status: "Production System",
        image: "/images/projects/somet/01.png",
        link: "somet-lk",
      },
      {
        icon: Globe,
        title: "AAMET Alumni Platform",
        type: "Full-Stack Web Application",
        description:
          "A full-stack alumni management platform with member registration, admin dashboard, document uploads, role-based access control, and digital ID card generation.",
        tech: ["Next.js", "Node.js", "MongoDB", "JWT"],
        status: "Production System",
        image: "/images/projects/aamet/01.png",
        link: "aamet-alumni-platform",
      },
      // {
      //   icon: Globe,
      //   title: "Personal Portfolio Website",
      //   type: "Personal Brand Website",
      //   description:
      //     "A dark professional portfolio website with smooth animations, modern typography, and a strong software-engineering identity.",
      //   tech: ["Next.js", "Tailwind", "Framer Motion"],
      //   status: "Current Build",
      //   image: "/images/projects/portfolio.jpg",
      //   link: "personal-portfolio-website",
      // },
      {
        icon: Sprout,
        title: "Growth",
        type: "Mobile-First Web Application",
        description:
          "A PHP backend framework for handling requests, responses, authentication, validation, file handling, database integration, and structured APIs.",
        tech: ["PHP", "JWT", "Composer", "MySQL"],
        status: "Framework Project",
        image: "/images/projects/growth/01.png",
        link: "growth",
      },
    ],
  },
  {
    name: "Mobile Applications",
    projects: [
      {
        icon: Truck,
        title: "Happy Home Deliver App",
        type: "Mobile Application",
        description:
          "A database-based inventory management system for handling pharmacy stock, item details, records, and basic business operations.",
        tech: ["MySQL", "PHP", "Database Design"],
        status: "Academic Project",
        image: "/images/projects/happy-home-deliver/01.png",
        link: "happy-home-deliver-app",
      },
      {
        icon: Smartphone,
        title: "Growth Mobile Application",
        type: "Android Application",
        description:
          "An Android application designed to connect farmers and consumers through a mobile-first agricultural marketplace, enabling product purchasing, crop selling, and account management on the go.",
        tech: ["Java", "Android Studio", "Firebase"],
        status: "Production Build",
        image: "/images/projects/growth-mobile/01.png",
        link: "growth-mobile-app",
      },
    ],
  },
  {
    name: "Automation & Robotics",
    projects: [
      {
        icon: CircuitBoard,
        title: "Home Automation System",
        type: "IoT System",
        description:
          "A home automation concept using ESP modules, RFID door lock control, PIR motion detection, server updates, and app-based control.",
        tech: ["ESP32", "RFID", "Firebase", "IoT"],
        status: "IoT Project",
        image: "/images/projects/home-automation/01.png",
        link: "home-automation-system",
      },
      {
        icon: Bot,
        title: "Kinect Obstacle Avoiding Robot",
        type: "Computer Vision Robotics",
        description:
          "A robot project using Kinect v2, OpenCV, and Python for color/depth processing, obstacle detection, human detection, and path visualization.",
        tech: ["Python", "OpenCV", "Kinect v2"],
        status: "Research / Robotics",
        image: "/images/projects/kinect-robot/01.webp",
        link: "kinect-obstacle-avoiding-robot",
      },
      {
        icon: Bot,
        title: "Self-Balancing Robot Concept",
        type: "Embedded Robotics",
        description:
          "A robotics concept focused on balance control, sensor feedback, motor control, and Arduino-based embedded system design.",
        tech: ["Arduino", "MPU6050", "Motor Driver"],
        status: "Concept Project",
        image: "/images/projects/self-balancing/01.png",
        link: "self-balancing-robot-concept",
      },
    ],
  },
  {
    name: "Database & Business",
    projects: [
      {
        icon: Database,
        title: "Patasgala.lk",
        type: "Inventory Management System",
        description:
          "A database-based inventory management system for handling pharmacy stock, item details, records, and basic business operations.",
        tech: ["MySQL", "PHP", "Database Design"],
        status: "Academic Project",
        image: "/images/projects/patasgala/01.png",
        link: "patasgala-lk",
      },
      {
        icon: Layers,
        title: "Alpha 360 Industries Website",
        type: "Company Website",
        description:
          "A professional company website designed to showcase software services, mobile apps, business systems, and digital solutions.",
        tech: ["Next.js", "Tailwind", "Framer Motion"],
        status: "Brand Project",
        image: "/images/projects/alpha360/01.jpeg",
        link: "alpha-360-industries-website",
      },
      {
        icon: Database,
        title: "Global Med",
        type: "Inventory Management System",
        description:
          "A database-based inventory management system for handling pharmacy stock, item details, records, and basic business operations.",
        tech: ["MySQL", "PHP", "Database Design"],
        status: "Academic Project",
        image: "/images/projects/global-med/01.png",
        link: "global-med",
      },
    ],
  },
  {
    name: "Library and Frameworks",
    projects: [
      {
        icon: Code2,
        title: "A360 WebCore",
        type: "PHP Backend Framework",
        description:
          "A PHP backend framework for handling requests, responses, authentication, validation, file handling, database integration, and structured APIs.",
        tech: ["PHP", "JWT", "Composer", "MySQL"],
        status: "Framework Project",
        image: "/images/projects/a360-webcore/05.png",
        link: "a360-webcore",
      },
      {
        icon: Droplet,
        title: "Java Swing UI Library",
        type: "UI Component Framework",
        description:
          "A custom Java Swing UI library designed to modernize desktop applications with advanced components, animations, rounded controls, shadow effects, and improved user experience.",
        tech: ["Java", "Swing", "Graphics2D", "Custom Components"],
        status: "Library Project",
        image: "/images/projects/java-swing-ui/01.png",
        link: "java-swing-ui-library",
      },
    ],
  },
];

const flatProjects = projectGroups.flatMap((group, groupIndex) =>
  group.projects.map((project, projectIndex) => ({
    ...project,
    groupName: group.name,
    groupIndex,
    projectIndex,
  })),
);

const smoothEase = [0.22, 1, 0.36, 1];

export default function ProjectsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeProject = flatProjects[activeIndex];
  const ActiveIcon = activeProject.icon;

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % flatProjects.length);
    }, 5200);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#070707] py-24 text-white"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(220,38,38,0.12),transparent_28%),linear-gradient(to_bottom,#050505,#090909)]" />
      <div className="absolute inset-0 hero-grid opacity-[0.045]" />

      <div className="relative z-10 mx-auto w-[92%] max-w-[1450px]">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-12 flex flex-col justify-between gap-8 lg:flex-row lg:items-end"
        >
          <div>
            <div className="mb-5 flex items-center gap-4">
              <span className="font-tech text-xs font-medium uppercase tracking-[0.35em] text-red-500">
                Projects
              </span>
              <div className="h-[1px] w-16 bg-red-600/70" />
              <div className="h-2 w-2 rounded-full bg-red-600" />
            </div>

            <h2 className="font-tech max-w-4xl text-4xl font-semibold tracking-[-0.04em] text-zinc-100 md:text-6xl">
              Selected work built across software and engineering.
            </h2>
          </div>

          <p className="max-w-md text-base leading-8 text-zinc-400">
            A compact project navigator with a live preview. Select any project
            or let the preview move automatically.
          </p>
        </motion.div>

        {/* Compact project section */}
        <div className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
          {/* Main preview card */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="relative overflow-hidden border border-white/10 bg-white/[0.025] p-5 md:p-6"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject.title}
                initial={{ opacity: 0, y: 18, scale: 0.985 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -18, scale: 0.985 }}
                transition={{ duration: 0.55, ease: smoothEase }}
                className="relative min-h-[430px] overflow-hidden border border-white/10 bg-black/40 md:min-h-[560px]"
              >
                <Image
                  src={activeProject.image}
                  alt={`${activeProject.title} preview`}
                  fill
                  className="object-cover object-center"
                  priority
                />

                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.05),rgba(0,0,0,0.82))]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_30%,rgba(220,38,38,0.2),transparent_35%)]" />

                <div className="absolute left-6 top-6 flex h-14 w-14 items-center justify-center border border-red-600/40 bg-black/50 text-red-500 backdrop-blur-sm md:h-16 md:w-16">
                  <ActiveIcon size={28} />
                </div>

                <div className="absolute right-6 top-6 text-right">
                  <p className="font-tech text-xs uppercase tracking-[0.28em] text-zinc-400">
                    {activeProject.groupName}
                  </p>
                  <p className="font-tech mt-2 text-5xl font-semibold text-white/10">
                    {String(activeIndex + 1).padStart(2, "0")}
                  </p>
                </div>

                <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-8">
                  <div className="mb-4 flex flex-wrap items-center gap-3">
                    <span className="border border-red-600/40 bg-red-600/10 px-3 py-1.5 text-sm text-red-500">
                      {activeProject.status}
                    </span>
                    <span className="border border-white/10 bg-black/40 px-3 py-1.5 text-sm text-zinc-300">
                      {activeProject.type}
                    </span>
                  </div>

                  <h3 className="font-tech text-3xl font-semibold tracking-[-0.04em] text-white md:text-5xl">
                    {activeProject.title}
                  </h3>

                  <p className="mt-5 max-w-3xl text-sm leading-7 text-zinc-300 md:text-base md:leading-8">
                    {activeProject.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {activeProject.tech.map((tech) => (
                      <span
                        key={tech}
                        className="border border-white/10 bg-black/40 px-3 py-1.5 text-sm text-zinc-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href={`projects/${activeProject.link}`}
                    className="font-tech mt-7 inline-flex items-center gap-3 border border-red-600/50 bg-red-600/10 px-5 py-3 text-sm font-medium text-red-500 transition hover:bg-red-600 hover:text-white"
                  >
                    View Case Study
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Compact grouped list */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.75, delay: 0.08, ease: "easeOut" }}
            className="relative overflow-hidden border border-white/10 bg-white/[0.025] p-5 md:p-6"
          >
            <div className="absolute right-[-20%] top-[-20%] h-72 w-72 rounded-full bg-red-600/10 blur-3xl" />

            <div className="relative z-10">
              <div className="mb-6 flex items-center justify-between gap-4">
                <div>
                  <p className="font-tech text-xs uppercase tracking-[0.32em] text-red-500">
                    Project Index
                  </p>
                  <h3 className="font-tech mt-2 text-2xl font-medium tracking-[-0.03em] text-zinc-100">
                    Browse by category
                  </h3>
                </div>

                <p className="font-tech text-sm text-zinc-500">
                  {flatProjects.length} Items
                </p>
              </div>

              <div className="max-h-[620px] space-y-6 overflow-y-auto pr-2 custom-scroll">
                {projectGroups.map((group) => (
                  <div key={group.name}>
                    <div className="mb-3 flex items-center gap-3">
                      <div className="h-[1px] w-8 bg-red-600/70" />
                      <h4 className="font-tech text-sm uppercase tracking-[0.25em] text-zinc-300">
                        {group.name}
                      </h4>
                    </div>

                    <div className="space-y-2">
                      {group.projects.map((project) => {
                        const realIndex = flatProjects.findIndex(
                          (item) => item.title === project.title,
                        );
                        const Icon = project.icon;
                        const isActive = realIndex === activeIndex;

                        return (
                          <button
                            key={project.title}
                            onClick={() => setActiveIndex(realIndex)}
                            onMouseEnter={() => setActiveIndex(realIndex)}
                            className={`group flex w-full items-center gap-4 border p-3 text-left transition ${
                              isActive
                                ? "border-red-600/55 bg-red-600/[0.07]"
                                : "border-white/10 bg-black/25 hover:border-red-600/40 hover:bg-white/[0.035]"
                            }`}
                          >
                            <div
                              className={`flex h-10 w-10 shrink-0 items-center justify-center border bg-black/30 text-red-500 transition ${
                                isActive
                                  ? "border-red-600/60"
                                  : "border-white/10 group-hover:border-red-600/40"
                              }`}
                            >
                              <Icon size={19} />
                            </div>

                            <div className="min-w-0 flex-1">
                              <div className="flex items-center justify-between gap-3">
                                <h5 className="font-tech truncate text-sm font-medium tracking-[-0.02em] text-zinc-100">
                                  {project.title}
                                </h5>

                                <span className="font-tech text-xs text-zinc-500">
                                  {String(realIndex + 1).padStart(2, "0")}
                                </span>
                              </div>

                              <p className="mt-1 truncate text-xs text-zinc-500">
                                {project.type}
                              </p>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
