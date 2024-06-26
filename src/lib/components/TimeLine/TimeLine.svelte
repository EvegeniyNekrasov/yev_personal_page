<script lang="js">
	import { t, locale, locales } from '../../../i18n';
	import { formatHumanReadableDate } from '../../../utils/datetime-utils.js';
	import MdInsertLink from 'svelte-icons/md/MdInsertLink.svelte';
	import { goto } from '$app/navigation';
	import Badge from '../Badge/Badge.svelte';

	export let data;

	function handlePageChange(postSlug) {
		goto(`/note/${$locale}/${postSlug}`);
	}
</script>

<section>
	{#each Object.keys(data) as date}
		<div class="container">
			<div class="line">
				<div class="circle"></div>
			</div>
			<div class="timeline-group">
				<span>{formatHumanReadableDate(date, $locale)}</span>
				{#each data[date] as post}
					<div class="timeline-item">
						<div role="none" class="header-link" on:click={() => handlePageChange(post.slug)}>
							<div class="icon">
								<MdInsertLink />
							</div>
							<span>{post.title}</span>
						</div>
						<p class="description">{post.description}</p>
						<div class="tags">
							{#each post.categories as category}
								<Badge name={category} />
							{/each}
						</div>
					</div>
				{/each}
			</div>
		</div>
	{/each}
</section>

<style>
	.container {
		display: flex;
		gap: 20px;
	}

	.line {
		width: 2px;
		background-color: var(--text);
		position: relative;
	}

	.icon {
		width: 22px;
		height: auto;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.header-link {
		display: flex;
		gap: 10px;
		align-items: center;
        cursor: pointer;
	}

	.header-link span {
		font-weight: bold;
		font-size: 24px;
	}

    .header-link span:hover {
		text-decoration: underline;
	}

	.circle {
		width: 10px;
		height: 10px;
		position: absolute;
		border-radius: 50%;
		background-color: var(--text);
		border: 2px solid var(--text);
		left: -4px;
		top: 5px;
	}

	.timeline-item {
		padding: 10px 0px;
		border-radius: 10px;
		margin-bottom: 10px;
	}

	.tags {
		display: flex;
		gap: 10px;
		margin-top: 10px;
	}
</style>
