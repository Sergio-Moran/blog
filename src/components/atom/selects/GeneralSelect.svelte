<script>
  // @ts-nocheck
  export let options = [];
  export let selected = 'Pick some option';
  $:console.log("Change Selected", selected);
</script>

<select
  class="select select-sm w-min max-w-xs bg-white/50"
  bind:value={selected}
>
  <option disabled selected>Select option</option>
  {#each options as option}
    <option {option}>{option}</option>
  {/each}
</select>
