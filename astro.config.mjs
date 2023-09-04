import { defineConfig } from 'astro/config';
import preact from "@astrojs/preact";
import astroI18next from "astro-i18next";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [preact(), astroI18next(), react()]
});