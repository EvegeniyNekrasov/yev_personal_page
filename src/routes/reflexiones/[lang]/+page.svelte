<script lang="js">
	import * as config from '$lib/config';
	import { goto } from '$app/navigation';
	import { t, locale, locales } from '../../../i18n';

	export let data;
	function handlePageChange(post) {
		goto(`/note/${$locale}/${post}`);
	}
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<section>
	<ul class="posts">
		{#each data.posts as post}
			<li role="none" on:click={() => handlePageChange(post.slug)} class="post">
				<h3>{post.title}</h3>
				<p class="date">{post.date}</p>
				<p class="description">{post.description}</p>
			</li>
		{/each}
	</ul>
</section>

<style>
	ul {
		list-style: none;
		padding: 0;
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 20px;
	}

	li {
		background-color: var(--blue-a4);
		padding: 10px 20px;
		border-radius: 10px;
	}
</style>
