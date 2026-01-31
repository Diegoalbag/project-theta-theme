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

// GraphQL query for fetching pages
const getPagesQuery = gql`
  query GetPages {
    pages {
      documentId
      title
      slug
      sections {
        id
        sectionKey
        order
        data
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
      sections {
        id
        sectionKey
        order
        data
      }
    }
  }
`;

export interface StrapiPage {
  documentId: string;
  title: string;
  slug: string;
  sections?: Array<{
    id?: number | string;
    sectionKey: string;
    order?: number | null;
    data: Record<string, unknown>;
  }>;
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

  // #region agent log
  try {
    const logData = {
      location: 'templates/theme-site/lib/strapi-client.ts:fetchPages',
      message: 'Fetching pages from Strapi',
      data: {
        endpoint: graphqlEndpoint,
        hasToken: !!STRAPI_ACCESS_TOKEN,
        nodeEnv: process.env.NODE_ENV,
        nextPhase: process.env.NEXT_PHASE
      },
      timestamp: Date.now(),
      sessionId: 'debug-session',
      runId: 'run1',
      hypothesisId: 'A'
    };
    if (typeof fetch !== 'undefined') {
      fetch('http://127.0.0.1:7242/ingest/5d3bcc19-0b1f-4ca5-9ac9-cd20bd53e9f0', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(logData)
      }).catch(() => {});
    }
  } catch (e) {}
  // #endregion

  try {
    const response = await strapiClient.request<StrapiPagesResponse>(getPagesQuery);
    return response.pages;
  } catch (error) {
    // #region agent log
    try {
      const errorData: any = {};
      if (error && typeof error === 'object') {
        if ('response' in error) {
          errorData.responseStatus = (error as any).response?.status;
          errorData.responseBody = (error as any).response?.body;
        }
        if ('message' in error) {
          errorData.message = (error as any).message;
        }
      }
      
      const logData = {
        location: 'templates/theme-site/lib/strapi-client.ts:fetchPages',
        message: 'Failed to fetch pages from Strapi',
        data: {
          endpoint: graphqlEndpoint,
          error: errorData,
          errorString: String(error)
        },
        timestamp: Date.now(),
        sessionId: 'debug-session',
        runId: 'run1',
        hypothesisId: 'A'
      };
      if (typeof fetch !== 'undefined') {
        fetch('http://127.0.0.1:7242/ingest/5d3bcc19-0b1f-4ca5-9ac9-cd20bd53e9f0', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(logData)
        }).catch(() => {});
      }
    } catch (e) {}
    // #endregion

    console.error("Failed to fetch pages from Strapi:", error);
    console.error(`GraphQL Endpoint: ${graphqlEndpoint}`);
    
    // Check if it's a 405 error and provide helpful message
    if (error && typeof error === 'object' && 'response' in error) {
      const status = (error as any).response?.status;
      if (status === 405) {
        console.error(`405 Method Not Allowed: The GraphQL endpoint at ${graphqlEndpoint} may not be configured correctly or doesn't accept POST requests.`);
        console.error(`Please verify that the Strapi GraphQL plugin is enabled and the endpoint is accessible.`);
      }
    }
    
    // During build time, return empty array instead of throwing to allow build to continue
    if (process.env.NODE_ENV === 'production' || process.env.NEXT_PHASE === 'phase-production-build') {
      console.warn("Build-time Strapi fetch failed. Returning empty array to allow build to continue.");
      return [];
    }
    throw error;
  }
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
    return response.pages[0] || null;
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
