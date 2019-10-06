/**
 * IN ECMAScript 6 new operator (...) was introduced. Depending on the place of its usage it is called REST OPERATOR or SPREAD OPERATOR
 *
 * Rest operator: collects all remaining elements into an array.
 *
 * Use (...) REST Operator if you don`t know how many arguments will be passed to the function. In this case all arguments will be gathered in one parameter
 *
 * Rest parameters have to be at the last argument. This is because it collects all remaining/ excess arguments into an array.
 * const myFN = (a, b, ...restArguments) => {}
 *
 * In the Arrow function is a single way to access to all arguments simultaneously -> because Arrow function doesn`t have access to variable "arguments"
 *
 * In Regular function you can use either "..." REST parameters or "arguments" variables.
 * "..." REST parameters is always ARRAY
 * "arguments" variables are always OBJECT, so you need to convert to ARRAY first before applying any Array helper methods with this syntax:
 *
 * Array.from(arguments)
 *
 */
// // Arrow function
// EXAMPLE 1
const sumNumbers = (...nums) => {
  // "nums" is array so we can use any array higher order function
  console.log(nums);
  // console.log(arguments); // Uncaught ReferenceError: arguments is not defined
  return nums
    .filter(num => typeof num === "number")
    .reduce((sum, num) => sum + num, 0);
};

// independant of the quantity of the arguments all of them will be gatherd in a single array "nums" and this parameter will be equal to this array
console.log(sumNumbers("abc", 2, 3, 4, "ccc"));

// EXAMPLE 2
printMe = (a, b, ...args) => {
  console.log("a", a);
  console.log("b", b);
  args.forEach(arg => console.log("rest arg", arg));
};
printMe("Sun", 5, 7, 12, 39, true);

// // Regular function
// function sumNumbers(...nums) {
//   //   // OPTION 1 - REST PARAMETER
//   console.log("Nums", nums); // Array
//   //   return nums
//   //     .filter(num => typeof num === "number")
//   //     .reduce((sum, num) => sum + num, 0);

//   // OPTION 2 - ARGUMENTS VARIABLE
//   console.log(arguments); // Object -> we are not able to apply ARRAY Helpers Methods to an Object:
//   // arguments.sort(); // Uncaught TypeError: arguments.sort is not a function
//   // to use Array Helper Methods we have to convert Object to an Array first:
//   return Array.from(arguments)
//     .filter(num => typeof num === "number")
//     .reduce((sum, num) => sum + num, 0);
// }

// console.log(sumNumbers("abc", 2, 3, 4));
