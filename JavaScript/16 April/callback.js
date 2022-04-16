/* Callback Function */



// Example 1

function myDisplayer(multiplier, sum) {
    console.log("Answer is : ", multiplier * sum);
}

function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    console.log("Sum of the numbers is : ", sum);
    myCallback(7, sum);
}

myCalculator(1, 2, myDisplayer);






// Example 2

var person = {
    firstName: "Akshay",
    lastName: "Khurana",
    city: "Meerut",
    state: "Uttar Pradesh",
    country: "India"
}

function namePrinter(person, locationFunction) {
    console.log("My name is " + person.firstName + " " + person.lastName + ". ");
    locationFunction(person, countryPrinter);
}

function locationPrinter(person, countryFunction) {
    console.log("I live in " + person.city + ", " + person.state);
    countryFunction(person);
}

function countryPrinter(person) {
    console.log("I belong to " + person.country);
    for (var i = 0; i < 5; i++) {
        console.log("India");
    }
}

namePrinter(person, locationPrinter);