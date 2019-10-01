//** COMPARE TWO ARRAYS*/
// to compare two arrays we need to check that the length of both arrays should be same, the objects present in it are of the same type and each item in one array is equal to the counterpart in another array.

const a = [1, 2, 3];
const b = [1, 2, 3];
const c = [2, 1, 3];
const d = [1, 2, 3, 4];
const e = [1, 2, 4, 5];
const f = [1, 2, 4, 5];

// const a1 = a;
// // a.push(4);

// console.log(a === b); // false. Different pointers
// console.log(a === a1); // true. Because pointers are equals

/* Create a function "arraysAreEqual" with two parameters "arrayOne" and "arrayTwo". 


If two arrays are equal (have same quantity of the elements and all elements match e.g. arrayOne[0] === arrayTwo[0] etc.) return "true".

Otherwise return "false". */

//*************************************************** */
//  // comparing both arrays using stringify
const compareArrays = (arr1, arr2) => {
  if (JSON.stringify(arr1) == JSON.stringify(arr2)) {
    return true;
  } else {
    return false;
  }
};
console.log("Comparing both arrays using stringify");
console.log(compareArrays(a, b)); // true
console.log(compareArrays(a, c)); // false
console.log(compareArrays(a, d)); // false
console.log(compareArrays(a, f)); // false
console.log(compareArrays(e, f)); // true

// // ********************************************* */
// // comparing both arrays using map and every
const arrAreEqual = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  //* Option 1 */
  return arr1.map((val, i) => arr2[i] === val).every(isSame => isSame);

  // //* Option 2  */
  // // if order of the lements of the array is NOT important, so we can sort the arrays first and than compare the content
  //   const arr1Sorted = arr1.sort();
  //   const arr2Sorted = arr2.sort();
  //   return arr1Sorted
  //     .map((val, i) => arr2Sorted[i] === val)
  //     .every(isSame => isSame);
};
console.log("Comparing both arrays using map and every");
console.log(arrAreEqual(a, b)); // true
console.log(arrAreEqual(a, c)); // false
console.log(arrAreEqual(a, d)); // false
console.log(arrAreEqual(a, f)); // false
console.log(arrAreEqual(e, f)); // true

//********************************************** */
// // comparing two arrays using every() method - Teacher`s option

const arraysAreEqual = (arr1, arr2) => {
  return (
    arr1.length === arr2.length && arr1.every((el, idx) => el === arr2[idx])
  );
};

console.log("Comparing both arrays using every");
console.log(arraysAreEqual(a, b)); // true
console.log(arraysAreEqual(a, c)); // false
console.log(arraysAreEqual(a, d)); // false
console.log(arraysAreEqual(a, f)); // false
console.log(arraysAreEqual(e, f)); // true
