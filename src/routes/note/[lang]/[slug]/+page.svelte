<script lang="js">
	export let data;
	import { goto } from '$app/navigation';
	import { t, locale, locales } from '../../../../i18n';
	import MdKeyboardBackspace from 'svelte-icons/md/MdKeyboardBackspace.svelte';

	function goBack() {
		goto(`/reflexiones/${$locale}`);
	}
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<article>
	<div class="go-back">
		<div class="icon">
			<MdKeyboardBackspace />
		</div>
		<button on:click={goBack}>Go back</button>
	</div>
	<hgroup>
		<h1>{data.meta.title}</h1>
		<p>Published at {data.meta.date}</p>
	</hgroup>

	<div class="tags">
		{#each data.meta.categories as category}
			<span class="surface-4">&num;{category}</span>
		{/each}
	</div>

	<div class="prose">
		<svelte:component this={data.content} />
	</div>
</article>

<style>
	article {
		max-inline-size: var(--size-content-3);
		margin-inline: auto;
	}

	h1 {
		text-transform: capitalize;
	}

	h1 + p {
		margin-top: var(--size-2);
		color: var(--text-2);
	}

	.tags {
		display: flex;
		gap: var(--size-3);
		margin-top: var(--size-7);
	}

	.tags > * {
		padding: var(--size-2) var(--size-3);
		border-radius: var(--radius-round);
	}

	.go-back {
		display: flex;
		gap: 10px;
		align-items: center;
	}

	.icon {
		width: 24px;
		height: 24px;
	}
</style>
