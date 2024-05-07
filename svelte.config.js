import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import adapter from "@sveltejs/adapter-static";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),

  kit: {
    adapter: adapter({
      fallback: "404.html",
    }),
    alias: {
      $i18n: "src/i18n",
    },
    paths: {
      base: Bun.argv.includes("dev") ? "" : Bun.env.BASE_PATH,
    },
  },
};

export default config;
