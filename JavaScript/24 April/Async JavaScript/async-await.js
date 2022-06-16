// Async Await

const posts = [
    { title: 'Post One', body: 'This is post one!' },
    { title: 'Post Two', body: 'This is post two!' }
];

function getPosts() { // Reading available posts
    setTimeout(() => {
        let output = "";
        posts.forEach((post) => {
            output += `<li>${post.title}</li>`
        });
        document.body.innerHTML = output;
    }, 1000);
}

function createPost(post) { // Adding a new post
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            const error = true;

            if (!error) {
                resolve();
            } else {
                reject('Something went wrong!')
            }
        }, 2000);
    });
}

async function init() {
    try {
        await createPost({ title: 'Post Three', body: 'This is post Three!' });
        getPosts();
    } catch(err) {
        console.log("Error -> ", err);
    }
}

init();