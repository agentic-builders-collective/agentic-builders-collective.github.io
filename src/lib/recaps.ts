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
    id: "recap-2026-05-22",
    title: "#2 - Orchestrating autonomous agents in YOLO mode",
    date: "2026-05-22",
    durationLabel: "37 min",
    audio: "/recaps/abc-002-orchestrating-autonomous-agents-in-yolo-mode.m4a",
    description:
      "Highlights from the May 6-22 chat: Codex and Claude workflows, long-running agent jobs, local model experiments, community tooling, and how builders are letting autonomous agents run with fewer handoffs.",
  },
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
