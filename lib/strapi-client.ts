import { GraphQLClient } from "graphql-request";
import { gql } from "graphql-request";

// Helper function to normalize URLs - ensures they have a protocol
const normalizeUrl = (url: string): string => {
  if (!url || url.trim() === '') {
    return '';
  }
  // If URL already has protocol, return as-is
  if (/^https?:\/\//.test(url)) {
    return url;
  }
  // Determine protocol based on hostname
  // Use http:// for localhost, local IPs, or .local domains
  // Use https:// for everything else
  const isLocal = /^(localhost|127\.0\.0\.1|10\.|192\.168\.|172\.(1[6-9]|2[0-9]|3[01])\.|\.local)/.test(url);
  return `${isLocal ? 'http' : 'https'}://${url}`;
};

// Strapi configuration from environment variables
// Client-side code uses NEXT_PUBLIC_ prefix, but can fall back to server-side env vars
const rawStrapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL || "";
const STRAPI_BASE_URL = rawStrapiUrl ? normalizeUrl(rawStrapiUrl) : "";
const STRAPI_ACCESS_TOKEN = process.env.NEXT_PUBLIC_STRAPI_TOKEN || "";

// Create GraphQL client
const graphqlEndpoint = STRAPI_BASE_URL ? `${STRAPI_BASE_URL}/graphql` : "";

export const strapiClient = new GraphQLClient(graphqlEndpoint, {
  headers: {
    Authorization: `Bearer ${STRAPI_ACCESS_TOKEN}`,
    "Content-Type": "application/json",
  },
});

// GraphQL query for fetching all metaobject entries
const getMetaobjectEntriesQuery = gql`
  query GetMetaobjectEntries {
    metaobjectEntries {
      documentId
      name
      data
      metaobject_definition {
        key
      }
    }
  }
`;

interface MetaobjectEntry {
  documentId: string;
  name: string;
  data: Record<string, unknown>;
  metaobject_definition?: { key: string } | null;
}

interface MetaobjectEntriesResponse {
  metaobjectEntries: MetaobjectEntry[];
}

// GraphQL query for fetching pages
const getPagesQuery = gql`
  query GetPages {
    pages {
      documentId
      title
      slug
      publishedAt
      isHomepage
      pageTemplate {
        sections {
          id
          sectionKey
          order
          data
          blocks {
            id
            blockType
            order
            data
          }
        }
      }
    }
  }
`;

const getPageBySlugQuery = gql`
  query GetPageBySlug($slug: String!) {
    pages(filters: { slug: { eq: $slug } }) {
      documentId
      title
      slug
      publishedAt
      isHomepage
      pageTemplate {
        sections {
          id
          sectionKey
          order
          data
          blocks {
            id
            blockType
            order
            data
          }
        }
      }
    }
  }
`;

export interface StrapiBlock {
  id?: number | string;
  blockType: string;
  order?: number | null;
  data: Record<string, unknown>;
}

export interface StrapiSection {
  id?: number | string;
  sectionKey: string;
  order?: number | null;
  data: Record<string, unknown>;
  blocks?: StrapiBlock[];
}

export interface StrapiPage {
  documentId: string;
  title: string;
  slug: string;
  publishedAt?: string | null;
  isHomepage?: boolean;
  pageTemplate?: {
    sections?: StrapiSection[];
  } | null;
}

export interface StrapiPagesResponse {
  pages: StrapiPage[];
}

/**
 * Fetch all pages from Strapi
 */
export async function fetchPages(): Promise<StrapiPage[]> {
  if (!graphqlEndpoint) {
    console.warn("Strapi GraphQL endpoint not configured. Returning empty pages array.");
    return [];
  }

  try {
    const response = await strapiClient.request<StrapiPagesResponse>(getPagesQuery);
    return response.pages;
  } catch (error) {
    console.error("Failed to fetch pages from Strapi:", error);
    console.error(`GraphQL Endpoint: ${graphqlEndpoint}`);
    
    // Check if it's a 405 error and provide helpful message
    if (error && typeof error === 'object' && 'response' in error) {
      const status = (error as { response?: { status?: number } }).response?.status;
      if (status === 405) {
        console.error(`405 Method Not Allowed: The GraphQL endpoint at ${graphqlEndpoint} may not be configured correctly or doesn't accept POST requests.`);
        console.error(`Please verify that the Strapi GraphQL plugin is enabled and the endpoint is accessible.`);
      }
    }
    
    // Return empty array on failure so the homepage shows "No pages found" instead of "Failed to load pages"
    console.warn("Strapi fetch failed. Returning empty array.", error instanceof Error ? error.message : String(error));
    return [];
  }
}

/**
 * Fetch all metaobject entries from Strapi
 */
