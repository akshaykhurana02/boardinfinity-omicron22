// Promises

const posts = [
    { title: 'Post One', body: 'This is post one!' },
    { title: 'Post Two', body: 'This is post two!' }
];

function getPosts() {
    setTimeout(() => {
        let output = "";
        posts.forEach((post) => {
            output += `<li>${post.title}</li>`
        });
        document.body.innerHTML = output;
    }, 1000);
}

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            const error = false;

            if (!error) {
                resolve('Promise is resolved');
            } else {
                reject('Something went wrong!')
            }
        }, 2000);
    });
}

createPost({ title: 'Post Three', body: 'This is post Three!' })
    .then((message) => {
        getPosts();
        console.log(message);
    })
    .catch(err => console.log(err));

// Promise.all

const promise1 = Promise.resolve("Hello World!");
const promise2 = 10;
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, 'Good Bye!');
});
const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());

Promise.all([promise1, promise2, promise3, promise4]).then(values => console.log(values));