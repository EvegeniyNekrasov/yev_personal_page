<script lang="js">
	let animation = false;
	const handleAnimationEnd = () => (animation = true);
</script>

<div class="container">
	<div class="header">
		<img src="/black.jpg" alt="temp img" />
		{#if !animation}
			<div class="cardAnimation" on:animationend={handleAnimationEnd}></div>
		{/if}
	</div>
	<div class="body">
		<p class="titulo">Titulo de la card</p>
		<p class="subtitulo">Subtitulo</p>
	</div>
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		position: relative;
		gap: 10px;
		width: 50vw;
		height: auto;
		background-color: vaf(--bg-color);
		z-index: 10;
	}

	.header {
		overflow: hidden;
		display: flex;
		flex-direction: column;
		position: relative;
		height: 50vw;
	}

	.header img {
		width: 50vw;
		height: auto;
		position: relative;
	}

	.body {
		display: flex;
		flex-direction: column;
		gap: 10px;
		margin-bottom: 6px;
	}

	.body .titulo {
		font-size: 2.7rem;
		font-weight: 700;
	}

	.body .subtitulo {
		font-size: 1.5rem;
		font-weight: 400;
	}

	.cardAnimation {
		width: 50vw;
		height: 50vw;
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
