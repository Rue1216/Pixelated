<script>
  import { page } from "$app/stores";
  console.log($page.data);
  let post = $page.data.props.post;
</script>

<div class="post">
  <ul>
    {#await post then result}
      <h2>{result.title}</h2>
      <p>{result.body}</p>
    {/await}
  </ul>
</div>

<style>
  .post {
    width: 80%;
    padding: 2rem;
    margin: 3rem auto;
  }
</style>
