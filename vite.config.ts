import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/Meu-Potf-lio/",
  plugins: [react(), tailwindcss()],
  build: { outDir: "dist" },
});
