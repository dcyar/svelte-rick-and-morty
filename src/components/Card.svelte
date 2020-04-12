<script>
  import { Link } from 'svelte-routing';

  export let character;

  export const id = character.id;
</script>

<div class="character">
  <Link to="character/{character.id}">
    <figure>
      <img src={ character.image } alt={ character.name } />
      <figcaption>{ character.name }</figcaption>
    </figure>
  </Link>
</div>

<style type="text/css">
  .character {
    width: 250px;
  }

  .character img {
    width: 100%;
  }
</style>