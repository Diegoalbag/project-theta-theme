import "./index.css";
import { formFieldComponents } from "./forms/fields";
import {
  sectionsComponents,
  sectionSettingsSchemas,
  blocksComponents,
  blockSettingsSchemas,
  sectionBlocksConfig,
} from "./registry";
export * from "./registry";
export { formFieldComponents } from "./forms/fields";
export { FormRenderer } from "./forms/FormRenderer";

declare const __THEME_NAME__: string;
const themeName = __THEME_NAME__; // injected from package.json name at build (must match NEXT_PUBLIC_THEME_NAME)
(window as any).__THETA_THEMES__ = (window as any).__THETA_THEMES__ || {};
(window as any).__THETA_THEMES__[themeName] = {
  name: themeName,
  version: '1.0.0',
  sectionsComponents,
  sectionSettingsSchemas,
  blocksComponents,
  blockSettingsSchemas,
  sectionBlocksConfig,
  // Styled inputs per field type. The platform owns the field vocabulary; a theme
  // owns how each type looks, so forms inherit this site's design tokens.
  formFieldComponents,
};