// Functions

// Global Execution Context

// Execution Context

// Call Stack

let myName = "Akshay Khurana";
console.log(`Hello ${myName}`);

function printA() {
  let a = 40;
  console.log(`A : ${a}`);
  printB();
}

function printB() {
  let b = 50;
  console.log(`B : ${b}`);
}

printA();

console.log("Bye");
