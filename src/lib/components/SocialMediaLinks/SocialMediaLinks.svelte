<script lang="js">
	import anime from 'animejs';
	export let data;
	import './socialMediaLinks.css';

	const handleLinkClick = () => window.open(data.href, '_blank');

	const animationIn = (id) => {
		const element = document.getElementById(`text-${id}`);
		anime.timeline().add({
			targets: element,
			translateX: [-100, 0],
			opacity: [0, 1],
			easing: 'easeOutExpo',
			duration: 1400
		});
	};

	const animationOut = (id) => {
		const element = document.getElementById(`text-${id}`);
		anime.timeline().add({
			targets: element,
			translateX: [0, -100],
			opacity: [1, 0],
			easing: 'easeOutExpo',
			duration: 1400
		});
	};

	const handleHover = (e) => {
		if (e.target.id == data.id) {
			animationIn(e.target.id);
		}
	};
</script>

<div
	role="none"
	on:mouseenter={handleHover}
	on:mouseleave={(e) => animationOut(e.target.id)}
	on:click={handleLinkClick}
	class="link-container"
	id={data.id}
>
	<div class="data">
		<div class="icon">
			<svelte:component this={data.icon} />
		</div>

		<span id="text-{data.id}" class="text {data.id}">{data.name}</span>
	</div>
</div>
