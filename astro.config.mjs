import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://manuelramallo.github.io',
	integrations: [tailwind()],
  i18n: {
    defaultLocale: "es",
    locales: ["en", "es"],
    routing: { 
      prefixDefaultLocale: false
    },
    fallback: {
      en: "es"
    }
  }
});
