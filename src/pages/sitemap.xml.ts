import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { toAbsoluteUrl } from "../lib/machine-data";

export const GET: APIRoute = async () => {
  const events = await getCollection("events");

  const staticRoutes = [
    "/",
    "/about/",
    "/community/",
    "/showcase/",
    "/articles/",
    "/events/",
    "/contact/",
    "/agent-access/",
    "/llms.txt",
    "/feeds/events.json",
    "/feeds/events.ics",
    "/api/events.json",
    "/api/members.json",
    "/api/showcase.json",
    "/api/faqs.json",
  ];

  const eventAnchors = events.map((event) => `/events/#${event.id}`);
  const allRoutes = [...staticRoutes, ...eventAnchors];

  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${allRoutes
    .map((path) => `  <url><loc>${toAbsoluteUrl(path)}</loc></url>`)
    .join("\n")}\n</urlset>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
};
