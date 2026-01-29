import { Hero, heroSettingsSchema } from "./sections/Hero";
import { Header, headerSettingsSchema } from "./sections/Header";
import { Features, featuresSettingsSchema } from "./sections/Features";

export const sectionsComponents = {
  hero: Hero,
  header: Header,
  features: Features,
};

export const sectionSettingsSchemas = {
  hero: heroSettingsSchema,
  header: headerSettingsSchema,
  features: featuresSettingsSchema,
};