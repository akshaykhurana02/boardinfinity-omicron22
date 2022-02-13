// Rest Operator

// Without Rest Parameter

function fun(a, b){
    return a + b;
}

// console.log(fun(1, 2)); // 3
// console.log(fun(1, 2, 3, 4, 5)); // 3


// With Rest Parameter

// Adition

function funAddition(...input){
    let sum = 0;
    for(let i of input){
        sum += i; // Same as sum = sum + i
    }
    return sum;
}

console.log(funAddition(1,2)); // 3
console.log(funAddition(1,2,3)); // 6
console.log(funAddition(1,2,3,4,5)); // 15
console.log(funAddition(1,2,3,4,5,6,7,8,9,10)); // 55

// Multiplication

function funMultiplication(...input){
    let product = 1;
    for(let i of input){
        product *= i; // Same as sum = sum + i
    }
    return product;
}

console.log(funMultiplication(1,2)); // 2
console.log(funMultiplication(1,2,3)); // 6
console.log(funMultiplication(1,2,3,4,5)); // 120
console.log(funMultiplication(1,2,3,4,5,6,7,8,9,10)); // 3628800
