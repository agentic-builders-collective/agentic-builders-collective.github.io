import type { APIRoute } from "astro";
import { getEventsData, toAbsoluteUrl } from "../../lib/machine-data";

const escapeText = (value: string) => value
  .replace(/\\/g, "\\\\")
  .replace(/\n/g, "\\n")
  .replace(/,/g, "\\,")
  .replace(/;/g, "\\;");

const formatUtcDate = (date: Date) => date.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}Z$/, "Z");

const addDays = (date: Date, days: number) => {
  const next = new Date(date);
  next.setUTCDate(next.getUTCDate() + days);
  return next;
};

export const GET: APIRoute = async () => {
  const now = new Date();
  const upcoming = (await getEventsData()).filter((event) => new Date(event.date) >= now || event.status === "upcoming");
  const timestamp = formatUtcDate(new Date());

  const lines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Agentic Builders Collective//Events//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
  ];

  for (const event of upcoming) {
    const start = new Date(event.date);
    const end = addDays(start, 1);
    const eventUrl = toAbsoluteUrl(event.url);

    lines.push(
      "BEGIN:VEVENT",
      `UID:${event.id}@agenticbuilders.sg`,
      `DTSTAMP:${timestamp}`,
      `DTSTART;VALUE=DATE:${formatUtcDate(start).slice(0, 8)}`,
      `DTEND;VALUE=DATE:${formatUtcDate(end).slice(0, 8)}`,
      `SUMMARY:${escapeText(event.title)}`,
      `DESCRIPTION:${escapeText(event.description || "Agentic Builders Collective event")}`,
      `LOCATION:${escapeText(event.venue || "Singapore")}`,
      `URL:${eventUrl}`,
      "END:VEVENT",
    );
  }

  lines.push("END:VCALENDAR");

  return new Response(`${lines.join("\r\n")}\r\n`, {
    headers: {
      "Content-Type": "text/calendar; charset=utf-8",
      "Cache-Control": "public, max-age=300",
    },
  });
};
