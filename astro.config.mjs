import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, fontProviders } from "astro/config";
import robots from "astro-robots";

export default defineConfig({
  site: "http://localhost:3000",
  devToolbar: {
    enabled: false,
  },
  server: {
    port: 3000,
  },
  experimental: {
    fonts: [
      {
        provider: fontProviders.google(),
        name: "Inter",
        cssVariable: "--font-inter",
      },
    ],
  },
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [sitemap(), robots()],
});
