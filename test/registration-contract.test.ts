import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, it, expect, beforeAll } from "vitest";
import { JSDOM } from "jsdom";
import * as React from "react";
import * as jsxRuntime from "react/jsx-runtime";
import * as cva from "class-variance-authority";
import * as clsx from "clsx";
import * as twMerge from "tailwind-merge";
import * as LucideReact from "lucide-react";
import { assertContract } from "./contract-assertions";

// THEME-01/03/04 registration contract.
//
// Loads the freshly-built local dist/theme.bundle.js inside a jsdom window
// (with the externalized globals the IIFE reads shimmed) and asserts the
// bundle self-registered on window.__THETA_THEMES__ under its resolved theme
// name (process.env.THEME_NAME ?? package.json name) with non-empty sections.
//
// Security (ASVS V14): this test ONLY ever evals the locally-built
// dist/theme.bundle.js — a controlled, in-repo build artifact — never a
// remote/untrusted URL.

const pkg = JSON.parse(
  readFileSync(resolve(__dirname, "../package.json"), "utf-8"),
);
// THEME-01: vite.config bakes __THEME_NAME__ from `process.env.THEME_NAME ||
// pkg.name`, so the bundle registers under the platform-supplied THEME_NAME when
// the deploy workflow sets it (= the name the deployed site looks it up by), and
// under the package.json name for standalone/local builds. This test mirrors that
// exact expression so it validates the real registration key in both contexts.
const EXPECTED_NAME: string = process.env.THEME_NAME || pkg.name;

describe("theme registration contract", () => {
  let win: any;

  beforeAll(() => {
    const dom = new JSDOM("<!doctype html><html><body></body></html>", {
      runScripts: "dangerously", // allow the IIFE to execute
    });
    win = dom.window;

    // Shim the external globals the IIFE invocation reads. React stays an
    // external peer (D-05); cva/clsx/twMerge/LucideReact are read by the
    // current bundle's IIFE invocation until Plan 03 bundles them (after
    // which these shims are harmless no-ops). ReactDOM is referenced by the
    // invocation but never called during registration, so an object shim is
    // sufficient and avoids importing the uninstalled react-dom peer.
    win.React = React;
    win.ReactDOM = {};
    win.jsxRuntime = jsxRuntime;
    win.cva = cva;
    win.clsx = clsx;
    win.twMerge = twMerge;
    win.LucideReact = LucideReact;
    win.__THETA_THEMES__ = {};
    // The library build does not statically replace process.env.NODE_ENV, so
    // the bundled deps read it at eval time. jsdom has no `process` — provide a
    // minimal shim so the controlled local bundle can register.
    win.process = { env: { NODE_ENV: "production" } };

    // Eval ONLY the freshly-built local bundle (never a remote URL — V14).
    const bundle = readFileSync(
      resolve(__dirname, "../dist/theme.bundle.js"),
      "utf-8",
    );
    win.eval(bundle);
  });

  it("registers under the resolved theme name (THEME_NAME ?? package.json name)", () => {
    expect(win.__THETA_THEMES__[EXPECTED_NAME]).toBeDefined();
  });

  it("registers under exactly one key — the resolved theme name", () => {
    // The single registration key must be EXPECTED_NAME (the platform THEME_NAME
    // in CI, pkg.name locally) — no stale literal and no duplicate registration.
    expect(Object.keys(win.__THETA_THEMES__)).toEqual([EXPECTED_NAME]);
  });

  it("has non-empty sections", () => {
    const mod = win.__THETA_THEMES__[EXPECTED_NAME];
    expect(Object.keys(mod.sectionsComponents ?? {}).length).toBeGreaterThan(0);
  });

  it("module name matches the registration key", () => {
    expect(win.__THETA_THEMES__[EXPECTED_NAME].name).toBe(EXPECTED_NAME);
  });

  it("passes the shared assertContract helper end-to-end", () => {
    expect(() => assertContract(win, EXPECTED_NAME)).not.toThrow();
  });

  // Phase 21 (D-14): the built bundle registers a component AND a settings
  // schema under each reserved blog section key, so a manifest declaring
  // `article`/`archive` templates (theta.config.json) never seeds an orphan
  // section the bundle cannot render.
  it.each(["article-body", "archive-list"])(
    "registers a component and a settings schema under the reserved '%s' key",
    (key) => {
      const mod = win.__THETA_THEMES__[EXPECTED_NAME];
      expect(mod.sectionsComponents[key]).toBeTypeOf("function");
      expect(Array.isArray(mod.sectionSettingsSchemas[key])).toBe(true);
    },
  );
});
