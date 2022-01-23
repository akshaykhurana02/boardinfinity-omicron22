// Type Conversion


// Number to String Conversion


var serialNumber = 70;
//console.log(typeof(serialNumber));

serialNumber = serialNumber + "";
//console.log(typeof(serialNumber));


// String to Number Conversion


var indexNumber = "70";
// console.log(indexNumber);
// console.log(Number(indexNumber));
// console.log(typeof(Number(indexNumber)));
// console.log(Number("")); // 0
// console.log(Number("2")); // 0

// console.log(Number("3.14")); // 3.14
// console.log(parseFloat("3.14")); // 3.14



// Automatic Type Conversion

console.log(5 + null); // 5 + 0 -> Prints 5
console.log("5" + null); // Prints 5null
console.log("5" + 2); // 52
console.log("5" - 2); // 5 -2 -> Prints 3
console.log("5" * "3") // 5 * 3 -> Prints 15


console.log("50" - 3 + "45"); // 4745

console.log(2 + 5);
console.log(4 - 7 + 5 * 3);

// 4 - 7 + 15
