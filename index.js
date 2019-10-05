/* Create a function "templateLiteral" with one parameter "num".

Function is expected to return template literal. Sample function calls are below.
*/

// // OPTION 1
// const templateLiteral = num => {
//   console.log(`Number is ${num}.`);
//   console.log(`Square root of this number is ${Math.sqrt(num)}`);
//   return num < 10
//     ? `This number is less than 10`
//     : `This number is greater than 10`;
// };

// OPTION 2 - teacher
// implicitly return values of template literal
const templateLiteral = num => `Number is ${num}.
This number is ${num > 10 ? "greater" : "less"} than 10.
Square root of this number is ${Math.sqrt(num)}.`;

// TEST 1
const myNumber = 9;
console.log(templateLiteral(myNumber));
/* 
Number is 9.
This number is less than 10.
Square root of this number is 3.
*/

// TEST 2
const myAnotherNumber = 25;
console.log(templateLiteral(myAnotherNumber));
/* 
Number is 25.
This number is greater than 10.
Square root of this number is 5.
*/
