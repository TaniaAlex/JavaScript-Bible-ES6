/* Add new element to the array if an element is unique (not yet presented in the array) using push() and includes() methods

*/

const myNumbers = [123, 50, 27];

/* Create a function "pushIfUnique" with two parameters "inputArray" and "newElement".

If "inputArray" already contains "newElement" print "{newElement} is already in the array" to the console.

Otherwise push "newElement" to the "inputArray". 

NOTE: We assume that "inputArray" may contain only primitive variables types
*/

// We use includes() helper method to solve this challenge

/*
    PASS BY REFERENCE
*/
const pushIfUnique = (inputArray, newElement) => {
  // JS engine will create new variables -> "inputArray" and "newElement" inside of the function scope.
  // when function is called, the value will be assigned:
  // inputArray = myNumbers;
  // when this assignment is perfomed, we copy just pointers and "myNumbers" will point to the same place in the memory as "inputArray"
  // this is possible, because array in JS has object variable type -> reference type. So if you push an element to "inputArray" it will be pushed to "myNumbers" array as well.
  inputArray.includes(newElement)
    ? console.log(`${newElement} is already in the array`)
    : inputArray.push(newElement);
};

pushIfUnique(myNumbers, 50); // "50 is already in the array"
console.log(myNumbers); // [123, 50, 27]

pushIfUnique(myNumbers, 80);
console.log(myNumbers); // [123, 50, 27, 80]

pushIfUnique(myNumbers, 80); // "80 is already in the array"
console.log(myNumbers); // [123, 50, 27, 80]

pushIfUnique(myNumbers, 77);
console.log(myNumbers); // [123, 50, 27, 80, 77]

//******************************** */
/*
    PASS BY VALUE
*/
const sum = num => {
  num = num + 5;
  console.log(num); // 15
};
const myNum = 10;
sum(myNum);
console.log(myNum); //10
