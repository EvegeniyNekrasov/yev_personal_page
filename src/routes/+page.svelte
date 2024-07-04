<script>
	import CardCases from '../lib/components/CardCases/CardCases.svelte';
	import HeroText from '../lib/components/HeroText/HeroText.svelte';
</script>

<div class="main">
	<div class="content">
		<div class="stiky-wrapper">
			<div class="header">
				<HeroText />
				<span>some text</span>
			</div>
			<div class="cases">
				<CardCases />
				<CardCases />
			</div>
		</div>
	</div>
</div>

<style>
	.main {
		position: relative;
		background-color: white;
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
		position: sticky;
		overflow: hidden;
		margin-bottom: -100vh;
		width: 100%;
		height: 100vh;
		padding-top: 0;
		padding-bottom: 0;
		display: flex;
		flex-direction: column;
		top: 0;
	}

	.cases {
		display: flex;
		flex-flow: column wrap;
		justify-content: flex-start;
		align-items: flex-end;
		width: 100%;
		height: auto;
		position: relative;
		padding-top: 6.1vw;
	}
</style>
