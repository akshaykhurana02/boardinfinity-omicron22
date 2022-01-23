// For Loop

// for(var i = 1; i <= 5; i++) {
//     console.log(i);
// }

// for(var i = 6; i >=1; i--) {
//     console.log(i);
// }



// While

// var i = 1; // Initial Value

// while(i <= 5) { // Condition
//     console.log(i);
//     i++; // Increment
// }
// console.log("Outside While Loop");


// Do While

// do { // Condition
//     console.log(i);
//     //i++; // Increment
// } while(i <= 5)
// console.log("Outside Do While Loop");

// console.log("Value of i now is: ", i);
// i++;
// console.log("Value of i now is: ", i);
// console.log("Value of i now is: ", i);
// console.log("Value of i now is: ", i);
// i++;
// console.log("Value of i now is: ", i);


// % -> Modulus Operator


// console.log(5 % 2); // Remainder 1
// console.log(10 % 2); // Remainder 0


// Problem Statement
// Print all odd numbers from 1 to 10


// Break -> It exits the entire loop

for(var i = 1; i <= 10; i++) {
    if(i % 2 != 0) {
        console.log(i);
    } else {
        break;
    }
}

console.log("Outside Break Loop");

// Continue -> It exits the current occurence

for(var i = 1; i <= 10; i++) {
    if(i % 2 != 0) {
        console.log(i);
    } else {
        continue;
    }
}

console.log("Outside Continue Loop");