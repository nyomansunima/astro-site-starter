import { defineConfig, fontProviders } from "astro/config"
import tailwindcss from "@tailwindcss/vite"
import robots from "astro-robots"
import sitemap from "@astrojs/sitemap"

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
})
