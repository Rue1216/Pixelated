<script>
  let dateObj = new Date();
  let month = dateObj.getUTCMonth() + 1; //months from 1-12
  let day = dateObj.getUTCDate();
  let year = dateObj.getUTCFullYear();
</script>

<footer><p>{year} Rue &copy; All Rights Reserved</p></footer>

<style>
  footer {
    text-align: center;
    background: rgba(0, 0, 0, 0.1);
    padding: 2rem;
  }
</style>
