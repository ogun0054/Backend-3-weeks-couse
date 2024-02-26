/**
 * First order function
 */
// function operation(operationFn, a, b) {
//   return operationFn(a, b);
// }

// function add(a, b) {
//   return a + b;
// }

// let result = operation(add, 5, 6);

// console.log(result);

function getGreetMethod() {
  return function () {
    console.log("Hello Students");
  };
}

let greetFn = getGreetMethod();
//greetFn();

/**
 * forEach method
 */

player = ["Ahmed", "Musa", "Saley"];

// players.array.forEach((element) => {});

player.forEach((element) => {
  //console.log(element);
});

/**
 * map -- Creation of new transform array
 */

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

let cube_arr = arr.map((num) => num ** 3);
// console.log(cube_arr);

/**
 * filter method
 */

let arr_filter = arr.filter((num) => num % 2 === 0);
//console.log(`${arr_filter} are even numbers`);

/**
 * Reduce
 */
let reducedEle = arr.reduce((curr, next) => curr + next);
console.log(reducedEle);
