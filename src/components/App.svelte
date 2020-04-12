<script>
	import { Router, link, Route } from 'svelte-routing';
	import Library from './Library.svelte';
	import Character from './Character.svelte';
	import About from './About.svelte';
	import Footer from './Footer.svelte';

	let url = '';
</script>

<main>
	<h1>Rick and Morty API!</h1>
  <p class="subtitle">This is an example with Svelte and Rick and Morty API</p>
	<Router url={ url }>
		<nav class="navbar">
			<a href="./" use:link class="link">Home</a>
			<a href="./about" use:link class="link">About</a>
		</nav>
		<div class="container">
			<Route path="./" component="{Library}"></Route>
			<Route path="./character/:id" let:params>
				<Character id={ params.id } />
			</Route>
			<Route path="./about" component="{About}"></Route>
		</div>
	</Router>
	<Footer />
</main>

<style>
	main {
		text-align: center;
		margin: 0 auto;
	}

	main h1 {
		text-shadow: 2px 2px 1px rgba(51, 51, 51, 0.5);
	}

	.navbar {
		margin: 30px auto;
	}

	.navbar .link{
		border: 1px solid #ff3e00;
		padding: 5px;
		margin: 0 5px;
		text-transform: uppercase;
		color: #b43206;
		text-decoration: none;
		font-weight: bold;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

  .container {
		margin: 20px auto;
		width: 90vw;
    text-align: center;
  }

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>