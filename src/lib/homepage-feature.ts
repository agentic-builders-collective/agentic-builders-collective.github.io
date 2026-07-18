export interface HomepageFeature {
  label: string;
  title: string;
  href: string;
  description?: string;
  external?: boolean;
}

/**
 * Optional feature shown beneath the homepage hero actions.
 *
 * Keep this `null` when there is nothing timely to promote. To feature an item,
 * replace `null` with an object containing a short label, linked title, and URL.
 * Add a brief description only when the title needs context, and set `external`
 * to `true` for links that should open in a new tab. Clear stale features rather
 * than leaving an outdated promotion on the homepage.
 *
 * Example:
 * {
 *   label: "Featured",
 *   title: "What we want visitors to notice",
 *   href: "/events/#event-id",
 *   description: "Optional one-sentence context.",
 * }
 */
export const homepageFeature: HomepageFeature | null = null;
