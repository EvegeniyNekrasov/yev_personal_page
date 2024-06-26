<script lang="js">
	export let name = 'Default';
	export let color = 'var(--blue-a6)';
</script>

<div style={`background-color: ${color}`} class="badge">
	<span class="badge__text">{name}</span>
</div>

<style>
	.badge {
		display: inline-block;
		padding: 0.25rem 0.5rem;
		border-radius: 0.25rem;
		color: white;
		font-size: 0.75rem;
		font-weight: 700;
	}

	.badge__text {
		display: inline-block;
	}
</style>
