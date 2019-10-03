const products = [
  {
    title: "Phone case",
    price: 23,
    quantity: 2,
    category: "Accessories"
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
  }
];

/* Create a function "quantityByCategories" with one parameter "products".

This function "quantityByCategories" should return an object with keys equal to categories and values equal to sum of all quantities in each category.
*/
// const quantityByCategories = products => {
//   return products.reduce((acc, product) => {
//     let { quantity, category } = product;
//     return { ...acc, [category]: [...acc(acc[category] || []), quantity] };
//   }, {});
// };

const quantityByCategories = products => {
  return products.reduce((counts, product) => {
    console.log(
      `Counts is ${JSON.stringify(counts)} and product is ${JSON.stringify(
        product
      )}`
    );
    counts[product.category] =
      (counts[product.category] || 0) + product.quantity;
    return counts;
  }, {});
};

console.log(quantityByCategories(products));
/* {
  Accessories: 3,
  Phones: 1,
  Watches: 2
} */

// SIMILAR CHALLENGE 3 - Transform an Array into a grouping Objects by a property
const posts = [
  { id: 1, category: "frontend", title: "All About That Sass" },
  { id: 2, category: "backend", title: "Beam me up, Scotty: Apache Beam tips" },
  {
    id: 3,
    category: "frontend",
    title: "Sanitizing HTML: Going antibactirial on XSS attacks"
  }
];

const categoryPosts = posts.reduce((acc, post) => {
  let { title, category, id } = post;
  return { ...acc, [category]: [...(acc[category] || []), title] };
}, {});
console.log(categoryPosts); //
/**
 *  =>   {frontend: Array(2), backend: Array(1)}
backend: [2]
frontend: (2)[1, 3]
 */

// SIMILAR CHALLENGE 3 -
// Smartphone array of product -> calculate a total quantity of available products
const smartphones = [
  {
    brand: "iPhone 5",
    color: "rosa gold",
    quantity: 22
  },
  {
    brand: "iPhone 6",
    color: "arctic white",
    quantity: 33
  },
  {
    brand: "iPhone 10",
    color: "lime",
    quantity: 77
  }
];

// Add their sum of quantity
const total = smartphones.reduce((sum, currentValue) => {
  return sum + currentValue.quantity;
}, 0);

console.log(total); // 132

// SIMILAR CHALLENGE 4 -
// Delete a key value pair inside an object
const user = { name: "Klaus Main", age: 23, password: "SantaCl@use" };

// // OPTION 1
// const userWithoutPassword = Object.keys(user)
//   .filter(key => key !== "password")
//   .map(key => ({ [key]: user[key] }))
//   .reduce((accumulator, current) => ({ ...accumulator, ...current }), {});

// // OPTION 2
// const userWithoutPassword = (({ name, age }) => ({ name, age }))(user);

// // OPTION 3
const userWithoutPassword = Object.keys(user).reduce(
  (acc, key) => (key === "password" ? acc : { ...acc, [key]: user[key] }),
  {}
);
console.log(userWithoutPassword);
// userWithoutPassword becomes {name: 'Shivek Khurana', age: 23}
