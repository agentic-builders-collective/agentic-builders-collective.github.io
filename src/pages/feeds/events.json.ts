import type { APIRoute } from "astro";
import { getEventsData } from "../../lib/machine-data";

export const GET: APIRoute = async () => {
  const now = new Date();
  const upcoming = (await getEventsData()).filter((event) => new Date(event.date) >= now || event.status === "upcoming");

  return new Response(JSON.stringify({ upcoming }, null, 2), {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "public, max-age=300",
    },
  });
};
