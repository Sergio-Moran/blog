<script>
  // @ts-nocheck

  import { onMount } from "svelte";
  // @ts-ignore
  import { GraphQLClient } from "$lib/graphql.js";
  import BlogCard from "../../components/organisms/BlogCard.svelte";
  import GeneralButton from "../../components/atom/buttons/GeneralButton.svelte";

  /* Variables */
  let client;
  /** @type {any[] | undefined} */
  let blogs;
  let lengths;
  let page = 1;
  let pagesNumber;
  let error = false;

  /* Constantes */
  const GET_POSTS = `#gql
  query GetDatas($options:Options) {
  posts (options:$options) {
    rows {
      id,
      title,
      body,
      reactions,
      author {
        name
      },
      categories {
        id,
        name
      }
    },
    length,
    pages
  }
}
`;

  /* Funciones */
  const query = async () => {
    client = new GraphQLClient();
    const { data, errors } = await client.fetch({
      query: GET_POSTS,
      variables: {
        options: {
          limit: 2,
          page: page,
        },
      },
    });
    if (errors) {
      error = true;
    } else {
      const {
        posts: { rows, length, pages },
      } = data;
      blogs = rows;
      lengths = length;
      pagesNumber = pages;
    }
    console.log("mounted"); // logs mounted to the browser's console when component is loaded
  };

  onMount(async () => {
    await query();
  });

  $: query(page);
</script>

<div class="grid w-full">
  <div class="grid place-content-center">
    {#if blogs}
      {#each blogs as blog}
        <BlogCard
          title={blog.title}
          body={blog.body}
          reactions={blog.reactions}
          author={blog.author}
          categories={blog.categories}
        />
      {/each}
      <div class="flex mt-5 justify-between text-white">
        <GeneralButton
          name={"Previous Page"}
          on:click={() => {
            page > 1 && page--;
          }}
        />
        <div class="font-bold">Mostrando pagina {page} de {pagesNumber}</div>
        <GeneralButton
          name={"Next Page"}
          on:click={() => {
            page < pagesNumber && page++;
          }}
        />
      </div>
    {/if}
    {#if error}
      <div>Hubo un error al obtener los posts</div>
    {/if}
  </div>
</div>
