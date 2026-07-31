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

function SiteHeader() {
  const navLink =
    "text-[11px] uppercase tracking-[0.18em] font-medium text-obsidian/70 hover:text-obsidian transition-colors";
  const activeCls = "text-obsidian border-b border-obsidian";
  return (
    <header className="sticky top-0 z-50 bg-stone-base/95 backdrop-blur border-b border-obsidian/15">
      <div className="mx-auto max-w-7xl px-6 md:px-12 h-14 flex items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-2 group" aria-label="C11 Recovery - Home">
          <img src={c11Logo.url} alt="C11 Recovery" className="h-6 md:h-7 w-auto" />
        </Link>
        <nav className="flex items-center gap-6 md:gap-8">
          <Link
            to="/"
            activeOptions={{ exact: true }}
            className={navLink}
            activeProps={{ className: `${navLink} ${activeCls} pb-0.5` }}
          >
            Aftercare
          </Link>
          <Link
            to="/videos"
            className={navLink}
            activeProps={{ className: `${navLink} ${activeCls} pb-0.5` }}
          >
            Videos
          </Link>
          <Link
            to="/manual"
            className={navLink}
            activeProps={{ className: `${navLink} ${activeCls} pb-0.5` }}
          >
            Manual
          </Link>
          <a
            href="mailto:service@c11recovery.com"
            className="hidden md:inline text-[11px] uppercase tracking-[0.18em] font-medium text-deep-current hover:text-obsidian transition-colors"
          >
            Contact →
          </a>
        </nav>
      </div>
    </header>
  );
}

