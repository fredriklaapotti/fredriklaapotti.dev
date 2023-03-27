<script>
    import Header from "$lib/components/Header.svelte"
    import Footer from "$lib/components/Footer.svelte"
</script>

<svelte:head>
    <meta name="description" content="Mostly right, if not, usefully wrong."/>
</svelte:head>

<Header />
<slot />
<Footer />

<style>
    :global(body) {
        background-color: #f2eaea;
        width: 50%;
        margin: auto;
        font-family: sans-serif;
    }
</style>