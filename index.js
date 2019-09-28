const postsJSON = [
  '{"postId":1355,"commentsQuantity":5}',
  '{"postId":5131,"commentsQuantity":13}',
  '{"postId":6134,"commentsQuantity":2}'
];

/* From the "postsJSON" array create "posts" array that will consist of JavaScript objects */

// "for loop" -> Use the JavaScript function JSON.parse() to convert text into a JavaScript object
var posts = [];
for (let i = 0; i < postsJSON.length; i++) {
  //   console.log(postsJSON[i]);
  posts.push(JSON.parse(postsJSON[i]));
}
console.log(posts);
console.log(posts[0].postId); // 1355
//******* map() method */
// Option 1
const posts1 = postsJSON.map(JSON.parse);
console.log(posts1);

// Option 2
const posts2 = postsJSON.map(post => JSON.parse(post));
console.log(posts2);
