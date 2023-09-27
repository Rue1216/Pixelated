<script>
  import { page } from "$app/stores";
</script>

<section>
  <h2>看來你抵達了不存在的頁面</h2>
  <br />
  <p>但如果你想知道詳細資訊，現在是：{$page.status} {$page.error.message}</p>
  <br />
  <a href="/posts">→→點我回到貼文列表←←</a>
</section>

<style>
  a {
    font-size: 0.75rem;
  }
</style>
