/**
 * `ArticleProp` and `ArchiveProp` mirror the published platform contract
 * (`project-theta-fe`'s `lib/theme-contract/article-contract.ts`,
 * `THEME_ARTICLE_CONTRACT_VERSION = 1`), copied here field-for-field from
 * that module rather than reconstructed from memory (Phase 21 Plan 05,
 * Task 1).
 *
 * The platform owns this shape. A theme reads it but must NOT add fields to
 * either interface below: every field this theme's sections rely on has to
 * exist in the platform's published contract, or it will be `undefined` at
 * runtime on every real tenant post. See project-theta-fe's
 * `.planning/phases/21-theme-article-template-contract/21-01-SUMMARY.md` for
 * the contract's decision record, and this repo's `claude.md` ("Article and
 * archive templates") for the theme-authoring documentation.
 */

/**
 * Exactly eleven fields, all required, none ever `undefined`. Empty values
 * are expressed as `""` / `null` / `[]` -- a section never needs an
 * optional-chaining guard for a MISSING field, only for an intentionally
 * empty one. `featuredImage` carries no alt-text field in v1 (accepted
 * platform tradeoff); use `article.title` as the substitute alt text.
 */
export interface ArticleProp {
  documentId: string;
  title: string;
  slug: string;
  body: string;
  excerpt: string;
  featuredImage: { url: string; width: number | null; height: number | null } | null;
  category: { name: string; slug: string; description: string | null } | null;
  tags: Array<{ name: string; slug: string; description: string | null }>;
  author: { name: string; avatarUrl: string | null } | null;
  publishedAt: string | null;
  updatedAt: string | null;
}

/**
 * `posts` reuses the SAME `ArticleProp` shape per post -- one published
 * contract, used identically on the article and archive surfaces. `term` is
 * always an object (`kind: "all"`, `name: ""` for the blog index) rather
 * than nullable.
 */
export interface ArchiveProp {
  posts: ArticleProp[];
  term: { kind: "all" | "category" | "tag"; name: string; description: string | null };
  page: { current: number; pageSize: number; pageCount: number; total: number };
}
