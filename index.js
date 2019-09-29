//***** ARRAY METHOD find()  */
//***** find() method  returns FIRST ELEMENT in the array that satisfies the provided conditions(it will stop when callback function returns true and will not process all the rest of the elements) or "undefined" if all callback functions returned false.

// EXAMPLE 1
const myArray = [10, 23, 89, {}, true, [], {}, "abc", 15];

const res = myArray.find(element => {
  console.log(element);
  return typeof element === "boolean";
});
console.log(res);

// EXAMPLE 2
const trees = ["birch", "bamboo", "maple", "magnolia", "oak", "palm", "poplar"];

const result1 = trees.find(tree => tree.startsWith("p"));
console.log(result1); // "maple"

// EXAMPLE 3 We can use find() to easily search arrays of objects
const trees1 = [
  { name: "bamboo", country: "India" },
  { name: "birch", country: "Russia" },
  { name: "maple", country: "Canada" },
  { name: "oak", country: "Canada" },
  { name: "magnolia", country: "USA" }
];
const result2 = trees1.find(tree => tree.name === "maple");
console.log(result2); // { name: "maple", country: "Canada"}

// EXAMPLE 4 - declare callback function before using it with the find method

const deciduous = [
  { name: "birch", count: 4 },
  { name: "maple", count: 5 },
  { name: "oak", count: 2 }
];

const evergreens = [
  { name: "cedar", count: 2 },
  { name: "fir", count: 6 },
  { name: "pine", count: 3 }
];

// our testing function
const hasFiveOrMore = el => el.count >= 5;

const decResult = deciduous.find(hasFiveOrMore);
console.log(decResult); // { name: "maple", count: 5 }

const evgResult = evergreens.find(hasFiveOrMore);
console.log(evgResult); // { name: "fir", count: 6 }
