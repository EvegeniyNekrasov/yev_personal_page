<script lang="js">
	export let crumbs;
	import MdKeyboardArrowRight from 'svelte-icons/md/MdKeyboardArrowRight.svelte';
</script>

{#if crumbs && crumbs.length > 0}
	<ul>
		{#each crumbs as item, index}
			<li>
				<a href={item.url}>{item.title}</a>
			</li>
			{#if index < crumbs.length - 1}
				<div class="icon">
					<MdKeyboardArrowRight />
				</div>
			{/if}
		{/each}
	</ul>
{/if}

<style>
	ul {
		list-style: none;
		padding: 0;
		width: 100%;
		display: flex;
		gap: 10px;
	}

	a {
		color: var(--text);
		text-decoration: none;
	}

	a:hover {
		text-decoration: underline;
		color: var(--blue-10);
	}

	.icon {
		width: 22px;
		height: auto;
		display: flex;
		align-items: center;
		justify-content: center;
		color: var(--text);
	}
</style>
