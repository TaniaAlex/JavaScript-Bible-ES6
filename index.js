const posts = [
  {
    title: "How to find JavaScript developer job?",
    postId: 3421,
    comments: 25
  },
  {
    title: "Is it hard to learn ES6?",
    postId: 5216,
    comments: 3
  },
  {
    title: "Should I learn React or Angular?",
    postId: 8135,
    comments: 12
  }
];

const minimalComentsQty = 10;

const popularPostsIds = (posts, minimalComentsQty) => {
  return posts.reduce((postsIds, post) => {
    // console.log(postsIds, post);
    // use condition to return postsId
    if (post.comments >= minimalComentsQty) {
      postsIds.push(post.postId);
    }
    //return all postsId
    // postsIds.push(post.postId);
    return postsIds;
  }, []);
};

/* Create a function "popularPostsIds" with two parameters "posts" and "minimalComentsQty".

This function "popularPostsIds" should return an array of postIds of posts that have quantity of "comments" at least equal to "minimalComentsQty"
*/

console.log(popularPostsIds(posts, minimalComentsQty)); // [3421, 8135]
// console.log(popularPostsIds(posts)); // [3421, 8135]
