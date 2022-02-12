// Objects & ES6 Features

let studentDetails = {
    firstName: "Akshay",
    lastName: "Khurana"
    // printFullName : () => {
    //     return this.firstName + " " + this.lastName;
    // }
}


// Tempelate Literals


// My name is Akshay Khurana

console.log("My name is " + studentDetails.firstName + " " + studentDetails.lastName + ".");
console.log(`My name is ${studentDetails.firstName} ${studentDetails.lastName}.`);

// Regular Function

function addition(firstNumber, secondNumber) {
    return `Sum is : ${firstNumber + secondNumber}`;
}
console.log(addition(2, 3)); // Sum is : 5



// Arrow Function


let normalArrowFunction = () => {
    console.log("Hello, I'm an arrow function.")
}
normalArrowFunction();

let sumOfThreeNumbers = (a, b, c) => {
    return a + b + c;
}

console.log(sumOfThreeNumbers(3, 4, 5)); // 12


let sumOfTwoNumbers = (a, b) => {
    return `Sum is : ${a + b}`;
}

// let sumOfTwoNumbers = (a, b) => a + b;

console.log(sumOfTwoNumbers(3, 4)); // Sum is : 7

// let multiplyByTwo = (number) => {
//     return number * 2;
// }

let multiplyByTwo = number => number * 2;

// function addition(firstNumber, secondNumber) {
//     return `Sum is : ${firstNumber + secondNumber}`;
// }

// let multiplyByTwo = number => `After Multiplication : ${number * 2}`;

console.log(multiplyByTwo(44)); // 8


// Multi Line Strings

// \n -> It is special character used for line break

let multiLineString1 = "Akshay Khurana Akshay Khurana Akshay Khurana Akshay Khurana" + 
"\nAkshay Khurana Akshay Khurana" +
"\nAkshay Khurana Akshay Khurana";

let multiLineString2 = `Akshay Khurana Akshay Khurana Akshay Khurana Akshay Khurana
Akshay Khurana Akshay Khurana
Akshay Khurana Akshay Khurana`;

console.log(multiLineString1);
console.log(multiLineString2);



// Array of Objects

const studentData = [
    {
        firstName: "Akshay",
        lastName: "Khurana"
    },
    {
        firstName: "Akhil",
        lastName: ""
    },
    {
        firstName: "Noorul",
        lastName: ""
    },
    {
        firstName: "Manisha",
        lastName: ""
    },
    {
        firstName: "Durga",
        lastName: "Lal",
        age: 23
    },
    {
        firstName: "Runa",
        lastName: "Mulla"
    }
];

console.log(studentData.length); // 6
console.log(studentData[5].firstName + " " + studentData[5].lastName);
console.log(`${studentData[5].firstName} ${studentData[5].lastName}`);

// My name is Durga Lal. My age is 22.

console.log(`My name is ${studentData[4].firstName} ${studentData[4].lastName}.`);
studentData[4]?.age && console.log(`My age is ${studentData[4]?.age}.`);
