<script>
    import Blogpost from '$lib/components/Blogpost.svelte';

    /** @type {import('./$types').PageData} */
    export let data;
</script>

<svelte:head>
    <title>Blog | Fredrik Laapotti</title>
</svelte:head>

<div class="body-text">
Blog
</div>

<div class="body-text">
    {#each Object.values(data.posts) as post}
        <Blogpost data={post} />
    {/each}
</div>

<style>
    .body-text {
        font-size: 18px;
    }
</style>