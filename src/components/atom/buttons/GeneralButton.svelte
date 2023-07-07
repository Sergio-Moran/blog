<script>
  export let name = "";
  export let styles = "";
</script>

<div class="drop-shadow-xl">
  <button
    class="btn btn-circle btn-sm bg-transparent text-white font-bold border-2 border-white hover:bg-white hover:text-black px-4 w-24 cursor-pointer {styles}"
    on:click
    >{name}
    <slot />
  </button>
</div>
