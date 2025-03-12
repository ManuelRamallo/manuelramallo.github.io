import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://manuelramallo.github.io',
	integrations: [tailwind()],
  i18n: {
    defaultLocale: "en",
    locales: ["es", "en"],
    routing: { 
      prefixDefaultLocale: false
    },
    fallback: {
      es: "en"
    }
  }
});
