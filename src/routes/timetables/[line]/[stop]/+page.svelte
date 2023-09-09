<script lang="ts">
	import { page } from '$app/stores';
	import Layout from '$lib/ui/Layout.svelte';
</script>

<Layout>
	<div slot="header">
		header {$page.params.stop} ({$page.params.line})
	</div>
	<div slot="main">main</div>
	<div slot="footer">footer</div>
</Layout>
