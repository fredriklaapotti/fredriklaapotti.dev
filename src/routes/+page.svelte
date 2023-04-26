<script>
    /** @type {import('./$types').PageData} */
    export let data;
    import fredrik from '$lib/images/fredrik-hand-resized.jpg';
</script>

<svelte:head>
    <title>Fredrik Laapotti</title>
</svelte:head>

<main>
    <div class="container">
        <div class="hero">
            <div class="description">
                <h1>Nice to see you! I'm Fredrik.</h1>
                <p>
                    You've reached the stash where I bring order to my ideas!<br/><br/>
                    I make my living bringing people and ideas closer to their fullest potential. Exploring software development and technical concepts is a passion of mine. Life is like a smorg&aring;sbord, get out there and enjoy it!
                </p>
            </div>
            <div class="profilepicture">
                <img alt="Fredrik" src={fredrik}/>
            </div>
        </div>
    </div>
    <div class="container">
        <h3>Latest posts:</h3>
        {#each Object.values(data.posts) as post}
            <a href="{post.path}">{post.meta.title}</a><br/>
        {/each}
    </div>
</main>

<style>
    img {
        max-width: 100%;
        max-height: 100%;
    }

    .hero {
        display: grid;
        grid-template-columns: 2fr 1fr;
        padding-top: 25px;
    }
    
    .description {
        padding-right: 20px;
    }

    .profilepicture {
        text-align: right;
        padding-top: 10px;
    }
</style>