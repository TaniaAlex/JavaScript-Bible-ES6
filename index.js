//***** ARRAY METHOD filter()  */
//***** filter() method  RETURNS NEW ARRAY. The filter() method is introduced on ECMAScript 5 specification

// EXAMPLE 1
const myNumbers = [10, 25, 56, 100, 5];

const filteredNumbers = myNumbers.filter(num => num < 50);

console.log(filteredNumbers);
console.log(myNumbers);

// EXAMPLE 2
const data = [
  {
    country: "China",
    population: 1409517397
  },
  {
    country: "India",
    population: 1339180127
  },
  {
    country: "USA",
    population: 324459463
  },
  {
    country: "Indonesia",
    population: 263991379
  }
];

let newData = data.filter(item => {
  return item.population < 350000000;
});

console.log(newData);

// EXAMPLE 3 - declare the callback function before using it with the filter method
const ages = [11, 34, 8, 9, 23, 51, 17, 40, 14];
const isOlderThan18 = age => age > 18;

let olderThan18 = ages.filter(isOlderThan18);

console.log(olderThan18); // [34, 23, 51, 40]

// EXAMPLE 4
const countries = [
  { name: "Nigeria", continent: "Africa" },
  { name: "Nepal", continent: "Asia" },
  { name: "Angola", continent: "Africa" },
  { name: "Greece", continent: "Europe" },
  { name: "Kenya", continent: "Africa" },
  { name: "Greece", continent: "Europe" }
];

let asianCountries = countries.filter(country => {
  return country.continent === "Asia";
});

console.log(asianCountries); // [{name: "Nepal", continent: "Asia"}]

// Example 5: Search for specific letters in an array
const names = ["Victoria", "Pearl", "Olivia", "Annabel", "Sandra", "Sarah"];
const filterItems = letters => {
  return names.filter(name => name.indexOf(letters) > -1);
};

console.log(filterItems("ia")); // ["Victoria", "Ol
