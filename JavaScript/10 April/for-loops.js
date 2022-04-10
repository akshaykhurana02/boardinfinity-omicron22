const names = ["Akshay", "Akhil", "Ankit", "Noorul", "Manisha"];

// For Loop

// for(var i = 0; i < names.length; i++) {
//     console.log(names[i]);
// }


// For each Method


// names.forEach(printNames);

// function printNames(item) {
//     console.log(item);
// }



let sum = 0;
const numbers = [65, 44, 12, 4];

numbers.forEach(myFunction);

function myFunction(item) {
    console.log("Function Called");
    sum += item;
}

console.log("Sum : " + sum);


// Using Anonymous Function

sum = 0;

numbers.forEach(function (item) {
    console.log("Anonymous Function Called");
    sum += item;
})

console.log("Sum : " + sum);

let commentry;

commentry = 'Rohit hits a 300 hundred.' + ' Virat also hits a 300 hundred.';
commentry = commentry.concat(' Sachin. ', 'Dhoni.');

console.log(commentry);

let firstName = "Ankit";
let secondName = "Akhil";

let bothNames = firstName + " " + secondName;

console.log(bothNames);




// For in Loop

const person = {
    fname: "John",
    lname: "Doe", 
    age: 25,
    country: {
        country: "India",
        state: "UP"
    },
    mobileNumber: "+919556778899"
};

let text1 = "";
let text2 = "";

for (let x in person) {
    text1 += person[x] + " ";
}


for (let x in person) {    
    if(typeof(person[x]) === 'object') {
        for(let y in person[x]) {
            text2 += person[x][y] + " ";
        }
    } else {
        text2 += person[x] + " ";
    }
}

console.log("Result 1 : ", text1);
console.log("Result 2 : ", text2);




// For Of Loop

const numberArray = [1, 2, 3 , 4, 5, 6, 7];


// Example 1

// Sum of Odd Numbers Only

let sumOfOddNumbers = 0;
let sumOfEvenNumbers = 0;

for (let x of numberArray) {
    if(x%2 !=0) {
        sumOfOddNumbers += x;
    } else {
        sumOfEvenNumbers += x;
    }
}

console.log("Sum of odd numbers : ", sumOfOddNumbers);
console.log("Sum of even numbers : ", sumOfEvenNumbers);

