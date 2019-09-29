const posts = [
  { postId: 1355, commentsQuantity: 5 },
  { postId: 5131, commentsQuantity: 13 },
  { postId: 6134, commentsQuantity: 2 }
];

/* Create a function "findSinglePost" that will have two parameters - "postId" and "posts" and will return object with matched "postId".
If post wasn't found - return "undefined"
*/
const findSinglePost = (postId, posts) => {
  return posts.find(post => post.postId === postId);
};

console.log(findSinglePost(6134, posts)); // { postId: 6134, commentsQuantity: 2 }

console.log(findSinglePost(4511, posts)); // undefined

// PRACTICE EXAMPLE
const trees = [
  { name: "bamboo", country: "India" },
  { name: "maple", country: "Canada" },
  { name: "oak", country: "Germany" },
  { name: "magnolia", country: "USA" }
];

const findSingleTree = (name, trees) => {
  return trees.find(tree => tree.name === name);
};
console.log(findSingleTree("oak", trees));
