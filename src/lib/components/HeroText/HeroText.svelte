<script>
	import { langName } from '../../../store/langName';
	import { t, locale, locales } from '../../../i18n';
	import { languagesObject } from '../../../utils/text-utils';

	let scrollText = languagesObject[0].text;
	let heroLang = languagesObject[0].langName;
	changeLanguage(languagesObject[0].langName);

	function changeLanguage(newLang) {
		langName.set(newLang);
	}

	let currentTextIndex = 0;

	function changeText() {
		currentTextIndex = (currentTextIndex + 1) % languagesObject.length;
		scrollText = languagesObject[currentTextIndex].text;
		heroLang = languagesObject[currentTextIndex].langName;
		changeLanguage(languagesObject[currentTextIndex].langName);
	}

	function handleChangeLanguage(lang) {
		$locale = lang;
	}
</script>

<div>
	<div class="marquee">
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
		border-top: 1px solid black;
	}

	.marquee h1 {
		display: inline-block;
		padding-left: 100%;
		animation: marquee 10s linear infinite;
		font-size: clamp(2rem, 5vw, 5rem);
		font-weight: 700;
		margin-top: 20px;
		margin-bottom: 20px;
	}

	@keyframes marquee {
		0% {
			transform: translate(0, 0);
		}
		100% {
			transform: translate(-100%, 0);
		}
	}
</style>
