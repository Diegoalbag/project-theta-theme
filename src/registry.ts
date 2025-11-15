import { Hero, heroSettingsSchema } from "./sections/Hero";
import { Header, headerSettingsSchema } from "./sections/Header";

export const sectionsComponents = {
  hero: Hero,
  header: Header,
};

export const sectionSettingsSchemas = {
  hero: heroSettingsSchema,
  header: headerSettingsSchema,
};