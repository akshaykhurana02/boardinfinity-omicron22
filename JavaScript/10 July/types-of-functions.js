// Parameters v/s Arguments

function sum(num1, num2) {
  return num1 + num2;
}

console.log("Sum of 2 & 5 : ", sum(2, 5));

// Here 2, 5 are Arguments
// num1, num2 are Parameters

// Callback Functions & Higher Order Function

function firstFunction(para1) {
  console.log(para1);
  para1();
}

function secondFunction() {
  console.log("Second Function");
}

firstFunction(secondFunction);

// Here secondFunction is the callback Function, because it is passed as an argument to another function and is later called from that function
// Here firstFunction is Higher Order Function, because it is taking another function as an argument

function x() {
  var a = 5;
  function y() {
    console.log(a);
  }
  return y;
}

// Here x is also a Higher Order Function because it is returning another function..


function xyz(para1) {
    return function abc() {
        console.log("ABC");
    }
}

xyz(secondFunction)();



// First Class Functions or First Class Citizens
