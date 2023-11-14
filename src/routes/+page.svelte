<script>
   import PostCard from "$components/PostCard.svelte";

   export let data;
   let { meta, content, posts } = data;
</script>

<svelte:head>
   <meta name="title" content={meta.title} />
   <meta name="author" content={meta.author} />
   <meta name="keywords" content={meta.keywords} />
   <meta name="description" content={meta.description} />
</svelte:head>

<section class="container">
   <svelte:component this={content} />
</section>

<hr />

{#if posts.length}
   <section class="container">
      <h2>Recent Posts</h2>
      <div class="grid">
         {#each posts as post}
            <PostCard {post} />
         {/each}
      </div>
   </section>
{/if}
