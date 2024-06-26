const languages = ['es', 'es', 'ru'];

/**
 * If lang is in the list of accepted languages, return lang, otherwise return 'es'.
 * @param {*} lang
 * @returns string language // 'es' | 'en' | 'ru'
 */
export const getAcceptedLanguages = (lang) => (languages.includes(lang) ? lang : 'es');
