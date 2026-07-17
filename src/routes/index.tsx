import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";

export const Route = createFileRoute("/")({
  component: AftercarePage,
});

// Central link config — swap real URLs here later.
const LINKS = {
  videos: "#",
  productCards: "#",
  manuals: "#",
  filters: "#",
  review: "#",
  instagram: "#",
  linkedin: "#",
  tiktok: "#",
};

const isExternal = (href: string) => /^https?:\/\//i.test(href);

function A({
  href,
  className = "",
  children,
}: {
  href: string;
  className?: string;
  children: ReactNode;
}) {
  const ext = isExternal(href);
  return (
    <a
      href={href}
      className={className}
      {...(ext ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}

function SectionLabel({
  children,
  tone = "obsidian",
}: {
  children: ReactNode;
  tone?: "obsidian" | "stone";
}) {
  const color = tone === "stone" ? "text-stone-base" : "text-obsidian";
  return (
    <div
      className={`${color} text-xs uppercase tracking-[0.22em] font-medium flex items-center gap-2`}
    >
      <span aria-hidden>✳</span>
      <span>{children}</span>
    </div>
  );
}

function ArrowLink({
  href,
  children,
  tone = "obsidian",
}: {
  href: string;
  children: ReactNode;
  tone?: "obsidian" | "stone";
}) {
  const base =
    tone === "stone"
      ? "text-stone-base hover:text-thermal-rose"
      : "text-obsidian hover:text-deep-current";
  return (
    <A
      href={href}
      className={`${base} inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.16em] border-b border-current pb-1 transition-colors`}
    >
      {children}
    </A>
  );
}

function SolidButton({
  href,
  children,
  variant = "obsidian",
}: {
  href: string;
  children: ReactNode;
  variant?: "obsidian" | "stone";
}) {
  const styles =
    variant === "obsidian"
      ? "bg-obsidian text-stone-base hover:bg-deep-current"
      : "bg-stone-base text-obsidian hover:bg-thermal-rose";
  return (
    <A
      href={href}
      className={`${styles} inline-flex items-center gap-2 px-6 py-4 text-sm font-medium uppercase tracking-[0.18em] rounded-[2px] transition-colors`}
    >
      {children}
    </A>
  );
}

const RESOURCES = [
  {
    n: "01",
    title: "Installation & Maintenance Videos",
    body: "Step-by-step guidance on setup, connecting and commissioning your system, routine maintenance, filter changes, cleaning procedures, troubleshooting, and best practices for performance and longevity.",
    cta: "Watch Videos →",
    href: LINKS.videos,
  },
  {
    n: "02",
    title: "Product Cards",
    body: "A quick overview of each product: key features, technical specs, dimensions, capacity, power requirements, included accessories, warranty details, and main benefits.",
    cta: "View Product Cards →",
    href: LINKS.productCards,
  },
  {
    n: "03",
    title: "Manuals & Warranty Information",
    body: "Full product manuals covering safety, technical specifications, installation, electrical and water connections, commissioning, controller operation, filter and UV lamp maintenance, error codes, troubleshooting, and warranty.",
    cta: "Open Manuals →",
    href: LINKS.manuals,
  },
];

const MANUAL_TOPICS = [
  "General safety",
  "Product overview & key components",
  "Technical specifications",
  "Transportation & installation",
  "Electrical connection requirements",
  "Hose, drain & water connections",
  "Pool setup & commissioning",
  "Filling, priming & circulation",
  "Controller operation & settings",
  "Temperature modes & timers",
  "Safe pool use",
  "Water level management",
  "Filter maintenance & replacement",
  "UV lamp replacement",
  "Water replacement & ongoing maintenance",
  "Error codes & troubleshooting",
  "Warranty information",
];

const SUPPORT_CATEGORIES = [
  {
    name: "Ice Baths",
    count: 5,
    active: true,
    articles: [
      { title: "Chiller is not pumping water after filter change / initial setup", active: true, href: LINKS.manuals },
      { title: "Error codes: E11, E12 & E13", href: LINKS.manuals },
      { title: "I have switched on my chiller but the screen is blank", href: LINKS.manuals },
      { title: "Setup & installation (Ice Baths)", href: LINKS.manuals },
      { title: "Filter change & UV lamp replacement", href: LINKS.manuals },
    ],
  },
  { name: "Setup & Installation", count: 4, articles: [] },
  { name: "Maintenance", count: 6, articles: [] },
  { name: "Warranty & Returns", count: 3, articles: [] },
];

function AftercarePage() {
  return (
    <main className="font-body text-obsidian bg-stone-base">
      {/* HERO */}
      <section className="bg-obsidian text-stone-base border-b border-stone-base/20">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20 pt-10 pb-20 md:pt-14 md:pb-28 lg:pt-16 lg:pb-40 min-h-[85vh] flex flex-col">
          <SectionLabel tone="stone">Customer Aftercare</SectionLabel>

          <div className="mt-16 md:mt-24 lg:mt-32 flex-1 flex flex-col justify-end">
            <h1
              className="font-display font-bold uppercase leading-[0.9] tracking-[-0.02em]"
              style={{ fontSize: "clamp(2.75rem, 10vw, 8.5rem)" }}
            >
              Aftercare
              <br />& Support
            </h1>

            <p className="mt-10 md:mt-14 font-editorial text-xl md:text-2xl lg:text-3xl leading-snug max-w-3xl italic text-stone-base/90">
              Everything you need to set up, maintain, and get the most from your
              C11 recovery equipment.
            </p>
          </div>
        </div>
      </section>

      {/* RESOURCES */}
      <section className="bg-stone-base border-b border-obsidian">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20 py-20 md:py-28">
          <div className="flex items-baseline justify-between flex-wrap gap-6">
            <SectionLabel>Resources</SectionLabel>
            <p className="font-editorial italic text-obsidian/70 text-lg max-w-md">
              Engineered to restore — supported at every step.
            </p>
          </div>

          <div className="mt-14 md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-px bg-obsidian border border-obsidian rounded-[2px] overflow-hidden">
            {RESOURCES.map((r) => (
              <article
                key={r.n}
                className="bg-stone-base p-8 md:p-10 lg:p-12 flex flex-col min-h-[420px]"
              >
                <div className="font-display text-5xl md:text-6xl font-bold text-obsidian">
                  {r.n}
                </div>
                <h3 className="mt-8 font-display text-2xl md:text-[1.65rem] font-bold leading-tight uppercase tracking-tight">
                  {r.title}
                </h3>
                <p className="mt-4 text-[0.95rem] leading-relaxed text-obsidian/80">
                  {r.body}
                </p>
                <div className="mt-auto pt-10">
                  <ArrowLink href={r.href}>{r.cta}</ArrowLink>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* MANUALS CONTENTS */}
      <section className="bg-stone-base border-b border-obsidian">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20 py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-4">
              <SectionLabel>Inside the manuals</SectionLabel>
              <h2 className="mt-6 font-display uppercase font-bold leading-[0.95] tracking-tight text-4xl md:text-5xl">
                What the manuals cover
              </h2>
              <p className="mt-6 font-editorial italic text-lg text-obsidian/70 max-w-sm">
                A complete reference for owning, operating, and maintaining your
                C11 system.
              </p>
            </div>

            <ul className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-x-10 border-t border-obsidian">
              {MANUAL_TOPICS.map((t, i) => (
                <li
                  key={t}
                  className="border-b border-obsidian/80 py-4 flex items-baseline gap-4 text-[0.95rem]"
                >
                  <span className="font-display text-xs tabular-nums text-obsidian/50 w-6">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FILTERS BANNER */}
      <section className="bg-thermal-rose text-obsidian border-b border-obsidian">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20 py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8">
              <SectionLabel>Replacement Filters</SectionLabel>
              <h2
                className="mt-6 font-display font-bold uppercase leading-[0.9] tracking-[-0.01em]"
                style={{ fontSize: "clamp(2.25rem, 6vw, 5.25rem)" }}
              >
                Keep your water
                <br />
                pristine.
              </h2>
              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-obsidian/85">
                Easily order genuine replacement filters for your ice bath to
                maintain optimal water quality, filtration performance, and
                long-term reliability.
              </p>
            </div>
            <div className="lg:col-span-4 lg:justify-self-end">
              <SolidButton href={LINKS.filters} variant="obsidian">
                Order Replacement Filters →
              </SolidButton>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="bg-obsidian text-stone-base border-b border-stone-base/20">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20 py-20 md:py-28">
          <SectionLabel tone="stone">Reviews</SectionLabel>
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8">
              <p
                className="font-editorial italic leading-[1.05] tracking-tight"
                style={{ fontSize: "clamp(1.75rem, 4.5vw, 3.75rem)" }}
              >
                Thank you for your purchase — we hope you love your new ice
                bath.
              </p>
              <p className="mt-8 max-w-2xl text-base md:text-lg leading-relaxed text-stone-base/80">
                If C11 has become part of your recovery, we'd love to hear about
                it. Reading — and leaving — reviews helps other athletes,
                clinicians, and performance-focused owners discover the brand.
              </p>
            </div>
            <div className="lg:col-span-4 lg:justify-self-end">
              <SolidButton href={LINKS.review} variant="stone">
                Leave a Google Review →
              </SolidButton>
            </div>
          </div>
        </div>
      </section>

      {/* SOCIALS + FOOTER */}
      <section className="bg-stone-base">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20 py-16 md:py-20">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 pb-10 border-b border-obsidian">
            <SectionLabel>Follow C11</SectionLabel>
            <div className="flex flex-wrap gap-3">
              {[
                { name: "Instagram", href: LINKS.instagram },
                { name: "LinkedIn", href: LINKS.linkedin },
                { name: "TikTok", href: LINKS.tiktok },
              ].map((s) => (
                <A
                  key={s.name}
                  href={s.href}
                  className="inline-flex items-center px-5 py-3 border border-obsidian rounded-[2px] text-xs uppercase tracking-[0.2em] font-medium hover:bg-obsidian hover:text-stone-base transition-colors"
                >
                  {s.name}
                </A>
              ))}
            </div>
          </div>

          <div className="mt-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-xs uppercase tracking-[0.2em] text-obsidian/70">
            <span>©2026 C11® All Rights Reserved</span>
            <span className="font-editorial italic normal-case tracking-normal text-base text-obsidian">
              engineered to restore.
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
