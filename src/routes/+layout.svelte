<script>
	import '../app.css';
	import Navbar from '../lib/components/Navbar/Navbar.svelte';

	let date = new Date();
	let year = date.getFullYear();
</script>

<div class="wrapper">
	<header>
		<Navbar />
	</header>
	<main>
		<slot></slot>
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
		max-width: 1000px;
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
		margin-top: 100px;
		width: 100%;
		height: 100%;
	}

	footer {
		grid-area: footer;
		text-align: center;
		padding: 20px;
	}
</style>
