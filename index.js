const myCities = ["London", "New York", "Singapore"];

/* Create a function called "arrayInfo" that will return string like 
"London is located at the index 0 in the myCities array" */

/* Iterate over the "myCities" array, call "arrayInfo" function for each of the elements and print result of the call to the console */
const arrayInfo = (city, index) => {
  return `${city} is located at the index ${index} in the myCities array`;
};

// Option 1: "for"
for (let i = 0; i < myCities.length; i++) {
  console.log(arrayInfo(myCities[i], i));
}

console.log("===================");

// Option 2: "forEach"
myCities.forEach((city, index) => console.log(arrayInfo(city, index)));

console.log("===================");
//***** EXAMPLE 2 */
const apps = ["WhatsApp", "Instagram", "Facebook", "Telegram"];
const appleStore = [];
const updateInfo = app => {
  return `New update for ${app} is available`;
};

apps.forEach(app => appleStore.push(app));
appleStore.forEach(app => console.log(updateInfo(app)));
// console.log(appleStore);
