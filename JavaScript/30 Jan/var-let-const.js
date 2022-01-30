// Var

// Var variables can be redeclared and reinitialised

//console.log(a);
//console.log(b);


var myName; // Declaration
myName = "Akshay Khurana"; // Initalisation


var a = 10;
var a = 15; // Re-declaration


a = 17; // Re-initialisation
a = 28;

//console.log(a);


// Let

//console.log(b);
//let b = 10;
// let b = 100; // Re-declaration is not allowed
//b = 30; // Re-initialsation or Updation

//console.log(b);



// Const

const c = 100;

// console.log(a);
// console.log(c);


function f() {
    if (true) {
        let b = 9;
        // It prints 9
        console.log(b);
    }
 
    // It gives error as it
    // defined in if block

    console.log(b);
}

//console.log(b);

f();