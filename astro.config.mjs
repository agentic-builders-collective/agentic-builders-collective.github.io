import { defineConfig } from "astro/config";
import { fileURLToPath } from "node:url";
import { copyLogoGenerator, serveLogoGeneratorDev } from "./scripts/copy-logo-generator.mjs";

export default defineConfig({
  build: {
    inlineStylesheets: "always",
  },
  integrations: [
    {
      name: "copy-logo-generator",
      hooks: {
        "astro:build:done": async ({ dir }) => {
          await copyLogoGenerator({ outDir: fileURLToPath(dir) });
        },
        "astro:server:setup": ({ server }) => {
          server.middlewares.use(serveLogoGeneratorDev());
        },
      },
    },
  ],
  output: "static",
  site: "https://www.agenticbuilders.sg",
  server: {
    host: true,
    allowedHosts: ["yjmbpro.local"],
  },
});
