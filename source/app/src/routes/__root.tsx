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
import { button } from "@higgsfield/quanta/button";
import { NotFound } from "@higgsfield/quanta/not-found";

import appCss from "../site-entry.css?url";
import siteCss from "../site.css?url";
import { reportHiggsfieldError } from "../lib/higgsfield-error-reporting";
// Page metadata (browser <title>/favicon + social og: tags) committed into the
// repo by the marketplace meta API and read at BUILD time — no runtime fetch.
// Editing it via the app settings UI rewrites this file and redeploys the app.
import appMetaJson from "../app-meta.json";

declare const __HF_DESIGN_INSPECTOR__: boolean;

// Built-in defaults for any field that isn't set in app-meta.json.
const DEFAULT_TITLE = "Topri.io — AI Callers for Real Estate Investors";
const DEFAULT_DESCRIPTION =
  "Topri is an AI caller for real estate investors and wholesalers. It calls every seller lead in under 60 seconds, follows up until they answer, and books qualified appointments on your calendar.";

// Canonical site identity. Topri.io is a single-page marketing site, so every
// canonical / og:url / structured-data URL resolves to this origin.
const SITE_URL = "https://topri.io";
const SITE_NAME = "Topri.io";
const SITE_LOCALE = "en_US";
const THEME_COLOR = "#FBF7F2";
const SALES_URL = "https://calendly.com/realleadin/30min";
const KEYWORDS = [
  "AI caller for real estate",
  "real estate cold calling AI",
  "outbound calling for wholesalers",
  "seller lead follow-up",
  "speed to lead",
  "real estate acquisitions AI",
  "appointment setting AI",
  "AI phone agent for investors",
].join(", ");
// The composed Open Graph card is a 3:2 (2048x1360) image.
const OG_IMAGE_WIDTH = "2048";
const OG_IMAGE_HEIGHT = "1360";
const OG_IMAGE_ALT =
  "Topri.io — AI callers for real estate. A friendly rotary phone beside a small house.";

type AppMeta = {
  og_title?: string | null;
  og_description?: string | null;
  og_image_url?: string | null;
  favicon_url?: string | null;
  og_video_url?: string | null;
};

const appMeta = appMetaJson as AppMeta;

// Build the document head (title / description / og: / twitter: / favicon) from
// app-meta.json, falling back to the defaults above for any unset field.
// og_title/og_description double as the browser <title> and meta description;
// og_image_url (when set) also drives the twitter card + image. Built from
// inline tag literals (conditional spreads for the optional image/favicon) so
// it matches the head() shape TanStack expects.
// favicon/og images live in THIS app's own /assets, so the host is never
// inherent. app-meta.json may carry an absolute higgsfield-app URL with a STALE
// host — baked from the app this one was copied/remixed/renamed from — which would
// serve the wrong app's favicon/og. Strip any higgsfield-app host (prod
// higgsfield.app + dev higgsfield-dev.app) down to a root-relative path so it
// always resolves against whoever serves THIS page (preview / prod / custom
// domain). Genuinely external URLs (a CDN image the owner set) are left absolute.
const APP_HOST_ZONES = ["higgsfield.app", "higgsfield-dev.app"];

function toOwnAssetUrl(value: string | null | undefined): string | null {
  if (!value) return null;
  if (value.startsWith("/")) return value; // already root-relative
  try {
    const u = new URL(value);
    const isAppHost = APP_HOST_ZONES.some(
      (zone) => u.hostname === zone || u.hostname.endsWith(`.${zone}`),
    );
    if (isAppHost) return u.pathname + u.search;
    return value; // external host (CDN, etc.) — keep absolute
  } catch {
    return value; // not a parseable URL — leave as-is
  }
}

