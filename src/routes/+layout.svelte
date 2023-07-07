<script>
  import "../app.css";
  import Layout from "../components/templates/Layout.svelte";
</script>

<Layout styles={"flex justify-start"}>
  <div class="flex sm:ml-20 ml-10 justify-start">
    <slot />
  </div>
</Layout>
