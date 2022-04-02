// For each Method

let sum = 0;
const numbers = [65, 44, 12, 4];

numbers.forEach(myFunction);

function myFunction(item) {
    console.log("Function Called");
    sum += item;
}

console.log("Sum : " + sum);

const names = ["Akshay", "Akhil", "Ankit", "Noorul", "Manisha"];

names.forEach(printNames);

function printNames(item) {
    console.log(item);
}