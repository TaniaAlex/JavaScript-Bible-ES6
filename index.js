/**
 * ARRAY METHOD SORT()
 *
 * This method used to arrange/sort array's item either ascending or descending order.
 *
 * SORT() Method MUTESTES ORIGINAL ARRAY
 *
 *
 * sort() without arguments => each element(number) in the array will be converted to string, compared
 *
 * sort((a,b) => a - b) - sorts array in ascending order
 *
 * less than 0 — a comes before b
 * greater than 0  — b comes before a
 * equal to 0  — a and b are left unchanged with respect to each other
 *
 * * sort((a,b) => b - a) - sorts array in descending order
 *
 */

/* 
1. Sorting algorithms:
 MERGE SORT -> stable in most cases
 BUBBLE SORT -> stable
 QUICK SORT -> unstable
 INSERTION SORT -> stable
 ECMA SCRIPT doesn`t specify sorting algorithm => diff JS engine use diff sorting algorithm:

 Google Chrome - ? Timsort = hybrid sorting algorithm, derived from MERGE and INSERSTION sort - V8
 Firefox, Node.js (Qty <= 10) - Insertion Sort (if Qty <= 10) - 13 iterations
 Safari - Merge Sort - ? iterations
2. Qty of iterations - 12 
*/
// // EXAMPLE 1 -
const myNumbers = [10, 5, 79, 27, 50, 14, 27];

// console.log("Sort without arguments:", myNumbers.sort());
// console.log("*************");
/**
 * sort() with callback function and 2 parameters
 */
let i = 0;
console.log(
  "Sort with callback function:",
  myNumbers.sort((a, b) => {
    console.log(a, b);
    i++;
    return a - b;
  })
);
console.log("Qty of iterations is " + i);
console.log("*************");
/************************** */
// // EXAMPLE 2 -
const arr = [1, 2, 17, 7, 8, 9, 7, 10, 3, 4, 5, 6];
const alpha = ["e", "b", "s", "ks", "a", "ka", "c", "u", "y"];

// sort in descending order
// descOrder = arr.sort((a, b) => (a > b ? -1 : 1));
descOrder = arr.sort((a, b) => b - a);

console.log(descOrder); // output: [6, 5, 4, 3, 2, 1]

// sort in ascending order
ascOrder = alpha.sort((a, b) => (a > b ? 1 : -1));

console.log(ascOrder); // output: ['a', 'c', 'e', 'u', 'y']
