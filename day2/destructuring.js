/**
 * Data :
 *     1.Arrays
 *     2.Objects
 */

// Destructuring in Array

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const [a, b, c, d, e, f, g, i, j] = nums;

// console.log(a, g, f);

// Object destructuring

const audience = {
  name: "Ade",
  age: 18,
  region: "western",
};

const { name, age, region } = audience;

console.log(name);
console.log(age);
