<script>
   import "highlight.js/styles/atom-one-dark.css";

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
         <li><a href="/">Home</a></li>
         <li><a href="/about">About</a></li>
         <li><a href="/blog">Blog</a></li>
      </ul>
   </nav>
</header>

<main class="container">
   <slot />
</main>

<style>
   @import "/styles/default.css";
</style>
