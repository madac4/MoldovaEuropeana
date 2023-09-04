import { ui, defaultLang, showDefaultLang, languages } from './ui';

export function getLangFromUrl(url) {
	const [, lang] = url.pathname.split('/');
	if (lang in ui) return lang;
	return defaultLang;
}

export function useTranslatedPath(lang) {
	return function translatePath(path, l = lang) {
		return !showDefaultLang && l === defaultLang ? path : `${path}${l}`
	}
}

export function getCurrentLanguage(url) {
	const langCode = getLangFromUrl(url);
	const language = languages.find(lang => lang.code === langCode);
	return language || languages.find(lang => lang.code === defaultLang);
}

export function getArticlePath(articleTitle, lang) {
    return !showDefaultLang && lang === defaultLang ? `/articles/${articleTitle}` : `/${lang}/articles/${articleTitle}`;
}

export function changeLangFromUrl(lang, path) {
	return !showDefaultLang && `${lang}${path}`
}