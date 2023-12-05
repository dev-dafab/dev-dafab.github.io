import i18n from 'sveltekit-i18n';
import lang from './lang.json';

export const defaultLocale = 'en';

/** @type {import('sveltekit-i18n').Config} */
export const config = {
	preprocess: 'preserveArrays',
	translations: {
		en: { lang },
		de: { lang }
	},
	loaders: [
		{
			locale: 'en',
			key: 'common',
			loader: async () => (await import('./en/common.json')).default
		},
		{
			locale: 'en',
			key: 'project.one',
			loader: async () => (await import('./en/one.json')).default
		},
		{
			locale: 'en',
			key: 'project.two',
			loader: async () => (await import('./en/two.json')).default
		},
		{
			locale: 'en',
			key: 'project.three',
			loader: async () => (await import('./en/three.json')).default
		},
		{
			locale: 'en',
			key: 'project.four',
			loader: async () => (await import('./en/four.json')).default
		},
		{
			locale: 'en',
			key: 'project.five',
			loader: async () => (await import('./en/five.json')).default
		},
		{
			locale: 'en',
			key: 'project.six',
			loader: async () => (await import('./en/six.json')).default
		},

		{
			locale: 'de',
			key: 'common',
			loader: async () => (await import('./de/common.json')).default
		}
	]
};

export const {
	t,
	loading,
	locales,
	locale,
	loadTranslations,
	addTranslations,
	translations,
	setLocale,
	setRoute
} = new i18n(config);

loading.subscribe(
	($loading) => $loading && console.log('Loading translations for the main instance...')
);
