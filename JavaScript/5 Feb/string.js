// Strings & it's methods


var firstName = "Akshay Khurana";


// Akshay Khurana
// 0123456789


// length

// console.log("Length of First Name : " + firstName.length);
// console.log("BoardInfinity".length);


// slice

// console.log(firstName.slice(2, 8)); // shay K
// console.log(firstName.slice(2)); // shay Khurana


console.log("Apple, Banana, Kiwi".slice(-12, -6)); // Banana
console.log("Apple, Banana, Kiwi".slice(6, 12)); // Banana
// console.log("Apple, Banana, Kiwi".slice(-12)); // Banana, Kiwi



// substring

// console.log("Apple, Banana, Kiwi".substring(7, 13));
// console.log("Apple, Banana, Kiwi");



// substr

console.log("Apple, Banana, Kiwi".substr(7, 2)); // Ba
// console.log("Apple, Banana, Kiwi".substr(7, 5)); // Banan
// console.log("Apple, Banana, Kiwi".substr(9, 2)); // na
// console.log("Apple, Banana, Kiwi".substr(7)); // Banana, Kiwi
// console.log("Apple, Banana, Kiwi".substr(-6)); // , Kiwi


// replace

// console.log("Akshay Khurana".replace("Akshay", "Aman")); // Aman Khurana
// console.log("Akshay Akshay Khurana".replace("Akshay", "Aman")); // Aman Akshay Khurana
// console.log("Akshay Akshay Akshay Akshay Khurana".replaceAll("Akshay", "Aman")); // Aman Aman Khurana
// console.log("akshay12 Khurana".replaceAll("1", "4")); // akshay42 Khurana


var customerId = "ABC123456";

// console.log(customerId.replace("ABC", "DEF")); // DEF123456
// console.log(customerId); //ABC123456


console.log(firstName.replaceAll("A", "B"));
console.log("firstName".replace(/a/i, "b"));


// toUpperCase

console.log("Spiderman".toUpperCase()); //SPIDERMAN


// toLowerCase

console.log("Spiderman".toLowerCase()); //spiderman
console.log("my name is manisha".toUpperCase()); // MY NAME IS MANISHA

var givenString = "My name is Manisha";
console.log(givenString.toUpperCase().slice(3)); // NAME IS MANISHA
console.log(givenString.slice(3).toUpperCase().replace("MANISHA", "ANKIT").toLowerCase()); // name is ankit


// concat

console.log("First String" + " Second String");
console.log("First String".concat(" Second String"));


// trim

console.log("    Akshay Khurana    ".length); // 22
console.log("    Akshay Khurana    ".trim().length); // 14


// padStart

console.log("5".padStart(6,0)); // 000005


// padEnd

console.log("5".padEnd(7,0)); // 500000
