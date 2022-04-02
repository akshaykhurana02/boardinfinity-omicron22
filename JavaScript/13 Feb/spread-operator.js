// Spread Operator



const firstArray = ["Akshay", "Ankit", "Akhil"];
const secondArray = [7, 8, 9, "Manisha", 11, 12, 13, 14];

let thirdArray = firstArray.concat(secondArray); // Using Concat Method
thirdArray = ["Akshay Khurana", ...firstArray, ...secondArray]; // Using Spread Operator

console.log(thirdArray);



// Example 1

const numbers = [1, 2, 3, 4, 5, 6];
const [one, two, ...rest] = numbers;

console.log(one); // 1
console.log(two); // 2
console.log(rest); // [3, 4, 5, 6]



// Example 2

const myVehicle = {
    brand: 'Ford',
    model: 'Mustang',
    color: 'red'
}
  
const updateMyVehicle = {
    type: 'car',
    year: 2021, 
    color: 'yellow'
}
  
const myUpdatedVehicle = {...myVehicle, ...updateMyVehicle};
//const myUpdatedVehicle = {...updateMyVehicle, ...myVehicle};
console.log(myUpdatedVehicle);

/*

{
    "brand": "Ford",
    "model": "Mustang",
    "color": "yellow",
    "type": "car",
    "year": 2021
}

*/
