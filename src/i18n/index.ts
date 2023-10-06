import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const languageDetectorOptions = {
	// order and from where user language should be detected
	order: [
		'querystring',
		'cookie',
		'localStorage',
		'sessionStorage',
		'navigator',
		'htmlTag',
		'path',
		'subdomain'
	],

	// keys or params to lookup language from
	lookupQuerystring: 'lng',
	lookupCookie: 'i18next',
	lookupLocalStorage: 'i18nextLng',
	lookupSessionStorage: 'i18nextLng',
	lookupFromPathIndex: 0,
	lookupFromSubdomainIndex: 0,

	// cache user language on
	caches: ['localStorage', 'cookie'],
	excludeCacheFor: ['cimode'], // languages to not persist (cookie, localStorage)

	// optional expire and domain for set cookie
	cookieMinutes: 10,
	cookieDomain: 'i18nextLng',

	// optional htmlTag with lang attribute, the default is:
	htmlTag: document.documentElement,

	// optional set cookie options, reference:[MDN Set-Cookie docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie)
	cookieOptions: { path: '/', sameSite: 'strict' }

	// optional conversion function to use to modify the detected language code
	// convertDetectedLanguage: 'Iso15897'
};

export const initI18n = async () => {
	await i18next.use(LanguageDetector).init({
		debug: true,
		lowerCaseLng: true,
		fallbackLng: {
			default: ['en'],
			'de-DE': ['de']
		},
		resources: {
			en: {
				translation: {
					hello: 'hello world'
				}
			},
			de: {
				translation: {
					hello: 'hello Welt'
				}
			},
			de_de: {
				translation: {
					hello: 'hello Welt'
				}
			}
		},
		detection: languageDetectorOptions
	});
};
await initI18n();
const t = i18next.t;

export default t;
