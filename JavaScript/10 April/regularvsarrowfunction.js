// Regular Function


let square = function (x) {
    return (x * x);
};
console.log(square(9)); // 81


// Arrow Function


var squareFunction = (x) => {
    return (x * x);
};
console.log(squareFunction(9));



// This Keyword

const person1 = {
    firstName: "John",
    lastName: "Doe",
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}

console.log(person1.fullName());

const person2 = {
    firstName: "Hege",
    lastName: "Nilsen",
}

// Function Borrowing

// Bind Method

let person2Function = person1.fullName.bind(person2);

console.log(person2Function());