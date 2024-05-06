import { vitePreprocess } from '@sveltejs/kit/vite';
import adapter from '@sveltejs/adapter-static';

const dev = process.argv.includes('dev');

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte'],
	preprocess: [vitePreprocess()],

	vitePlugin: {
		inspector: true
	},
	kit: {
		adapter: adapter({
			fallback: '404.html'
		}),
		alias: {
			$i18n: 'src/i18n'
		},
		paths: {
			base: dev ? '' : process.env.BASE_PATH
		}
	}
};
export default config;
