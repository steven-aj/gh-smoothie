export async function load({ params }) {
	const page = await import(`../../content/about.md`);

	const { title, author, description, date, keywords } = page.metadata;
	const content = page.default;

	return {
		meta: {
			title,
         date,
			author,
			description,
			keywords
		},
		content
	};
}