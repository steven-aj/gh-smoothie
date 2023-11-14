export async function filterPublished(posts) {
   return posts.filter(post => post.published)
}

export function sortByDate(posts) {
   return posts.sort((a, b) => a.date - b.date)
}