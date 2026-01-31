"use client";

import { useEffect, useState } from "react";
import type { LoadedThemeModule } from "./theme-loader";
import { loadThemeFromUrl, getLoadedTheme } from "./theme-loader";
import type { StrapiPage } from "./strapi-client";

interface PageRendererProps {
  page: StrapiPage;
  themeBundleUrl: string;
  themeName: string;
}

/**
 * Component that renders a page using theme components
 */
export function PageRenderer({ page, themeBundleUrl, themeName }: PageRendererProps) {
  const [themeModule, setThemeModule] = useState<LoadedThemeModule | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Check cache first
    const cached = getLoadedTheme(themeName);
    if (cached) {
      setThemeModule(cached);
      setLoading(false);
      return;
    }

    // Load theme bundle
    loadThemeFromUrl(themeBundleUrl, themeName)
      .then((module) => {
        setThemeModule(module);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load theme:", err);
        setError(err instanceof Error ? err.message : "Failed to load theme");
        setLoading(false);
      });
  }, [themeBundleUrl, themeName]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <p className="text-lg text-muted-foreground">Loading theme...</p>
        </div>
      </div>
    );
  }

  if (error || !themeModule) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <p className="text-lg font-semibold text-destructive">Error loading theme</p>
          <p className="text-sm text-muted-foreground">{error || "Theme module not found"}</p>
        </div>
      </div>
    );
  }

  // Sort sections by order
  const sortedSections = [...(page.sections || [])].sort(
    (a, b) => (a.order ?? 0) - (b.order ?? 0)
  );

  return (
    <div className="min-h-screen">
      {sortedSections.map((section, index) => {
        const SectionComponent = themeModule.sectionsComponents[section.sectionKey];

        if (!SectionComponent) {
          console.warn(`Section component not found: ${section.sectionKey}`);
          return (
            <div key={section.id || index} className="p-4 border border-dashed">
              <p className="text-sm text-muted-foreground">
                Section "{section.sectionKey}" not found in theme
              </p>
            </div>
          );
        }

        // Convert Strapi data to component props
        // Strapi stores data as typed values: { type: 'text', value: '...' }
        // Components expect flat props: { title: '...', content: '...' }
        const props = convertStrapiDataToProps(section.data);

        // Add section metadata props that components might expect
        const componentProps = {
          ...props,
          sectionId: section.id?.toString() || `${section.sectionKey}-${index}`,
          sectionName: section.sectionKey,
        };

        return (
          <div key={section.id || index}>
            <SectionComponent {...componentProps} />
          </div>
        );
      })}
    </div>
  );
}

/**
 * Convert Strapi typed data to flat component props
 * Strapi stores: { title: { type: 'text', value: 'Hello' } }
 * Components expect: { title: 'Hello' }
 * 
 * Handles all field types including images, videos, page references, etc.
 */
function convertStrapiDataToProps(
  data: Record<string, unknown>
): Record<string, unknown> {
  const props: Record<string, unknown> = {};

  for (const [key, typedValue] of Object.entries(data)) {
    if (typedValue && typeof typedValue === "object" && "type" in typedValue && "value" in typedValue) {
      const typed = typedValue as { type: string; value: unknown };
      
      // Handle different field types
      switch (typed.type) {
        case "text":
        case "textarea":
        case "number":
        case "boolean":
        case "color":
        case "url":
        case "video_url":
        case "font_picker":
        case "richtext":
        case "html":
        case "text_alignment":
          // Simple types: extract value directly
          props[key] = typed.value;
          break;

        case "image": {
          // Image type: value is file ID or image object
          // Always return an object structure (never null/undefined) so theme components can safely access .url
          if (typed.value && typeof typed.value === "object") {
            // Already an image object with id/url
            props[key] = typed.value;
          } else if (typeof typed.value === "number") {
            // Just an ID, construct image object
            props[key] = {
              id: typed.value,
              url: null, // URL will be resolved by component if needed
            };
          } else {
            // Value is null, undefined, or unexpected type - return empty object structure
            props[key] = {
              id: null,
              url: null,
            };
          }
          break;
        }

        case "video": {
          // Video type: similar to image
          // Always return an object structure (never null/undefined) so theme components can safely access .url
          if (typed.value && typeof typed.value === "object") {
            props[key] = typed.value;
          } else if (typeof typed.value === "number") {
            props[key] = {
              id: typed.value,
              url: null,
            };
          } else {
            // Value is null, undefined, or unexpected type - return empty object structure
            props[key] = {
              id: null,
              url: null,
            };
          }
          break;
        }

        case "page_reference": {
          // Page reference: value might be string (slug) or object
          props[key] = typed.value;
          break;
        }

        case "json": {
          // JSON type: check if it's an image/video stored as JSON
          const jsonValue = typed.value;
          if (jsonValue && typeof jsonValue === "object" && !Array.isArray(jsonValue)) {
            const obj = jsonValue as Record<string, unknown>;
            // If it looks like an image/video object, use it directly
            if (("id" in obj || "url" in obj) && !("slug" in obj && "title" in obj)) {
              props[key] = jsonValue;
            } else {
              props[key] = jsonValue;
            }
          } else {
            props[key] = jsonValue;
          }
          break;
        }

        default:
          // Unknown type: try to extract value, fallback to full object
          props[key] = typed.value ?? typedValue;
      }
    } else {
      // Already flat, use as-is
      props[key] = typedValue;
    }
  }

  return props;
}
