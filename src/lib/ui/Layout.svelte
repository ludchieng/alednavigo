<div>
	<header>
		<slot name="header" />
	</header>

	<main>
		<slot name="main" />
	</main>

	<footer>
		<slot name="footer" />
	</footer>
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 100%;
	}

	main {
		overflow-y: scroll;
		height: 100%;
	}
</style>