function buildHead(meta: AppMeta) {
  const title = meta.og_title ?? DEFAULT_TITLE;
  const description = meta.og_description ?? DEFAULT_DESCRIPTION;
  const ogImage = toOwnAssetUrl(meta.og_image_url);
  const favicon = toOwnAssetUrl(meta.favicon_url);
  const ogVideo = toOwnAssetUrl(meta.og_video_url);

  const canonical = `${SITE_URL}/`;

  return {
    meta: [
      { charSet: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1, viewport-fit=cover",
      },
      { title },
      { name: "description", content: description },
      { name: "keywords", content: KEYWORDS },
      {
        name: "robots",
        content:
          "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      },
      { name: "author", content: SITE_NAME },
      { name: "publisher", content: SITE_NAME },
      { name: "application-name", content: SITE_NAME },
      { name: "apple-mobile-web-app-title", content: "Topri" },
      { name: "apple-mobile-web-app-capable", content: "yes" },
      { name: "apple-mobile-web-app-status-bar-style", content: "default" },
      { name: "mobile-web-app-capable", content: "yes" },
      { name: "theme-color", content: THEME_COLOR },
      { name: "format-detection", content: "telephone=no" },

      // Open Graph (Facebook, LinkedIn, Slack, Discord, iMessage, WhatsApp).
      { property: "og:site_name", content: SITE_NAME },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: canonical },
      { property: "og:locale", content: SITE_LOCALE },
      ...(ogImage
        ? [
            { property: "og:image", content: ogImage },
            { property: "og:image:secure_url", content: ogImage },
            { property: "og:image:type", content: "image/png" },
            { property: "og:image:width", content: OG_IMAGE_WIDTH },
            { property: "og:image:height", content: OG_IMAGE_HEIGHT },
            { property: "og:image:alt", content: OG_IMAGE_ALT },
          ]
        : []),

      // Cover video (og:video) — the animated counterpart of og:image; the
      // Higgsfield feed cards also play it on hover.
      ...(ogVideo ? [{ property: "og:video", content: ogVideo }] : []),

      // Twitter / X card.
      { name: "twitter:card", content: ogImage ? "summary_large_image" : "summary" },
      { name: "twitter:site", content: "@topri" },
      { name: "twitter:creator", content: "@topri" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      ...(ogImage
        ? [
            { name: "twitter:image", content: ogImage },
            { name: "twitter:image:alt", content: OG_IMAGE_ALT },
          ]
        : []),
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "stylesheet", href: siteCss },
      { rel: "canonical", href: canonical },
      { rel: "alternate", hrefLang: "en", href: canonical },
      { rel: "alternate", hrefLang: "x-default", href: canonical },
      { rel: "manifest", href: "/manifest.webmanifest" },
      { rel: "apple-touch-icon", sizes: "180x180", href: "/assets/icon-180.png" },
      { rel: "icon", type: "image/png", sizes: "512x512", href: "/assets/icon-512.png" },
      { rel: "icon", type: "image/png", sizes: "192x192", href: "/assets/icon-192.png" },
      ...(favicon ? [{ rel: "icon", type: "image/svg+xml", href: favicon }] : []),
    ],
  };
}

// Schema.org JSON-LD (@graph): Organization + WebSite + WebPage +
// SoftwareApplication, cross-linked by @id. Rendered as one <script> in the
// document head so Google's Rich Results Test sees it in the static HTML.
function buildJsonLd(meta: AppMeta) {
  const title = meta.og_title ?? DEFAULT_TITLE;
  const description = meta.og_description ?? DEFAULT_DESCRIPTION;
  const ogImage = meta.og_image_url ?? undefined;
  const canonical = `${SITE_URL}/`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: SITE_NAME,
        alternateName: "Topri",
        url: canonical,
        logo: `${SITE_URL}/assets/icon-512.png`,
        description:
          "Outbound AI callers and follow-up systems for real estate investors and wholesalers.",
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "sales",
          url: SALES_URL,
          availableLanguage: ["en"],
        },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: canonical,
        name: SITE_NAME,
        description,
        inLanguage: "en-US",
        publisher: { "@id": `${SITE_URL}/#organization` },
      },
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/#webpage`,
        url: canonical,
        name: title,
        description,
        inLanguage: "en-US",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${SITE_URL}/#organization` },
        ...(ogImage ? { primaryImageOfPage: ogImage } : {}),
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${SITE_URL}/#app`,
        name: SITE_NAME,
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        description,
        url: canonical,
        provider: { "@id": `${SITE_URL}/#organization` },
        offers: {
          "@type": "Offer",
          price: "997",
          priceCurrency: "USD",
          url: canonical,
          availability: "https://schema.org/InStock",
          description: "Founding rate, billed monthly.",
        },
      },
    ],
  };
}

function NotFoundComponent() {
  return (
    <div className="flex min-h-dvh items-center justify-center bg-q-background-primary px-4">
      <NotFound
        className="mx-auto max-w-md"
        icon={<span className="text-q-title-md-semi-bold text-q-text-primary">404</span>}
        title="Page not found"
        subtitle="The page you're looking for doesn't exist or has been moved."
      >
        <Link to="/" className={button({ variant: "primary", size: "md" }, "mt-3")}>
          Go home
        </Link>
      </NotFound>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportHiggsfieldError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-dvh items-center justify-center bg-q-background-primary px-4">
      <div className="max-w-md text-center">
        <h1 className="text-q-title-lg-semi-bold text-q-text-primary">This page didn't load</h1>
        <p className="mt-2 text-q-body-sm-regular text-q-text-secondary">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-4 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className={button({ variant: "primary", size: "md" })}
          >
            Try again
          </button>
          <a href="/" className={button({ variant: "outline", size: "md" })}>
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  // Read the committed page metadata at build time (no runtime fetch).
  head: () => buildHead(appMeta),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en" style={{ colorScheme: "light" }}>
      {/* This is a light (cream) marketing site, not a Quanta dark-theme app.
          The cream canvas is set on html/body in site.css so there is no dark
          flash before the React tree paints. */}
      <head>
        <HeadContent />
        <script
          type="application/ld+json"
          // Structured data must be inlined in the SSR head so crawlers and
          // Google's Rich Results Test read it without executing the app.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(buildJsonLd(appMeta)) }}
        />
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

  useEffect(() => {
    if (!__HF_DESIGN_INSPECTOR__) {
      return;
    }

    void import("../module/design-inspector/runtime")
      .then(({ installHiggsfieldDesignInspector }) => {
        installHiggsfieldDesignInspector();
      })
      .catch((error) => {
        reportHiggsfieldError(
          error instanceof Error ? error : new Error("Failed to load design inspector"),
          {
            boundary: "higgsfield_design_inspector_import",
          },
        );
      });
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
