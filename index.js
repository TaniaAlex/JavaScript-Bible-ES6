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
