// Scope

var firstName = "Akshay"; // Global Scope
console.log(firstName); // Akshay


function myFunction() {
    var secondName = "Khurana"; // Function Scope
    console.log(secondName); // Khurana
}

console.log(secondName); // Error

myFunction();

console.log(firstName); // Akshay
console.log(secondName); // Error
