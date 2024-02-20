/**
 *  Global Scope
 */

var name = "Ismail";

//console.log(name + " Global");

console.log("*****************************")

function func(){
    console.log(name)
}

//func()

/**
 * Function scope
 */

function func1(){
    var num = 55;
    console.log(num);

}

//func1()
//console.log(num)

/**
 * Block scope
 */

/**
 * var is 
 */
{

    // let & const is const keyword are block scope

    //Note: var keyword is not block scope
    var x = 20;
    console.log(x + " inside")
}

console.log(x + " outside ")