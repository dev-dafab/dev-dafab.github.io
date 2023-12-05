import { loadTranslations } from '$lib/translations';
export const trailingSlash = 'always';
export const prerender = true;
export const ssr = false;
export const csr = true;

export const load = async ({ url }) => {
	const { pathname } = url;
	const initLocale = 'en'; // get from cookie, user session, ...
	await loadTranslations(initLocale, pathname); // keep this just before the `return`
	return {};
};
