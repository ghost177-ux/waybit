// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { copyFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const projectRoot = dirname(fileURLToPath(import.meta.url));

const copyRobotsTxtPlugin = {
  name: "copy-robots-txt-to-published-root",
  apply: "build" as const,
  async writeBundle(outputOptions: { dir?: string }) {
    const outputDir = outputOptions.dir ? resolve(outputOptions.dir) : "";

    if (outputDir !== resolve(projectRoot, ".output/public")) return;

    await copyFile(resolve(projectRoot, "src/robots.txt"), resolve(outputDir, "robots.txt"));
  },
};

export default defineConfig({
  plugins: [copyRobotsTxtPlugin],
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
});
