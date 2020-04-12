<script>
  import { onMount } from 'svelte';

  export let id;

  let url = `https://rickandmortyapi.com/api/character/${id}`;
  let character;

  onMount(async () => {
    const res = await fetch(url);
    character = await res.json();
  });
</script>

<div class="wrap">
  {#if character }
    <div class="character">
      <div class="aside">
        <figure class="picture">
          <img src={ character.image } alt={ character.name } />
        </figure>
      </div>
      <div class="description">
        <h1>{ character.name }</h1>
        <p><strong>Gender: </strong>{ character.gender }</p>
        <p><strong>Status: </strong>{ character.status }</p>
        <p><strong>Specie: </strong>{ character.species }</p>
        <p><strong>Origin: </strong>{ character.origin.name }</p>
        <p><strong>Created: </strong>{ character.created }</p>
        <p><strong>Url: </strong>{ character.url }</p>
      </div>
    </div>
  {:else}
    <p>Loading...</p>
  {/if}
</div>

<style type="text/css">
  .character {
    display: grid;
    grid-template-columns: 1fr 3fr;
    column-gap: 20px;
  }

  .aside .picture img {
    width: 100%;
  }

  .description {
    text-align: left;
  }

  .description h1 {
    margin-top: 0;
    text-decoration: underline;
    text-shadow: 1px 1px 1px #ff3e00;
  }

  @media (max-width: 980px) {
		.character {
			grid-template-columns: repeat(2, 1fr);
		}
  }

  @media (max-width: 700px) {
		.character {
			grid-template-columns: 1fr;
		}
	}
</style>