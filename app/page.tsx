import { redirect } from "next/navigation";
import { fetchPages } from "@/lib/strapi-client";

/**
 * Homepage - redirects to the first page or a homepage if it exists
 */
export default async function HomePage() {
  let pages: Awaited<ReturnType<typeof fetchPages>>;
  
  try {
    pages = await fetchPages();
  } catch (error) {
    // Only catch errors from fetchPages, not redirect errors
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

  // Look for a page with slug "home" or "index"
  const homepage = pages.find((p) => p.slug === "home" || p.slug === "index");

  if (homepage) {
    redirect(`/${homepage.slug}`);
  }

  // Otherwise redirect to the first page
  if (pages.length > 0) {
    redirect(`/${pages[0].slug}`);
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
