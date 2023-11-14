import PostsController from "./controllers/PostsController";

class Data {
   public readonly Posts: PostsController;

   constructor() {
      this.Posts = new PostsController();
   }
}

const Collections = new Data();
export default Collections;

const { Posts } = Collections;
export { Posts };