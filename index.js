/*
includes()

This method check if array includes the item passed in the method. Works only with primitive value type
*/

const myArray = [10, "abc", true, undefined, null, [1, 2], {}];

console.log(true, myArray.includes(true)); // true
console.log(10, myArray.includes(10)); // true
console.log("abc", myArray.includes("abc")); //true

console.log("abc", "starting from index 3", myArray.includes("abc", 3)); // false

console.log("null", myArray.includes(null)); //true
console.log("undefined", myArray.includes(undefined)); // true
console.log("[1, 2]", myArray.includes([1, 2])); //false
console.log("{}", myArray.includes({})); // false
