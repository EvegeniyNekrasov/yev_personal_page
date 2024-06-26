<script lang="js">
	import * as config from '$lib/config';
	import { goto } from '$app/navigation';
	import { t, locale, locales } from '../../../i18n';
	import Badge from '../../../lib/components/Badge/Badge.svelte';
	import TimeLine from '../../../lib/components/TimeLine/TimeLine.svelte';

	export let data;
	$: posts = data?.posts || [];

	$: groupedData = posts.reduce((acc, obj) => {
		const date = obj.date;
		if (!acc[date]) {
			acc[date] = [];
		}
		acc[date].push(obj);
		return acc;
	}, {});

	$: finalData = groupedData;

	function handlePageChange(postSlug) {
		goto(`/note/${$locale}/${postSlug}`);
	}
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<section>
	<!-- <ul class="posts">
		{#each Object.keys(finalData) as date}
			<h2>{date}</h2>
			{#each finalData[date] as post}
				<li role="none" on:click={() => handlePageChange(post.slug)} class="post">
					<h3>{post.title}</h3>
					<p class="date">{post.date}</p>
					<p class="description">{post.description}</p>
					<div class="tags">
						{#each post.categories as category}
							<Badge name={category} />
						{/each}
					</div>
				</li>
			{/each}
		{/each}
	</ul> -->
	<TimeLine data={finalData} />
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

	.tags {
		display: flex;
		gap: 10px;
		margin-top: 10px;
	}
</style>
