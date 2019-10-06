/**
 *
 *
 */

// // EXAMPLE 1 - value as default function parameter
// const multiplier = (num, mult = 2) => {
//   console.log(num, mult);
//   return num * mult;
// };

// console.log(multiplier(10, 3)); // num -> 10, mult -> 3

// // if no argulemt supplied, than parameter will be initialized with value "undefined"
// console.log(multiplier(5)); // "mult" will get default value 2

// console.log(multiplier()); // "num" will be initialized with "undefined"

// // EXAMPLE 2.1 - refer to previous parameters - object as defaulr parameter value
// const shoppingList = (
//   name,
//   qty,
//   item = `That's right! You need ${qty} ${name}s`
// ) => {
//   // we can easily do this assignment for default value up in the parameter section
//   //   item = {
//   //     shoppingItemName: name,
//   //     shoppingItemQty: qty
//   //   };
//   console.log(name, qty, item);
// };
// shoppingList("T-Shirt", 3);
/********************************* */

// EXAMPLE 2.2 - refer to previous parameters - object as defaulr parameter value

// const groceryItem = (
//   title,
//   qty,
//   item = {
//     groceryItemTitle: title,
//     groceryItemQty: qty
//     // groceryItemPrice: price // Uncaught ReferenceError: price is not defined
//   },
//   price
// ) => {
//   console.log(title, qty, item);
// };

// groceryItem("Banana", 5);

// // EXAMPLE 3 - call a function as default parameter instead of assigning a variable

// const warning = title => {
//   console.log(
//     title !== undefined
//       ? `Title of the button is ${title}. But color is not set`
//       : `Title and color are not set`
//   );
//   throw new Error(
//     "btn function must be called with two arguments - title and color"
//   );
// };

// const btn = (title = warning(), color = warning(title)) => {
//   console.log(title);
//   // Create new "Button" with title and background color. And insert this button into the DOM
//   var btn = document.createElement("BUTTON"); // Create a <button> element
//   btn.innerHTML = `${title}`; // Insert text
//   document.body.appendChild(btn); // Append <button> to <body
// };

// btn("Button 1", "grey");

// btn("Button 2");
// /*
// Title of the button is Button 2. But color is not set.
// Uncaught Error: btn function must be called with two arguments - title and color
// */
