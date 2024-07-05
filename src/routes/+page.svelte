<script>
	import CardCases from '../lib/components/CardCases/CardCases.svelte';
	import HeroText from '../lib/components/HeroText/HeroText.svelte';
	import FaGithubAlt from 'svelte-icons/fa/FaGithubAlt.svelte';
	import FaLinkedinIn from 'svelte-icons/fa/FaLinkedinIn.svelte';
	import FaBehance from 'svelte-icons/fa/FaBehance.svelte';
	import SocialMediaLinks from '../lib/components/SocialMediaLinks/SocialMediaLinks.svelte';

	let hovered = false;

	const socialMedia = [
		{
			id: 1,
			name: 'Github',
			icon: FaGithubAlt,
			href: 'https://github.com/EvegeniyNekrasov'
		},
		{
			id: 2,
			name: 'LinkedIn',
			icon: FaLinkedinIn,
			href: 'https://www.linkedin.com/in/evegeniynekrasov/'
		},
		{
			id: 3,
			name: 'Behance',
			icon: FaBehance,
			href: 'https://www.behance.net/evegeniynekrasov'
		}
	];
</script>

<div class="main">
	<div class="content">
		<div class="stiky-wrapper">
			<div class="header">
				<HeroText />
				<div class="body-content">
					<span>some text</span>
					<div class="links">
						<ul>
							<li>
								{#each socialMedia as item (item.id)}
									<SocialMediaLinks data={item} />
								{/each}
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="cases">
				<CardCases />
				<CardCases />
				<CardCases />
			</div>
		</div>
	</div>
</div>

<style>
	.main {
		position: absolute;
		min-height: 100vh;
		padding-left: 0;
		padding-right: 0;
		width: 100%;
	}

	.content {
		width: 100%;
		position: relative;
		background-color: white;
	}
	.stiky-wrapper {
		width: 100%;
		height: 100%;
		position: relative;
		background-color: white;
	}

	.header {
		position: fixed;
		overflow: hidden;
		margin-bottom: -100vh;
		width: 100%;
		height: 100vh;
		padding-top: 0;
		padding-bottom: 0;
		display: flex;
		flex-direction: column;
		top: 70px;
	}

	.body-content {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		width: 100%;
		height: 100%;
	}

	.links {
		position: fixed;
		bottom: 0vw;
		z-index: 9999;
	}

	.links ul li {
		display: flex;
		flex-direction: column;
		gap: 20px;
	}

	.cases {
		display: flex;
		flex-flow: column wrap;
		justify-content: flex-start;
		align-items: flex-end;
		width: 100%;
		height: auto;
		padding-top: 6.1vw;
	}
</style>
