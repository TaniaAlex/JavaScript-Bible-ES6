//***** ARRAY METHOD every()  */
//***** every() method - checks whether all the elements of the array satisfy the given condition. If passed, it return 'true' otherwise 'false'.

//***** ARRAY METHOD some()  */
//***** some() method - check if at least one of array's item passed the condition. If passed, it return 'true' otherwise 'false'.

// // EXAMPLE 1 - check if all the numbers in the array are positive
// const myNumbers = [3, -5, 1, 10, -7];

// const isPositiveNumber = element => typeof element === "number" && element > 0;

// const allPositivesCheck = myNumbers.every(isPositiveNumber);

// console.log(allPositivesCheck); // false

// const somePositivesCheck = myNumbers.some(isPositiveNumber);

// console.log(somePositivesCheck); // true

// //EXAMPLE 2 - check if some or all items in the store are available
const items = [
  {
    title: "Computer",
    quantity: 10
  },
  {
    title: "Phone",
    quantity: 8
  },
  {
    title: "Headphones",
    quantity: 15
  }
];

// all items have quantity > 5
if (items.every(item => item.quantity > 5))
  console.log("All items are available");

// all items have quantity > 0 and some items have quantity <= 5
if (
  items.every(item => item.quantity > 0) &&
  items.some(item => item.quantity <= 5)
)
  console.log("Some items may be sold soon");

// some items have quantity 0
if (items.some(item => item.quantity === 0))
  console.log("Some items are sold out!");
