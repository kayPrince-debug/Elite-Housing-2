/**
 * Replace with your production origin before launch.
 * Used by metadata, JSON-LD, and generated `app/robots.ts` / `app/sitemap.ts`.
 */
export const SITE_URL = "https://elite-housing.example.com";

export const SITE_NAME = "Elite Housing";

/** Subtitle segment used after the brand in `<title>` and social cards. */
export const SITE_TITLE_SUFFIX = "Housing and property management";

/** Default document title (home and global fallback). */
export const DEFAULT_PAGE_TITLE = `${SITE_NAME} | ${SITE_TITLE_SUFFIX}`;

export const SITE_DESCRIPTION =
  "Maximizing your property's value while providing tenants with a seamless, high-quality living experience through expert management.";

/** Matches dark UI; used by viewport, manifest, and browser chrome. */
export const THEME_COLOR = "#090a0c";

/** Placeholder social destinations; replace with real profile URLs for production. */
export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/",
  x: "https://www.x.com/",
  instagram: "https://www.instagram.com/",
} as const;

export const SOCIAL_SAME_AS = Object.freeze(
  Object.values(SOCIAL_LINKS)
) as readonly string[];
