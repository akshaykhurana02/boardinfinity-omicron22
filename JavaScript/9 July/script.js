// Block

{
}

// if (a === 10) console.log("A is 10");
// else console.log("A is not 10");

// if (a === 10) {
//   console.log("A is 10");
//   console.log("XYZ");
// } else {
//   console.log("A is not 10");
// }

/* 

How JS Program is executed?

1. Memory Creation Phase
2. Code Execution Phase

*/

// Hoisting

console.log(calculateSum(2, 4));

console.log(a);
console.log(b);
// console.log(c);
// console.log(d);

console.log(z);


var a = 11;
var b = 12;
let c;
const d = 40;
console.log(c);

console.log(a, b, c);

{
    let b = 40;
    console.log(b);
}

function calculateSum(b, c) {
  return b + c;
}

// Scope



