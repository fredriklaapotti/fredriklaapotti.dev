<script>
  // Your selected Skeleton theme:
  import '@skeletonlabs/skeleton/themes/theme-gold-nouveau.css';
  // This contains the bulk of Skeletons required styles:
  import '@skeletonlabs/skeleton/styles/skeleton.css';
  // Finally, your application's global stylesheet (sometimes labeled 'app.css')
  import "../app.postcss";

  import Header from "$lib/components/Header.svelte";
  import Footer from "$lib/components/Footer.svelte";
</script>

<svelte:head>
  <meta name="description" content="Mostly right, if not, usefully wrong." />
</svelte:head>

<Header />
<slot />
<Footer />

<style>
  :global(html) {
    -webkit-tap-highlight-color: rgba(128, 128, 128, 0.5);
  }

  :global(body) {
    padding-top: 50px;
    width: 60%;
    margin: auto;
  }
</style>