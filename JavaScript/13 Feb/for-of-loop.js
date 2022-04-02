// For Of Loop

const cars = ["BMW", "Volvo", "Mini"];

let text = "";
for (let x of cars) {
  text += x;
}

/*

1st Occurence: BMW
2nd Occurence: BMWVolvo
3rd Occurence: BMWVolvoMini

Result -> BMWVolvoMini

*/

console.log(text);


const numberArray = [1, 2, 3 , 4, 5, 6, 7," ","Akshay"];

let sumofArray = 0;

// for(let i = 0; i < numberArray.length; i++) {
//     sumofArray += numberArray[i];
// }

for(let y of numberArray) {
    sumofArray += y;
}

// console.log("Sum of given Array : ", sumofArray); // Sum of given Array: 28Akshay



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

// console.log("Sum of odd numbers : ", sumOfOddNumbers);
// console.log("Sum of even numbers : ", sumOfEvenNumbers);

let counter = 2;
console.log(counter);
let newCounter = counter++; // First Assign, Then Increment (Post Order)
console.log("New Counter : ", newCounter); // 2
console.log("Counter : ", counter); // 3
let otherCounter = ++counter; // First Increment, Then Assign (Pre Order)
console.log("Other Counter : ", otherCounter); // 4
console.log("Counter : ", counter); // 4
