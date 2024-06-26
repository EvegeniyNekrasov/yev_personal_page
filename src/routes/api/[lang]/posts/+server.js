import { json } from '@sveltejs/kit';
import { getAcceptedLanguages } from '../../../../utils/lang-util.js';

async function getPosts(lang) {
	let posts = [];

	const language = getAcceptedLanguages(lang);

	// Define todas las posibles rutas de importación
	const allPaths = {
		es: import.meta.glob('/src/posts/es/*.md', { eager: true }),
		en: import.meta.glob('/src/posts/en/*.md', { eager: true }),
		ru: import.meta.glob('/src/posts/ru/*.md', { eager: true })
	};

	// Selecciona el conjunto de archivos según el idioma
	const paths = allPaths[language] || allPaths['es'];

	for (const path in paths) {
		const file = paths[path];
		const slug = path.split('/').at(-1)?.replace('.md', '');

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata;
			const post = { ...metadata, slug };
			post.published && posts.push(post);
		}
	}
	posts = posts.sort(
		(first, second) => new Date(second.date).getTime() - new Date(first.date).getTime()
	);

	return posts;
}

// Handler para el método GET
export async function GET({ params }) {
	try {
		const { lang } = params;
		const posts = await getPosts(lang);
		return json(posts);
	} catch (error) {
		return json({ error: 'Failed to fetch posts' }, { status: 500 });
	}
}
