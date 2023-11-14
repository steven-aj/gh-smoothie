<script>
	export let data;

	let { meta, content } = data;
</script>

<h1>{meta.title}</h1>

{#if meta.cover}
	<img class="container-fluid cover" alt={meta.title} src={meta.cover} />
{/if}

<section>
	<svelte:component this={content} />
</section>

<style>
	.cover {
		margin-bottom: 1.5rem;
	}
</style>
