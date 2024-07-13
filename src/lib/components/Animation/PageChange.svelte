<script>
	import { onMount } from 'svelte';
	import anime from 'animejs';

	let isAnimatingFinished = false;

	const makeAnimation = () => {
		if (typeof window !== 'undefined') {
			anime
				.timeline()
				.add({
					targets: '.page-animation',
					easing: 'easeInOutQuad', // Smoother easing function
					translateY: ['100vh', '0%'],
					duration: 500, // Increased duration for smoother transition
					begin: () => {
						isAnimatingFinished = false;
					}
				})
				.add({
					targets: '.page-animation',
					easing: 'easeInOutQuad', // Consistent easing function
					translateY: ['0%', '0%'],
					duration: 300, // Slightly increased duration
					delay: 300
				})

				.add({
					targets: '.page-animation',
					easing: 'cubicBezier(1,.14,.84,1.31)', // Consistent easing function
					translateY: ['0%', '-100vh'],
					duration: 500, // Increased duration for smoother transition
					complete: () => {
						isAnimatingFinished = true;
					}
				});
		}
	};

	onMount(() => makeAnimation());
</script>

<div class="container">
	<div class="page-animation">
		<span class="text">paco</span>
	</div>
	{#if isAnimatingFinished}
		<slot />
	{/if}
</div>

<style>
	.container {
		width: 100%;
		min-height: 100%;
		position: relative;
	}
	.page-animation {
		position: fixed;
		display: flex;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: var(--bg-color);
		z-index: 9999;
		align-items: center;
		justify-content: center;
	}
</style>
