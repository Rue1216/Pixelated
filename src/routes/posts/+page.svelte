<script>
  import { page } from "$app/stores";
  let posts = $page.data.props.posts;
</script>

<div class="posts">
  <h2>我是假的文章列表</h2>
  <ul>
    {#await posts then result}
      {#each result as post (post.id)}
        <li>
          <a data-sveltekit-preload-data href={`/posts/${post.id}`}
            >{post.title}</a
          >
        </li>
      {/each}
    {/await}
  </ul>
</div>

<style>
  .posts {
    width: 80%;
    padding: 2rem;
    margin: 3rem auto;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  a {
    display: inline-block;
    margin-bottom: 1rem;
    padding: 1rem;
    border: 1px dashed rgba(255, 255, 255, 0.3);
  }
</style>
