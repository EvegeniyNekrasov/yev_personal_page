<script>
	import { t, locale, locales } from '../i18n';
	import Button from '../lib/components/Button.svelte';
</script>

<div>
	<h1>{@html $t('homepage.title', { name: 'Yev' })}</h1>
	<p>Soy desarrollador front end</p>
</div>
