<script lang="js">
	import { t, locale, locales } from '../../../i18n';
	import { goto } from '$app/navigation';

	import MdTranslate from 'svelte-icons/md/MdTranslate.svelte';

	import { onMount } from 'svelte';

	let links = [
		{ id: 1, name: $t('navbar.home'), path: '/' },
		{ id: 2, name: $t('navbar.about'), path: '/about' },
		{ id: 3, name: $t('navbar.works'), path: '/works' },
		{ id: 4, name: $t('navbar.blog'), path: `/reflexiones/${$locale}` }
	];

	let activeLink = links[0].name;

	onMount(() => {
		const savedTheme = localStorage.getItem('theme');
		if (savedTheme) {
			theme = savedTheme;
			document.documentElement.classList.add(theme);
		}
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

<nav>
	<div class="logo">
		<div class="temp-logo"></div>
	</div>
	<div>
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
	</div>
</nav>

<style>
	nav {
		width: 100%;
		position: relative;
		display: flex;
		justify-content: space-between;
		border-bottom: 1px solid black;
		align-items: center;
		padding: 10px;
		transition:
			background-color 0.3s ease,
			backdrop-filter 0.3s ease;
	}

	.temp-logo {
		width: 40px;
		height: 40px;
		background-color: black;
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
		display: inline-block;
		color: black;
		transition:
			color 0.3s,
			background-color 0.3s,
			transform 0.3s;
		animation: slideIn 0.5s ease-out;
	}

	a.active {
		animation: slideIn 0.5s ease-out;
		border-radius: 4px;
		color: gray;
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
</style>
