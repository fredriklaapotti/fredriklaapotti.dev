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
        background-color: #181818;
        width: 58%;
        margin: auto;
        font-family: sans-serif;
    }

    :global(.container) {
        font-size: 18px;
        color: #e6e6e6;
    }

    :global(.body-text) {
        font-size: 18px;
        color: #e6e6e6;
    }

    :global(a:visited) {
        color: inherit;
    }
</style>