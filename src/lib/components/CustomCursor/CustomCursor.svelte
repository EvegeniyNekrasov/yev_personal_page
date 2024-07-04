<script>
	import { langName } from '../../../store/langName';
	import { onMount } from 'svelte';

	let isHover = false;
	let isHoveredHeader = false;

	let mouseCordinates = { x: 0, y: 0 };

	let heroLangText;

	langName.subscribe((value) => {
		heroLangText = value;
	});

	onMount(() => {
		document.addEventListener('mousemove', (e) => {
			mouseCordinates = { x: e.clientX, y: e.clientY };
			e.target.tagName === 'SPAN' || e.target.tagName === 'A'
				? (isHover = true)
				: (isHover = false);

			e.target.tagName === 'H1' ? (isHoveredHeader = true) : (isHoveredHeader = false);
		});
	});
</script>

<div role="none" class:is-hover-cursor={isHover || isHoveredHeader} class="custom-cursor">
	<div
		style="transform: translate3d({mouseCordinates.x}px, {mouseCordinates.y}px, 0)"
		class="outer"
	>
		<div
			class:is-hovered-header={isHoveredHeader}
			class:is-hover-circle={isHover}
			class="circle-inner"
		>
			{#if heroLangText}
				<span class="circle-lang" class:hovered={isHoveredHeader}>{heroLangText}</span>
			{/if}
		</div>
		<div class:circle-outer={isHoveredHeader}></div>
	</div>
</div>

<style>
	.custom-cursor {
		cursor: none;
		display: flex;
		justify-content: center;
		align-items: center;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 1000;
		pointer-events: none;
	}

	.circle-inner {
		position: absolute;
		top: -72px;
		left: -72px;
		width: 150px;
		height: 150px;
		background-color: rgb(1, 1, 1);
		border-radius: 100%;
		transform: scale3d(0.16, 0.16, 0.16);
		transition:
			transform 1s cubic-bezier(0.075, 0.82, 0.165, 1),
			background 1s cubic-bezier(0.075, 0.82, 0.165, 1);
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.circle-inner span {
		font-size: 4rem;
		font-weight: 700;
		color: white;
	}

	.circle-lang {
		display: none;
	}

	.circle-lang.hovered {
		display: inline-block;
	}

	.is-hover-cursor {
		mix-blend-mode: exclusion;
	}

	.is-hovered-header {
		transform: scale3d(0.4, 0.4, 0.4);
		background-color: rgb(83, 87, 88);
	}

	.is-hover-circle {
		transform: scale3d(0.4, 0.4, 0.4);
		background-color: white;
	}

	.circle-outer {
		position: relative;
		top: -72px;
		left: -72px;
		width: 150px;
		height: 150px;
		border-radius: 100%;
		transform: scale3d(0.6, 0.6, 0.6);
		transition:
			transform 10s cubic-bezier(0.075, 0.82, 0.165, 1),
			background 10s cubic-bezier(0.075, 0.82, 0.165, 1);
	}

	.circle-outer:before {
		content: '';
		width: 20px;
		height: 20px;
		border-radius: 100%;
		background-color: rgb(83, 87, 88);
		position: absolute;
		top: 49%;
		left: 48%;
		transform: translate(-50%, -50%);
		animation: rotate-circle 5s linear infinite;
	}

	@keyframes rotate-circle {
		0% {
			transform: translate(-50%, -50%) rotate(0deg) translate(71px) rotate(0deg);
		}
		100% {
			transform: translate(-50%, -50%) rotate(360deg) translate(71px) rotate(-360deg);
		}
	}
</style>
