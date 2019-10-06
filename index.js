/**
 * IN ECMAScript 6 new operator (...) was introduced. Depending on the place of its usage it is called REST OPERATOR or SPREAD OPERATOR
 *
 * The SPREAD OPERATOR is sort of the opposite of the rest operator. Instead of grouping the list of elements as an array, the spread operator will create a list of elements from a list.
 *
 * REST operator takes elements and gathers them into single array
 * SPREAD operator takes array and sreads this array into separate elements
 * 
 * SHALLOW CLONING 
If the item being spread into the target is an object, only a reference to that object will be copied. The spread operator will not recursively deep clone properties. In addition, only own, enumerable properties are copied. The prototype chain won’t be consulted.
 *
 * USAGE:
 *      - allows an ITERABLE to spread or expand individually
 *      - in function call
 *      - concatenate arrays
 *      - spread string
 *      - shallow copy of the array
 *      - shallow copy of the object
 *      - clashing porperties of the object
 *      - default property assignment of the object
 * 
 *
 */

// // EXAMPLE 1 - function call
// const myGreeting = (name, city, age) => {
//   return `Hello from ${name} who is ${age} years old and lives in ${city}`;
// };

// const myPerson = ["Alice", "Boston", 20];
// console.log(myGreeting(...myPerson));

// const anotherPerson = ["New York", 25];
// console.log(myGreeting("Bob", ...anotherPerson));

// // EXAMPLE 2 - concatenate arrays
// const a = [1, 2, 3];
// const b = [4, 5, 6];
// const k = [7, 8, 9];

// const c = a
//   .concat(b)
//   .concat(k)
//   .concat(10);
// console.log(c); //  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const d = [...a, ...b, ...k, 10];
// console.log(d); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// // EXAMPLE 3 - create date
// // second parameter in the date function contructor is month and its numaration starts from 0. 0 -> January, 1 -> February ...
// const dateInfo = [2025, 0, 10];

// const date = new Date(...dateInfo);
// console.log(date); // Fri Jan 10 2025 00:00:00 GMT+0100 (Central European Standard Time)

// // EXAMPLE 4 - copy an array - shallow copy
// const myArray = ["a", 5, [], true];

// const newArray = [...myArray];
// newArray.push(10); // myArray is not mutated
// newArray[2].push(7); // myArray is mutated !!!! a shallow copy was created and all nested object were not copied, only pointers were copied -> so we can mutate nested array
// console.log(newArray);
// // output:
// // // ["a", 5, Array(1), true, 10]
// // // 0: "a"
// // // 1: 5
// // // 2: Array(1)
// // // 0: 7
// // // length: 1
// // // __proto__: Array(0)
// // // 3: true
// // // 4: 10
// // // length: 5

// // EXAMPLE 5 - copy an object (ES2018)
// const myObject = { a: 10, b: "c", d: [1, 2] };

// const copiedObject = { ...myObject };
// copiedObject.a = 20; // myObject is not mutated
// copiedObject.d.pop(); // myObject is mutated - shallow copy -> only first level was copied and the only pointers to nested array was copied , that`s why we can mutate the array in both objects
// console.log("copiedObject", copiedObject);
// console.log("myObject", myObject);

// // EXAMPLE 5.1 - merge  an object
// const obj1 = { a: 111, b: 222 };
// const obj2 = { c: 333, d: 444 };
// const merged = { ...obj1, ...obj2 };
// console.log("merged", merged); // -> { a: 111, b: 222, c: 333, d: 444 }

// // EXAMPLE 5.2 - clashing porperties
// // When duplicate properties clash, the order determines the outcome. The property put in last wins. If we spread the object last:

// const obj3 = { a: "abc", b: "def" };
// const obj4 = { b: 123, c: 456, ...obj3 };
// console.log("clashing porperties", obj4); // -> { a: 'abc', b: 'def', c: 456 }

// // If we spread the object first:
// const obj5 = { a: "abc", b: "def" };
// const obj6 = { ...obj5, b: 123, c: 456 };
// console.log("clashing porperties", obj6); // -> { a: 'abc', b: 123, c: 456 }

// EXAMPLE 5.3 - Default property assignment
// Property overriding makes default property assignment simple. Let’s say we’re making an app that requires a user to enter information. We want some default values placed on the user object if they leave some fields blank

const enteredInfo = {
  name: "Mia Iris",
  phoneNumber: "123-456-7890"
};

const defaultInfo = {
  name: "N/A",
  address: null,
  phoneNumber: null,
  email: null
};
const completeUserInfo = { ...defaultInfo, ...enteredInfo };
console.log(completeUserInfo);

// // EXAMPLE 6 - spread string

const myStr = "Spread string with spread operator";

const letters = [...myStr];
console.log(letters);

const oldStyleLetters = myStr.split("");
const oldStyleLetters1 = myStr.split(" "); // mostly used to split words in the sentance
console.log(oldStyleLetters1);
console.log(oldStyleLetters);
