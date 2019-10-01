const a = [5, "abc", 10, 1];
const b = [4, 10, 14, 25, 25, 50];
const c = [150, 132, 80, 40];
const d = [15, 26, 10, 23, 85];

/*
Create a function "arrayCheck" with one parameter - "inputArray".

If at least one element in the array is not a number - return "Some elements are not numbers".

If numbers in the array are sorted in ascending order - return "Array is sorted is ascending order".

If numbers in the array are sorted in descending order - return "Array is sorted is descending order".

If array is not sorted - return "Array is not sorted"
*/

const arrayCheck = inputArray => {
  if (inputArray.some(elem => typeof elem !== "number")) {
    return `Some elements in ${inputArray} are not numbers`;
  }
  // // ***********************
  //   //   Option 1
  //   // Use every() method which will return true should all of the numbers be in order otherwise it will return false.

  //   // if the current number is less than or equal to the next number.. OR... if the current index is equal to the last index
  //   // return 1 (truthy) : 0(falsy)
  // // ************************
  if (
    inputArray.every((elem, idx, arr) => {
      return elem <= arr[idx + 1] || idx === arr.length - 1 ? 1 : 0;
    })
  ) {
    return "Array is sorted is ascending order";
  }
  if (
    inputArray.every((elem, idx, arr) => {
      return elem >= arr[idx + 1] || idx === arr.length - 1 ? 1 : 0;
    })
  ) {
    return "Array is sorted is descending order";
  }
  // // ********************
  //   // Option 2 - teacher
  //   // if index is 0 -> return true,
  //   // if index is greater than 0, -> take element and compare to previous element. We find previous element by its position in the array -> arr[index - 1]. If current element is greater ot equal to the element, callback function will retun true; otherwise it returns false
  // // ***********************
  //     if (
  //       inputArray.every((elem, index, arr) =>
  //         index > 0 ? elem >= arr[index - 1] : true
  //       )
  //     ) {
  //       return `Array is sorted is ascending order`;
  //     }
  //     if (
  //       inputArray.every((elem, index, arr) =>
  //         index > 0 ? elem <= arr[index - 1] : true
  //       )
  //     ) {
  //       return `Array is sorted is descending order`;
  //     }
  // // **********************
  return "Array is not sorted";
};

console.log(arrayCheck(a)); // Some elements are not numbers
console.log(arrayCheck(b)); // Array is sorted is ascending order
console.log(arrayCheck(c)); // Array is sorted is descending order
console.log(arrayCheck(d)); // Array is not sorted

/* Hint 1: Use "every" helper method to solve this.

Hint 2: You should use all three parameters in the callback function "element", "index", "array".

Hint 3: Each element in the array except first one should be compared to the previous
*/
