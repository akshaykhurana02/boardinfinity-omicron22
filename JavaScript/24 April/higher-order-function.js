
function printConsole() {
    console.log("ABCDEF");
}

// function printData(xyz, callbackMethod) {
//     console.log(xyz);
//     callbackMethod();
// }

// printData("My Name is Akshay Khurana", printConsole);

/*

Here ->

printData -> Higher Order Function, because it is taking callbackMethod as an argument
printConsole -> This is a callback function, because it is being called by another method
printMyData -> Higher Order Function, because it is another function printConsole

*/

function printMyData() {
    console.log("ABC");
    return printConsole;
}

printMyData()();

const returnedFunction = printMyData();
returnedFunction();