async function fetchMetaobjectEntries(): Promise<MetaobjectEntry[]> {
  try {
    const response = await strapiClient.request<MetaobjectEntriesResponse>(getMetaobjectEntriesQuery);
    return response.metaobjectEntries;
  } catch (error) {
    console.error("Failed to fetch metaobject entries:", error);
    return [];
  }
}

/**
 * Check if a data value is a metaobject_ref typed field
 */
function isMetaobjectRef(val: unknown): val is { type: "metaobject_ref"; value: string } {
  return (
    typeof val === "object" &&
    val !== null &&
    (val as Record<string, unknown>).type === "metaobject_ref" &&
    typeof (val as Record<string, unknown>).value === "string"
  );
}

/**
 * Normalize a single metaobject entry field value.
 * Image fields are stored in Strapi as stringified JSON (e.g. '{"id":15,"url":"..."}').
 * This parses them back to objects so the theme receives clean, ready-to-use data.
 */
function normalizeEntryFieldValue(val: unknown): unknown {
  if (typeof val !== "string") return val;
  // Try to parse as JSON — image/video fields are stored as stringified objects
  try {
    const parsed = JSON.parse(val);
    if (parsed && typeof parsed === "object" && !Array.isArray(parsed)) {
      return parsed;
    }
  } catch {
    // Not JSON — plain string, return as-is
  }
  return val;
}

/**
 * Normalize all field values in a metaobject entry's data blob.
 * Returns a new object with parsed image/video fields.
 */
function normalizeEntryData(data: Record<string, unknown>): Record<string, unknown> {
  const result: Record<string, unknown> = {};
  for (const [key, val] of Object.entries(data)) {
    result[key] = normalizeEntryFieldValue(val);
  }
  return result;
}

/**
 * Replace metaobject_ref typed values in a data map with the resolved entry data
 */
function resolveRefsInData(
  data: Record<string, unknown>,
  entryMap: Map<string, MetaobjectEntry>
): Record<string, unknown> {
  const resolved: Record<string, unknown> = {};
  for (const [key, val] of Object.entries(data)) {
    if (isMetaobjectRef(val)) {
      const entry = entryMap.get(val.value);
      // Replace with json-typed value containing the normalized entry data
      // Falls back to the original ref if the entry wasn't found
      resolved[key] = entry
        ? { type: "json", value: normalizeEntryData(entry.data) }
        : val;
    } else {
      resolved[key] = val;
    }
  }
  return resolved;
}

/**
 * Resolve all metaobject_ref fields in a page by fetching the referenced entries
 * and replacing refs with the actual entry data (push model for MVP).
 *
 * TODO: When the theme has its own client, remove this function and let the theme
 * fetch metaobject data directly via its own API client.
 */
async function resolvePageMetaobjectRefs(page: StrapiPage): Promise<StrapiPage> {
  // Collect all referenced documentIds across sections and blocks
  const referencedIds = new Set<string>();
  for (const section of page.pageTemplate?.sections ?? []) {
    for (const val of Object.values(section.data)) {
      if (isMetaobjectRef(val)) referencedIds.add(val.value);
    }
    for (const block of section.blocks ?? []) {
      for (const val of Object.values(block.data)) {
        if (isMetaobjectRef(val)) referencedIds.add(val.value);
      }
    }
  }

  if (referencedIds.size === 0) return page;

  const entries = await fetchMetaobjectEntries();
  const entryMap = new Map(
    entries
      .filter((e) => referencedIds.has(e.documentId))
      .map((e) => [e.documentId, e])
  );

  return {
    ...page,
    pageTemplate: page.pageTemplate
      ? {
          ...page.pageTemplate,
          sections: (page.pageTemplate.sections ?? []).map((section) => ({
            ...section,
            data: resolveRefsInData(section.data, entryMap),
            blocks: (section.blocks ?? []).map((block) => ({
              ...block,
              data: resolveRefsInData(block.data, entryMap),
            })),
          })),
        }
      : page.pageTemplate,
  };
}

/**
 * Fetch a single page by slug
 */
export async function fetchPageBySlug(slug: string): Promise<StrapiPage | null> {
  if (!graphqlEndpoint) {
    console.warn("Strapi GraphQL endpoint not configured. Cannot fetch page.");
    return null;
  }

  try {
    const response = await strapiClient.request<StrapiPagesResponse>(getPageBySlugQuery, { slug });
    const page = response.pages[0] || null;
    if (!page) return null;
    return await resolvePageMetaobjectRefs(page);
  } catch (error) {
    console.error(`Failed to fetch page with slug "${slug}" from Strapi:`, error);
    // During build time, return null instead of throwing to allow build to continue
    if (process.env.NODE_ENV === 'production' || process.env.NEXT_PHASE === 'phase-production-build') {
      console.warn(`Build-time Strapi fetch failed for slug "${slug}". Returning null to allow build to continue.`);
      return null;
    }
    return null;
  }
}
