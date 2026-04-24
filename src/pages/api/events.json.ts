import type { APIRoute } from "astro";
import { getEventsData } from "../../lib/machine-data";

export const GET: APIRoute = async () => {
  const events = await getEventsData();

  return new Response(JSON.stringify({ events }, null, 2), {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "public, max-age=300",
    },
  });
};
