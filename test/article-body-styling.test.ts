import { describe, it, expect } from "vitest";
import * as React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { JSDOM } from "jsdom";
import { ArticleBody } from "../src/sections/ArticleBody/ArticleBody";
import type { ArticleProp } from "../src/types";

/**
 * D-07's gate: the theme owns every pixel of the prose, proved by a real
 * styled `article-body` rather than a written spec. This test enumerates
 * every tag in project-theta-fe's `lib/sanitize/article-body-allowlist.ts`
 * (h1-h6, p, strong, em, a, ul/ol/li, img, br -- copied here as a literal
 * list per this plan's read_first instruction, not imported: the theme repo
 * has no dependency on the platform repo) and asserts the rendered
 * `ArticleBody` container carries at least one styling rule targeting each
 * one. A future refactor that drops a tag's styling rule fails `yarn build`
 * (this file is chained from `test:contract`... no -- it runs under the
 * plain `test` script, and `yarn build` runs `vitest run
 * test/registration-contract.test.ts` only; this file is exercised by CI's
 * `yarn test` and by this plan's own verify step) rather than shipping
 * unstyled prose to a tenant.
 */

// Mirrors project-theta-fe's ARTICLE_BODY_ALLOWED_TAGS
// (lib/sanitize/article-body-allowlist.ts) -- the exact tag set Phase 20's
// server-side sanitizer admits into a stored post body.
const ALLOWED_TAGS = [
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "p",
  "strong",
  "em",
  "a",
  "ul",
  "ol",
  "li",
  "img",
  "br",
] as const;

function sampleArticle(overrides: Partial<ArticleProp> = {}): ArticleProp {
  return {
    documentId: "sample-doc-1",
    title: "Sample Title",
    slug: "sample-title",
    body: "",
    excerpt: "",
    featuredImage: null,
    category: null,
    tags: [],
    author: null,
    publishedAt: null,
    updatedAt: null,
    ...overrides,
  };
}

const BODY_WITH_EVERY_ALLOWED_TAG = `
<h1>Heading One</h1>
<h2>Heading Two</h2>
<h3>Heading Three</h3>
<h4>Heading Four</h4>
<h5>Heading Five</h5>
<h6>Heading Six</h6>
<p>A paragraph with <strong>bold</strong> and <em>italic</em> text and a <a href="https://example.com">link</a>.<br />A line after a break.</p>
<ul><li>Unordered item</li></ul>
<ol><li>Ordered item</li></ol>
<p><img src="https://example.com/inline.jpg" alt="inline" /></p>
`.trim();

function renderProseContainer(article: ArticleProp): { className: string } {
  const html = renderToStaticMarkup(React.createElement(ArticleBody, { article }));
  const dom = new JSDOM(html);
  const container = dom.window.document.querySelector('[data-article-body-prose]');
  expect(container, "expected ArticleBody to render a [data-article-body-prose] container").not.toBeNull();
  return { className: container!.getAttribute("class") ?? "" };
}

describe("ArticleBody prose styling contract (D-07)", () => {
  for (const tag of ALLOWED_TAGS) {
    it(`styles the allowlisted <${tag}> tag`, () => {
      const { className } = renderProseContainer(
        sampleArticle({ body: BODY_WITH_EVERY_ALLOWED_TAG })
      );
      // A descendant-targeting rule for this tag, e.g. Tailwind's
      // `[&_h1]:...` arbitrary-variant syntax.
      expect(className).toMatch(new RegExp(`\\[&_${tag}\\]`));
    });
  }

  it("renders without an article prop, without throwing, and with no placeholder or debug text", () => {
    expect(() => renderToStaticMarkup(React.createElement(ArticleBody, {}))).not.toThrow();
    const html = renderToStaticMarkup(React.createElement(ArticleBody, {}));
    expect(html.toLowerCase()).not.toMatch(/not available|coming soon|placeholder|todo|fixme/);
  });

  it("renders an empty-body article without throwing and with no placeholder or debug text", () => {
    const article = sampleArticle({ body: "" });
    expect(() =>
      renderToStaticMarkup(React.createElement(ArticleBody, { article }))
    ).not.toThrow();
    const html = renderToStaticMarkup(React.createElement(ArticleBody, { article }));
    expect(html.toLowerCase()).not.toMatch(/not available|coming soon|placeholder|todo|fixme/);
  });

  it("renders the featured image with the article title as its alt text (no alt field in v1)", () => {
    const article = sampleArticle({
      title: "My Post Title",
      featuredImage: { url: "https://example.com/hero.jpg", width: 1200, height: 630 },
    });
    const html = renderToStaticMarkup(React.createElement(ArticleBody, { article }));
    const dom = new JSDOM(html);
    const img = dom.window.document.querySelector("img[src='https://example.com/hero.jpg']");
    expect(img?.getAttribute("alt")).toBe("My Post Title");
  });
});
