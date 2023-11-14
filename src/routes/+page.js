import { Posts } from "$lib/data";

export async function load() {
	const posts = await Posts.getRecent(8);
	
	const page = await import(`../content/home.md`);
	const { title, author, description, cover, keywords } = page.metadata;
	const content = page.default;

	return {
		meta: {
			title,
			author,
			description,
			keywords,
			cover
		},
		content,
		posts
	};
}