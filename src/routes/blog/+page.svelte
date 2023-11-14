<script>
   import PostCard from "$components/PostCard.svelte";

   export let data;

   let { posts } = data;
</script>

<h2>Blog</h2>

{#if posts.length}
   <section class="posts container">
      <div class="grid">
         {#each posts as post}
            <PostCard {post} />
         {/each}
      </div>
   </section>
{/if}

<style>
</style>
