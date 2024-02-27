/**
 * Array
 * Array is mutable
 */

// Method 1 of declaring array
let arr = [1,2,3];


// Method 2 of declaring array
let arr2 = new Array("3,4,5");

// console.log(arr2)

//mutable Array

arr[1] = 34;
// console.log(arr);

//Array Method 

/**
 * insert an 
 */

//push method: insert element at the end of element
arr.push(22);
// console.log(arr)

let arr1 =[22,99,89]

//unshift: Add from the beginning
arr.unshift(32,45,77);

// console.log(arr)

// Removing element from the end
arr.pop();
// console.log(arr)

arr.shift();
// console.log(arr)

// console.log(arr.concat(arr1))
// console.log(arr.concat(arr1).length)

// toString : to covert array to string

//console.log(arr.concat(arr1).toString())

//join 

let char_arr = ["I","s", "m", "a", "i", "l"]
console.log(char_arr.join());