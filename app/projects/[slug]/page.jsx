import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  PlayCircle,
  Image as ImageIcon,
} from "lucide-react";
import { projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found | Tharindu Praveen",
    };
  }

  return {
    title: `${project.title} | Case Study`,
    description: project.description,
  };
}

export default async function ProjectCaseStudyPage({ params }) {
  const { slug } = await params;

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  const Icon = project.icon;

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <section className="relative overflow-hidden px-6 py-10 md:px-10 md:py-14">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(220,38,38,0.16),transparent_28%),linear-gradient(to_bottom,#070707,#050505)]" />
        <div className="absolute inset-0 hero-grid opacity-[0.045]" />

        <div className="relative z-10 mx-auto max-w-[1400px]">
          <Link
            href="/#projects"
            className="font-tech inline-flex items-center gap-3 border border-white/10 bg-white/[0.025] px-4 py-2.5 text-sm text-zinc-400 transition hover:border-red-600/50 hover:text-red-500"
          >
            <ArrowLeft size={16} />
            Back to Projects
          </Link>

          {/* Hero */}
          <div className="mt-10 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <div className="mb-5 flex items-center gap-4">
                <span className="font-tech text-xs font-medium uppercase tracking-[0.35em] text-red-500">
                  Case Study
                </span>
                <div className="h-[1px] w-16 bg-red-600/70" />
                <div className="h-2 w-2 rounded-full bg-red-600" />
              </div>

              <h1 className="font-tech text-5xl font-semibold tracking-[-0.06em] text-zinc-100 md:text-7xl">
                {project.title}
              </h1>

              <p className="mt-6 max-w-3xl text-base leading-8 text-zinc-400 md:text-lg md:leading-9">
                {project.description}
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <span className="border border-red-600/40 bg-red-600/10 px-3 py-1.5 text-sm text-red-500">
                  {project.status}
                </span>
                <span className="border border-white/10 bg-black/30 px-3 py-1.5 text-sm text-zinc-400">
                  {project.type}
                </span>
                <span className="border border-white/10 bg-black/30 px-3 py-1.5 text-sm text-zinc-400">
                  {project.category}
                </span>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noreferrer"
                  className="font-tech inline-flex items-center gap-3 border border-red-600/50 bg-red-600/10 px-5 py-3 text-sm font-medium text-red-500 transition hover:bg-red-600 hover:text-white"
                >
                  Live Preview
                  <ArrowUpRight size={16} />
                </a>

                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noreferrer"
                  className="font-tech inline-flex items-center gap-3 border border-white/10 bg-white/[0.025] px-5 py-3 text-sm font-medium text-zinc-300 transition hover:border-red-600/50 hover:text-white"
                >
                  Source Code
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </div>

            <div className="relative overflow-hidden border border-white/10 bg-white/[0.025] p-4">
              <div className="relative min-h-[360px] overflow-hidden border border-white/10 bg-black/40 md:min-h-[500px]">
                <Image
                  src={project.image}
                  alt={`${project.title} preview`}
                  fill
                  priority
                  className="object-cover object-center"
                />

                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.05),rgba(0,0,0,0.72))]" />

                <div className="absolute left-6 top-6 flex h-14 w-14 items-center justify-center border border-red-600/40 bg-black/50 text-red-500 backdrop-blur-sm">
                  <Icon size={26} />
                </div>

                <div className="absolute bottom-6 left-6 right-6">
                  <p className="font-tech text-xs uppercase tracking-[0.3em] text-red-500">
                    Main Preview
                  </p>
                  <h2 className="font-tech mt-2 text-2xl font-semibold tracking-[-0.04em] text-white">
                    {project.title}
                  </h2>
                </div>
              </div>
            </div>
          </div>

          {/* Media Gallery */}
          {project.media?.length > 0 && (
            <section className="mt-12">
              <div className="mb-6 flex items-center justify-between gap-4">
                <div>
                  <p className="font-tech text-xs uppercase tracking-[0.32em] text-red-500">
                    Project Media
                  </p>
                  <h2 className="font-tech mt-2 text-3xl font-semibold tracking-[-0.04em] text-zinc-100">
                    Screenshots & Demo
                  </h2>
                </div>

                <p className="font-tech text-sm text-zinc-500">
                  {project.media.length} Items
                </p>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                {project.media.map((item, index) => (
                  <MediaCard
                    key={`${item.src}-${index}`}
                    item={item}
                    index={index}
                    projectTitle={project.title}
                  />
                ))}
              </div>
            </section>
          )}

          {/* Overview / Challenge / Solution */}
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            <InfoBlock title="Overview" text={project.overview} />
            <InfoBlock title="Challenge" text={project.challenge} />
            <InfoBlock title="Solution" text={project.solution} />
          </div>

          {/* Features and Tech */}
          <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_0.55fr]">
            <div className="border border-white/10 bg-white/[0.025] p-7 md:p-8">
              <p className="font-tech text-xs uppercase tracking-[0.32em] text-red-500">
                Key Features
              </p>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {project.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex gap-4 border border-white/10 bg-black/25 p-4"
                  >
                    <CheckCircle2
                      size={18}
                      className="mt-1 shrink-0 text-red-500"
                    />
                    <p className="text-sm leading-7 text-zinc-400">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="border border-white/10 bg-white/[0.025] p-7 md:p-8">
              <p className="font-tech text-xs uppercase tracking-[0.32em] text-red-500">
                Tech Stack
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="border border-white/10 bg-black/30 px-3 py-1.5 text-sm text-zinc-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-8 border border-white/10 bg-black/25 p-5">
                <p className="font-tech text-sm text-zinc-100">
                  Project Category
                </p>
                <p className="mt-2 text-sm text-zinc-500">
                  {project.category}
                </p>
              </div>

              <div className="mt-5 border border-white/10 bg-black/25 p-5">
                <p className="font-tech text-sm text-zinc-100">
                  Project Status
                </p>
                <p className="mt-2 text-sm text-zinc-500">{project.status}</p>
              </div>
            </div>
          </div>

          {/* Next navigation */}
          <div className="mt-8 flex flex-col justify-between gap-4 border border-white/10 bg-white/[0.025] p-6 md:flex-row md:items-center">
            <div>
              <p className="font-tech text-lg font-medium tracking-[-0.02em] text-zinc-100">
                Want to explore more projects?
              </p>
              <p className="mt-2 text-sm text-zinc-500">
                Return to the portfolio project section and view other case
                studies.
              </p>
            </div>

            <Link
              href="/#projects"
              className="font-tech inline-flex w-fit items-center gap-3 border border-red-600/50 bg-red-600/10 px-5 py-3 text-sm font-medium text-red-500 transition hover:bg-red-600 hover:text-white"
            >
              Back to Projects
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function InfoBlock({ title, text }) {
  return (
    <div className="border border-white/10 bg-white/[0.025] p-7 md:p-8">
      <p className="font-tech text-xs uppercase tracking-[0.32em] text-red-500">
        {title}
      </p>
      <p className="mt-5 text-sm leading-7 text-zinc-400 md:text-base md:leading-8">
        {text}
      </p>
    </div>
  );
}

function MediaCard({ item, index, projectTitle }) {
  const isVideo = item.type === "video";

  return (
    <div
      className={`relative overflow-hidden border border-white/10 bg-white/[0.025] p-3 ${
        isVideo ? "md:col-span-2" : ""
      }`}
    >
      {isVideo ? (
        <div className="overflow-hidden border border-white/10 bg-black">
          <video
            controls
            preload="metadata"
            poster={item.poster}
            className="h-auto w-full"
          >
            <source src={item.src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      ) : (
        <div className="relative min-h-[280px] overflow-hidden border border-white/10 bg-black/40 md:min-h-[360px]">
          <Image
            src={item.src}
            alt={item.alt || `${projectTitle} media ${index + 1}`}
            fill
            className="object-cover object-center"
          />
        </div>
      )}

      <div className="mt-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {isVideo ? (
            <PlayCircle size={15} className="text-red-500" />
          ) : (
            <ImageIcon size={15} className="text-red-500" />
          )}

          <p className="font-tech text-xs uppercase tracking-[0.25em] text-zinc-500">
            {isVideo ? "Demo Video" : "Screenshot"}
          </p>
        </div>

        <p className="font-tech text-xs text-red-500">
          {String(index + 1).padStart(2, "0")}
        </p>
      </div>
    </div>
  );
}