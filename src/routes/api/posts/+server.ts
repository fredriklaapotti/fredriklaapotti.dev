import { error, json } from '@sveltejs/kit';

async function fetchMarkdownPosts() {
    const allPostFiles = import.meta.glob("/src/routes/blog/*.md");
    const iterablePostFiles = Object.entries(allPostFiles);

    const allPosts = await Promise.all(
        iterablePostFiles.map(async ([path, resolver]) => {
            const { metadata }: any = await resolver();
            const postPath: string = path.slice(11, -3);
            return {
                meta: metadata,
                path: postPath,
            }
        })
    )

    return allPosts;
}

/** @type {import('./$types').RequestHandler} */
export async function GET({ url }) {
    const allPosts = await fetchMarkdownPosts();
    return json(allPosts);
}