<script>
    /** @type {import('./$types').PageData} */
    export let data;
    import { Avatar } from '@skeletonlabs/skeleton';
    import fredrik from '$lib/images/fredrik-hand-resized.jpg';
</script>

<svelte:head>
    <title>Fredrik Laapotti</title>
</svelte:head>

<main>
    <div class="hero">
        <div class="description">
            <h2 class="h2">Nice to meet you! I'm Fredrik.</h2>
            <br/>
            <p>
                You've reached the stash where I bring order to my ideas!<br/><br/>
                I make my living bringing people and ideas closer to their fullest potential. Exploring software development and technical concepts is a passion of mine. Life is like a smorg&aring;sbord, get out there and enjoy it!
            </p>
        </div>
        <div class="profilepicture">
            <Avatar src={fredrik} width="w-64" rounded="rounded-lg" />
        </div>
    </div>
    <br/>
    <h3 class="h3">Latest posts:</h3>

    <nav class="list-nav">
        <ul>
            {#each Object.values(data.posts) as post}
                <li>
                    <a href="{post.path}">
                    {post.meta.title}
                    </a>
                </li>
            {/each}
        </ul>
    </nav>
</main>

<style>
    
    .hero {
        display: grid;
        grid-template-columns: 3fr 0fr;
    }
    
    .description {
        padding-right: 20px;
    }

    .profilepicture {
        float: right;
    }
</style>