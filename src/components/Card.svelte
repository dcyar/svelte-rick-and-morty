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
    width: 100%;
  }

  .character img {
    width: 100%;
  }

  .character figcaption {
    font-size: 1.5em;
    color: #333;
    font-weight: bold;
    text-shadow: 1px 1px 1px #ff3e00;
  }
</style>