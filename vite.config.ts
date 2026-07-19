import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
import { defineConfig } from "vite";

// Static site config for GitHub Pages.
//
// This project started from a Manus template that bundled dev-only platform
// plugins (debug log collector, a storage proxy that signed URLs through a
// private "Forge" API, and a visual-editor runtime). None of that exists
// outside the Manus platform, so it's been removed here — this is now a
// plain Vite + React app that builds to static files anyone can host.
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
    },
  },
  root: path.resolve(import.meta.dirname, "client"),
  // Relative base so the built site works from any subpath — including a
  // GitHub Pages project URL like username.github.io/repo-name/ — without
  // needing to hardcode the repo name here.
  base: "./",
  build: {
    outDir: path.resolve(import.meta.dirname, "dist"),
    emptyOutDir: true,
  },
  server: {
    port: 3000,
    host: true,
  },
});
