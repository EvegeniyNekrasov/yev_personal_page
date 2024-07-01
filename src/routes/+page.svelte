<script>
	let scrollText = 'FRONT-END DEVELOPER / DESIGNER';
</script>

<div class="marquee">
	<h1>{scrollText}</h1>
	<h1>{scrollText}</h1>
</div>

<div class="hero">
	<span
		>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod unde ad consectetur magni. Nemo
		nisi laudantium tempora accusantium. Voluptas error magnam officia exercitationem est soluta
		animi facilis voluptatibus tempore inventore.</span
	>
</div>

<div class="main">
	<div>prueba 1</div>
	<div>prueba 1</div>
	<div>prueba 1</div>
	<div>prueba 1</div>
</div>

<style>
	@keyframes scroll {
		0% {
			transform: translateX(0%);
		}
		100% {
			transform: translateX(-100%);
		}
	}

	.marquee {
		overflow: hidden;
		white-space: nowrap;
		box-sizing: border-box;
		border-bottom: 1px solid black;
		width: 100%;
		padding: 10px 0;
		position: relative;
	}

	.marquee h1 {
		font-size: 3.5rem;
		font-weight: 900;
		display: inline-block;
		padding-right: 100%;
		animation: scroll 20s linear infinite;
		color: black;
	}

	.hero {
		display: flex;
		flex-direction: column;
		padding: 10px;
		border-bottom: 1px solid black;
	}

	.main {
		display: grid;
		grid-template-columns: repeat(auto-fill, calc(100% / 4));
		grid-gap: 10px;
		height: calc(100% - 220px);
	}

	.main div {
		background-color: rgb(161, 141, 141);
		height: 100%;
	}
</style>
