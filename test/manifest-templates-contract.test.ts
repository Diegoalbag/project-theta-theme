import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, it, expect } from "vitest";
import { sectionsComponents } from "../src/registry";

// Phase 21 (BLOG-05, D-01) gap fill: the manifest/registry cross-check was
// only ever an ad-hoc `node -e` one-liner run by hand. Committed here as a
// real, automated test so a future edit to theta.config.json or
// src/registry.ts that breaks the contract fails CI instead of relying on
// someone re-running the one-liner.

interface ThemeTemplateDeclaration {
  key: string;
  name: string;
  description?: string;
  sections: string[];
}

interface ThemeManifest {
  name: string;
  version: string;
  sections: Array<{ key: string; name: string }>;
  templates: ThemeTemplateDeclaration[];
}

const manifest: ThemeManifest = JSON.parse(
  readFileSync(resolve(__dirname, "../theta.config.json"), "utf-8"),
);

// The platform's reserved required slot per reserved template key (Phase 21
// D-03/D-05): an `article` template must declare `article-body`; an
// `archive` template must declare `archive-list`.
const REQUIRED_SLOT_BY_TEMPLATE_KEY: Record<string, string> = {
  article: "article-body",
  archive: "archive-list",
};

describe("theta.config.json / src/registry.ts contract", () => {
  it("has no orphan manifest section key — every declared section is registered in sectionsComponents", () => {
    const registeredKeys = Object.keys(sectionsComponents);
    const orphanKeys = manifest.sections
      .map((section) => section.key)
      .filter((key) => !registeredKeys.includes(key));

    expect(orphanKeys).toEqual([]);
  });

  it("declares exactly the two reserved templates — archive and article, no more, no fewer", () => {
    const templateKeys = manifest.templates.map((template) => template.key).sort();
    expect(templateKeys).toEqual(["archive", "article"]);
  });

  it.each(Object.entries(REQUIRED_SLOT_BY_TEMPLATE_KEY))(
    "the '%s' template declares a non-empty sections[] containing its required slot '%s'",
    (templateKey, requiredSlot) => {
      const declaration = manifest.templates.find((template) => template.key === templateKey);
      expect(declaration).toBeDefined();
      expect(declaration!.sections.length).toBeGreaterThan(0);
      expect(declaration!.sections).toContain(requiredSlot);
    },
  );
});
