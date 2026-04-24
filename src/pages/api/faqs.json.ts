import type { APIRoute } from "astro";
import { getFaqData } from "../../lib/machine-data";

export const GET: APIRoute = async () => {
  const faqs = await getFaqData();

  return new Response(JSON.stringify({ faqs }, null, 2), {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "public, max-age=300",
    },
  });
};
