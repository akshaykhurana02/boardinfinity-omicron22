const person = {
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}

const person1 = {
    firstName: "John",
    lastName: "Doe"
}

const person2 = {
    firstName: "Mary",
    lastName: "Doe"
}

console.log(person.fullName.call(person1)); // John Doe
console.log(person.fullName.call(person2)); // Mary Doe


const personNew = {
    fullName: function (city, country) {
        return this.firstName + " " + this.lastName + " belongs to " + city + ", " + country;
    }
}

console.log(personNew.fullName.call(person2, "Oslo", "Norway"));