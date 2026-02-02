// @ts-check

import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";

import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [mdx()],
  adapter: vercel({
    imagesConfig: {
      sizes: [320, 640, 1280],
    },
  }),
});
