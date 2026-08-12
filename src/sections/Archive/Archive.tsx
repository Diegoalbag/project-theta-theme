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

/**
 * Blog URL path algebra, composed theme-side. This mirrors
 * `project-theta-fe`'s `templates/theme-site/lib/blog-pagination.ts`
 * (`resolveBlogBasePath`/`resolveBlogPaginationPath`) byte-for-byte: page 1
 * always collapses to the bare listing path, and every other page appends a
 * `/page/{n}` segment.
 *
 * The theme composes these paths itself rather than receiving a computed
 * URL because the published `ArticleProp`/`ArchiveProp` contract is frozen
 * at its current field count (D-12) -- a `url`/`href` field would have to
 * land in both mirrored contract modules, the drift test, and every theme
 * that already derives the same path from the `slug` it already holds.
 *
 * `archive.term` itself carries no slug field in the published contract --
 * only `kind`, `name` and `description`. A term-scoped listing's own slug
 * is therefore resolved from a matching post already present in `posts`
 * (every post on a category/tag archive page carries that same term), not
 * from a field that does not exist on `term`.
 */
const BLOG_BASE_PATH = "/blog";

type BlogSurfaceKind = "index" | "category" | "tag";

/** The post-detail path for a given slug, or `null` for an empty slug. */
function postHref(slug: string): string | null {
  if (!slug) return null;
  return `${BLOG_BASE_PATH}/${encodeURIComponent(slug)}`;
}

/** A category or tag archive's own path. */
function termHref(kind: "category" | "tag", slug: string): string {
  return `/blog/${kind}/${encodeURIComponent(slug)}`;
}

/**
 * The full listing path for a given surface, term slug and page --
 * reproducing the platform's page-1 collapse rule exactly. A previous-page
 * link that pointed at a page-1 URL would land on a redirect and would be
 * the theme's own contribution to the duplicate-content problem the
 * platform's route shape exists to prevent (D-5).
 */
function listingHref(kind: BlogSurfaceKind, termSlug: string | null, page: number): string {
  const base = kind === "index" ? BLOG_BASE_PATH : termHref(kind, termSlug ?? "");
  if (page <= 1) return base;
  return `${base}/page/${page}`;
}

/**
 * Resolves the slug of the term currently being archived, since `term`
 * itself carries no slug field. A category archive's posts all carry that
 * same category; a tag archive's posts all carry that same tag somewhere in
 * their `tags` array. Returns `null` when no post on the current page
 * carries a matching term (defensive -- pagination is simply omitted then,
 * never a guessed or broken link).
 */
function resolveTermSlug(term: ArchiveProp["term"], posts: ArticleProp[]): string | null {
  if (term.kind === "category") {
    const match = posts.find((post) => post.category?.name === term.name);
    return match?.category?.slug ?? null;
  }
  if (term.kind === "tag") {
    for (const post of posts) {
      const match = post.tags.find((tag) => tag.name === term.name);
      if (match) return match.slug;
    }
    return null;
  }
  return null;
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
 * on both surfaces. The title links to the post's own path, the category
 * links to that category's archive, and each tag links to its own archive
 * -- all composed via `postHref`/`termHref` above. A post with no slug
 * renders its title as plain text, never as a link to the listing root.
 */
function ArchiveCard({ article, showExcerpt }: { article: ArticleProp; showExcerpt: boolean }) {
  const publishedLabel = formatPublishedDate(article.publishedAt);
  const href = postHref(article.slug);
  const hasMetaRow = Boolean(article.category || article.tags.length > 0 || publishedLabel);

  return (
    <article className="flex flex-col gap-3 rounded-xl border border-border p-4">
      {article.featuredImage?.url && (
        <img
          src={article.featuredImage.url}
          alt={article.title || ""}
          className="aspect-video w-full rounded-lg object-cover"
        />
      )}
      <h3 className="heading-sm">{href ? <a href={href}>{article.title}</a> : article.title}</h3>
      {showExcerpt && article.excerpt && (
        <p className="text-muted-foreground text-base">{article.excerpt}</p>
      )}
      {hasMetaRow && (
        <div className="text-muted-foreground flex flex-wrap items-center gap-2 text-sm">
          {article.category && (
            <a href={termHref("category", article.category.slug)}>{article.category.name}</a>
          )}
          {article.category && publishedLabel && <span aria-hidden="true">&middot;</span>}
          {publishedLabel && <span>{publishedLabel}</span>}
          {article.tags.length > 0 && (
            <span className="flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <a key={tag.slug} href={termHref("tag", tag.slug)}>
                  {tag.name}
                </a>
              ))}
            </span>
          )}
        </div>
      )}
    </article>
  );
}

/**
 * Previous/next navigation for a paginated listing, shared by all three
 * archive surfaces (D-03) -- the same component serves the blog index, a
 * category archive and a tag archive alike, scoped by `archive.term.kind`
 * and the term's own resolved slug. Renders nothing on a single-page
 * listing, and nothing on a term-scoped page whose term slug cannot be
 * resolved (defensive -- see `resolveTermSlug`).
 */
function ArchivePagination({ archive }: { archive: ArchiveProp }) {
  const page = archive.page;
  if (!page || page.pageCount <= 1) return null;

  const kind: BlogSurfaceKind = archive.term.kind === "all" ? "index" : archive.term.kind;
  const termSlug = kind === "index" ? null : resolveTermSlug(archive.term, archive.posts);
  if (kind !== "index" && !termSlug) return null;

  const hasPrevious = page.current > 1;
  const hasNext = page.current < page.pageCount;
  if (!hasPrevious && !hasNext) return null;

  return (
    <nav className="flex items-center justify-between gap-4" aria-label="Archive pagination">
      <span>
        {hasPrevious && (
          <a href={listingHref(kind, termSlug, page.current - 1)} rel="prev">
            Previous
          </a>
        )}
      </span>
      <span>
        {hasNext && (
          <a href={listingHref(kind, termSlug, page.current + 1)} rel="next">
            Next
          </a>
        )}
      </span>
    </nav>
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

        {archive && <ArchivePagination archive={archive} />}
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
