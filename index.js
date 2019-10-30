/**
 * Destructuring assignment is feature that came along with ES6. Destructuring is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables. That is, we can extract data from arrays and objects and assign them to variables.
 *
 */
// // EXAMPLE 1.1 - declaration and assignment using array destructuring
// const myArray = [1, 2, 3];
// // let a, b, c;
// // a = myArray[0];
// // b = myArray[1];
// // c = myArray[2];

// let [a, b, c] = myArray;

// console.log(a, b, c);

// // EXAMPLE 1.2 - declaration and assignment using array destructuring

// const rgb = [255, 200, 0];
// const [red, green, blue] = rgb;
// console.log(`R: ${red}, G: ${green}, B: ${blue}`); //R: 255, G: 200, B: 0

// // EXAMPLE 2 - assignment using array destructuring
// const myArray = [1, 2, 3];

// let a, b, c; // variable declaration

// [a, b, c] = myArray; // assignment and destructuring

// const anotherArray = [4, 5, 6];

// [a, b, c] = anotherArray;

// console.log(a, b, c);

// // EXAMPLE 2.2 - assignment using array destructuring

// const rgb = [255, 200, 0];
// let red, green, blue; // variable declaration
// [red, green, blue] = rgb;
// console.log(`R: ${red}, G: ${green}, B: ${blue}`); //R: 255, G: 200, B: 0

// // // EXAMPLE 3 - more variables than elements in the array
// const myArray1 = ["r"];
// const [r, g, l] = myArray1;
// console.log(r, g, l); // r undefined undefined

// // EXAMPLE 4.1 - default values
// const myArray = ["a"];
// const [a, b, c = "c"] = myArray;
// console.log(a, b, c); // a undefined c

// // // EXAMPLE 4.2 - default values
// const rgb = [200];

// // Assign default values of 255 to red and blue
// const [red = 255, green, blue = 255] = rgb;

// console.log(`R: ${red}, G: ${green}, B: ${blue}`); // R: 200, G: undefined, B: 255

// // EXAMPLE 5.1 - skip element during destructuring
// const myArray = [1, 2, 3, 4, 5];
// const [, , a, , b] = myArray;
// console.log(a, b);

// EXAMPLE 5.2 - skip element during destructuring
// const rgb = [200, 255, 75];
// const [red, , blue] = rgb;

// console.log(`R: ${red}, B: ${blue}`); // RR: 200, B: 75

// // EXAMPLE 6.1 - rest operator in array destructuring
// const myArray = [1, 2, 3, 4, 5];
// const [a, b, ...c] = myArray; // rest operator
// console.log(a, b, c); // 1 2 (3) [3, 4, 5]
// const d = [...c]; // spread operator
// console.log(d); // (3) [3, 4, 5]

// d.push(6, 7, 8);
// console.log(d); // ((6) [3, 4, 5, 6, 7, 8]
// console.log(c); // (3) [3, 4, 5]

// // EXAMPLE 6.2 - rest operator in array destructuring
// const rainbow = [
//   "red",
//   "orange",
//   "yellow",
//   "green",
//   "blue",
//   "indigo",
//   "violet"
// ];

// // Assign the first and third items to red and yellow
// // Assign the remaining items to otherColors variable using the spread operator(...)
// const [red, , yellow, ...otherColors] = rainbow;
// console.log(red, yellow); // red yellow
// console.log(otherColors); // ['green', 'blue', 'indigo', 'violet']

// // EXAMPLE 7.1 - delete first element
let myArray = [1, 2, 3];
const [, ...anotherArray] = myArray;
console.log(anotherArray); // (2) [2, 3]

// // EXAMPLE 7.2 - delete first element
// const rainbow = [
//   "red",
//   "orange",
//   "yellow",
//   "green",
//   "blue",
//   "indigo",
//   "violet"
// ];

// // Assign the first and third items to red and yellow
// // Assign the remaining items to otherColors variable using the spread operator(...)
// const [, , ...otherColors] = rainbow;
// console.log(otherColors); // (5) ["yellow", "green", "blue", "indigo", "violet"]

// console.log(rainbow); // (7) ["red", "orange", "yellow", "green", "blue", "indigo", "violet"]
// otherColors.reverse();
// console.log(otherColors); // (5) ["yellow", "green", "blue", "indigo", "violet"]

// // EXAMPLE 8.1 - swap values
let x = 5,
  y = 10;
[y, x] = [x, y];
console.log(x, y);

// // EXAMPLE 8.2 - swap values
/**
 * One very nice application of array destructuring is in swapping local variables. Imagine you are building a photo manipulation app and you want to be able to swap the height and width dimensions of a photo when the orientation of the photo is switched between landscape and portrait.
 */
let width = 300;
let height = 400;
const landscape = true;

console.log(`${width} x ${height}`); // 300 x 400

if (landscape) {
  // Swap the variables
  [width, height] = [height, width];

  console.log(`${width} x ${height}`); // 400 x 300
}

// // EXAMPLE 9 - destructuring in the function
const myPosts = [["Post 1", 10], ["Post 2", 20], ["Post 3", 30]];

myPosts.forEach(([title, likes]) => console.log(`${title} has ${likes} likes`)); // Post 1 has 10 likes // Post 2 has 20 likes
myPosts.map(([title, likes]) => console.log(`${title} has ${likes} likes`)); // Post 1 has 10 likes // Post 2 has 20 likes

// // EXAMPLE 10 - nested array destructuring
// const myArray = [1, 2, [3, 4]];
// const [a, b, [c, d]] = myArray;
// console.log(a, b, c, d);

// // EXAMPLE 11- clone array using destructuring and spread operator
const rainbow = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "indigo",
  "violet"
];

// Cloning with array destructuring and spread operator
const [...rainbowClone] = rainbow;

console.log(rainbow === rainbowClone); // false
console.log(rainbowClone); // ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

// EXAMPLE 12 - Unpacking values from a regular expression match
function parseProtocol(url) {
  var parsedURL = /^(\w+)\:\/\/([^\/]+)\/(.*)$/.exec(url);
  if (!parsedURL) {
    return false;
  }
  console.log(parsedURL); // ["https://developer.mozilla.org/en-US/Web/JavaScript", "https", "developer.mozilla.org", "en-US/Web/JavaScript"]

  var [, protocol, fullhost, fullpath] = parsedURL;
  return protocol;
}

console.log(
  parseProtocol("https://developer.mozilla.org/en-US/Web/JavaScript")
); // "https"
