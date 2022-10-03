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
  console.log("Function A Executed!");
}

function printB() {
  let b = 50;
  console.log(`B : ${b}`);
  console.log("Function B Executed!");
}

printA();

console.log("Bye");
