<script>
	import { onMount } from 'svelte';
	import anime from 'animejs';
	let animation;

	function makeAnimation() {
		anime
			.timeline()
			.add({
				targets: '.page-animation',
				easing: 'cubicBezier(.2,.53,.82,.22)',
				translateY: ['0%', '0%'],
				duration: 200
			})
			.add({
				targets: '.page-animation',
				easing: 'cubicBezier(.2,.53,.82,.22)',
				translateY: ['0%', '-100vh'],
				duration: 500,
				delay: 200
			});
	}

	onMount(() => {
		makeAnimation();
	});
</script>

<div class="page-animation" >
	<h1>EVGENIY ALEKSANDROVICH NEKRASOV</h1>
</div>

<style>
	.page-animation {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: #000;
		z-index: 9999;
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
