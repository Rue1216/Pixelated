/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await res.json();

    if (res.ok) {
        return {
            props: {
                posts,
            },
        };
    }
    return {
        status: res.status,
        error: new Error("Could not fetch the guides"),
    };
}