<script>
   export let post;
</script>

<article>
   <header>
      <h3>{post.title}</h3>
   </header>

   {post.excerpt}

   <footer>
      <a href={post.path} role="button">Read Article</a>
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
