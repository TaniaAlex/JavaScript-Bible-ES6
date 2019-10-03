/**
 * ARRAY METHOD REDUCE()
 *
 * The reduce() method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value
 *
 * its an Array.prototype method and therefore must be called on an array. The parameters that it requires to do its job are a callback function and an optional initialValue. The callback is called by every single item in the Array. It takes a maximum of four arguments, two of which are optional (acc, item, [idx], [orgArray]). The two required arguments are acc, the one you need to understand the most, and item.
 */
// // EXAMPLE 1 - sum numbers
// const myNumbers = [5, 10, 3, 15];

// const sum = arrayOfNumbers =>
//   arrayOfNumbers.reduce((accumulator, number) => {
//     console.log("Accumulator is " + accumulator + " and number is " + number);
//     return accumulator + number;
//   }, 0);

// console.log(sum(myNumbers)); // 33
// /** How it works:
//  * Accumulator is 0 and number is 5
// Accumulator is 5 and number is 10
// Accumulator is 15 and number is 3
// Accumulator is 18 and number is 15
//  */

// // EXAMPLE 2 - reduce array of objects to single array

// const persons = [
//   {
//     name: "Veronica",
//     age: 25
//   },
//   {
//     name: "John",
//     age: 21
//   },
//   {
//     name: "Mike",
//     age: 27
//   }
// ];

/**
 * 1. we take array of objects and iterate through all elements in this array. "names" - is accumulator and "person" represents each object in this array. Inicial accumulator is empty []. In "reduce" method we must specify second argument as "[]", or it will use first argument to push new elements to the object and this will break a code. Because "push" is array method, not object method
 *
 * 2. Because second argument is present we start iteration from first element in the array. We take "name" property of each "person" and push to the "names" array
 *
 * 3. Explicitly return "names" - updated array
 *
 * 4. This "names" array is passed as argument to the next iteration of the "reduce" method
 *
 * 5. We take second object`s "name" property and push to the "names" array and so on...
 */

// const personsNames = arrayOfPersons =>
//   arrayOfPersons.reduce((names, person) => {
//     // console.log(names, person);
//     names.push(person.name);
//     return names;
//   }, []);

// console.log(personsNames(persons)); //  ["Veronica", "John", "Mike"]

// //****************************** */
// // EXAMPLE 2.1 - reduce array of objects to single object

// var arr = [{ key: "11", value: "1100" }, { key: "22", value: "2200" }];
// var object = arr.reduce(
//   (obj, item) => Object.assign(obj, { [item.key]: item.value }),
//   {}
// );

// console.log(object); // {11: "1100", 22: "2200"}

// ******************************* */
// // EXAMPLE 2.2 - How to convert an Array to an Object

const records = [
  {
    title: "The Clash",
    artist: "The Clash",
    type: "LP",
    lengthSec: 4520,
    released: "1977"
  },
  {
    title: "ABC",
    artist: "The Jacson 5",
    type: "LP",
    lengthSec: 2055,
    released: "1970"
  },
  {
    title: "After Midnight",
    artist: "Eric Claptonf",
    type: "LP",
    lengthSec: 2350,
    released: "1966"
  },
  {
    title: "Cry me a river",
    artist: "Joe Cocker",
    type: "LP",
    lengthSec: 4100,
    released: "1953"
  },
  {
    title: "Friends",
    artist: "Arrival",
    type: "LP",
    lengthSec: 2745,
    released: "1977"
  }
];

const wayOne = Object.assign({}, records);
const wayTwo = { ...records };

console.log("records", records); // (2) [{…}, {…}]
// console.log(wayOne); // {0: {…}, 1: {…}}
// console.log(wayTwo); // {0: {…}, 1: {…}}

/*
=> {
  0: { artist: "The Clash", lengthSec: 2220, released: "1977", title: "The Clash", type: "LP"},
  1: { artist: "Ramones", lengthSec: 1906, realease: "1977",  title: "Rocket to Russia", type: "LP"},
}
*/
//******************************* */
/**
 * EXAMPLE 2.3 How to convert an Array to an Object with reduce and
 * Create a unique identifier from item and add it to an Object
 */
