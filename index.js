//***** ARRAY METHOD map()  */
//***** map() method RETURNS NEW ARRAY -> assign the result of map() method to new variable*/

const myNumbers = [3, 5, 7, 2];

// // for loop
// let mySquareNumbers1 = [];
// for (let i = 0; i < myNumbers.length; i++) {
//   mySquareNumbers1.push(myNumbers[i] * myNumbers[i]);
// }
// console.log(mySquareNumbers1);

//******************************* */
// map()  -> initial Array remains unchanged, will produce NEW ARRAY*/

let mySquareNumbers2 = myNumbers.map(element => element * element);
console.log(mySquareNumbers2);

//******************************* */
// // map() with external function
const squareNumbers = element => element * element;
let mySquareNumbers3 = myNumbers.map(squareNumbers);
console.log(mySquareNumbers3);

//******************************* */
// // map() with external function with index
const squareNumbers4 = (element, index) => {
  console.log(`At the index ${index} is element ${element}`);
  return element * element;
};
let mySquareNumbers4 = myNumbers.map(squareNumbers4);
console.log(mySquareNumbers4);

//******************************* */
// // map() with Math.pow()
let mySquareNumbers5 = myNumbers.map(element => Math.pow(element, 2));
console.log(mySquareNumbers5);

// //******************************* */
// // map() with direct call to Math.pow()
// // "index" in Math.pow will be treated as exponent value
// let mySquareNumbers6 = myNumbers.map(Math.pow);
// console.log(mySquareNumbers6);
// console.log(myNumbers);
