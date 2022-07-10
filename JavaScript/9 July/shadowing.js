// Shadowing

let z = 40;

console.log(z); // 40

{
  z = 50;
  console.log(z); // 50
  {
    z = 60;
    console.log(z); // 60
  }
}

console.log(z); // 60

// let a = 40;
// console.log(a); // 40

// a = 55;
// console.log(a); // 55
