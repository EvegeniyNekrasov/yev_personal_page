import { getAcceptedLanguages } from '../../../utils/lang-util.js';

export async function load({ params, fetch }) {
	const { lang } = params;
	const language = getAcceptedLanguages(lang);
	const response = await fetch(`/api/${language}/posts`);
	const posts = await response.json();
	return { posts };
}
