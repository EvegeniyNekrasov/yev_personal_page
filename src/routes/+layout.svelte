<script>
	import Navbar from '../lib/components/Navbar/Navbar.svelte';
	import { fly } from 'svelte/transition';

	let date = new Date();
	let year = date.getFullYear();
	export let data;
	const ANIMATION_VALUE = 115;
	import '../app.css';
	import CustomCursor from '../lib/components/CustomCursor/CustomCursor.svelte';
</script>

<CustomCursor />
<div class="wrapper">
	<header>
		<Navbar />
	</header>
	<main>
		{#key data.url}
			<div
				in:fly={{ x: -200, duration: ANIMATION_VALUE, delay: ANIMATION_VALUE }}
				out:fly={{ duration: ANIMATION_VALUE, duration: ANIMATION_VALUE }}
			>
				<slot />
			</div>
		{/key}
	</main>
	<footer>
		<p>© {year} Evgeniy A. Nekrasov</p>
	</footer>
</div>

<style>
	.wrapper {
		display: grid;
		grid-template-rows: auto 1fr auto;
		grid-template-areas:
			'header'
			'main'
			'footer';
		height: 100vh;
		width: 100%;
		margin: 0 auto;
	}

	header {
		grid-area: header;
		position: fixed;
		display: flex;
		justify-content: center;
		align-items: center;
		top: 0;
		right: 0;
		left: 0;
		padding: 10px 0;
	}

	main {
		grid-area: main;
		margin-top: 70px;
		width: 100%;
		height: 100%;
	}

	footer {
		grid-area: footer;
		text-align: center;
		padding: 20px;
	}
</style>
