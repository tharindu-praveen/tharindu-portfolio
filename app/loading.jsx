import { Orbit } from "lucide-react";

export default function Loading() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#050505] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(220,38,38,0.16),transparent_28%),linear-gradient(to_bottom,#070707,#050505)]" />
      <div className="absolute inset-0 hero-grid opacity-[0.045]" />

      <div className="relative z-10 flex flex-col items-center text-center">
        <div className="relative flex h-24 w-24 items-center justify-center">
          <div className="absolute inset-0 rounded-full border border-red-600/30" />
          <div className="absolute inset-3 animate-spin rounded-full border border-dashed border-red-600/70" />

          <div className="flex h-14 w-14 items-center justify-center border border-white/10 bg-black/40 text-red-500">
            <Orbit size={26} />
          </div>
        </div>

        <p className="font-tech mt-6 text-xs uppercase tracking-[0.35em] text-red-500">
          Loading Interface
        </p>

        <h1 className="font-tech mt-3 text-3xl font-semibold tracking-[-0.04em] text-zinc-100">
          Preparing Portfolio
        </h1>

        <p className="mt-3 max-w-sm text-sm leading-7 text-zinc-500">
          Please wait while the experience is being loaded.
        </p>
      </div>
    </main>
  );
}