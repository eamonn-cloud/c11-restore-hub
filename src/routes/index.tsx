import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { Instagram, Linkedin } from "lucide-react";

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V9.01a8.16 8.16 0 0 0 4.77 1.52V7.09a4.85 4.85 0 0 1-1.84-.4z" />
  </svg>
);
import kinosImg from "@/assets/kinos.png.asset.json";
import kinosPlusImg from "@/assets/kinos-plus.png.asset.json";
import hankiImg from "@/assets/hanki.png.asset.json";
import kuuraImg from "@/assets/kuura.png.asset.json";
import chuManual from "@/assets/chu-manual.pdf.asset.json";
import chuWifiManual from "@/assets/chu-wifi-manual.pdf.asset.json";
import kinosManual from "@/assets/kinos-manual.pdf.asset.json";
import kinosOnePager from "@/assets/kinos-one-pager.pdf.asset.json";
import kinosProblems from "@/assets/kinos-problems.pdf.asset.json";
import kinosPlusManual from "@/assets/kinos-plus-manual.pdf.asset.json";
import kinosPlusOnePager from "@/assets/kinos-plus-one-pager.pdf.asset.json";
import kuuraManual from "@/assets/kuura-manual.pdf.asset.json";



export const Route = createFileRoute("/")({
  component: AftercarePage,
});

// Central link config — swap real URLs here later.
const CONTACT = {
  whatsappNumber: "+353 85 142 6203",
  whatsappHref: "https://wa.me/353851426203",
  phoneDisplay: "+353 85 142 6203",
  phoneHref: "tel:+353851426203",
  email: "support@c11recovery.com",
  emailHref: "mailto:support@c11recovery.com",
  hours: "Mon–Fri · 9:00–17:30 GMT",
  responseTime: "Replies within 1 working day.",
};

const LINKS = {
  videos: "/videos",
  productCards: "#",
  manuals: chuManual.url,
  chuManual: chuManual.url,
  filters: "https://c11recovery.com/avantopool-ice-baths/?ts=1784206761",
  review: "https://g.page/r/CQUuYSv-ChSqEBM/review",
  instagram: "https://www.instagram.com/c11recovery?igsh=MTExODd2dWRsb2ho&utm_source=qr",
  linkedin: "https://www.linkedin.com/company/c11-recovery/",
  tiktok: "https://www.tiktok.com/@c11recovery?_r=1&_t=ZN-9858JOdo3tO",
  whatsapp: "https://wa.me/353851426203",
  phone: "tel:+353851426203",
  email: "mailto:support@c11recovery.com",
  register: "mailto:support@c11recovery.com?subject=Product%20Registration",
  warranty: "mailto:support@c11recovery.com?subject=Warranty%20Claim",
  service: "mailto:support@c11recovery.com?subject=Service%20Request",
  privacy: "https://c11recovery.com/privacy-policy/",
  terms: "https://c11recovery.com/terms-conditions/",
  returns: "mailto:support@c11recovery.com?subject=Returns%20%26%20Refunds",
};

type ModelResources = {
  key: string;
  name: string;
  tagline: string;
  image: string;
  videos: string;
  productCard: string;
  manual: string;
  controllerManual?: string;
  problems?: string;
};

const MODELS: ModelResources[] = [
  {
    key: "kinos",
    name: "Kinos",
    tagline: "Compact chilled ice bath.",
    image: kinosImg.url,
    videos: "/videos",
    productCard: kinosOnePager.url,
    manual: kinosManual.url,
    problems: kinosProblems.url,
  },
  {
    key: "kinos-plus",
    name: "Kinos Plus",
    tagline: "Extended capacity, same precision.",
    image: kinosPlusImg.url,
    videos: "/videos",
    productCard: kinosPlusOnePager.url,
    manual: kinosPlusManual.url,
    controllerManual: chuWifiManual.url,
  },
  {
    key: "hanki",
    name: "Hanki",
    tagline: "Twin-bath performance system.",
    image: hankiImg.url,
    videos: "/videos",
    productCard: "#",
    manual: chuManual.url,
    controllerManual: chuWifiManual.url,
  },
  {
    key: "kuura",
    name: "Kuura",
    tagline: "Flagship recovery pool.",
    image: kuuraImg.url,
    videos: "/videos",
    productCard: "#",
    manual: kuuraManual.url,
    controllerManual: chuWifiManual.url,
  },
];


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

