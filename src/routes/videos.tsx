import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/videos")({
  head: () => ({
    meta: [
      { title: "Installation & Maintenance Videos - C11 Recovery" },
      {
        name: "description",
        content:
          "Watch installation and maintenance videos for C11 Recovery ice baths - Kinos, Kinos Plus, Hanki and Kuura.",
      },
      { property: "og:title", content: "Installation & Maintenance Videos - C11 Recovery" },
      {
        property: "og:description",
        content:
          "Step-by-step installation and maintenance videos for every C11 Recovery ice bath.",
      },
    ],
  }),
  component: VideosPage,
});

type VideoEntry = {
  label: string;
  youtubeId: string | null;
};

type ModelKey = "kinos" | "kinosPlus" | "hanki" | "kuura";

const MODELS: { key: ModelKey; name: string; videos: VideoEntry[] }[] = [
  {
    key: "kinos",
    name: "Kinos",
    videos: [
      { label: "Installation", youtubeId: "qpBxQ_RMZRk" },
      { label: "Maintenance", youtubeId: "BH08IEOUj4M" },
    ],
  },
  {
    key: "kinosPlus",
    name: "Kinos Plus",
    videos: [
      { label: "Installation", youtubeId: null },
      { label: "Maintenance", youtubeId: null },
    ],
  },
  {
    key: "hanki",
    name: "Hanki",
    videos: [
      { label: "Installation", youtubeId: "1OAQ5_R05zU" },
      { label: "Maintenance", youtubeId: "hoWbLX3eawM" },
    ],
  },
  {
    key: "kuura",
    name: "Kuura",
    videos: [
      { label: "Installation", youtubeId: null },
      { label: "Maintenance", youtubeId: null },
    ],
  },
];

function VideosPage() {
  const [active, setActive] = useState<ModelKey>("kinos");
  const current = MODELS.find((m) => m.key === active)!;

  return (
    <main className="font-body text-obsidian bg-stone-base min-h-screen">
      {/* HEADER */}
      <section className="bg-obsidian text-stone-base border-b border-stone-base/20">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20 pt-10 pb-16 md:pt-14 md:pb-20">
          <div className="text-xs uppercase tracking-[0.22em] font-medium flex items-center gap-2">
            <span aria-hidden>✳</span>
            <span>Installation & Maintenance</span>
          </div>

          <div className="mt-4">
            <Link
              to="/"
              className="text-xs uppercase tracking-[0.16em] text-stone-base/70 hover:text-thermal-rose transition-colors"
            >
              ← Back to Aftercare
            </Link>
          </div>

          <h1
            className="mt-10 font-display font-bold uppercase leading-[0.9] tracking-[-0.02em]"
            style={{ fontSize: "clamp(2.25rem, 7vw, 5.5rem)" }}
          >
            Video Library
          </h1>
          <p className="mt-6 font-editorial italic text-xl md:text-2xl text-stone-base/85 max-w-2xl">
            Filter by ice bath model to watch installation and maintenance
            guidance.
          </p>
        </div>
      </section>

      {/* FILTER TABS */}
      <section className="bg-stone-base border-b border-obsidian sticky top-0 z-10">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20">
          <div className="flex flex-wrap gap-x-8 gap-y-3 py-5">
            {MODELS.map((m) => {
              const isActive = m.key === active;
              return (
                <button
                  key={m.key}
                  onClick={() => setActive(m.key)}
                  className={`text-sm md:text-base uppercase tracking-[0.18em] font-medium pb-1 border-b transition-colors ${
                    isActive
                      ? "text-obsidian border-obsidian"
                      : "text-obsidian/50 border-transparent hover:text-deep-current"
                  }`}
                >
                  {m.name}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* VIDEOS */}
      <section className="bg-stone-base">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20 py-16 md:py-24">
          <div className="flex items-baseline justify-between flex-wrap gap-4 border-b border-obsidian pb-6">
            <h2 className="font-display uppercase font-bold leading-none tracking-tight text-3xl md:text-5xl">
              {current.name}
            </h2>
            <p className="font-editorial italic text-obsidian/70 text-lg">
              {current.videos.filter((v) => v.youtubeId).length} of{" "}
              {current.videos.length} available
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14">
            {current.videos.map((v) => (
              <article key={v.label} className="flex flex-col">
                <div className="text-xs uppercase tracking-[0.22em] font-medium flex items-center gap-2 text-obsidian">
                  <span aria-hidden>✳</span>
                  <span>{v.label}</span>
                </div>
                <h3 className="mt-4 font-display uppercase font-bold text-2xl md:text-3xl tracking-tight">
                  {current.name} - {v.label}
                </h3>

                <div className="mt-6 relative w-full aspect-video bg-obsidian rounded-[2px] overflow-hidden border border-obsidian">
                  {v.youtubeId ? (
                    <iframe
                      className="absolute inset-0 w-full h-full"
                      src={`https://www.youtube.com/embed/${v.youtubeId}`}
                      title={`${current.name} ${v.label}`}
                      frameBorder={0}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-stone-base/70 font-editorial italic text-lg">
                      Video coming soon
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
