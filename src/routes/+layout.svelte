<script>
   import "highlight.js/styles/atom-one-dark.css";
   
   // You only need this if your blog isn't on your root GitHub
   // domain (ex. your-name.github.io)
   import { base } from "$app/paths";

   export let data;

   let { title, author, keywords } = data;
</script>

<svelte:head>
   <meta name="title" content={title} />
   <meta name="author" content={author} />
   <meta name="keywords" content={keywords} />
</svelte:head>

<header class="container-fluid">
   <nav class="container-fluid">
      <ul>
         <li><strong>GH Smoothie</strong></li>
      </ul>
      <ul>
         <li><a href={`${base}/`}>Home</a></li>
         <li><a href={`${base}/about`}>About</a></li>
         <li><a href={`${base}/blog`}>Blog</a></li>
      </ul>
   </nav>
</header>

<main class="container">
   <slot />
</main>

<style>
   @import "/styles/default.css";
</style>
