// Destructuring (Added in ES-6)

const vehicles = ['Baleno', 'TATA Truck', 'Creta', 'Rickshaw'];
//console.log(vehicles[vehicles.length - 1]);

// Without Destructuring

// const car = vehicles[0];
// const truck = vehicles[1];
// const suv = vehicles[2];
// const rickshaw = vehicles[2];



// With Destructuring

//const [car, truck, suv, rickshaw] = vehicles;
//const [car,, suv] = vehicles; // Ignoring 2nd Value
const [car,,, rickshaw] = vehicles; // Ignoring 2nd & 3rd Value

console.log(car);
// console.log(truck);
// console.log(suv);
console.log(rickshaw);



// Example 1

function calculate(a, b) {
  const add = a + b;
  const subtract = a - b;
  const multiply = a * b;
  const divide = a / b;

  return [add, subtract, multiply, divide];
}

const [a1, a2, a3, a4] = calculate(4, 7);

console.log(a1); // 11
console.log(a2); // -3
console.log(a3); // 28
console.log(a4); // 0.5714285714285714


// Example 2


// Without Destructuring

const vehicleOne = {
    brand: 'Ford',
    model: 'Mustang',
    type: 'car',
    year: 2021, 
    color: 'red',
    registration: {
      city: 'Houston',
      state: 'Texas',
      country: 'USA'
    }
}
  
myVehicle(vehicleOne);
  
// old way
function myVehicle(vehicle) {
    const message = 'My ' + vehicle.type + ' is a ' + vehicle.color + ' ' + vehicle.brand + ' ' + vehicle.model + '.';
    console.log(message);
}

// With Destructuring

myVehicleNew(vehicleOne);

function myVehicleNew({type, color, brand, model, registration : {country, state}}) { // Destructuring
  const message = 'My ' + type + ' is a ' + color + ' ' + brand + ' ' + model + '.' + " Country : " + country + " State : " + state;
  console.log(message);
}
