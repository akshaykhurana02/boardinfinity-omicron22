// Opeators

// Binary Operators

// > Greater Than
// < Less Than
// >= Greate Than Equal To
// <= Less Than Equal To

var durgaLalAge = 18;

if(durgaLalAge >= 18) { // true
    console.log("Durga Lal is an adult.");
} else {
    console.log("Durga Lal is a teenager.");
}

if(durgaLalAge <= 18) { // true
    console.log("Age less then 18 or equal to 18.");
} else {
    console.log("Age greater then 18.");
}

// == Equality Operator

if(durgaLalAge == "18") { // Condition True
    console.log("Durga Lal's Age is 18.");
} else {
    console.log("Durga Lal's Age is not equal to 18.");
}

// === Strict Equality Opeator

if(durgaLalAge === "18") { // Condition False
    console.log("Durga Lal's Age is 18.");
} else {
    console.log("Durga Lal's Age is not equal to 18.")
}


// Unary + Operator / Unary - Operator

var y = "5";      // y is a string
var x = - y; // -5
x--;
var z = + y; // 5
z++;

console.log(typeof(y)); // string
console.log(x); // number
console.log(typeof(x)); // number
console.log(z); // number
console.log(typeof(z)); // number

var counter = 0;
console.log(counter); // 0
counter ++;
console.log(counter); // 1
