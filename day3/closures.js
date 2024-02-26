function hello() {
  let name = "Ismail";
  console.log(`Welcome ${name}!`);
}

hello();

function outerFn() {
  let outerVar = "I'm from the outer Function";
  function innerFn() {
    console.log(outerVar);
  }

  return innerFn;
}

let fn = outerFn();
fn();

function CustomerCounter() {
  let count = 0;
  return function () {
    count++;
    console.log("New customer count is ", count);
  };
}

let counter = CustomerCounter();
counter();
counter();
counter();
counter();
