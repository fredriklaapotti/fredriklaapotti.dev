<script>
    /** @type {any} */
     export let data;
</script>

<article>
    <header>
        <h1><a href="{data.path}">{data.meta.title}</a></h1>
        <h3>{data.meta.date}</h3>
    </header>
    <p>{data.meta.description}</p>
</article>