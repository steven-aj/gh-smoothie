<script>
   // You only need this if your blog isn't on your root GitHub
   // domain (ex. your-name.github.io)
   import { base } from "$app/paths";

   export let post;
</script>

<article>
   <header>
      <h3>{post.title}</h3>
   </header>

   {post.excerpt}

   <footer>
      <a href={base+post.path} role="button">Read Article</a>
   </footer>
</article>

<style>
   article {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
   }

   footer a[role="button"] {
      width: 100%;
   }
</style>
