// Set in Javascript


// Creating a new set

// Passing an Array to new Set()

const lettersSet = new Set(["a", "b", "c", "d"]);
lettersSet.add("d");
lettersSet.add("d");
console.log(lettersSet);

const newArray = ["a", "b", "c", 1, 2, "a"];
console.log(newArray);



// Create a Set and add literal values

const anotherSet = new Set();
anotherSet.add("a");
anotherSet.add("b");
anotherSet.add("c");

console.log(anotherSet);



// Create a Set and add variables

anotherSet.add(lettersSet);
console.log(anotherSet);

function printValues(item) {
    console.log(item);
}

// forEach Method

anotherSet.forEach(printValues);



// values Method

// Create an Iterator
const myIterator1 = lettersSet.values();

// List all Values
let text1 = "";
for (const entry of myIterator1) {
    text1 = text1 + entry + " ";
}

console.log(text1);

// Logic

// (Iterator)ABCD

// 1st occurence A(Iterator)BCD
// 2nd occurence AB(Iterator)CD
// 3rd occurence ABC(Iterator)D
// 4th occurence ABCD(Iterator)


// keys Method

// Create an Iterator
const myIterator2 = lettersSet.keys();

// List all Values
let text2 = "";
for (const entry of myIterator2) {
    console.log("Called");
    text2 = text2 + entry + " ";
}

console.log(text2);


// entries Method

// Create a Set
const letters = new Set(["a","b","c"]);

// List all entries

const iterator4 = letters.entries();
let text3 = "";
for (const entry of iterator4) {
  text3 += entry + "";
}

console.log(text3);


// typeof

console.log(typeof(lettersSet));

// instanceof

console.log(lettersSet instanceof Set); // True
console.log(lettersSet instanceof String); // False
console.log(["A", "B", "C"] instanceof Array); // True

// instanceof works only with object datatype