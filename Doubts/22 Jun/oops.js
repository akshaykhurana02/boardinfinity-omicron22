// Object

//Defining object
// let person = {
//   first_name: "Mukul",
//   last_name: "Latiyan",

//   //method
//   getFunction: function () {
//     return `The name of the person is ${this.first_name} ${this.last_name}`;
//   },
//   //object within object
//   phone_number: {
//     mobile: "12345",
//     landline: "6789",
//   },
// };

// let person1 = {
//   first_name: "Rishabh",
//   last_name: "Jain",

//   //method
//   getFunction: function () {
//     return `The name of the person is ${this.first_name} ${this.last_name}`;
//   },
//   //object within object
//   phone_number: {
//     mobile: "12345",
//     landline: "6789",
//   },
// };

// console.log(person.getFunction());
// console.log(person.phone_number.landline);

// console.log(person1.getFunction());
// console.log(person1.phone_number.landline);

// Classes

// Defining class using es6
class Vehicle {
  constructor(name, maker, engine) {
    this.name = name;
    this.maker = maker;
    this.engine = engine;
  }
  getDetails() {
    return `The name of the vehicle is ${this.name}. It is developed by ${this.maker}. It has ${this.engine} engine.`;
  }
}

// Defining class in a Traditional Way.
// function Vehicle1(name, maker, engine) {
//   (this.name = name), (this.maker = maker), (this.engine = engine);
// }

// Vehicle1.prototype.getDetails = function () {
//   console.log("The name of the bike is " + this.name);
// };

// let bike1 = new Vehicle1("Hayabusa", "Suzuki", "1340cc");
// let bike2 = new Vehicle1("Ninja", "Kawasaki", "998cc");

// console.log(bike1.name);
// console.log(bike2.maker);
// console.log(bike1.getDetails());

// Making object with the help of the constructor
let bike1 = new Vehicle("Hayabusa", "Suzuki", "1340cc");
let bike2 = new Vehicle("Ninja", "Kawasaki", "998cc");
let car1 = new Vehicle("i20", "Hyundai", "1248cc");
let car2 = car1;

// console.log(bike1.getDetails());
// console.log(bike2.getDetails());
// console.log(car1.getDetails());

car1 = bike2;

// Because now both car1 & bike2 are pointing to same memory location.
// console.log(car1.getDetails());

// Because car2 is pointing to initial location of car1
// console.log(car2.getDetails());

// Encapsulation

//encapsulation example
class person {
  constructor(name, id) {
    this.name = name;
    this.id = id;
  }
  add_Address(add) {
    this.add = add;
  }
  getDetails() {
    console.log(`Name is ${this.name}, Address is: ${this.add}`);
  }
}

//Inheritance example
class Person {
  // Constructor is the method which is called instantly when an object is created
  constructor(name) {
    this.name = name;
  }
  //method to return the string
  toString() {
    return `Name of person: ${this.name}`;
  }
}

class Student extends Person {
  constructor(name, id) {
    //super keyword to for calling above class constructor
    super(name); // Super is used for parent class constructor
    // Super should be the first line within the constructor
    this.id = id;
  }

  // Here we updated an existing property
  // Here we are overriding the method toString of the parent.
  toString() {
    return `${super.toString()}, Student ID: ${this.id}`;
  }

  // Here we added a new property
  getStudentId() {
    return `ID is ${this.id}`;
  }
}

// let person1 = new person("Akshay", 26);
// person1.add_Address("Meerut");
// person1.getDetails();

let person2 = new Person("Akshay");
let student1 = new Student("Mukul", 22);

console.log(person2.toString());
console.log(student1.toString());

//console.log(person2.getStudentId());
console.log(student1.getStudentId());
