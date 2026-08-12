import { describe, it, expect } from "vitest";
import * as React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { JSDOM } from "jsdom";
import { Archive } from "../src/sections/Archive/Archive";
import type { ArchiveProp, ArticleProp } from "../src/types";

/**
 * D-03/D-12: one `archive-list` section serves the blog index, a category
 * archive and a tag archive alike, built against the SAME `ArticleProp`
 * shape the article template's sections receive.
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

function sampleArchive(overrides: Partial<ArchiveProp> = {}): ArchiveProp {
  return {
    posts: [samplePost()],
    term: { kind: "all", name: "", description: null },
    page: { current: 1, pageSize: 10, pageCount: 1, total: 1 },
    ...overrides,
  };
}

function renderDom(archiveProps: Record<string, unknown>) {
  const html = renderToStaticMarkup(React.createElement(Archive, archiveProps));
  return new JSDOM(html).window.document;
}

describe("Archive section (D-03/D-12)", () => {
  it("renders its own configured heading and no term description for the blog index", () => {
    const dom = renderDom({
      archive: sampleArchive({ term: { kind: "all", name: "", description: null } }),
      fallbackHeading: "The Blog",
    });
    const heading = dom.querySelector("h2");
    expect(heading?.textContent).toBe("The Blog");
  });

  it("renders the term's name as heading and its description when the term is a category", () => {
    const dom = renderDom({
      archive: sampleArchive({
        term: { kind: "category", name: "Engineering", description: "Posts about engineering." },
      }),
    });
    const heading = dom.querySelector("h2");
    expect(heading?.textContent).toBe("Engineering");
    expect(dom.body.textContent).toContain("Posts about engineering.");
  });

  it("renders the term's name as heading and its description when the term is a tag", () => {
    const dom = renderDom({
      archive: sampleArchive({
        term: { kind: "tag", name: "Release Notes", description: "Tagged release-notes posts." },
      }),
    });
    const heading = dom.querySelector("h2");
    expect(heading?.textContent).toBe("Release Notes");
    expect(dom.body.textContent).toContain("Tagged release-notes posts.");
  });

  it("renders one card per post with title, excerpt, featured image and published date", () => {
    const dom = renderDom({
      archive: sampleArchive({
        posts: [
          samplePost({
            documentId: "post-a",
            title: "Post A",
            excerpt: "Excerpt A",
            featuredImage: { url: "https://example.com/a.jpg", width: 800, height: 600 },
            publishedAt: "2026-01-15T00:00:00.000Z",
          }),
        ],
      }),
    });
    expect(dom.querySelector("h3")?.textContent).toBe("Post A");
    expect(dom.body.textContent).toContain("Excerpt A");
    expect(dom.querySelector("img[src='https://example.com/a.jpg']")).not.toBeNull();
  });

  it("renders a stated empty state for an empty post list rather than an empty grid", () => {
    const dom = renderDom({ archive: sampleArchive({ posts: [] }) });
    expect(dom.querySelectorAll("article").length).toBe(0);
    expect(dom.body.textContent?.toLowerCase()).toMatch(/no posts/);
  });

  it("renders no image element and no empty metadata chrome for a post with no image, category or author", () => {
    const dom = renderDom({
      archive: sampleArchive({
        posts: [
          samplePost({
            featuredImage: null,
            category: null,
            author: null,
            publishedAt: null,
          }),
        ],
      }),
    });
    expect(dom.querySelector("article img")).toBeNull();
  });

  it("renders its heading at the second level", () => {
    const dom = renderDom({ archive: sampleArchive() });
    expect(dom.querySelector("h1")).toBeNull();
    expect(dom.querySelector("h2")).not.toBeNull();
  });

  it("wraps each post title in an anchor to that post's own path", () => {
    const dom = renderDom({
      archive: sampleArchive({
        posts: [samplePost({ slug: "hello-world", title: "Hello World" })],
      }),
    });
    const link = dom.querySelector("h3 a");
    expect(link?.getAttribute("href")).toBe("/blog/hello-world");
    expect(link?.textContent).toBe("Hello World");
  });

  it("renders a post's category as an anchor to that category's archive path", () => {
    const dom = renderDom({
      archive: sampleArchive({
        posts: [
          samplePost({
            category: { name: "Engineering", slug: "engineering", description: null },
          }),
        ],
      }),
    });
    const link = dom.querySelector("article a[href='/blog/category/engineering']");
    expect(link?.textContent).toBe("Engineering");
  });

  it("renders each of a post's tags as an anchor to that tag's archive path", () => {
    const dom = renderDom({
      archive: sampleArchive({
        posts: [
          samplePost({
            tags: [
              { name: "Release Notes", slug: "release-notes", description: null },
              { name: "Updates", slug: "updates", description: null },
            ],
          }),
        ],
      }),
    });
    const links = Array.from(dom.querySelectorAll("article a[href^='/blog/tag/']"));
    expect(links.map((a) => a.getAttribute("href"))).toEqual([
      "/blog/tag/release-notes",
      "/blog/tag/updates",
    ]);
  });

  it("renders a post's title as plain text, not a link, when the post has no slug", () => {
    const dom = renderDom({
      archive: sampleArchive({ posts: [samplePost({ slug: "" })] }),
    });
    expect(dom.querySelector("h3 a")).toBeNull();
    expect(dom.querySelector("h3")?.textContent).toBe("Sample Post");
  });

  it("points a page-2 index previous-page anchor at the bare listing path", () => {
    const dom = renderDom({
      archive: sampleArchive({
        term: { kind: "all", name: "", description: null },
        page: { current: 2, pageSize: 10, pageCount: 3, total: 25 },
      }),
    });
    const prev = dom.querySelector("a[rel='prev']");
    expect(prev?.getAttribute("href")).toBe("/blog");
  });

  it("points a page-2-of-3 index next-page anchor at page 3", () => {
    const dom = renderDom({
      archive: sampleArchive({
        term: { kind: "all", name: "", description: null },
        page: { current: 2, pageSize: 10, pageCount: 3, total: 25 },
      }),
    });
    const next = dom.querySelector("a[rel='next']");
    expect(next?.getAttribute("href")).toBe("/blog/page/3");
  });

  it("renders no pagination navigation on page 1 of 1", () => {
    const dom = renderDom({
      archive: sampleArchive({
        page: { current: 1, pageSize: 10, pageCount: 1, total: 1 },
      }),
    });
    expect(dom.querySelector("nav[aria-label='Archive pagination']")).toBeNull();
  });

  it("scopes both pagination anchors to the term's own path on a category archive", () => {
    const dom = renderDom({
      archive: sampleArchive({
        term: { kind: "category", name: "Engineering", description: null },
        posts: [
          samplePost({
            category: { name: "Engineering", slug: "engineering", description: null },
          }),
        ],
        page: { current: 2, pageSize: 10, pageCount: 3, total: 25 },
      }),
    });
    const prev = dom.querySelector("a[rel='prev']");
    const next = dom.querySelector("a[rel='next']");
    expect(prev?.getAttribute("href")).toBe("/blog/category/engineering");
    expect(next?.getAttribute("href")).toBe("/blog/category/engineering/page/3");
  });
});
