<script>
  import Category from "../atom/icon/Category.svelte";
  import Person from "../atom/icon/Person.svelte";


</script>

<div class="card bordered w-max bg-white/50 shadow-xl mt-4 max-w-md md:max-w-2xl">
    <div class="card-body">
      <h2 class="card-title">
        Title
        <div class="badge bg-green-300 border-green-600">Reactions: 7</div>
      </h2>
      <p>
        Body
      </p>
      <div class="card-actions justify-end">
        <div class="badge badge-lg badge-ghost">
          <Person />
          Autor: A</div>
        <div class="badge badge-lg bg-sky-300 border-sky-600">
          <Category />
          Category</div>
      </div>
    </div>
  </div>