import { cn } from "@/lib/utils";
import type { ArchiveProp, ArticleProp } from "@/types";

export interface ArchiveProps {
  /** The published `archive` prop (project-theta-fe D-03/D-06). */
  archive?: ArchiveProp | null;
  sectionId?: string;
  sectionName?: string;
  /** Used only when `archive.term.kind === "all"` (the blog index) --
   * category and tag archives always show the term's own name instead. */
  fallbackHeading?: string;
  columns?: number;
  showExcerpt?: boolean;
  backgroundColor?: string;
}

function formatPublishedDate(publishedAt: string | null): string | null {
  if (!publishedAt) return null;
  const date = new Date(publishedAt);
  if (Number.isNaN(date.getTime())) return null;
  return date.toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/**
 * One card per post -- title, excerpt, featured image and published date
 * when present. `article` is the SAME `ArticleProp` shape the article
 * template's own sections receive; one published contract, used identically
 * on both surfaces. No card links to a post URL in this phase: routing is
 * Phase 22's, and a hand-built URL here would be a guess Phase 22 would
 * then have to unpick.
 */
function ArchiveCard({ article, showExcerpt }: { article: ArticleProp; showExcerpt: boolean }) {
  const publishedLabel = formatPublishedDate(article.publishedAt);

  return (
    <article className="flex flex-col gap-3 rounded-xl border border-border p-4">
      {article.featuredImage?.url && (
        <img
          src={article.featuredImage.url}
          alt={article.title || ""}
          className="aspect-video w-full rounded-lg object-cover"
        />
      )}
      <h3 className="heading-sm">{article.title}</h3>
      {showExcerpt && article.excerpt && (
        <p className="text-muted-foreground text-base">{article.excerpt}</p>
      )}
      {(article.category || publishedLabel) && (
        <div className="text-muted-foreground flex flex-wrap items-center gap-2 text-sm">
          {article.category && <span>{article.category.name}</span>}
          {article.category && publishedLabel && <span aria-hidden="true">&middot;</span>}
          {publishedLabel && <span>{publishedLabel}</span>}
        </div>
      )}
    </article>
  );
}

/**
 * D-03's reserved `archive-list` slot: ONE section covering `/blog`,
 * category archives and tag archives alike. `archive.term.kind` decides the
 * header (D-12): the blog index shows this section's own configured
 * heading, a category/tag archive shows the resolved term's name (and its
 * description, when non-empty). The section heading itself is always an
 * `h2` -- the top level stays the page's.
 */
export const Archive = ({
  archive,
  fallbackHeading = "Blog",
  columns = 3,
  showExcerpt = true,
  backgroundColor,
}: ArchiveProps) => {
  const posts = archive?.posts ?? [];
  const term = archive?.term ?? { kind: "all" as const, name: "", description: null };
  const isTermArchive = term.kind === "category" || term.kind === "tag";
  const heading = isTermArchive && term.name ? term.name : fallbackHeading;
  const description = isTermArchive ? term.description : null;
  // archive.page carries the numbers; the actual next/previous navigation is
  // Phase 22's, since it depends on route shapes that do not exist yet.
  const page = archive?.page ?? null;

  return (
    <section
      className="section-padding-y"
      style={{ backgroundColor: backgroundColor || undefined }}
      aria-label="Archive"
    >
      <div className="container-padding-x container mx-auto flex flex-col gap-10">
        <div className="flex flex-col gap-3">
          <h2 className="heading-lg">{heading}</h2>
          {description && <p className="text-muted-foreground text-base lg:text-lg">{description}</p>}
          {page && page.total > 0 && (
            <p className="text-muted-foreground text-sm">
              Showing {posts.length} of {page.total}
            </p>
          )}
        </div>

        {posts.length === 0 ? (
          <p className="text-muted-foreground text-base">No posts yet.</p>
        ) : (
          <div
            className={cn("grid gap-6")}
            style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}
          >
            {posts.map((article) => (
              <ArchiveCard key={article.documentId} article={article} showExcerpt={showExcerpt} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export const archiveSettingsSchema = [
  {
    id: "fallbackHeading",
    label: "Blog index heading",
    type: "text",
    default: "Blog",
    info: "Used only on the blog index -- category and tag archives show the term's own name.",
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
    id: "showExcerpt",
    label: "Show excerpt",
    type: "checkbox",
    default: true,
  },
  {
    id: "backgroundColor",
    label: "Background color",
    type: "color",
    default: "#ffffff",
  },
];
