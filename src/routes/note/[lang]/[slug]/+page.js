import { error } from '@sveltejs/kit';
import { getAcceptedLanguages } from '../../../../utils/lang-util.js';

export async function load({ params }) {
	const language = getAcceptedLanguages(params.lang);
	try {
		const post = await import(`../../../../posts/${language}/${params.slug}.md`);
		return {
			content: post.default,
			meta: post.metadata
		};
	} catch (e) {
		error(404, `Could not find ${params.slug}`);
	}
}
