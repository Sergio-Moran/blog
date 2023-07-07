<script>
  import Menu from "../atom/icon/Menu.svelte";
  export let styles = "";
</script>

<div class="drop-shadow-xl">
  <button
    class="btn btn-sm bg-transparent text-white font-bold border-none border-white hover:!bg-transparent hover:text-white px-4 w-24 cursor-pointer {styles}"
  >
    <Menu />
    <slot />
  </button>
</div>
