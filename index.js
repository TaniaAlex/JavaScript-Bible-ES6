/**
 * sort() array of products by price
 * sort() array of products by title
 *
 *
 * less than 0 — a comes before b
 * greater than 0  — b comes before a
 * equal to 0  — a and b are left unchanged with respect to each other
 * 
 *      function compare(a, b){
        return a - b;
        }
 */

const products = [
  {
    title: "Phone case",
    price: 23,
    quantity: 2,
    category: "Accessories"
  },
  {
    title: "Apple Watch",
    price: 1055,
    quantity: 2,
    category: "Watches"
  },
  {
    title: "Android phone",
    price: 150,
    quantity: 1,
    category: "Phones"
  },
  {
    title: "Headphones",
    price: 78,
    quantity: 1,
    category: "Accessories"
  },
  {
    title: "Sport Watch",
    price: 55,
    quantity: 2,
    category: "Watches"
  },
  {
    title: "Phone case 2",
    price: 23,
    quantity: 2,
    category: "Accessories"
  },
  {
    title: "Bose Headphones",
    price: 78,
    quantity: 1,
    category: "Accessories"
  }
];

// console.log(products);
// // OPTION 1 - classic if statement
// function compare(a, b) {
//   if (a.price < b.price) {
//     return -1;
//   }
//   if (a.price > b.price) {
//     return 1;
//   }
//   return 0;
// }
// console.log(products.sort(compare));
//
// // OPTION 2 - ternary operator
// //
// const sortProductsByPrice = products => {
//   products.sort((a, b) => (a.price > b.price ? 1 : b.price > a.price ? -1 : 0));
// };
// //
// // OPTION 3 -teacher - ternary operator
// const sortProductsByPrice1 = products => {
//   //   // sort in ascending order
//   products.sort((a, b) => a.price - b.price);
//   //   //
//   //   //  sort in descending order
//   //     products.sort((a, b) => b.price - a.price);
// };
// // OPTION 3.1 - teacher - find out sorting algorithm
const sortProductsByPrice1 = unsortedProducts => {
  //   // sort in ascending order
  unsortedProducts.sort((a, b) => {
    // console.log(a.title, b.title);
    return a.price - b.price;
  });
  //   //
  //   //  sort in descending order
  //     products.sort((a, b) => b.price - a.price);
};

// // sort() array of products by title
// const sortProductsByTitle = products => {
//   products.sort((a, b) => (a.title > b.title ? 1 : b.title > a.title ? -1 : 0));
// };

/* Create a function "sortProductsByPrice" with one parameter "products".

This function "sortProductsByPrice" should sort input array of products by price of each product in ascending order and return resulting array.
*/

// sortProductsByPrice(products);
sortProductsByPrice1(products);
// sortProductsByTitle(products);
console.log(products);
/* Which sorting algorithm is used here in Google Chrome, Firefox, Safari, Node.js? 

Q: Is this sorting stable or not? 
A: YES!
*/

/* Array of products sorted by price in ascending order.
Why original "products" array was mutated?
*/

console.log("***************************");
/********************************** */
//
//
/*** EXAMPLE 2 */
const bands = [
  { genre: "Rap", band: "AutoStop", albums: 2 },
  { genre: "Rap", band: "Migos", albums: 3 },
  { genre: "Folk", band: "Aqua", albums: 2 },
  { genre: "Folk", band: "MixG", albums: 9 },
  { genre: "Rock", band: "Mango", albums: 9 },
  { genre: "Pop", band: "Coldplay", albums: 4, awards: 13 },
  { genre: "Rock", band: "Breaking Benjamins", albums: 1 }
];

// function for dynamic sorting
function compareValues(key, order = "asc") {
  return function(a, b) {
    if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
      // property doesn't exist on either object
      return 0;
    }

    const varA = typeof a[key] === "string" ? a[key].toUpperCase() : a[key];
    const varB = typeof b[key] === "string" ? b[key].toUpperCase() : b[key];

    let comparison = 0;
    if (varA > varB) {
      comparison = 1;
    } else if (varA < varB) {
      comparison = -1;
    }
    return order == "desc" ? comparison * -1 : comparison;
  };
}

// // array is sorted by band, in ascending order by default
bands.sort(compareValues("band"));

// // array is sorted by genre, in ascending order by default
// bands.sort(compareValues("genre"));

// // array is sorted by band in descending order
// bands.sort(compareValues("band", "desc"));

// // array is sorted by albums in ascending order
// bands.sort(compareValues("albums"));
console.log(bands);
