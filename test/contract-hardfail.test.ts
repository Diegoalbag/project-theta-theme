import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, it, expect, beforeAll } from "vitest";
import { JSDOM } from "jsdom";
import { assertContract } from "./contract-assertions";

// THEME-04 — automated hard-fail proof (D-10).
//
// Proves the build gate REJECTS a wrong-key registration AUTOMATICALLY, without
// relying on a manual "revert src/index.ts" step. We register a deliberately
// WRONG key (the old hardcoded `project-theta-theme` literal) in a jsdom window
// via an in-test SYNTHETIC string, then run the SAME contract assertions the
// build gate uses and assert they are VIOLATED.
//
// Security (ASVS V14): this test evals ONLY an in-test, controlled synthetic
// registration snippet — never a remote/untrusted bundle or URL.

const pkg = JSON.parse(
  readFileSync(resolve(__dirname, "../package.json"), "utf-8"),
);
const EXPECTED_NAME: string = pkg.name; // "theta-theme-default"
const WRONG_NAME = "project-theta-theme"; // the historical bug literal

describe("registration contract hard-fail (wrong-key rejection)", () => {
  let win: any;

  beforeAll(() => {
    const dom = new JSDOM("<!doctype html><html><body></body></html>", {
      runScripts: "dangerously",
    });
    win = dom.window;
    win.__THETA_THEMES__ = {};

    // SYNTHETIC, in-test registration under the WRONG key — a controlled local
    // string, never a remote bundle (V14). This simulates a regressed bundle
    // that registers under the stale hardcoded literal.
    win.eval(
      `window.__THETA_THEMES__['${WRONG_NAME}'] = ` +
        `{ name: '${WRONG_NAME}', sectionsComponents: {} };`,
    );
  });

  it("does NOT register under the expected package name", () => {
    expect(win.__THETA_THEMES__[EXPECTED_NAME]).toBeUndefined();
  });

  it("registry keys do NOT equal [expectedName] (stale-literal detected)", () => {
    expect(Object.keys(win.__THETA_THEMES__)).not.toEqual([EXPECTED_NAME]);
    expect(Object.keys(win.__THETA_THEMES__)).toEqual([WRONG_NAME]);
  });

  it("the shared contract assertions THROW on the wrong-key bundle", () => {
    // The exact assertions the build gate runs reject this bundle → the gate
    // exits non-zero → `yarn build` hard-fails. Automated proof of D-10.
    expect(() => assertContract(win, EXPECTED_NAME)).toThrow();
  });
});
