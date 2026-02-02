import "./index.css";
export * from "./registry";

const themeName = 'project-theta-theme'; // must match NEXT_PUBLIC_THEME_NAME
(window as any).__THETA_THEMES__ = (window as any).__THETA_THEMES__ || {};
(window as any).__THETA_THEMES__[themeName] = {
  name: themeName,
  version: '1.0.0',
  sectionsComponents: { /* your sections */ },
  sectionSettingsSchemas: { /* your schemas */ },
};