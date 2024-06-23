<script lang="js">
	import { flip } from 'svelte/animate';
	import { quintOut } from 'svelte/easing';
	import MdTranslate from 'svelte-icons/md/MdTranslate.svelte';
	import MdWbSunny from 'svelte-icons/md/MdWbSunny.svelte';
	import MdBrightness2 from 'svelte-icons/md/MdBrightness2.svelte';
	import { onMount } from 'svelte';

	let links = [
		{ id: 1, name: 'Inicio', path: '/' },
		{ id: 2, name: 'Sobre mi', path: '/about' },
		{ id: 3, name: 'Trabajos', path: '/works' }
	];

	let buttons = [
		{ id: 1, icon: MdTranslate, onclick: () => console.log('Language') },
		{ id: 2, icon: MdWbSunny, onclick: toggleTheme }
	];

	let activeLink = links[0].name;

	let theme = 'dark';

	onMount(() => {
		const savedTheme = localStorage.getItem('theme');
		if (savedTheme) {
			theme = savedTheme;
			document.documentElement.classList.add(theme);
		}
	});

	function toggleTheme() {
		const newTheme = theme === 'dark' ? 'ligh' : 'dark';
		document.documentElement.classList.remove(theme);
		document.documentElement.classList.add(newTheme);
		theme = newTheme;
		localStorage.setItem('theme', theme);
	}

	function setActive(link) {
		activeLink = link;
	}
</script>

<nav>
	<ul>
		{#each links as link (link.id)}
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
		{#each buttons as button (button.id)}
			<li animate:flip={{ delay: 1000, duration: 1000, easing: quintOut }}>
				<button class="icon-button" on:click={button.onclick}>
					<div class="icon">
						<svelte:component this={button.icon} />
					</div>
				</button>
			</li>
		{/each}
	</ul>
</nav>

<style>
	nav {
		max-width: 1000px;
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 20px auto 0;
	}

	ul {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 20px;
		list-style: none;
		width: 100%;
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
		color: var(--blue-10);
		background-color: var(--blue-3);
		border-radius: 4px;
	}

	a.active {
		animation: slideIn 0.5s ease-out;
		background-color: var(--blue-8);
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

	.icon-button {
		padding: 8px;
		background-color: transparent;
		border: none;
		cursor: pointer;
		outline: none;
	}

	.icon-button:hover {
		background-color: var(--blue-3);
		border-radius: 4px;
	}

	.icon {
		color: var(--text);
		width: 16px;
		height: 16px;
	}
</style>
