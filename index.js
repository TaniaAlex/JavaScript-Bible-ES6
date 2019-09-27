// regular function declaration
function sum() {
  console.log(arguments);
  console.log(typeof arguments); // object
  console.log(Array.isArray(arguments)); // false
  const argumentsArray = Array.from(arguments);
  console.log(argumentsArray);
}

// arrow function expression -> Uncaught ReferenceError: arguments is not defined, cannot access arguments.

// to fix this use ES6 rest operator
const sum2 = (...arguments) => {
  console.log(arguments);
  console.log(typeof arguments); // object
  console.log(Array.isArray(arguments)); //true
  const argumentsArray = Array.from(arguments);
  console.log(argumentsArray);
};

sum(11, 12, 13, 14, 15);
sum2(22, 23, 24, 25); // array of arguments
