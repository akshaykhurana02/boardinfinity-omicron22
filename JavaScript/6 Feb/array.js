// Array and it's methods

// toString

let myIntro = "Hello, this is Akshay from boardInfinity.";
let introString = myIntro.split(" ");

for(let i = 0; i < introString.length; i++) {
    introString[i] = introString[i].charAt(0).toUpperCase() + introString[i].substring(1);
}

//console.log(myIntro);
//console.log(introString.toString());


// join

//console.log(introString.join(" "));


let givenArray = ["Banana", "Mango", "Strawberry", "Grapes", "Apple"];
// console.log(givenArray);

// length

// console.log(givenArray.length);

// pop

givenArray.pop();
// console.log(givenArray);


// push

givenArray.push("Guava");
// console.log(givenArray);

// givenArray[2] = "Chikoo";
// console.log(givenArray);


// shift

// console.log(givenArray);
givenArray.shift();
// console.log(givenArray);

// unshift

givenArray.unshift("Lemon");
// console.log(givenArray);


// delete

// delete givenArray[1];
// console.log(givenArray);

// concat

// let firstArray = ["Apple", "Banana", "Grapes"];
// let secondArray = ["Lemon", "Carrot"];
// let thirdArray = firstArray.concat(secondArray);
// let fourthArray = firstArray.concat(secondArray, thirdArray);

// console.log(firstArray);
// console.log(secondArray);
// console.log(thirdArray);
// console.log(fourthArray);

// let fifthArray = firstArray.concat("Akshay");
// console.log(fifthArray);


// splice

let fruits = ["Strawberry", "Apple", "Grapes", "Banana", "Kiwi"];
let numberArray = [1, 7, 2, 9, 10, 4, 3];
// console.log(fruits);

// fruits.splice(2, 0, "ABC", "DEF");
// console.log(fruits);

// fruits.splice(0, 1);
// console.log(fruits);


// // slice

// let newFruitsArray = fruits.slice(1);
// console.log(newFruitsArray);
// console.log(fruits);


// sort

console.log(fruits);
fruits.sort();
console.log(fruits);

console.log(numberArray);
numberArray.sort();
console.log(numberArray);


// reverse

fruits.reverse();
console.log(fruits);

