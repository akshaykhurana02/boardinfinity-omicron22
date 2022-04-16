/* Map */

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

function triple(n) {
    return n * 3;
}

function double(n) {
    return n * 2;
}

var map_Double_Output = arr1.map(double);
console.log(map_Double_Output); // [2, 4, 6, 8, 10, 12]

var map_Triple_Output = arr1.map(triple);
console.log(map_Triple_Output); // [3, 6, 9, 12, 15, 18]

var map_Quadruple_Output = arr1.map(function (n) {
    return n * 4;
});
console.log(map_Quadruple_Output);




/* Reduce */


function product(a, b) {
    return a * b;
}

function sum(a, b) {
    return a + b;
}

function abc(a, b) {
    return a * b + a + b;
}

var reduce_Product_Output = arr1.reduce(product);
console.log(reduce_Product_Output); // 720

var reduce_Sum_Output = arr1.reduce(sum);
console.log(reduce_Sum_Output); // 21

var reduce_abc_Output = arr1.reduce(abc);
console.log(reduce_abc_Output); // 5039



var sumValue = 0;
function sumOfArray(n) {
    sumValue += n;
}

for (var i = 0; i < arr1.length; i++) {
    sumOfArray(arr1[i]);
}

console.log("Sum of Array is : ", sumValue);





/* Filter */


function isOdd(n) {
    if (n % 2 != 0) {
        return true;
    }
    return false;
}

function isEven(n) {
    if (n % 2 == 0) {
        return true;
    }
    return false;
}

var oddNumberArray = arr1.filter(isOdd);
var evenNumberArray = arr1.filter(isEven);
var valuesGreaterThen4Array = arr1.filter(function (n) {
    if (n > 4) {
        return true;
    }
    return false;
});

var valuesGreaterThen6Array = arr1.filter(function (n) {
    if (n > 6) {
        return true;
    }
    return false;
});


console.log(oddNumberArray);
console.log(evenNumberArray);
console.log(valuesGreaterThen4Array);
console.log(valuesGreaterThen6Array);



// Basic Program for Odd Numbers

var resultantOddArray = [];
var resultantEvenArray = [];
for (var i = 0; i < arr1.length; i++) {
    if (arr1[i] % 2 != 0) {
        resultantOddArray.push(arr1[i]);
    } else {
        resultantEvenArray.push(arr1[i]);
    }
}

console.log(resultantOddArray);
console.log(resultantEvenArray);