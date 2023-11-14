import { IPostItem, IPostMeta } from "../shared/interfaces/post.interfaces";

export default class PostItem implements IPostItem {
   path: string;
   meta: IPostMeta;

   constructor(post: IPostItem) {
      this.path = post.path;
      this.meta = post.meta;
   }

   public get published() {
      return this.meta.status === 'published';
   }

   public get title() {
      return this.meta.title;
   }

   public get date() {
      return this.meta.date;
   }

   public get excerpt() {
      return this.meta.excerpt;
   }

   public get cover() {
      return this.meta.cover;
   }

   public get tags() {
      return this.meta.tags;
   }

   public hasCategory(str: string) {
      return this.meta.tags.includes(str);
   }

   static async create([path, resolver]) {
      const { metadata } = await resolver();
      const slug = path.split('/').reverse()[0].slice(null, -3);
      
      return new PostItem({
         path: `/blog/${slug}`,
         meta: metadata
      });
   }
}