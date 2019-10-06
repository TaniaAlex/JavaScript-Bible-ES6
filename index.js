/**
 * Create a function "meanScore" that will accept any quantity of the arguments, gather them into single array and return mean value of all arguments rounded to 2 decimal places.
 *
 *
 * The "mean" is the "average" you're used to, where you add up all the numbers and then divide by the number of elements.
 *
 *
 * If at least one element in the gathered array is not a number - throw following error to the console:
 * "Supplied arguments must contain only numbers!"
 *
 * Type of the returned value must be a "number".
 *
 * HINT: In this Challenge you should use both rest and spread operators.
 *
 * ===> SOLUTION:
 * 1. declare a "meanScore" fn and use REST parameter in order to gather all arguments into the single scores array
 *              const meanScore = (...inputScores){}
 * 2.  call "meanScore" fn using SPREAD Operator . We spread arrays into separate elements // console.log(meanScore(...scores1)); It means that function is called using raw list of elements
 *
 * 3. Inside of the function check whether all elements in the "inputScores" array are "numbers" using .every() and "typeof"
 *
 * 4. If so, calculate "mean" value, use .reduce() and divide the sum by the number of elements (inputScore.length)
 * use  ".toFixed(2)" to round result to 2 decimal numbers. ".toFixed" return "string" , so
 * use "+" or "parseFloat" to convert the result to a "number"
 *
 * 5. else, throw an error to the console  "throw new Error()"
 *
 *
 */

const meanScore = (...inputScores) => {
  if (inputScores.every(inputScore => typeof inputScore === "number")) {
    //   // option 1
    // return (
    //   inputScores.reduce((sum, inputScore) => {
    //     return sum + inputScore;
    //   }, 0) / inputScores.length
    // );

    // option 2

    // toFixed() method returns string ->
    // use parseFloat() method to convert it to numbers
    // or just "+" sign before inputScores like this +inputScores
    return parseFloat(
      inputScores
        .reduce((avr, inputScore) => {
          return avr + inputScore / inputScores.length;
        }, 0)
        .toFixed(2)
    );
  } else {
    throw new Error("Supplied arguments must contain only numbers!");
  }
};

const scores1 = [0, 1.5, 2.5, 3.7];
const scores2 = [1.7, 4.5, 0, 4.9, 5.0, 4.2];
const scores3 = [1.3, 2.5, 1.9];
const scores4 = ["abc", 1.3, true, 2.5, 1.9];

console.log(meanScore(...scores1)); // 1.93

console.log(meanScore(...scores1, ...scores2)); // 2.8

console.log(meanScore(...scores1, ...scores2, ...scores3)); // 2.59

console.log(meanScore(...scores4)); // Supplied arguments must contain only numbers!

// //  EXAMPLE 2
// var sum,
//   avg = 0;
// const arr = [0, 1.5, 2.5, 3.7];
// // const arr = ["abc", 1.3, true, 2.5, 1.9];
// // dividing by 0 will return Infinity
// // arr must contain at least 1 element to use reduce
// if (arr.length) {
//   sum = arr.reduce(function(a, b) {
//     return a + b;
//   });
//   avg = sum / arr.length;
// //   console.log(sum);
// //   console.log(avg);
// }
// document.write("The sum is: " + sum + ". The average is: " + avg + "<br/>");

/******************************* */
