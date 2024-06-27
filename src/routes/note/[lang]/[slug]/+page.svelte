<script lang="js">
	export let data;
	import { goto } from '$app/navigation';
	import { t, locale, locales } from '../../../../i18n';
	import BreadCrump from '../../../../lib/components/BreadCrump/BreadCrump.svelte';
	import { getReflexionCrumbs } from '../../../../utils/crumbs-utils.js';
	import Badge from '../../../../lib/components/Badge/Badge.svelte';
	import { formatHumanReadableDate } from '../../../../utils/datetime-utils';

	$: crumbs = getReflexionCrumbs($locale);
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<div class="go-back">
	<BreadCrump {crumbs} />
</div>
<article>
	<div class="prose">
		<hgroup>
			<h1>{data.meta.title}</h1>
			<p>Published at {formatHumanReadableDate(data.meta.date, $locale)}</p>
			<div class="tags">
				{#each data.meta.categories as category}
					<Badge BgColor="var(--blue-8)" color="var(--blue-2)" name={category} />
				{/each}
			</div>
		</hgroup>
		<svelte:component this={data.content} />
	</div>
</article>

<style>
	article {
		max-inline-size: var(--size-content-3);
		margin-inline: auto;
		display: flex;
		gap: 10px;
		border: 1px solid var(--text);
		border-radius: 10px;
		padding: 44px;
	}

	.prose {
		max-width: 100%;
		text-wrap: pretty;
	}

	.tags {
		display: flex;
		gap: 12px;
		margin-top: var(--size-7);
	}

	.go-back {
		display: flex;
		gap: 10px;
		align-items: center;
		margin-bottom: 10px;
	}
</style>
