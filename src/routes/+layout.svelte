<script>
	import { flip } from 'svelte/animate';
	import { quintOut } from 'svelte/easing';

	import '../app.css';

	let links = [
		{ name: 'Inicio', path: '/' },
		{ name: 'Sobre mi', path: '/about' },
		{ name: 'Trabajos', path: '/works' }
	];

	let activeLink = 'Inicio';

	let date = new Date();
	let year = date.getFullYear();

	function setActive(link) {
		activeLink = link;
	}
</script>

<div class="wrapper">
	<header>
		<nav>
			<ul>
				{#each links as link (link.name)}
					<li animate:flip={{ delay: 1000, duration: 1000, easing: quintOut }}>
						<a
							class:active={activeLink === link.name}
							href={link.path}
							on:click={(e) => {
								setActive(link.name);
							}}
						>
							{link.name}
						</a>
					</li>
				{/each}
			</ul>
		</nav>
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

	header nav {
		max-width: 1000px;
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 20px auto 0;
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

	ul {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 20px;
		list-style: none;
	}

	a {
		text-decoration: none;
		padding: 10px 15px;
		display: inline-block;
		color: var(--gray-12);
		transition:
			color 0.3s,
			background-color 0.3s,
			transform 0.3s;
		animation: slideIn 0.5s ease-out;
	}

	a:hover {
		color: var(--violet-10);
		background-color: var(--violet-3);
	}

	a.active {
		animation: slideIn 0.5s ease-out;
		background-color: var(--violet-6);
		border-radius: 4px;
		color: var(--violet-10);
		transform: scale(1.05);
	}

	@keyframes slideIn {
		from {
			opacity: 0;
			transform: translateX(-10px);
		}
		to {
			opacity: 1;
			transform: translateX(0);
		}
	}
</style>
