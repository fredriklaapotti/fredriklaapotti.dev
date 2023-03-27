<script>
    /** @type {import('./$types').PageData} */
    export let data;
</script>

<svelte:head>
    <title>Fredrik Laapotti</title>
</svelte:head>

<div class="body-text">
    <p>Senaste inläggen:</p>

    {#each Object.values(data.posts) as post}
        <a href="{post.path}">{post.meta.description}</a><br/>
    {/each}
</div>

<style>
    .body-text {
        font-size: 18px;
    }
</style>