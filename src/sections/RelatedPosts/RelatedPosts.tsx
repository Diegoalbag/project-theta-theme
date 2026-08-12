import { cn } from "@/lib/utils";
import type { ArticleProp } from "@/types";

export interface RelatedPostsProps {
  /** Optional related-post list threaded through the platform's `recordProps`
   * seam (project-theta-fe D-4/D-10) -- NOT a twelfth `ArticleProp` field, a
   * sibling of `article`/`archive` on the same seam. Absent or empty renders
   * nothing: an empty related-posts block is worse than none (D-5). */
  relatedPosts?: ArticleProp[] | null;
  sectionId?: string;
  sectionName?: string;
  heading?: string;
  columns?: number;
  backgroundColor?: string;
}

/**
 * The post-detail path for a given slug, or `null` for an empty slug.
 * Mirrors `Archive.tsx`'s own `postHref` in this repo (there is no shared
 * blog-path module between sections, so each section composes its own; both
 * mirror project-theta-fe's `templates/theme-site/lib/blog-pagination.ts`
 * path algebra byte-for-byte). Written as a literal template rather than
 * through an interpolated module constant -- Phase 22 Plan 08 found that
 * minification drops a constant's literal text at its interpolation site,
 * which would fail a built-bundle content assertion even though the
 * composed runtime value stays correct.
 */
function postHref(slug: string): string | null {
  if (!slug) return null;
  return `/blog/${encodeURIComponent(slug)}`;
}

/**
 * An ordinary, OPTIONAL `related-posts` section (project-theta-fe D-10) --
 * deliberately NOT a reserved platform key and NOT a required slot, so a
 * theme that omits it is still a fully valid article-supporting theme, and
 * the `article-body` reserved slot stays focused on prose. Reads
 * `relatedPosts` off the SAME `recordProps` seam that already threads
 * `article` to every section rendered inside an `article` template
 * (project-theta-fe D-4) -- not a new injection mechanism.
 *
 * Renders one real internal anchor per related post, composed theme-side
 * from the post's own `slug` via `postHref` above (the published contract
 * carries no `url` field). An absent or empty related-post list renders no
 * markup at all, matching D-5's "no taxonomy, no siblings -> no
 * related-posts block" rule -- an empty shell is worse than nothing. A
 * related post with an empty slug renders as plain text, never as a link to
 * the listing root, the same guard `Archive.tsx`'s `postHref` establishes.
 */
export const RelatedPosts = ({
  relatedPosts,
  heading = "Related posts",
  columns = 3,
  backgroundColor,
}: RelatedPostsProps) => {
  if (!relatedPosts || relatedPosts.length === 0) return null;

  return (
    <section
      className="section-padding-y"
      style={{ backgroundColor: backgroundColor || undefined }}
      aria-label="Related posts"
    >
      <div className="container-padding-x container mx-auto flex flex-col gap-6">
        <h2 className="heading-lg">{heading}</h2>
        <div
          className={cn("grid gap-6")}
          style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}
        >
          {relatedPosts.map((post) => {
            const href = postHref(post.slug);
            return (
              <article
                key={post.documentId}
                className="flex flex-col gap-2 rounded-xl border border-border p-4"
              >
                {post.featuredImage?.url && (
                  <img
                    src={post.featuredImage.url}
                    alt={post.title || ""}
                    className="aspect-video w-full rounded-lg object-cover"
                  />
                )}
                <h3 className="heading-sm">
                  {href ? <a href={href}>{post.title}</a> : post.title}
                </h3>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export const relatedPostsSettingsSchema = [
  {
    id: "heading",
    label: "Heading",
    type: "text",
    default: "Related posts",
  },
  {
    id: "columns",
    label: "Columns",
    type: "number",
    default: 3,
    min: 1,
    max: 4,
  },
  {
    id: "backgroundColor",
    label: "Background color",
    type: "color",
    default: "#ffffff",
  },
];
