import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load({ url, route, fetch, params }) {
    const md_response = await fetch("/api/posts");
    const md_posts = await md_response.json();
    console.log(md_posts);
    return { md_posts };
}