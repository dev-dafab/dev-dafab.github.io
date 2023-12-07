import { join } from 'path';
import type { Config } from 'tailwindcss';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import { skeleton } from '@skeletonlabs/tw-plugin';

export default {
	darkMode: 'class',
	mode: 'jit',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	daisyui: {
		themes: [
			{
				light: {
					...require('daisyui/src/theming/themes')['light'],
					primary: 'blue',
					secondary: 'teal'
				}
			},
			'dark'
		]
	},
	theme: {
		extend: {}
	},
	plugins: [forms, typography, require('daisyui')]
} satisfies Config;
