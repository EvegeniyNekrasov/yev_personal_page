<script lang="js">
	import { fade } from 'svelte/transition';
	export let data;
	let hovered = false;

	function handleLinkClick() {
		window.open(data.href, '_blank');
	}

	function handleHover(e) {
		if (e.target.id == data.id) {
			hovered = true;
		}
	}

	function handleHoverOut() {
		hovered = false;
	}
</script>

<div
	in:fade={{ delay: 2000, duration: 2000 }}
	role="none"
	on:mouseenter={handleHover}
	on:mouseleave={handleHoverOut}
	class="link-container"
	id={data.id}
>
	<div class="data">
		<div class="icon">
			<svelte:component this={data.icon} />
		</div>
		<a class:visible={hovered} href={data.href} target="_blank" rel="noopener noreferrer"
			>{data.name}</a
		>
	</div>
</div>

<style>
	.link-container {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 0 20px;
		gap: 10px;
		height: 80px;
		width: fit-content;
		background-color: var(--primary);
	}

	.data {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 12px;
	}
	.icon {
		width: 30px;
		height: 30px;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 50%;
		color: white;
	}
	a {
		color: white;
		font-size: 1.5rem;
		font-weight: 700;
		text-decoration: none;
		display: none;
	}
	a.visible {
		display: inline-block;
	}
</style>
