import { describe, it, expect } from "vitest";
import * as React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { JSDOM } from "jsdom";
import { RelatedPosts } from "../src/sections/RelatedPosts/RelatedPosts";
import type { ArticleProp } from "../src/types";

/**
 * project-theta-fe D-10: an ORDINARY, optional theme section reading
 * `relatedPosts` off the same `recordProps` seam that already threads
 * `article` to every section on the `article` template (D-4). Built against
 * the SAME `ArticleProp` shape `Archive.tsx`'s cards already consume.
 */

function samplePost(overrides: Partial<ArticleProp> = {}): ArticleProp {
  return {
    documentId: "post-1",
    title: "Sample Post",
    slug: "sample-post",
    body: "<p>body</p>",
    excerpt: "Sample excerpt",
    featuredImage: null,
    category: null,
    tags: [],
    author: null,
    publishedAt: null,
    updatedAt: null,
    ...overrides,
  };
}

function renderDom(props: Record<string, unknown>) {
  const html = renderToStaticMarkup(React.createElement(RelatedPosts, props));
  return { html, dom: new JSDOM(html).window.document };
}

describe("RelatedPosts section (project-theta-fe D-10)", () => {
  it("renders three anchors, each pointing at that post's own detail path, for a three-post list", () => {
    const { dom } = renderDom({
      relatedPosts: [
        samplePost({ documentId: "a", slug: "post-a", title: "Post A" }),
        samplePost({ documentId: "b", slug: "post-b", title: "Post B" }),
        samplePost({ documentId: "c", slug: "post-c", title: "Post C" }),
      ],
    });

    const anchors = Array.from(dom.querySelectorAll("a"));
    expect(anchors).toHaveLength(3);
    expect(anchors.map((a) => a.getAttribute("href"))).toEqual([
      "/blog/post-a",
      "/blog/post-b",
      "/blog/post-c",
    ]);
    expect(anchors.map((a) => a.textContent)).toEqual(["Post A", "Post B", "Post C"]);
  });

  it("renders no markup at all when relatedPosts is absent", () => {
    const { html } = renderDom({});
    expect(html).toBe("");
  });

  it("renders no markup at all when relatedPosts is an empty array", () => {
    const { html } = renderDom({ relatedPosts: [] });
    expect(html).toBe("");
  });

  it("renders a post with an empty slug as plain text, never as an anchor to the listing root", () => {
    const { dom } = renderDom({
      relatedPosts: [samplePost({ documentId: "no-slug", slug: "", title: "No Slug Post" })],
    });

    expect(dom.querySelectorAll("a")).toHaveLength(0);
    expect(dom.body.textContent).toContain("No Slug Post");
  });

  it("percent-encodes a slug segment when composing the anchor href", () => {
    const { dom } = renderDom({
      relatedPosts: [samplePost({ documentId: "x", slug: "a slug/with space", title: "Weird Slug" })],
    });

    const anchor = dom.querySelector("a");
    expect(anchor?.getAttribute("href")).toBe(`/blog/${encodeURIComponent("a slug/with space")}`);
  });

  it("renders the configured heading and respects the columns setting", () => {
    const { dom } = renderDom({
      relatedPosts: [samplePost()],
      heading: "You might also like",
      columns: 2,
    });

    const heading = dom.querySelector("h2");
    expect(heading?.textContent).toBe("You might also like");
    const grid = dom.querySelector("section > div > div");
    expect(grid?.getAttribute("style")).toContain("repeat(2, minmax(0, 1fr))");
  });
});
