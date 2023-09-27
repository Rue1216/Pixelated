<script>
  export let title = "Default Site Name";
</script>

<header>
  <nav>
    <div class="title">
      <img src="/controller.svg" alt="site logo" />
      <h1>{title}</h1>
    </div>
    <ul class="links">
      <li><a href="/">首頁</a></li>
      <li><a href="/about">關於</a></li>
      <li><a href="/posts">貼文</a></li>
    </ul>
  </nav>
</header>

<style>
  header {
    text-align: center;
    background: rgba(0, 0, 0, 0.1);
  }
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    margin: 0 auto;
    padding: 2rem;
  }
  .title {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .title img {
    display: inline-block;
    width: 2rem;
    height: 2rem;
    filter: invert(88%) sepia(18%) saturate(886%) hue-rotate(199deg)
      brightness(100%) contrast(90%);
  }
  .title h1 {
    margin-left: 1rem;
  }
  .links {
    display: flex;
    place-content: center center;
  }
  .links li {
    list-style: none;
  }
  .links a:hover {
    background: rgba(0, 0, 0, 0.1);
    border: 1px dashed white;
  }
  a {
    display: block;
    padding: 1rem;
    border: 1px dashed transparent;
    margin-left: 0.5rem;
  }
</style>
