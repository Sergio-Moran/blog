<script>
  import Navbar from "../organisms/Navbar.svelte";
  export let styles = "";
  const options = [
    {
      name: "HOME",
      link: "/",
    },
    {
      name: "ABOUT",
      link: "about",
    },
    {
      name: "SERVICE",
      link: "service",
    },
    {
      name: "CONTACT",
      link: "contact",
    },
  ];
</script>

<div class="grid p-5">
  <Navbar {options} />
  <div class="min-h-[92vh] w-full {styles}">
    <slot />
  </div>
</div>
