//** Check if elements is in the Array  unsing some() method*/
//** It works only with primitiv value type */
const transport = ["Bus", "Car", "Bicycle", "Airplane"];

/* Create a function "elementFound" with two parameters "inputArray" and "searchElement".
If "searchElement" is found in the "inputArray" - return "true".
Otherwise return "false"

Hint: Use "some" helper method to solve this
*/

const elementFound = (inputArray, searchElement) => {
  return inputArray.some(element => element === searchElement);
};
console.log(elementFound(transport, "Bus")); // true
console.log(elementFound(transport, "Phone")); // false
console.log(elementFound(transport, "Airplane")); // true
