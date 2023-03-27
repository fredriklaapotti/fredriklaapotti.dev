import { error } from '@sveltejs/kit';
//import { MongoClient } from "mongodb";
import db from "$lib/server/db";

/** @type {import('./$types').PageLoad} */
export async function load({ url, route, fetch, params }) {
    //const response = await fetch("http://localhost:9090");
    //const posts = await response.json();

    const md_response = await fetch("/api/posts");
    const md_posts = await md_response.json();
    console.log(md_posts);

    const blogposts = await db.collection("blogposts").find({}, {projection:{ _id: 0 }}).toArray();
    //console.log(blogposts);
    
    return { md_posts };

    throw error(404, 'Not found');
}