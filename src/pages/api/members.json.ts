import type { APIRoute } from "astro";
import { getMembersData } from "../../lib/machine-data";

export const GET: APIRoute = async () => {
  const members = await getMembersData();

  return new Response(JSON.stringify(members, null, 2), {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "public, max-age=300",
    },
  });
};
