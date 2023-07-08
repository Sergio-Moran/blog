<script>
  // @ts-nocheck

  import Category from "../atom/icon/Category.svelte";
  import Person from "../atom/icon/Person.svelte";
  import Reaction from "../atom/icon/Reaction.svelte";
  export let title = "";
  export let body = "";
  export let reactions = "as";
  export let author;
  export let categories = [];
</script>

<div
  class="card bordered w-max bg-white/50 shadow-xl mt-4 max-w-md md:max-w-2xl"
>
  <div class="card-body">
    <h2 class="card-title">
      {title}
      <div class="badge bg-green-300 border-green-600 badge-lg">
        <Reaction />
        {reactions}
      </div>
    </h2>
    <p>
      {body}
    </p>
    <div class="card-actions justify-end">
      <div class="badge badge-lg bg-sky-300 border-sky-600">
        <Person />
        {author.name}
      </div>
      {#each categories as data}
        <div class="badge badge-lg bg-sky-300 border-sky-600" id={data.id}>
          <Category />
          {data.name}
        </div>
      {/each}
    </div>
  </div>
</div>
