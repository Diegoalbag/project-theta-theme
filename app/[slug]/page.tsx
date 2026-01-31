import { notFound } from "next/navigation";
import { fetchPages, fetchPageBySlug } from "@/lib/strapi-client";
import { PageRenderer } from "@/lib/page-renderer";

interface PageProps {
  params: Promise<{ slug: string }>;
}

/**
 * Generate static params for all pages at build time
 */
export async function generateStaticParams() {
  try {
    const pages = await fetchPages();
    return pages.map((page) => ({
      slug: page.slug,
    }));
  } catch (error) {
    console.error("Failed to generate static params:", error);
    return [];
  }
}

/**
 * Generate metadata for the page
 */
export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const page = await fetchPageBySlug(slug);

  if (!page) {
    return {
      title: "Page Not Found",
    };
  }

  return {
    title: page.title,
  };
}

/**
 * Page component that renders a single page
 */
export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const page = await fetchPageBySlug(slug);

  if (!page) {
    notFound();
  }

  // Get theme configuration from environment variables
  const themeBundleUrl = process.env.NEXT_PUBLIC_THEME_BUNDLE_URL;
  const themeName = process.env.NEXT_PUBLIC_THEME_NAME || "default";

  if (!themeBundleUrl || themeBundleUrl.trim() === '') {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center space-y-4 p-8">
          <p className="text-lg font-semibold text-destructive">Configuration Error</p>
          <p className="text-sm text-muted-foreground">
            Theme bundle URL is not configured
          </p>
          <div className="text-xs text-muted-foreground mt-4 space-y-2">
            <p>This usually means:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>The theme bundle was not built before deployment</li>
              <li>The THEME_BUNDLE_URL secret is not set in GitHub</li>
              <li>The bundle file was not found in the build branch</li>
            </ul>
            <p className="mt-2">Please check your GitHub Actions workflow and ensure the theme bundle is built and committed to the build branch.</p>
          </div>
        </div>
      </div>
    );
  }

  return <PageRenderer page={page} themeBundleUrl={themeBundleUrl} themeName={themeName} />;
}
