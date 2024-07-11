<script>
	import Navbar from '../lib/components/Navbar/Navbar.svelte';
	import CustomCursor from '../lib/components/CustomCursor/CustomCursor.svelte';
	import PageChange from '../lib/components/Animation/PageChange.svelte';

	import '../app.css';

	export let data;
</script>

<CustomCursor />
<div class="wrapper">
	<header>
		<Navbar />
	</header>
	<main>
		{#key data.url}
			<div>
				<slot />
			</div>
		{/key}
	</main>
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
		z-index: 9000;
	}

	main {
		grid-area: main;
		margin-top: 70px;
		width: 100%;
		height: 100%;
	}

	.container {
		width: 100%;
		min-height: 100%;
		position: relative;
	}
</style>
