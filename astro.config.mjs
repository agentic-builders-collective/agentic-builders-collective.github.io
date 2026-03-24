import { defineConfig } from "astro/config";

export default defineConfig({
  output: "static",
  site: "https://agentic-builders-collective.github.io",
  server: {
    host: true
  }
});
