<script>
	import HeroText from '../lib/components/HeroText/HeroText.svelte';
</script>

<HeroText />
<div class="hero">
	<span
		>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod unde ad consectetur magni. Nemo
		nisi laudantium tempora accusantium. Voluptas error magnam officia exercitationem est soluta
		animi facilis voluptatibus tempore inventore.</span
	>
</div>

<div class="main">
	<div>prueba 1</div>
	<div>prueba 1</div>
	<div>prueba 1</div>
	<div>prueba 1</div>
</div>

<style>
	.hero {
		display: flex;
		flex-direction: column;
		padding: 10px;
		border-bottom: 1px solid black;
	}

	.main {
		display: grid;
		grid-template-columns: repeat(auto-fill, calc(100% / 4));
		grid-gap: 10px;
		height: calc(100% - 220px);
	}

	.main div {
		background-color: rgb(161, 141, 141);
		height: 100%;
	}
</style>
