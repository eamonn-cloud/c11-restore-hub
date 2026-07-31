import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import c11Logo from "../assets/c11-logo.png.asset.json";
import { AskC11 } from "../components/AskC11";


function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Aftercare & Support - C11 Recovery" },
      {
        name: "description",
        content:
          "Everything you need to set up, maintain, and get the most from your C11 recovery equipment.",
      },
      { property: "og:title", content: "Aftercare & Support - C11 Recovery" },
      {
        property: "og:description",
        content:
          "Everything you need to set up, maintain, and get the most from your C11 recovery equipment.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "C11 Recovery" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Aftercare & Support - C11 Recovery" },
      { name: "twitter:description", content: "Everything you need to set up, maintain, and get the most from your C11 recovery equipment." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/a5f974fa-672b-47ac-8398-e83249530d52/id-preview-7804cae6--187cb04b-2235-49e1-9705-a525a123cb19.lovable.app-1784291248228.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/a5f974fa-672b-47ac-8398-e83249530d52/id-preview-7804cae6--187cb04b-2235-49e1-9705-a525a123cb19.lovable.app-1784291248228.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/png", href: c11Logo.url },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=EB+Garamond:ital,wght@0,400;0,500;1,400&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <SiteHeader />
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
      <AskC11 />
    </QueryClientProvider>
  );
}

const SITE = "https://c11recovery.com";

const MAIN_NAV = [
  { label: "Ice Baths", href: `${SITE}/avantopool-ice-baths/` },
  { label: "Saunas", href: `${SITE}/saunas/` },
  { label: "Recovery Truck", href: `${SITE}/recovery-room/` },
  { label: "Recovery Products", href: `${SITE}/shop/` },
  { label: "Hyperbaric Chamber", href: `${SITE}/hyperbaric-chamber/` },
  { label: "About C11", href: `${SITE}/about/` },
];

const SOCIALS = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/c11recovery?igsh=MTExODd2dWRsb2ho&utm_source=qr",
    path: "M12 2.2c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.8 3.8 0 0 1-1.38-.9 3.8 3.8 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.21 15.58 2.2 15.2 2.2 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.21 8.8 2.2 12 2.2Zm0 5.16a4.64 4.64 0 1 0 0 9.28 4.64 4.64 0 0 0 0-9.28Zm0 7.65a3.01 3.01 0 1 1 0-6.02 3.01 3.01 0 0 1 0 6.02Zm5.91-7.84a1.08 1.08 0 1 1-2.17 0 1.08 1.08 0 0 1 2.17 0Z",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/c11-recovery/",
    path: "M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.64h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.78 2.5 4.78 5.76V21h-4v-5.66c0-1.35-.03-3.08-1.9-3.08-1.9 0-2.2 1.46-2.2 2.98V21h-4V9Z",
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/353851426203",
    path: "M12.04 2a9.9 9.9 0 0 0-8.5 14.96L2 22l5.18-1.5A9.9 9.9 0 1 0 12.04 2Zm0 1.8a8.1 8.1 0 1 1-4.13 15.07l-.3-.18-3.07.89.9-3-.19-.31A8.1 8.1 0 0 1 12.04 3.8Zm4.66 10.3c-.25-.13-1.47-.72-1.7-.8-.23-.09-.4-.13-.56.12-.17.25-.64.8-.79.97-.14.16-.29.18-.54.06a6.6 6.6 0 0 1-1.95-1.2 7.3 7.3 0 0 1-1.34-1.68c-.14-.24-.01-.37.11-.5.11-.11.25-.29.37-.44.12-.15.16-.25.25-.42.08-.16.04-.31-.02-.44-.06-.12-.56-1.35-.77-1.85-.2-.48-.4-.42-.55-.42h-.47c-.16 0-.42.06-.64.31-.22.25-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.7 2.6 4.12 3.64.58.25 1.03.4 1.38.51.58.19 1.11.16 1.53.1.47-.07 1.47-.6 1.68-1.18.2-.58.2-1.07.15-1.18-.06-.11-.23-.18-.48-.3Z",
  },
];

function SiteHeader() {
  const navLink =
    "text-[15px] leading-none text-obsidian/80 hover:text-obsidian transition-colors whitespace-nowrap";
  const activeCls = "text-obsidian font-medium";
  return (
    <header className="sticky top-0 z-50 bg-stone-base/95 backdrop-blur">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12 h-16 md:h-20 grid grid-cols-[auto_minmax(0,1fr)] items-center gap-6">
        <Link to="/" className="shrink-0" aria-label="C11 Recovery - Home">
          <img src={c11Logo.url} alt="C11 Recovery" className="h-7 md:h-9 w-auto" />
        </Link>

        <div className="flex min-w-0 items-center justify-end gap-6 lg:gap-8">
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {MAIN_NAV.map((item) => (
              <a key={item.label} href={item.href} className={navLink}>
                {item.label}
              </a>
            ))}
          </nav>

          <nav className="flex items-center gap-5 md:gap-6 overflow-x-auto">
            <Link
              to="/"
              activeOptions={{ exact: true }}
              className={navLink}
              activeProps={{ className: `${navLink} ${activeCls}` }}
            >
              Aftercare
            </Link>
            <Link
              to="/videos"
              className={navLink}
              activeProps={{ className: `${navLink} ${activeCls}` }}
            >
              Videos
            </Link>
            <Link
              to="/manual"
              className={navLink}
              activeProps={{ className: `${navLink} ${activeCls}` }}
            >
              Manual
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-3 pl-2">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-obsidian text-stone-base hover:bg-deep-current transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className="h-4 w-4">
                  <path d={s.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}

