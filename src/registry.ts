import type React from "react";
import { Hero, heroSettingsSchema } from "./sections/Hero";
import { Header, headerSettingsSchema } from "./sections/Header";
import { FeatureBlock, featureBlockSettingsSchema } from "./blocks/Feature";

export const sectionsComponents = {
  hero: Hero,
  header: Header,
};

export const sectionSettingsSchemas = {
  hero: heroSettingsSchema,
  header: headerSettingsSchema,
};

// Block components (Shopify-style) - add blocks here as needed
export const blocksComponents: Record<string, React.ComponentType<Record<string, unknown>>> = {
  feature: FeatureBlock,
};

// Block settings schemas - keyed by block type
export const blockSettingsSchemas: Record<string, Array<{
  id: string;
  label: string;
  type: string;
  default?: string | number | boolean;
  info?: string;
  options?: Array<{ value: string | number | boolean; label: string }>;
  customType?: string;
}>> = {
  feature: featureBlockSettingsSchema,
};

// Per-section block config: which blocks each section accepts
export const sectionBlocksConfig: Record<string, {
  blocks: Array<{ type: string }>;
  maxBlocks?: number;
  localBlocks?: Array<{
    type: string;
    name: string;
    component?: React.ComponentType<Record<string, unknown>>;
    settings: Array<{
      id: string;
      label: string;
      type: string;
      default?: string | number | boolean;
      info?: string;
      options?: Array<{ value: string | number | boolean; label: string }>;
      customType?: string;
    }>;
  }>;
}> = {
  hero: {
    blocks: [{ type: "@theme" }],
    maxBlocks: 10,
  },
};