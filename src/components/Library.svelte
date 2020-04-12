<script>
  import { onMount } from 'svelte';
  import Card from './Card.svelte';

  let characters = [];
  let pages;
  let paged = 1;

  onMount(() => {
    handleFetchCharacters(1);
  });

  const handleFetchCharacters = async (page) => {
    let url = `https://rickandmortyapi.com/api/character/?page=${page}`;
    const res = await fetch(url);
    const data = await res.json();
    characters = data.results
    pages = data.info.pages
    paged = page
  }

  const handlePreviousPage = () => {
    handleFetchCharacters(paged - 1)
  }

  const handleNextPage = () => {
    handleFetchCharacters(paged + 1)
  }

</script>

<div>
  <div class="library">
    {#each characters as character, index}
      <Card character={ character } />
    {:else}
      <p class="loading">Loading...</p>
    {/each}
  </div>
  <div>
    {#if paged != 1}
      <button on:click={ handlePreviousPage }>Previous</button>
    {/if}
    {#if paged < pages}
      <button on:click={ handleNextPage }>Next</button>
    {/if}
  </div>
</div>

<style type="text/css">
  .library {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
</style>