<script>
	import { langName } from '../../../store/langName';
	import { t, locale, locales } from '../../../i18n';
	import { languagesObject } from '../../../utils/text-utils';
	const changeLanguage = (newLang) => langName.set(newLang);
	let scrollText = languagesObject[0].text;
	let heroLang = languagesObject[0].langName;
	changeLanguage(languagesObject[0].langName);

	let currentTextIndex = 0;

	function changeText() {
		currentTextIndex = (currentTextIndex + 1) % languagesObject.length;
		scrollText = languagesObject[currentTextIndex].text;
		heroLang = languagesObject[currentTextIndex].langName;
		changeLanguage(languagesObject[currentTextIndex].langName);
	}

	const handleChangeLanguage = (lang) => ($locale = lang);

	let animation = false;
	const handleAnimationEnd = () => (animation = true);
</script>

<div>
	<div class="marquee">
		{#if !animation}
			<div class="heroAnimation" on:animationend={handleAnimationEnd}></div>
		{/if}
		<h1
			role="none"
			on:click={() => handleChangeLanguage(heroLang)}
			on:animationiteration={changeText}
		>
			{scrollText}
		</h1>
	</div>
</div>

<style>
	.marquee {
		margin: 0 auto;
		white-space: nowrap;
		overflow: hidden;
		position: relative;
		border-bottom: 1px solid black;
	}

	.marquee h1 {
		display: inline-block;
		padding-left: 100%;
		animation: marquee 10s linear infinite;
		font-size: clamp(4rem, 12vw, 18rem);
		font-weight: 700;
		margin-top: 20px;
	}

	@keyframes marquee {
		0% {
			transform: translate(0, 0);
		}
		100% {
			transform: translate(-100%, 0);
		}
	}

	.heroAnimation {
		width: 100%;
		height: 300px;
		background-color: var(--bg-color);
		position: absolute;
		bottom: 0;
		animation: animation 1.2s cubic-bezier(0, 0.36, 1, 0.59);
		animation-delay: 1.2s;
		z-index: 11;
	}

	@keyframes animation {
		0% {
			transform: translateY(0%);
		}
		100% {
			transform: translateY(-100%);
		}
	}
</style>
