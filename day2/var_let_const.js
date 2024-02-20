/**
 * var:
 * 1. It's used to define a variable
 * 2. It has function scope but no block scope
 * 3. It is hoisted
 */

function f1(){
    var i = 5;
    console.log(i)
}

// console.log(i)

{
    var i = 10;
    // console.log(i)
}

//console.log(i)

/**
 * 1. No hoisting
 * 2. It also has block scope
 */

{
    let name = "Aisha";
}

// console.log(name) // ReferrenceError

/**
 * const
 * 1. Can not be reassigned
 */

