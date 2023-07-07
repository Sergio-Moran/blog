<script>
  import { goto } from "$app/navigation";
  import GeneralButton from "../components/atom/buttons/GeneralButton.svelte";
</script>

<div class="grid gap-4 place-content-center">
  <h1 class="!text-4xl font-bold uppercase text-white">explore the world</h1>
  <h1 class="!text-xl font-bold uppercase text-white">the world</h1>
  <p class="text-white sm:w-1/2">
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente illum
    praesentium doloribus obcaecati quo ut animi sit, ipsum aliquam. Suscipit
    aperiam eligendi accusantium cum provident, sapiente rem maiores architecto
    neque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
    veritatis laudantium ullam neque tempore mollitia recusandae, molestias
    ipsam, alias officia excepturi laboriosam et repellendus fuga odio libero.
    Voluptatum, fugit at.
  </p>
  <GeneralButton
    name={"GET STARTED"}
    styles={"w-auto mt-10"}
    on:click={() => {
      goto("blog");
    }}
  />
</div>

<style lang="postcss">
</style>
