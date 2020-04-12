<script>
	import { Router, Link, Route } from 'svelte-routing';
	import Library from './Library.svelte';
	import Character from './Character.svelte';
	import About from './About.svelte';

	let url = '';
</script>

<main>
	<h1>Rick and Morty API!</h1>
  <p class="subtitle">This is an example with Svelte and Rick and Morty API</p>
	<Router url={ url }>
		<nav>
			<Link to="/">Home</Link>
			<Link to="about">About</Link>
		</nav>
		<div class="container">
			<Route path="/" component="{Library}"></Route>
			<Route path="character/:id" let:params>
				<Character id={ params.id } />
			</Route>
			<Route path="about" component="{About}"></Route>
		</div>
	</Router>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

  .container {
    width: 90vw;
    margin: 20px auto;
    text-align: center;
  }

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>