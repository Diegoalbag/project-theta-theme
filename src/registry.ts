import type React from "react";
import { Hero, heroSettingsSchema } from "./sections/Hero";
import { Header, headerSettingsSchema } from "./sections/Header";
import { Team, teamSettingsSchema } from "./sections/Team";
import { ContactForm, contactFormSettingsSchema } from "./sections/ContactForm";
import { ArticleBody, articleBodySettingsSchema } from "./sections/ArticleBody";
import { FeatureBlock, featureBlockSettingsSchema } from "./blocks/Feature";
import { TeamMemberBlock, teamMemberBlockSettingsSchema } from "./blocks/TeamMember";

// "article-body" (Phase 21 D-05) is the platform's reserved section key for
// the prose slot inside an `article` template -- see project-theta-fe's
// lib/theme-contract/article-contract.ts and this repo's claude.md
// ("Article and archive templates"). Not added to sectionBlocksConfig below:
// the prose slot is a single body, not a block-repeated composition.
export const sectionsComponents = {
  hero: Hero,
  header: Header,
  team: Team,
  "contact-form": ContactForm,
  "article-body": ArticleBody,
};

export const sectionSettingsSchemas = {
  hero: heroSettingsSchema,
  header: headerSettingsSchema,
  team: teamSettingsSchema,
  "contact-form": contactFormSettingsSchema,
  "article-body": articleBodySettingsSchema,
};

// Block components (Shopify-style) - add blocks here as needed
export const blocksComponents: Record<string, React.ComponentType<Record<string, unknown>>> = {
  feature: FeatureBlock,
  "team-member": TeamMemberBlock,
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
  "team-member": teamMemberBlockSettingsSchema,
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
  team: {
    blocks: [{ type: "team-member" }],
    maxBlocks: 20,
  },
};