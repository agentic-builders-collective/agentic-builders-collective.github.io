import type { APIRoute } from "astro";
import { getShowcaseData } from "../../lib/machine-data";

export const GET: APIRoute = async () => {
  const showcase = await getShowcaseData();

  return new Response(JSON.stringify(showcase, null, 2), {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "public, max-age=300",
    },
  });
};
