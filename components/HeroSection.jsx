"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, Mail, MailCheck } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const photoSets = [
  {
    main: "/images/profile-hero-4.jpeg",
    left: "/images/profile-hero-2.jpeg",
    right: "/images/profile-hero-5.jpeg",
  },
  {
    main: "/images/profile-hero-2.jpeg",
    left: "/images/profile-hero-5.jpeg",
    right: "/images/profile-hero-4.jpeg",
  },
  {
    main: "/images/profile-hero-5.jpeg",
    left: "/images/profile-hero-4.jpeg",
    right: "/images/profile-hero-2.jpeg",
  },
];

const smoothEase = [0.22, 1, 0.36, 1];

export default function HeroSection() {
  const [activePhoto, setActivePhoto] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActivePhoto((prev) => (prev + 1) % photoSets.length);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  const currentPhotos = photoSets[activePhoto];

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#050505] pt-[68px] text-white xl:h-screen"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(220,38,38,0.16),transparent_22%),radial-gradient(circle_at_40%_60%,rgba(220,38,38,0.08),transparent_25%),linear-gradient(to_bottom,#050505,#080808)]" />
      <div className="absolute inset-0 hero-grid opacity-[0.08]" />
      <div className="absolute inset-0 hero-rings pointer-events-none" />

      <div className="relative z-20 mx-auto h-full w-[95%] max-w-[1600px]">
        <div className="grid grid-cols-1 xl:h-[calc(100svh-68px)] xl:grid-cols-[72px_minmax(0,1.05fr)_minmax(420px,0.95fr)]">
          {/* Left rail */}
          <div className="hidden border-r border-white/10 xl:flex xl:flex-col xl:items-center xl:justify-between xl:py-8">
            <div className="h-12 w-[2px] bg-gradient-to-b from-transparent via-red-600 to-transparent" />

            <div className="flex flex-col items-center gap-5">
              <div className="h-9 w-[2px] bg-red-600/80" />
              <p className="font-tech vertical-text text-[10px] uppercase tracking-[0.4em] text-zinc-400">
                Building solutions. Solving problems.
              </p>
              <div className="h-9 w-[2px] bg-red-600/80" />
            </div>

            <div className="flex flex-col items-center gap-4 text-zinc-500">
              <a
                href="#"
                className="transition hover:text-red-500"
                aria-label="GitHub"
              >
                <FaGithub size={15} />
              </a>

              <a
                href="#"
                className="transition hover:text-red-500"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn size={15} />
              </a>

              <a
                href="#"
                className="transition hover:text-red-500"
                aria-label="Email"
              >
                <MailCheck size={15} />
              </a>
            </div>
          </div>

          {/* Text content */}
          <div className="order-2 flex items-center border-white/10 px-6 py-8 sm:px-10 lg:px-12 xl:order-none xl:border-r xl:py-0">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="max-w-[790px]"
            >
              <div className="mb-5 flex items-center gap-4">
                <span className="font-tech text-xs font-medium uppercase tracking-[0.35em] text-red-500">
                  Software Engineer
                </span>
                <div className="h-[1px] w-16 bg-red-600/70" />
                <div className="h-2 w-2 rounded-full bg-red-600" />
              </div>

              <h1 className="overflow-hidden leading-[0.92] tracking-tight">
                <motion.span
                  initial={{ opacity: 0, x: 120, scale: 0.96 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.25,
                    ease: smoothEase,
                  }}
                  className="font-tech block text-[clamp(3.3rem,8vw,7.1rem)] font-semibold tracking-[-0.065em] text-zinc-100"
                >
                  Tharindu
                </motion.span>

                <motion.span
                  initial={{ opacity: 0, x: -120, scale: 0.96 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{
                    duration: 0.85,
                    delay: 0.38,
                    ease: smoothEase,
                  }}
                  className="font-tech block text-[clamp(3.3rem,7.8vw,6.9rem)] font-bold tracking-[-0.065em] text-red-600"
                >
                  Praveen
                </motion.span>
              </h1>

              <div className="mt-5 h-2 w-14 bg-[repeating-linear-gradient(135deg,#71717a_0_4px,transparent_4px_8px)] opacity-70" />

              <h2 className="font-tech mt-4 text-xl font-medium tracking-[-0.025em] text-zinc-100 md:text-2xl xl:text-[1.55rem]">
                Software Engineer &amp; Technology Builder
              </h2>

              <p className="mt-4 max-w-[680px] text-base leading-8 text-zinc-400">
                I build modern web applications, backend systems, and
                engineering-focused digital solutions that combine software,
                automation, and practical problem-solving.
              </p>

              <div className="mt-7 flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="font-tech group inline-flex items-center gap-3 rounded-sm border border-red-500/70 bg-gradient-to-b from-red-600 to-red-700 px-6 py-3 text-base font-medium tracking-[-0.01em] text-white shadow-[0_0_24px_rgba(220,38,38,0.18)] transition hover:translate-y-[-2px] hover:shadow-[0_0_30px_rgba(220,38,38,0.28)]"
                >
                  <ArrowUpRight
                    size={17}
                    className="transition group-hover:translate-x-[2px] group-hover:-translate-y-[2px]"
                  />
                  View Projects
                </a>

                <a
                  href="#contact"
                  className="font-tech inline-flex items-center gap-3 rounded-sm border border-white/15 bg-white/[0.02] px-6 py-3 text-base font-medium tracking-[-0.01em] text-zinc-100 transition hover:border-red-600/50 hover:bg-white/[0.04]"
                >
                  <Mail size={17} />
                  Contact Me
                </a>
              </div>
            </motion.div>
          </div>

          {/* Image content */}
          <div className="order-1 relative flex items-center overflow-hidden px-4 py-6 sm:px-10 lg:px-12 xl:order-none xl:py-0">
            <motion.div
              initial={{ opacity: 0, x: 35 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative mx-auto flex h-[500px] w-full max-w-[540px] items-end justify-center sm:h-[580px] xl:h-[min(540px,calc(100svh-150px))] xl:max-w-[540px]"
            >
              <div className="absolute right-[-8%] top-[8%] h-[75%] w-[58%] bg-red-600/20 blur-3xl" />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),transparent)]" />

              {/* Left photo */}
              <motion.div
                initial={{ opacity: 0, x: 150, scale: 0.92 }}
                animate={{ opacity: 0.75, x: 0, scale: 1 }}
                transition={{
                  duration: 0.9,
                  delay: 0.55,
                  ease: smoothEase,
                }}
                className="hero-small-photo-left absolute left-[0%] top-[17%] h-[180px] w-[125px] overflow-hidden border border-red-500/25 bg-black/70 shadow-[0_0_24px_rgba(220,38,38,0.12)] sm:h-[210px] sm:w-[148px]"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentPhotos.left}
                    initial={{ opacity: 0, scale: 1.06 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.55, ease: "easeOut" }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={currentPhotos.left}
                      alt="Tharindu secondary photo"
                      fill
                      className="object-cover object-center grayscale"
                    />
                    <div className="absolute inset-0 bg-black/35" />
                  </motion.div>
                </AnimatePresence>
              </motion.div>

              {/* Right photo */}
              <motion.div
                initial={{ opacity: 0, x: -145, scale: 0.92 }}
                animate={{ opacity: 0.8, x: 0, scale: 1 }}
                transition={{
                  duration: 0.9,
                  delay: 0.7,
                  ease: smoothEase,
                }}
                className="hero-small-photo-right absolute bottom-[9%] right-[0%] h-[155px] w-[115px] overflow-hidden border border-white/15 bg-black/70 shadow-[0_0_24px_rgba(220,38,38,0.12)] sm:h-[180px] sm:w-[132px]"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentPhotos.right}
                    initial={{ opacity: 0, scale: 1.06 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.55, ease: "easeOut" }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={currentPhotos.right}
                      alt="Tharindu third photo"
                      fill
                      className="object-cover object-center grayscale"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.2),rgba(0,0,0,0.55))]" />
                  </motion.div>
                </AnimatePresence>
              </motion.div>

              {/* Main photo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.75,
                  delay: 0.2,
                  ease: smoothEase,
                }}
                className="hero-photo-frame absolute inset-y-0 left-[15%] right-[17%] border border-white/20 bg-zinc-950/70 shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_0_30px_rgba(220,38,38,0.12)]"
              >
                <div className="absolute inset-[2px] overflow-hidden bg-black">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentPhotos.main}
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.96 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={currentPhotos.main}
                        alt="Tharindu profile photo"
                        fill
                        className="object-cover object-center"
                        priority
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.05),rgba(0,0,0,0.28))]" />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, height: "0%" }}
                animate={{ opacity: 1, height: "90%" }}
                transition={{ duration: 0.7, delay: 0.95, ease: "easeOut" }}
                className="absolute left-[13%] top-[5%] w-[2px] bg-gradient-to-b from-transparent via-red-600/70 to-transparent"
              />
              <motion.div
                initial={{ opacity: 0, height: "0%" }}
                animate={{ opacity: 1, height: "90%" }}
                transition={{ duration: 0.7, delay: 1.05, ease: "easeOut" }}
                className="absolute right-[16%] top-[5%] w-[2px] bg-gradient-to-b from-transparent via-red-500/70 to-transparent"
              />

              <div className="hero-front-slice absolute right-[9%] top-0 h-full w-[17%] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] backdrop-blur-[1px]" />

              <div className="hero-left-slice absolute left-[6%] top-[24%] h-[52%] w-[16%] border border-red-500/30 bg-black/50 shadow-[0_0_20px_rgba(220,38,38,0.16)]" />

              <div className="font-tech absolute right-[2%] top-[26%] flex flex-col gap-7 text-base tracking-[-0.02em]">
                <span className="font-medium text-red-500">01</span>
                <span className="text-zinc-500">02</span>
                <span className="text-zinc-500">03</span>
              </div>

              <div className="absolute right-[2%] top-[16%] h-32 w-32 rounded-full border border-white/10" />

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 1.1, ease: "easeOut" }}
                className="absolute bottom-[13%] left-[42%] z-30"
              >
                <div className="relative w-[135px] sm:w-[155px]">
                  <div className="absolute left-[-18px] top-1/2 h-[1px] w-[36px]" />

                  <Image
                    src="/images/signature.png"
                    alt="Tharindu Praveen signature"
                    width={260}
                    height={110}
                    className="relative h-auto w-full object-contain opacity-90 drop-shadow-[0_0_14px_rgba(220,38,38,0.35)]"
                  />
                </div>
              </motion.div>

              <div className="absolute bottom-[12%] right-[9%] grid grid-cols-6 gap-2 opacity-70">
                {Array.from({ length: 24 }).map((_, i) => (
                  <span
                    key={i}
                    className="h-[3px] w-[3px] rounded-full bg-red-600"
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}