type Resource = {
  n: string;
  title: string;
  body: string;
  cta?: string;
  href?: string;
  links?: { label: string; href: string }[];
};

const RESOURCES: Resource[] = [
  {
    n: "01",
    title: "Installation & Maintenance Videos",
    body: "Step-by-step guidance on setup, connecting and commissioning your system, routine maintenance, filter changes, cleaning procedures, troubleshooting, and best practices for performance and longevity.",
    cta: "Browse Video Library →",
    href: LINKS.videos,
  },
  {
    n: "02",
    title: "Product Cards",
    body: "A quick overview of each product: key features, technical specs, dimensions, capacity, power requirements, included accessories, and main benefits.",
    cta: "View Product Cards →",
    href: LINKS.productCards,
  },
  {
    n: "03",
    title: "Manuals & Engineering Reference",
    body: "Full product manuals plus the C11 engineering reference — specs, controller calibration, error code matrix, P01 flow-fault workflow and field maintenance procedures.",
    links: [
      { label: "Open Manuals →", href: LINKS.manuals },
      { label: "Engineering Reference →", href: "/manual" },
    ],
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

];


const FAQS: { q: string; a: string }[] = [
  {
    q: "What warranty comes with my C11 ice bath?",
    a: "Every C11 ice bath is covered by a 2-year manufacturer warranty on the chiller and controller, and a 5-year structural warranty on the pool shell. Wear items — filters, UV lamps, seals — are consumables and not covered. Register your unit within 30 days of delivery to activate cover.",
  },
  {
    q: "How do I register my product?",
    a: "Email support@c11recovery.com with your name, delivery address, model, and serial number (found on the silver plate on the chiller housing). We'll confirm registration and file your warranty on our side.",
  },
  {
    q: "Where do I find my serial number?",
    a: "The serial number is printed on the silver rating plate on the side or rear of the chiller unit. It begins with the model code (e.g. KIN-, KP-, HAN-, KUU-) followed by a batch and unit number.",
  },
  {
    q: "What water chemistry should I run?",
    a: "C11 ice baths run on ozone as the primary sanitiser with light chlorine or bromine backup. Keep pH between 7.2 and 7.6. We recommend testing water twice weekly and doing a full water change every 4–6 weeks depending on use.",
  },
  {
    q: "How often should I change the filter?",
    a: "Rinse the cartridge weekly and replace it every 4–8 weeks depending on bather load. Replace the UV lamp every 12 months. Order genuine filters via the Replacement Filters button on this page.",
  },
  {
    q: "What are the electrical and plumbing requirements?",
    a: "Kinos and Kinos Plus run on a standard 13A / 230V socket. Hanki and Kuura require a dedicated 16A supply. All models need a level base, a nearby drain for water changes, and a covered position for the chiller unit. Full specs are in the manual for each model.",
  },
  {
    q: "Can I leave the ice bath outside in winter?",
    a: "Yes — the chiller and pool are designed for year-round outdoor use down to –20°C provided the unit is powered and circulating. If you plan to leave it unpowered for more than 48 hours in sub-zero conditions, drain the system fully. Winterisation steps are covered in the manual.",
  },
  {
    q: "Do you offer installation?",
    a: "White-glove installation is available across Ireland and the UK for Hanki and Kuura. Kinos and Kinos Plus are designed for owner setup with the guidance of the installation video and manual. Contact us for an install quote.",
  },
  {
    q: "How do I return my order?",
    a: "Unused, undamaged units can be returned within 14 days of delivery under our returns policy. Email support@c11recovery.com with your order number to start the process.",
  },
  {
    q: "What if I need spare parts other than filters?",
    a: "For pumps, seals, controllers, hoses, covers or steps, contact support with your model and serial number and we'll quote genuine parts and lead time.",
  },
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

        {/* Slogan strip */}
        <div className="border-t border-stone-base/20">
          <div className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20 py-6 md:py-7 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs md:text-sm uppercase tracking-[0.2em] text-stone-base/80">
            {[
              "Recovery for modern routines.",
              "Performance-led recovery, installs & experiences.",
              "Built for what comes next.",
            ].map((s, i) => (
              <span key={s} className="inline-flex items-center gap-8">
                {i > 0 && <span aria-hidden className="text-thermal-rose">✳</span>}
                <span>{s}</span>
              </span>
            ))}
          </div>
        </div>
      </section>




      {/* MODELS */}
      <section className="bg-stone-base border-b border-obsidian">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20 py-20 md:py-28">
          <div className="flex items-baseline justify-between flex-wrap gap-6">
            <SectionLabel>Select your model</SectionLabel>
            <p className="font-editorial italic text-obsidian/70 text-lg max-w-md">
              Aftercare tailored to each C11 ice bath.
            </p>
          </div>

          <h2 className="mt-6 font-display uppercase font-bold leading-[0.95] tracking-tight text-4xl md:text-5xl max-w-3xl">
            Choose your pool
          </h2>

          <div className="mt-14 md:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-obsidian border border-obsidian rounded-[2px] overflow-hidden">
            {MODELS.map((m, i) => (
              <article
                key={m.key}
                className="bg-stone-base p-8 md:p-10 flex flex-col min-h-[560px]"
              >
                <div className="flex items-baseline justify-between">
                  <span className="font-display text-xs tabular-nums text-obsidian/50 tracking-[0.16em]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span aria-hidden className="text-obsidian/40">✳</span>
                </div>
                <div className="mt-8 aspect-[4/3] bg-soft-mineral/30 border border-obsidian/10 rounded-[2px] overflow-hidden flex items-center justify-center">
                  <img
                    src={m.image}
                    alt={`${m.name} ice bath`}
                    loading="lazy"
                    className="w-full h-full object-contain mix-blend-multiply"
                  />
                </div>
                <h3 className="mt-8 font-display text-3xl md:text-4xl font-bold leading-none uppercase tracking-tight">
                  {m.name}
                </h3>
                <p className="mt-3 font-editorial italic text-obsidian/70 text-base leading-snug">
                  {m.tagline}
                </p>


                <ul className="mt-auto pt-10 flex flex-col gap-3 border-t border-obsidian/80">
                  {[
                    { label: "Videos", href: m.videos },
                    { label: "Product Card", href: m.productCard },
                    { label: "Manual", href: m.manual },
                    ...(m.controllerManual ? [{ label: "Wi-Fi Controller Manual", href: m.controllerManual }] : []),
                    ...(m.problems ? [{ label: "Problems & Solutions", href: m.problems }] : []),
                  ].map((l) => (
                    <li key={l.label}>
                      <A
                        href={l.href}
                        className="group flex items-center justify-between text-sm font-medium uppercase tracking-[0.16em] text-obsidian/80 hover:text-deep-current transition-colors"
                      >
                        <span>{l.label}</span>
                        <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
                      </A>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
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
                <div className="mt-auto pt-10 flex flex-col gap-3 items-start">
                  {r.links
                    ? r.links.map((l) => (
                        <ArrowLink key={l.href} href={l.href}>
                          {l.label}
                        </ArrowLink>
                      ))
                    : r.href && r.cta && <ArrowLink href={r.href}>{r.cta}</ArrowLink>}
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




      {/* FAQ */}
      <section className="bg-stone-base border-b border-obsidian">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20 py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-4">
              <SectionLabel>FAQ</SectionLabel>
              <h2 className="mt-6 font-display uppercase font-bold leading-[0.95] tracking-tight text-4xl md:text-5xl">
                Frequently
                <br />
                asked.
              </h2>
              <p className="mt-6 font-editorial italic text-lg text-obsidian/70 max-w-sm">
                Warranty, water chemistry, installation, winterisation — the
                answers most owners look for.
              </p>
              <div className="mt-8">
                <ArrowLink href={LINKS.whatsapp}>Can't find it? Ask us →</ArrowLink>
              </div>
            </div>

            <ul className="lg:col-span-8 border-t border-obsidian">
              {FAQS.map((f, i) => (
                <li key={f.q} className="border-b border-obsidian/80">
                  <details className="group">
                    <summary className="cursor-pointer list-none py-6 flex items-baseline gap-6">
                      <span className="font-display text-xs tabular-nums text-obsidian/50 w-8 shrink-0">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="flex-1 font-display text-lg md:text-xl font-bold uppercase tracking-tight leading-tight">
                        {f.q}
                      </span>
                      <span
                        aria-hidden
                        className="text-2xl leading-none text-obsidian/60 transition-transform group-open:rotate-45"
                      >
                        +
                      </span>
                    </summary>
                    <p className="pb-6 pl-14 pr-10 text-[0.95rem] leading-relaxed text-obsidian/80 max-w-3xl">
                      {f.a}
                    </p>
                  </details>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* WARRANTY & REGISTRATION */}
      <section className="bg-obsidian text-stone-base border-b border-stone-base/20">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20 py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8">
              <SectionLabel tone="stone">Warranty & Registration</SectionLabel>
              <h2
                className="mt-6 font-display font-bold uppercase leading-[0.9] tracking-[-0.01em]"
                style={{ fontSize: "clamp(2.25rem, 5.5vw, 4.5rem)" }}
              >
                Register your
                <br />
                unit in minutes.
              </h2>
              <p className="mt-8 max-w-2xl text-base md:text-lg leading-relaxed text-stone-base/80">
                Every C11 ice bath ships with a 2-year chiller warranty and a
                5-year pool shell warranty. Register within 30 days of delivery
                so we have your serial number on file — it makes any future
                service request faster.
              </p>
            </div>
            <div className="lg:col-span-4 lg:justify-self-end flex flex-col gap-3">
              <SolidButton href={LINKS.register} variant="stone">
                Register My Unit →
              </SolidButton>
              <ArrowLink href={LINKS.warranty} tone="stone">
                Make a Warranty Claim →
              </ArrowLink>
            </div>
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

      {/* CONTACT */}
      <section className="bg-stone-base border-b border-obsidian">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20 py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5">
              <SectionLabel>Talk to us</SectionLabel>
              <h2
                className="mt-6 font-display uppercase font-bold leading-[0.9] tracking-[-0.01em]"
                style={{ fontSize: "clamp(2.25rem, 5vw, 4rem)" }}
              >
                Human support,
                <br />
                on demand.
              </h2>
              <p className="mt-6 font-editorial italic text-lg text-obsidian/70 max-w-md">
                Prefer to speak to someone? Our team is here weekdays across
                every channel — WhatsApp is the fastest.
              </p>
              <p className="mt-8 text-xs uppercase tracking-[0.2em] text-obsidian/60">
                {CONTACT.hours} · {CONTACT.responseTime}
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-px bg-obsidian border border-obsidian rounded-[2px] overflow-hidden">
              <A
                href={LINKS.whatsapp}
                className="bg-stone-base p-8 md:p-10 flex flex-col justify-between hover:bg-thermal-rose transition-colors group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-[0.2em] font-medium">WhatsApp</span>
                  <span className="inline-flex items-center gap-2 text-[0.65rem] uppercase tracking-[0.2em] font-medium text-deep-current">
                    <span className="inline-block w-2 h-2 rounded-full bg-deep-current animate-pulse" />
                    Live
                  </span>
                </div>
                <div className="mt-16">
                  <div className="font-display text-2xl md:text-3xl font-bold uppercase tracking-tight leading-none">Chat now</div>
                  <div className="mt-3 font-editorial italic text-obsidian/70">{CONTACT.whatsappNumber}</div>
                  <div className="mt-6 text-sm uppercase tracking-[0.16em] font-medium border-b border-obsidian pb-1 inline-flex items-center gap-2">
                    Open WhatsApp
                    <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
                  </div>
                </div>
              </A>

              <A
                href={LINKS.phone}
                className="bg-stone-base p-8 md:p-10 flex flex-col justify-between hover:bg-soft-mineral/40 transition-colors group"
              >
                <span className="text-xs uppercase tracking-[0.2em] font-medium">Phone</span>
                <div className="mt-16">
                  <div className="font-display text-2xl md:text-3xl font-bold uppercase tracking-tight leading-none">Call the team</div>
                  <div className="mt-3 font-editorial italic text-obsidian/70">{CONTACT.phoneDisplay}</div>
                  <div className="mt-6 text-sm uppercase tracking-[0.16em] font-medium border-b border-obsidian pb-1 inline-flex items-center gap-2">
                    Dial now
                    <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
                  </div>
                </div>
              </A>

              <A
                href={LINKS.email}
                className="bg-stone-base p-8 md:p-10 flex flex-col justify-between hover:bg-soft-mineral/40 transition-colors group"
              >
                <span className="text-xs uppercase tracking-[0.2em] font-medium">Email</span>
                <div className="mt-16">
                  <div className="font-display text-2xl md:text-3xl font-bold uppercase tracking-tight leading-none">Send a note</div>
                  <div className="mt-3 font-editorial italic text-obsidian/70 break-all">{CONTACT.email}</div>
                  <div className="mt-6 text-sm uppercase tracking-[0.16em] font-medium border-b border-obsidian pb-1 inline-flex items-center gap-2">
                    Write to support
                    <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
                  </div>
                </div>
              </A>

              <A
                href={LINKS.service}
                className="bg-obsidian text-stone-base p-8 md:p-10 flex flex-col justify-between hover:bg-deep-current transition-colors group"
              >
                <span className="text-xs uppercase tracking-[0.2em] font-medium text-stone-base/80">Service request</span>
                <div className="mt-16">
                  <div className="font-display text-2xl md:text-3xl font-bold uppercase tracking-tight leading-none">Book a callback</div>
                  <div className="mt-3 font-editorial italic text-stone-base/70">Warranty, install & repairs</div>
                  <div className="mt-6 text-sm uppercase tracking-[0.16em] font-medium border-b border-current pb-1 inline-flex items-center gap-2">
                    Raise a ticket
                    <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
                  </div>
                </div>
              </A>
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
                { name: "Instagram", href: LINKS.instagram, Icon: Instagram },
                { name: "LinkedIn", href: LINKS.linkedin, Icon: Linkedin },
                { name: "TikTok", href: LINKS.tiktok, Icon: TikTokIcon },
              ].map((s) => (
                <A
                  key={s.name}
                  href={s.href}
                  aria-label={s.name}
                  className="inline-flex items-center gap-2 px-5 py-3 border border-obsidian rounded-[2px] text-xs uppercase tracking-[0.2em] font-medium hover:bg-obsidian hover:text-stone-base transition-colors"
                >
                  <s.Icon className="w-4 h-4" />
                  <span>{s.name}</span>
                </A>
              ))}
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-6 md:flex-row md:items-start md:justify-between text-xs uppercase tracking-[0.2em] text-obsidian/70">
            <div className="flex flex-wrap gap-x-6 gap-y-3">
              <A href={LINKS.whatsapp} className="hover:text-deep-current transition-colors">WhatsApp</A>
              <A href={LINKS.phone} className="hover:text-deep-current transition-colors">{CONTACT.phoneDisplay}</A>
              <A href={LINKS.email} className="hover:text-deep-current transition-colors normal-case tracking-normal">{CONTACT.email}</A>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-3">
              <A href={LINKS.privacy} className="hover:text-deep-current transition-colors">Privacy</A>
              <A href={LINKS.terms} className="hover:text-deep-current transition-colors">Terms</A>
              <A href={LINKS.returns} className="hover:text-deep-current transition-colors">Returns</A>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-obsidian/30 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-xs uppercase tracking-[0.2em] text-obsidian/70">
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
