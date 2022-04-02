// Array and it's methods

let givenArray = ["Banana", "Mango", "Strawberry", "Grapes", "Apple"];

// Sorting on the basis of number

const points = [40, 100, 1, 5, 25, 10];
console.log(points);

points.sort(function(a, b){return a - b}); // Sort in ascending order
console.log(points);

points.sort(function(a, b){return b - a}); // Sort in descending order
console.log(points);


// Math.max

let maxInArray = myArrayMax(points);
function myArrayMax(arr) {
  return Math.max.apply(null, arr);
}
console.log(maxInArray);

let maxInArrayDuplicate = myArrayMaxDuplicate(points);
function myArrayMaxDuplicate(arr) {
    let newArray = arr.sort(function(a, b){return b - a});
    return newArray[0];
}
console.log(maxInArrayDuplicate);


// Math.min

let minInArray = myArrayMin(points);
function myArrayMin(arr) {
  return Math.min.apply(null, arr);
}

console.log(minInArray);