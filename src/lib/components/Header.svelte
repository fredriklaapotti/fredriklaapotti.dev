<h1><a href="/">Fredrik Laapotti</a></h1>
<header class="navbar">
    <nav>
        <ul>
            <li class="hover-underline-animation"><a href="/about">About</a></li>
            <li class="hover-underline-animation"><a href="/blog">Blog</a></li>
            <li class="hover-underline-animation"><a href="/projects">Projects</a></li>
        </ul>
    </nav>
</header>

<style>
    .navbar {
        width: 100%;
        float: top; /* Left, right, top */
        padding: 0px;
        padding-bottom: 25px;
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
        margin-left: 15px;
    }

    li a {
        display: block;
        color: #aaaaaa;
        text-align: center;
        text-decoration: none;
    }

    li a:hover {
        background-color: #222222;
    }

    h1 a {
        text-decoration: none;
    }

    h1 a:visited {
        color: #e6e6e6;
    }

    .hover-underline-animation {
        display: inline-block;
        position: relative;
        color: #0087ca;
    }

    .hover-underline-animation::after {
        content: '';
        position: absolute;
        width: 100%;
        transform: scaleX(0);
        height: 2px;
        bottom: 0;
        left: 0;
        background-color: #0087ca;
        transform-origin: bottom right;
        transition: transform 0.25s ease-out;
    }

    .hover-underline-animation:hover::after {
        transform: scaleX(1);
        transform-origin: bottom left;
    }
</style>