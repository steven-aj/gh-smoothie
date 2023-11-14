import { Posts } from "$lib/data";

export async function load() {
   return {
      posts: await Posts.getAll(),
      tags: await Posts.getTags()
   };
}