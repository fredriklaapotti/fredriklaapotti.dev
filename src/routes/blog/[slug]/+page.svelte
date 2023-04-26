<script>
    /** @type {import('./$types').PageData} */
    export let data;
</script>

<div class="body-text">
    <article>
        <h1>{ data.title }</h1>
        <p class="published">Published {data.date}</p>
        <svelte:component this={data.content} />
    </article>
</div>

<style>
    .published {
        font-size: 14px;
        font-style: italic;
    }
</style>