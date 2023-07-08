<script>
  import BlogCard from "../../components/organisms/BlogCard.svelte";


</script>
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
    <BlogCard />
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