/**
 * Here, we reduce over the array of records, setting the initialValue to an object. As we iterate over the records, we create a unique key inside of the acc from the title and artist while also setting its value to the record. The acc will return an Object whose keys can easily be used to return specific records.
 */
// item is named record for easily knowing what
// we're operating on
//
// Here we filter the records to ones longer than 60 minutes.
const recordsFilter = records.reduce((acc, record) => {
  // Recored is not longer than 60 mins
  // return acc as is, doing nothing with record (filter)
  if (record.lengthSec > 60 * 60) return acc;

  // Destructure acc into new array
  // Destructure record into new object and add display prop
  return [
    ...acc,
    {
      ...record,
      ["display"]: `${record.artist} - ${record.title} (${record.released})`
    }
  ];
}, []);
console.log(recordsFilter);
/*
 *  => (3) [{…}, {…}, {…}]
0: {title: "ABC", artist: "The Jacson 5", type: "LP", lengthSec: 2055, released: "1970", …}
1: {title: "After Midnight", artist: "Eric Claptonf", type: "LP", lengthSec: 2350, released: "1966", …}
2: {title: "Friends", artist: "Arrival", type: "LP", lengthSec: 2745, released: "1977", …}

 */

//****************************** */

/**
 * EXAMPLE 2.4 - Flattening an array of arrays with the Reduce Method
 *
 * We can use reduce to flatten nested amounts into a single array.
 *
 * We set the initial value to an empty array and then concatenate the current value to the total.
 */

const data = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

const flatValues = data.reduce((total, value) => {
  return total.concat(value);
}, []);

console.log("Nested array:", data); // (3) [Array(3), Array(3), Array(3)]
console.log("Flat array:", flatValues); // Flat array: (9) [1, 2, 3, 4, 5, 6, 7, 8, 9]
//****************************** */

// EXAMPLE 3 - remove duplicates
const fruits = ["banana", "orange", "apple", "apple", "orange", "mango"];

const uniqueFruits = arrayOfFruits =>
  arrayOfFruits.reduce((uniqueElements, fruit) => {
    if (!uniqueElements.includes(fruit)) uniqueElements.push(fruit);
    return uniqueElements;
  }, []);

console.log(uniqueFruits(fruits));

/**
 * EXAMPLE 4 - Creating a Tally with the Reduce
 *
 *You have a collection of items and you want to know how many of each item are in the collection.

 */
const fruitBasket = [
  "banana",
  "cherry",
  "orange",
  "banana",
  "cherry",
  "orange",
  "apple",
  "cherry",
  "orange",
  "apple",
  "banana",
  "cherry",
  "orange",
  "fig",
  "orange",
  "fig",
  "cherry",
  "orange",
  "fig",
  "apple",
  "fig",
  "orange"
];

// To tally items in an array our initial value must be an empty object, not an empty array
//Since we are going to be returning an object we can now store key-value pairs in the total.
// On our first pass, we want the name of the first key to be our current value and we want to give it a value of 1.
// This gives us an object with all the fruit as keys, each with a value of 1. We want the amount of each fruit to increase if they repeat.
//To do this, on our second loop we check if our total contain a key with the current fruit of the reducer. If it doesn’t then we create it. If it does then we increment the amount by one.

// OPTION 1

const count1 = fruitBasket.reduce((tally, fruit) => {
  if (!tally[fruit]) {
    tally[fruit] = 1;
  } else {
    tally[fruit] = tally[fruit] + 1;
  }
  return tally;
}, {});
// OPTION 2 -> Optimized
const count2 = fruitBasket.reduce((tally, fruit) => {
  tally[fruit] = (tally[fruit] || 0) + 1;
  return tally;
}, {});

console.log(count1); // { banana: 3, cherry: 5, orange: 7, apple: 3, fig:4
console.log(count2); // { banana: 3, cherry: 5, orange: 7, apple: 3, fig:4
