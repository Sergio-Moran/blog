<script>
// @ts-nocheck
  import { goto } from "$app/navigation";
  import GeneralButton from "../atom/buttons/GeneralButton.svelte";
  import Bike from "../atom/icon/Bike.svelte";
  import ButtonWithIcon from "../molecules/ButtonMenu.svelte";
  export let options = [];
</script>

<div class="grid sm:grid-cols-2 grid-rows-1">
  <div class="grid sm:justify-items-start justify-items-center">
    <h1 class="sm:ml-20 !text-xl !text-white font-bold uppercase">
      <Bike />
      your logo
    </h1>
  </div>
  <div
    class="grid sm:grid-cols-5 grid-cols-3 sm:justify-items-end sm:pt-3 pt-0 justify-items-center gap-5"
  >
    {#each options as option}
      <GeneralButton
        name={option.name}
        on:click={() => {
          goto(option.link);
        }}
      />
    {/each}
    <ButtonWithIcon />
  </div>
</div>

<style>
</style>
