import Image from "next/image";
import { ArrowUpRight, Award, Check } from "lucide-react";

const certifications = [
  {
    title: "Open Science 101",
    image: "/images/badges/nasa-open-science-101.png",
    width: 1500,
    height: 1500,
    description:
      "A foundation in open science principles, research planning, and responsible research practices.",
  },
  {
    title: "Open Science Essentials",
    image: "/images/badges/nasa-open-science-essentials.png",
    width: 600,
    height: 600,
    description:
      "An overview of open science principles, research participation, and best practices.",
  },
];

export default function CertificationsSection() {
  return (
    <section
      id="certifications"
      aria-labelledby="certifications-heading"
      className="relative overflow-hidden border-t border-white/10 bg-[#070707] py-20 text-white md:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_80%_50%,rgba(220,38,38,0.08),transparent_55%)]"
      />

      <div className="relative mx-auto w-[92%] max-w-[1400px]">
        <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <div className="mb-5 flex items-center gap-4">
              <span className="font-tech text-xs font-medium uppercase tracking-[0.3em] text-red-500">
                Certifications &amp; badges
              </span>
              <span aria-hidden="true" className="h-px w-12 bg-red-600/70" />
            </div>
            <h2
              id="certifications-heading"
              className="font-tech text-4xl font-semibold tracking-[-0.04em] text-zinc-100 md:text-6xl"
            >
              Always building.
              <br />
              <span className="text-zinc-500">Always learning.</span>
            </h2>
          </div>

          <p className="max-w-md text-base leading-8 text-zinc-400">
            I recently completed two NASA open science programs and earned
            digital badges, continuing my learning alongside software and
            engineering.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {certifications.map((certification, index) => (
            <article
              key={certification.title}
              className="group relative flex flex-col overflow-hidden border border-white/10 bg-white/[0.025] transition-colors hover:border-red-600/40"
            >
              <div className="flex items-center justify-between border-b border-white/10 px-6 py-4 md:px-8">
                <span className="font-tech flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-zinc-400">
                  <Award size={15} aria-hidden="true" className="text-red-500" />
                  Digital badge
                </span>
                <span aria-hidden="true" className="font-tech text-xs text-zinc-600">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="flex flex-1 flex-col items-center gap-7 p-6 text-center sm:flex-row sm:text-left lg:flex-col lg:text-center xl:flex-row xl:gap-8 xl:text-left md:p-8">
                <div className="flex h-48 w-48 shrink-0 items-center justify-center rounded-full bg-white p-2 shadow-[0_0_45px_rgba(174,221,228,0.06)]">
                  <Image
                    src={certification.image}
                    alt={`NASA ${certification.title} digital badge`}
                    width={certification.width}
                    height={certification.height}
                    sizes="176px"
                    className="h-full w-full rounded-full object-contain"
                  />
                </div>

                <div className="min-w-0">
                  <p className="font-tech text-xs font-medium uppercase tracking-[0.25em] text-red-500">
                    NASA
                  </p>
                  <h3 className="font-tech mt-3 text-2xl font-semibold tracking-[-0.03em] text-zinc-100 md:text-3xl">
                    {certification.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-zinc-400">
                    {certification.description}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 border border-emerald-400/20 bg-emerald-400/5 px-3 py-1.5 text-xs text-emerald-300">
                    <Check size={14} aria-hidden="true" />
                    Completed
                  </span>
                  <p className="mt-3 text-xs text-zinc-500">
                    Earned <time dateTime="2026-09-19">19 September 2026</time>
                  </p>
                </div>
              </div>

              <a
                href={certification.image}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View NASA ${certification.title} badge image (opens in a new tab)`}
                className="font-tech flex min-h-14 items-center justify-between gap-4 border-t border-white/10 px-6 py-4 text-sm text-zinc-300 transition-colors hover:bg-white/[0.04] hover:text-white focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-red-500 md:px-8"
              >
                View badge image
                <ArrowUpRight size={18} aria-hidden="true" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
