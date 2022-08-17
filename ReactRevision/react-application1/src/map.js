let numbers = [1, 3, 4, 2, 5, 3, 6, 1, 1];
console.log(numbers);


function multiplyBy2(number) {
  return number * 4;
}

let numbers2 = numbers.map(multiplyBy2);

console.log(numbers2);