export interface Recap {
  id: string;
  title: string;
  date: string;
  durationLabel: string;
  audio: string;
  description: string;
}

export const recaps: Recap[] = [
  {
    id: "recap-2026-04-29",
    title: "#1 - Why AI is moving to local hardware",
    date: "2026-04-29",
    durationLabel: "22 min",
    audio: "/recaps/abc-001-why-ai-is-moving-to-local-hardware.m4a",
    description:
      "Highlights from this week's chat: why local-first AI matters — latency, privacy, cost, and the agentic workloads pushing inference back onto your own machines.",
  },
];

export const latestRecap = recaps[0];
