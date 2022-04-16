const person = {
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}

const person1 = {
    firstName: "Mary",
    lastName: "Doe"
}


console.log(person.fullName.apply(person1)); // Mary Doe

const personNew = {
    fullName: function (city, country) {
        return this.firstName + " " + this.lastName + " belongs to " + city + ", " + country;
    }
}

const person2 = {
    firstName: "John",
    lastName: "Doe"
}

console.log(personNew.fullName.apply(person2, ["Oslo", "Norway"]));