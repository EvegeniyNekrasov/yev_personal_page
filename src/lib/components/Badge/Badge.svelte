<script lang="js">
	export let name = 'Default';
	export let BgColor = 'var(--blue-a6)';
	export let color = 'var(--blue-12)';
</script>

<div style={`background-color: ${BgColor}; color: ${color}`} class="badge">
	<span class="badge__text">{name}</span>
</div>

<style>
	.badge {
		display: inline-block;
		padding: 0.25rem 0.5rem;
		border-radius: 0.25rem;
		color: var(--text);
		font-size: 0.75rem;
		font-weight: 700;
		height: fit-content;
	}

	.badge__text {
		display: inline-block;
	}
</style>
