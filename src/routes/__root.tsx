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

const SECTION_TABS = [
  { label: "Aftercare", to: "/", exact: true },
  { label: "Videos", to: "/videos", exact: false },
  { label: "Manual", to: "/manual", exact: false },
  { label: "Register", to: "/register", exact: false },
  { label: "Support form", to: "/support-request", exact: false },
] as const;

function SiteHeader() {
  const tab =
    "relative py-4 text-[13px] uppercase tracking-[0.18em] text-obsidian/60 hover:text-obsidian transition-colors whitespace-nowrap";
  const tabActive =
    "text-obsidian after:absolute after:left-0 after:right-0 after:-bottom-px after:h-[2px] after:bg-obsidian";

  return (
    <header className="sticky top-0 z-50 bg-stone-base/95 backdrop-blur border-b border-obsidian/15">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20">
        {/* Brand row - returns to the main site */}
        <div className="flex items-center justify-between gap-6 py-4 md:py-5">
          <a href={`${SITE}/`} className="shrink-0" aria-label="C11 Recovery - main site">
            <img src={c11Logo.url} alt="C11 Recovery" className="h-6 md:h-8 w-auto" />
          </a>
          <div className="flex items-center gap-6">
            <span className="hidden md:inline font-editorial italic text-[15px] text-obsidian/70">
              engineered to restore.
            </span>
            <a
              href={`${SITE}/`}
              className="text-[13px] uppercase tracking-[0.18em] text-obsidian/70 hover:text-deep-current transition-colors whitespace-nowrap"
            >
              ← c11recovery.com
            </a>
          </div>
        </div>

        {/* Section tabs - this micro-site sits as one tab of the main site */}
        <div className="flex items-center gap-6 md:gap-9 overflow-x-auto border-t border-obsidian/15">
          <span className="hidden md:inline py-4 text-[13px] uppercase tracking-[0.18em] text-obsidian">
            ✳ Aftercare
          </span>
          <nav className="flex items-center gap-6 md:gap-9">
            {SECTION_TABS.map((t) => (
              <Link
                key={t.to}
                to={t.to}
                activeOptions={t.exact ? { exact: true } : undefined}
                className={tab}
                activeProps={{ className: `${tab} ${tabActive}` }}
              >
                {t.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}


