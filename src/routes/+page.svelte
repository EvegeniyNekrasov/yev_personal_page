<script>
	import SocialMediaLinks from '../lib/components/SocialMediaLinks/SocialMediaLinks.svelte';

	import { onMount } from 'svelte';
	import { socialMedia } from '../utils/data-utils.js';

	import anime from 'animejs';

	const textos = [
		'Hello and welcome',
		'¡Hola y bienvenido!',
		'Bonjour et bienvenue!',
		'Ciao e benvenuto!',
		'Hallo und willkommen!',
		'こんにちは、ようこそ！',
		'안녕하세요, 환영합니다!',
		'你好，歡迎！',
		'Olá e bem-vindo!',
		'Привет и добро пожаловать!',
		'Hej och välkommen!',
		'Hei ja tervetuloa!',
		'Hej och välkommen!',
		'สวัสดีและยินดีต้อนรับ!',
		'Chào mừng bạn!'
	];

	let currentTextIndex = 0;
	const CSS_SLECTORS = ['.header', '.letter'];

	const updateTextLetters = (textWrapper) => {
		// Envolve every letter in span
		// need it for the animation
		textWrapper.innerHTML = textos[currentTextIndex].replace(
			/\S/g,
			"<span class='letter'>$&</span>"
		);
	};

	function reloadTextAnimation(element, textWrapper) {
		currentTextIndex++;
		if (currentTextIndex === textos.length) currentTextIndex = 0;
		updateTextLetters(textWrapper);
		// In order to make the delay after first loop works we need to pause the animation
		element.pause();
		// And start it again
		// [NOTE]: don't like this solution, in the future refactor this code
		// and find other solution
		animateText();
	}

	function animateText() {
		let textWrapper = document.querySelector('.header');
		updateTextLetters(textWrapper);
		const animation = anime
			.timeline({
				loop: true,
				loopComplete: () => reloadTextAnimation(animation, textWrapper)
			})
			
			.add({
				targets: CSS_SLECTORS,
				opacity: [0, 1],
				easing: 'easeInOutQuad',
				duration: 2250,
				delay: (el, i) => 250 * (i + 1)
			})
			
			.add({
				targets: CSS_SLECTORS[1],
				opacity: 0,
				duration: 1000,
				easing: 'easeOutExpo',
				delay: 1000
			});
	}

	function animateLinks() {
		anime({
			targets: '.links ul li div',
			translateX: [-50, 0],
			duration: 600,

			easing: 'easeInQuint',
			delay: anime.stagger(60)
		});
	}

	onMount(() => {
		animateText();
		animateLinks();
	});
</script>

<div id="container" class="container">
	<div class="header-wrapper">
		<span class="header"></span>
	</div>
	<div class="content">
		<div></div>
		<span>
			At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
			voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
			cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est
			laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero
			tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime
			placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus
			autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et
			voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a
			sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis
			doloribus asperiores repellat.
		</span>
	</div>
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

<style>
	.container {
		display: flex;
		flex-direction: column;
		gap: 10px;
		top: 80px;
		width: 100%;
	}

	.content {
		display: flex;
		justify-content: flex-end;
		padding: 40px;
	}

	.content span {
		max-width: 400px;
		text-wrap: pretty;
	}

	.links {
		position: fixed;
		min-width: 100%;
		bottom: 0vw;
		z-index: 9000;
	}

	.links ul li {
		display: flex;
		flex-direction: column;
	}

	.header-wrapper {
		width: 100%;
		padding: 40px;
		min-height: 70px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.header {
		width: 100%;
		font-size: clamp(3rem, 4vw, 6rem);
		font-weight: 900;
		overflow: hidden;
		min-height: 100px;
	}

	.header .letter {
		display: inline-block;
	}
</style>
