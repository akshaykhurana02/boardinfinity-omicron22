// Strings & it's methods


// charAt

let text = "Taj Mahal";
// console.log(text.charAt(4)); // M


// charCodeAt

let city = "Agra";
// console.log(city.charCodeAt(3)); // 97 (ASCC Value of a)
// console.log(text.charCodeAt(4)); // 77 (ASCII Value of M)


// a-z --> starts from 97
// A-Z --> starts from 65


// Property Access []

// console.log(city[1]); // g
// console.log(text[5]); // a
// console.log(city[5]); // undefined
// console.log(city.charAt(5)); // Empty String


// Split

let myIntro = "Hello, this is Akshay from boardInfinity.";
console.log(typeof(myIntro));
let introString = myIntro.split(" ");
console.log(typeof(introString));
console.log(introString);

// Array

// 0 -> Hello,
// 1 -> this
// 2 -> is
// 3 -> Akshay
// 4 -> from
// 5 -> boardInfinity

for(let i = 0; i < introString.length; i++) {
    introString[i] = introString[i].charAt(0).toUpperCase() + introString[i].substring(1);
}

console.log(myIntro);
console.log(introString);

console.log(myIntro.split());
console.log(myIntro.split(""));