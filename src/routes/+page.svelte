<script>
    import Blogpost from "$lib/components/Blogpost.svelte";

    /** @type {import('./$types').PageData} */
    export let data;
</script>

<svelte:head>
    <title>Fredrik Laapotti</title>
</svelte:head>

<div class="body-text">
    Senaste inläggen:<br/><br/>
    
    {#each Object.values(data.md_posts) as post}
    <a href="{post.path}">{post.meta.description}</a><br/>
    {/each}
</div>

<style>
    .body-text {
        font-size: 18px;
    }
</style>