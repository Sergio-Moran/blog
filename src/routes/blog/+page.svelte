<!-- <script>
  import { onMount } from "svelte";
  // @ts-ignore
  import { GraphQLClient } from "$lib/graphql.js";

  const GET_POSTS = `#gql
query GetIndexPosts($options: Options) {
  posts (options: $options) { 
    rows {
    	id, title, content: body, reactions
  	}
  }
}
`;
  let client;

  /** @type {any[] | undefined} */
  let blogs;
  let error = false;

  onMount(async () => {
    client = new GraphQLClient();
    const { data, errors } = await client.fetch({
      query: GET_POSTS,
      variables: {
        options: {
          limit: 4,
        },
      },
    });
    if (errors) {
      error = true;
    } else {
      const {
        posts: { rows },
      } = data;
      blogs = rows;
    }
    console.log("mounted"); // logs mounted to the browser's console when component is loaded
  });
</script> -->

<div class="grid w-full">
  <div class="grid place-content-center">
    <div class="card bordered w-max bg-white/50 shadow-xl">
      <div class="card-body">
        <h2 class="card-title">
          Shoes!
          <div class="badge badge-ghost">NEW</div>
        </h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div class="card-actions justify-end">
          <div class="badge badge-outline">Fashion</div>
          <div class="badge badge-outline">Products</div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- <div>
  {#if blogs}
    {#each blogs as blog}
      <div class="text-white my-4">
        <h3 class="text-3xl">{blog.title}</h3>
        <p>{blog.content}</p>
      </div>
    {/each}
  {/if}
</div>
{#if error}
  <div>Hubo un error al obtener los posts</div>
{/if} -->
