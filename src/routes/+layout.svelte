<script>
  import Header from "../lib/Header.svelte";
  import Footer from "../lib/Footer.svelte";
  import "../styles/global.css";
</script>

<Header title="Pixelated" />
<main>
  <slot />
</main>
<Footer />

<style>
  main {
    margin: 20px auto;
  }
</style>
