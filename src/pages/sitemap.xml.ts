import type { APIRoute } from "astro";

const BASE_URL = "https://www.agenticbuilders.sg";

const ROUTES = [
  "/",
  "/about/",
  "/community/",
  "/showcase/",
  "/articles/",
  "/events/",
  "/contact/",
  "/llms.txt",
];

export const GET: APIRoute = async () => {
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${ROUTES
    .map((route) => `  <url><loc>${new URL(route, BASE_URL).toString()}</loc></url>`)
    .join("\n")}\n</urlset>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
};
