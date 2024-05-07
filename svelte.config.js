import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import adapter from "@sveltejs/adapter-static";
// import tailwindcss from '@tailwindcss/vite';
//
//
console.log();

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  // vitePlugin: [tailwindcss()],

  kit: {
    adapter: adapter({
      fallback: "404.html",
    }),
    alias: {
      $i18n: "src/i18n",
    },
    paths: {
      base: Bun.argv.includes("dev") ? "" : process.env.BASE_PATH,
    },
  },
};

export default config;
