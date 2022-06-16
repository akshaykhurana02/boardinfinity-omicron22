// Synchronous Programming

console.log("ABC");
console.log("DEF");
console.log("XYZ");


// Asynchronous Programming


console.log("ABC");
console.log("DEF");
setTimeout(() => {
    console.log("Inside Timeout");
}, 0);
console.log("XYZ");



// async function getUsersData() {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');
//     console.log(response);
// }

// console.log("123");
// console.log("456");
// setTimeout(() => {
//     getUsersData();
//     console.log("123");
//     console.log("456");
// }, 1000);
