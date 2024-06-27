<script lang="js">
	import { t, locale, locales } from '../../../i18n';
	import { goto } from '$app/navigation';

	import MdTranslate from 'svelte-icons/md/MdTranslate.svelte';
	import MdWbSunny from 'svelte-icons/md/MdWbSunny.svelte';
	import MdBrightness2 from 'svelte-icons/md/MdBrightness2.svelte';

	import { onMount } from 'svelte';

	let links = [
		{ id: 1, name: $t('navbar.home'), path: '/' },
		{ id: 2, name: $t('navbar.about'), path: '/about' },
		{ id: 3, name: $t('navbar.works'), path: '/works' },
		{ id: 4, name: $t('navbar.blog'), path: `/reflexiones/${$locale}` }
	];

	let buttons = [{ id: 1, icon: MdWbSunny, onclick: toggleTheme }];

	let activeLink = links[0].name;

	let theme = 'dark';
	let scrolled = false;

	onMount(() => {
		const savedTheme = localStorage.getItem('theme');
		if (savedTheme) {
			theme = savedTheme;
			document.documentElement.classList.add(theme);
		}

		const handleScroll = () => {
			scrolled = window.scrollY > 50;
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});

	function handleLocaleChange(newLocale) {
		$locale = newLocale;
		const currentPath = window.location.pathname;

		localStorage.setItem('locale', newLocale);

		// [NOTE]: refactor this to a function
		if (currentPath.startsWith('/reflexiones')) {
			goto(`/reflexiones/${newLocale}`);
		}

		if (currentPath.startsWith('/note')) {
			const post = currentPath.split('/').pop();
			goto(`/note/${newLocale}/${post}`);
		}
	}

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

	// [TODO]: think about how to make this work without duplication
	$: links = [
		{ id: 1, name: $t('navbar.home'), path: '/' },
		{ id: 2, name: $t('navbar.about'), path: '/about' },
		{ id: 3, name: $t('navbar.works'), path: '/works' },
		{ id: 4, name: $t('navbar.blog'), path: `/reflexiones/${$locale}` }
	];
</script>

<nav class:scrolled>
	<ul>
		{#each links as link (link.id)}
			<li>
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
			<li>
				<button class="icon-button" on:click={button.onclick}>
					<div class="icon">
						<svelte:component this={button.icon} />
					</div>
				</button>
			</li>
		{/each}
		<li>
			<div class="languages">
				<div class="icon">
					<MdTranslate />
				</div>
				<select bind:value={$locale} on:change={(e) => handleLocaleChange(e.target.value)}>
					{#each locales as l}
						<option value={l}>{l}</option>
					{/each}
				</select>
			</div>
		</li>
	</ul>
</nav>

<style>
	nav {
		max-width: 1000px;
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 20px;
		border-radius: 10px;
		transition:
			background-color 0.3s ease,
			backdrop-filter 0.3s ease;
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
		color: var(--link-text);
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
		background-color: var(--blue-6);
		border-radius: 4px;
		color: var(--link-text);
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

	.languages {
		background-color: var(--blue-3);
		padding: 5px 10px;
		border-radius: 5px;
		display: flex;
		align-items: center;
		gap: 10px;
	}

	.languages select {
		padding: 5px;
		border: none;
		background-color: transparent;
		color: var(--text);
		border-radius: 4px;
	}

	nav.scrolled {
		background-color: var(--bg-color);
	}
</style>
