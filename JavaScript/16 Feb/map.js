// Map in Javascript

// Create a Map
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200],
    ["apples, 600"]
]);

console.log(fruits);
console.log(fruits.keys());
console.log(fruits.values());

const map1 = new Map([
    [1, 1],
    [2, 2],
    [3, 3],
    [4, 4]
]);

// Keys & Values are same
// Keys & Values are different



// set Method

const fruitsMap = new Map();

fruitsMap.set("apples", 500);
fruitsMap.set("bananas", 500);
fruitsMap.set("oranges", 200);

console.log(fruitsMap);

fruitsMap.set("oranges", 2000);

console.log(fruitsMap);


// get Method

console.log(fruitsMap.get("bananas"));
console.log(fruitsMap.get("grapes"));


// size Property

console.log(fruitsMap.size);

// delete() method

console.log(fruitsMap.delete("bananas"));

console.log(fruitsMap);


// clear Method


//console.log(fruitsMap.clear());
console.log(fruitsMap);


// has Method

console.log(fruitsMap.has("apples")); // true
console.log(fruitsMap.has("bananas")); // false

console.log(typeof(fruitsMap)); // object

console.log(fruitsMap instanceof Map); // true
console.log(fruitsMap instanceof Set); // false


// entries Method

// Create a Map
const fruitsEntries = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
]);
  
let textEntries = "";
for (const x of fruitsEntries.entries()) {
    textEntries += x + "\n";
}

console.log(textEntries);