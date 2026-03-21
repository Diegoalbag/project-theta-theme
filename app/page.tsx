import { fetchPages } from "@/lib/strapi-client";
import { HomeRedirect } from "./home-redirect";

/** Prevent static generation at build time */
export const dynamic = "force-dynamic";

/**
 * Homepage - redirects to the first page or a homepage if it exists.
 * Uses client-side redirect so redirect() is never called during build (avoids NEXT_REDIRECT build error).
 */
export default async function HomePage() {
  // During static/build phase only: skip fetch and return client redirect so no redirect() runs (avoids NEXT_REDIRECT build error)
  if (process.env.NEXT_PHASE === "phase-production-build" && typeof window === "undefined") {
    return <HomeRedirect to="/homepage" />;
  }

  let pages: Awaited<ReturnType<typeof fetchPages>>;

  try {
    pages = await fetchPages();
  } catch (error) {
    console.error("Failed to load pages:", error);
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <p className="text-lg font-semibold text-destructive">Error</p>
          <p className="text-sm text-muted-foreground">
            Failed to load pages
          </p>
        </div>
      </div>
    );
  }

  // Look for a page with isHomepage: true, or falling back to slug "home" or "index"
  const homepage = pages.find((p) => p.isHomepage) || pages.find((p) => p.slug === "home" || p.slug === "index");
  const targetPath = homepage ? `/${homepage.slug}` : pages.length > 0 ? `/${pages[0].slug}` : null;

  if (targetPath) {
    return <HomeRedirect to={targetPath} />;
  }

  // No pages found
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <p className="text-lg font-semibold">No pages found</p>
        <p className="text-sm text-muted-foreground">
          Please create pages in your CMS
        </p>
      </div>
    </div>
  );
}
