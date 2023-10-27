<script>
  import LoadingAnimation from '$lib/LoadingAnimation.svelte';

  let check = fetch('http://localhost:8080/health').then((x) => x.json());
</script>

<h1 class="text-center mt-10">
  Backend API connexion is:
  {#await check}
    <LoadingAnimation />
  {:then}
    <strong style="color: green;">UP</strong>
  {:catch}
    <strong style="color: red;">DOWN</strong>
  {/await}
</h1>
