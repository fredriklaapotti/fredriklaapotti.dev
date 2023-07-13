<script>
    import { LightSwitch } from '@skeletonlabs/skeleton';
</script>

<h3 class="h3"><a href="/">Fredrik Laapotti</a></h3>
<header class="navbar">
    <nav>
        <ul>
            <li><a class="anchor" data-sveltekit-preload-data="hover" href="/about">About</a></li>
            <li><a class="anchor" data-sveltekit-preload-data="hover" href="/blog">Blog</a></li>
            <li><a class="anchor" data-sveltekit-preload-data="hover" href="/projects">Projects</a></li>
            <li><LightSwitch ring=''/></li>
        </ul>
    </nav>
</header>

<style>
    a {
        text-decoration: none;
    }
    .navbar {
        width: 100%;
        float: top; /* Left, right, top */
        padding: 25px 0px 50px 0px; /* Top, right, bottom, left */
        margin: 0px;
    }

    ul {
        list-style-type: none;
        margin: 0px;
        padding: 0px;
        overflow: hidden;
    }

    li {
        float: left;
    }

    li + li {
        margin-left: 20px;
    }
</style>