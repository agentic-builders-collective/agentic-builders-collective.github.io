import { defineConfig } from "astro/config";

export default defineConfig({
  output: "static",
  site: "https://www.agenticbuilders.sg",
  server: {
    host: true,
    allowedHosts: ["yjmbpro.local"],
  },
});
