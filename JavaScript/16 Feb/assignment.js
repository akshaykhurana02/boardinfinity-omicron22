// 1. Read about Callback Function
// 2. Read about Higher Order Function
// 3. 

/*
    // Keys & Values are same
    // Keys & Values are different
*/

// 4. Check whether there are equal no. of keys and values in a map


const fruits = new Map([
    ["apples", "apples"],
    ["bananas", "oranges"],
    ["oranges", "bananas"]
]);

const givenKeys = fruits.keys();
const givenValues = fruits.values();


let givenKeysString = "";
for (let x of givenKeys) {
    givenKeysString += x;
}

let givenValuesString = "";
for (let x of givenValues) {
    givenValuesString += x;
}

if(givenKeysString == givenValuesString) {
    console.log("Keys and values are same.")
} else {
    console.log("Keys and values are different.")
}
