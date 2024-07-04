<script>
	let scrollText = 'FRONT-END DEVELOPER / DESIGNER';
	let texts = [
		'前端开发者 / 设计师', // Chinese,
		'FRONT-END 개발자 / 디자이너', // Korean
		'フロントエンド開発者 / デザイナー', // Japanese,
		'FRONT-END DEVELOPER / DESIGNER', // English
		'DESARROLLADOR FRONT-END / DISEÑADOR', // Spanish
		'DÉVELOPPEUR FRONT-END / DESIGNER', // French
		'ENTWICKLER FRONT-END / DESIGNER', // German
		'DESENVOLVEDOR FRONT-END / DESIGNER', // Portuguese
		'SVILUPPATORE FRONT-END / DESIGNER', // Italian
		'РАЗРАБОТЧИК FRONT-END / ДИЗАЙНЕР' // Russian
	];
	let currentTextIndex = 0;

	function changeText() {
		currentTextIndex = (currentTextIndex + 1) % texts.length;
		scrollText = texts[currentTextIndex];
	}
</script>

<div>
	<div class="marquee">
		<h1 on:animationiteration={changeText}>{scrollText}</h1>
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
