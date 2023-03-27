import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load({ url, route, fetch, params }) {
    const response = await fetch("/api/posts");
    const posts = await response.json();

  
    return { posts };

    throw error(404, 'Not found');
}