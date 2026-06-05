import Link from "next/link";
import { ArrowLeft, AlertTriangle } from "lucide-react";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#050505] px-6 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(220,38,38,0.16),transparent_28%),linear-gradient(to_bottom,#070707,#050505)]" />
      <div className="absolute inset-0 hero-grid opacity-[0.045]" />

      <div className="relative z-10 w-full max-w-3xl border border-white/10 bg-white/[0.025] p-8 text-center md:p-12">
        <div className="mx-auto flex h-16 w-16 items-center justify-center border border-red-600/40 bg-red-600/10 text-red-500">
          <AlertTriangle size={30} />
        </div>

        <p className="font-tech mt-8 text-xs uppercase tracking-[0.35em] text-red-500">
          Error 404
        </p>

        <h1 className="font-tech mt-4 text-5xl font-semibold tracking-[-0.05em] text-zinc-100 md:text-7xl">
          Page Not Found
        </h1>

        <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-zinc-400">
          The page you are looking for does not exist, may have been moved, or
          the link may be incorrect.
        </p>

        <Link
          href="/"
          className="font-tech group mt-8 inline-flex items-center gap-3 border border-red-600/50 bg-red-600/10 px-6 py-3 text-sm font-medium text-red-500 transition hover:bg-red-600 hover:text-white"
        >
          <ArrowLeft
            size={16}
            className="transition group-hover:-translate-x-[2px]"
          />
          Back to Home
        </Link>
      </div>
    </main>
  );
}