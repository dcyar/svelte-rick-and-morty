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
          <figcaption>{ character.gender }</figcaption>
        </figure>
      </div>
      <div class="description">
        <h1>{ character.name }</h1>
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
    display: flex;
    justify-content: space-between;
  }

  .aside {
    width: 30%;
    text-align: center;
  }

  .picture {
    width: 200px;
  }

  .picture img {
    width: 100%;
  }

  .description {
    width: 70%;
    text-align: left;
  }
</style>