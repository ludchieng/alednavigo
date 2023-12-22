<script>
	import Layout from "$lib/ui/Layout.svelte";
	import Header from "$lib/ui/Header.svelte";
</script>

<Layout>
	<Header slot="header">
		<div slot="left">
			<img class="line" src="/img/lines-icons/colors/rer-a.svg" alt="">
		</div>

		<div slot="center">
			<a href="/">
				<img class="logo" src="/img/app-icons/icon.png" alt="">
			</a>
		</div>

		<div slot="right">
			00:00:00
		</div>
	</Header>

	<slot slot="main" />
	
	<div slot="footer">
		<p>Footer</p>
	</div>
</Layout>

<style>
	@import '$lib/ui/css/main.css';

	.line,
	.logo {
		display: block;
		width: 2rem;
	}
</style>
