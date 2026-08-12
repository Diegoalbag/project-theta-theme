import { cn } from "@/lib/utils";
import type { ArticleProp } from "@/types";

export interface ArticleBodyProps {
  /** The published `article` prop (project-theta-fe D-06) -- every section
   * inside an `article` template receives this, not only this slot. */
  article?: ArticleProp | null;
  sectionId?: string;
  sectionName?: string;
  maxWidth?: "narrow" | "wide" | "full";
  backgroundColor?: string;
  showFeaturedImage?: boolean;
}

const WIDTH_CLASSES: Record<NonNullable<ArticleBodyProps["maxWidth"]>, string> = {
  narrow: "max-w-3xl",
  wide: "max-w-5xl",
  full: "max-w-none",
};

/**
 * D-07's reference implementation: the theme owns EVERY pixel of the prose.
 * The platform ships no prose stylesheet, the stored body is bare sanitized
 * HTML limited to `h1-h6, p, strong, em, a, ul/ol/li, img, br` (Phase 20
 * D-05), and Tailwind's preflight strips default styling from every one of
 * those tags -- so an unstyled theme renders unstyled prose. Each descendant
 * utility below styles exactly one allowlisted tag; `test/article-body-styling.test.ts`
 * is the gate that fails the build when a tag loses its rule.
 */
const PROSE_CLASSES = cn(
  // Headings -- h1-h6 (Phase 20 D-05 allowlist). The post title itself
  // stays the page's only true h1 via the shared heading-normalizer
  // (D-08); this component authors no heading of its own, so it never
  // competes with that rule.
  "[&_h1]:text-4xl [&_h1]:font-semibold [&_h1]:leading-tight [&_h1]:mt-10 [&_h1]:mb-4 [&_h1]:first:mt-0",
  "[&_h2]:text-3xl [&_h2]:font-semibold [&_h2]:leading-tight [&_h2]:mt-8 [&_h2]:mb-3 [&_h2]:first:mt-0",
  "[&_h3]:text-2xl [&_h3]:font-semibold [&_h3]:leading-tight [&_h3]:mt-6 [&_h3]:mb-3",
  "[&_h4]:text-xl [&_h4]:font-semibold [&_h4]:mt-5 [&_h4]:mb-2",
  "[&_h5]:text-lg [&_h5]:font-semibold [&_h5]:mt-4 [&_h5]:mb-2",
  "[&_h6]:text-base [&_h6]:font-semibold [&_h6]:uppercase [&_h6]:tracking-wide [&_h6]:mt-4 [&_h6]:mb-2",
  // Paragraphs and vertical rhythm
  "[&_p]:text-base [&_p]:leading-relaxed [&_p]:text-foreground [&_p]:mb-5 [&_p]:last:mb-0",
  // Inline emphasis
  "[&_strong]:font-semibold",
  "[&_em]:italic",
  // Links -- color, underline, hover state
  "[&_a]:text-primary [&_a]:underline [&_a]:underline-offset-4 [&_a]:hover:text-primary/80",
  // Lists -- markers, indentation, vertical rhythm
  "[&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-5 [&_ul]:space-y-2",
  "[&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-5 [&_ol]:space-y-2",
  "[&_li]:leading-relaxed",
  // Images -- constrained width, rounded corners
  "[&_img]:my-6 [&_img]:w-full [&_img]:rounded-xl [&_img]:object-cover",
  // Line breaks -- explicit vertical rhythm rather than a bare browser default
  "[&_br]:block [&_br]:content-[''] [&_br]:my-2"
);

/**
 * D-05's reserved `article-body` prose slot. Renders `article.body` --
 * bare, sanitized HTML (Phase 20 D-04) -- through React's raw-HTML escape
 * hatch, exactly as received. No sanitizing, unescaping, stripping or
 * rewriting step exists in this component: the platform's server write path
 * is the single sanitization gate (T-21-15), and a second, weaker pass here
 * would silently reopen the exact hazard 21-CONTEXT.md's Known Hazards
 * section names. `article` absent, or `article.body` the empty string,
 * renders the container with no body markup -- an empty post is empty, not
 * broken, and emits no placeholder or debug text.
 */
export const ArticleBody = ({
  article,
  backgroundColor,
  maxWidth = "narrow",
  showFeaturedImage = true,
}: ArticleBodyProps) => {
  const body = article?.body ?? "";

  return (
    <section
      className="section-padding-y"
      style={{ backgroundColor: backgroundColor || undefined }}
      aria-label="Article body"
    >
      <div
        className={cn(
          "container-padding-x container mx-auto flex flex-col gap-8",
          WIDTH_CLASSES[maxWidth]
        )}
      >
        {showFeaturedImage && article?.featuredImage?.url && (
          // No alt field on featuredImage in v1 -- article.title is the
          // documented substitute (21-01 accepted tradeoff).
          <img
            src={article.featuredImage.url}
            alt={article.title || ""}
            className="w-full rounded-xl object-cover"
          />
        )}
        <div
          data-article-body-prose="true"
          className={PROSE_CLASSES}
          // eslint-disable-next-line react/no-danger -- article.body is server-sanitized upstream (Phase 20 D-04); this is the single, intentional render of that gate's output, not a second sanitization pass.
          dangerouslySetInnerHTML={{ __html: body }}
        />
      </div>
    </section>
  );
};

export const articleBodySettingsSchema = [
  {
    id: "maxWidth",
    label: "Content width",
    type: "select",
    default: "narrow",
    options: [
      { value: "narrow", label: "Narrow" },
      { value: "wide", label: "Wide" },
      { value: "full", label: "Full" },
    ],
  },
  {
    id: "backgroundColor",
    label: "Background color",
    type: "color",
    default: "#ffffff",
  },
  {
    id: "showFeaturedImage",
    label: "Show featured image above the prose",
    type: "checkbox",
    default: true,
  },
];
