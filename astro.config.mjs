// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite"; // ✅ même nom que celui qu’on utilise plus bas
import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()], // ✅ cohérent
  },

  adapter: netlify(),
});
