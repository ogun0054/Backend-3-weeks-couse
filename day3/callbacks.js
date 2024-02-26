/**
 * Callback : function that is passed as an argument for another function
 */

function greet(name, Callback) {
  const greeting = "Hello" + name;
  Callback(greeting);
}

function displayGreeting(message) {
  console.log(message);
}

greet("Ismail", displayGreeting);

?
/**
 * Callback hell | Pyramid of doom
 */
