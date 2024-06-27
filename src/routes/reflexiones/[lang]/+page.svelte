<script lang="js">
	import * as config from '$lib/config';
	import TimeLine from '../../../lib/components/TimeLine/TimeLine.svelte';

	export let data;
	$: posts = data?.posts || [];

	$: groupedData = posts.reduce((acc, obj) => {
		const date = obj.date;
		if (!acc[date]) {
			acc[date] = [];
		}
		acc[date].push(obj);
		return acc;
	}, {});

	$: finalData = groupedData;
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<section>
	<TimeLine data={finalData} />
</section>
