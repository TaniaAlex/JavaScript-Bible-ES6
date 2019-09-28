//***** ARRAY METHOD forEach()  */
//***** forEach() method always RETURNS undefined */
const myArray = [1, true, "abc"];

// // don't use
// // for (let i = 0; i < myArray.length; i++) {
// //   console.log(myArray[i]);
// // }

//Loop over an Array
// use this instead

myArray.forEach(element => console.log(element));
console.log("=====");

// //***** EXAMPLE 2 */
const fruits = ["Apple", "Banana", "Orange", "Lime", "Mango"];
fruits.forEach(fruit => console.log(`Add ${fruit} to shopping list`));

console.log("=====");
// //***** EXAMPLE 3 */
const blackListContacts = ["Tim", "Tom", "Jerry", "Lucy", "Julia"];
blackListContacts.forEach(blackListContact =>
  console.log(`Never pick up when ${blackListContact} calls`)
);
console.log("=====");

// //***** EXAMPLE 4 */
// const apps = ["WhatsApp", "Instagram", "Facebook", "Telegram"];
// const appleStore = [];

// apps.forEach(app => appleStore.push(app));
// appleStore.forEach(app => console.log(`New update for ${app} is available`));
// // console.log(appleStore);
console.log("=====");
//***** EXAMPLE 4  optimized variant*/
const apps = ["WhatsApp", "Instagram", "Facebook", "Telegram"];
const appleStore = [];
const updateInfo = app => {
  return `New update for ${app} is available`;
};

apps.forEach(app => appleStore.push(app));
appleStore.forEach(app => console.log(updateInfo(app)));
// console.log(appleStore);
