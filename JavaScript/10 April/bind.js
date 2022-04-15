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