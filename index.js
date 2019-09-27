// // EXAMPLE 1

// console.log(mult(3, 5)); // Uncaught ReferenceError: Cannot access 'mult' before initialization
const mult = (x, y) => x * y;
console.log(mult(3, 5));

/** */

// // console.log(sum(1, 2)); // sum is not defined
// const sum = (a, b) => a + b;
// console.log(sum(1, 2));
// console.log(sum(5, 7));

// // EXAMPLE 2
const messe = {
  name: "Buchmesse",
  stadt: "Frankfurt",
  termin: "Mi. - So.",
  messeBewertung: 4.3
};

// explicit return of the object
const erfahrungsBerichte = messe => {
  return {
    name: messe.name,
    stadt: messe.stadt,
    termin: messe.termin,
    weiterempfehlung:
      messe.messeBewertung > 3.7
        ? "Ausgezeichnet!"
        : "Kann leider nicht weiter empfehlen."
  };
};

// implicit return of the object
const erfahrungsBerichte1 = messe => ({
  name: messe.name,
  stadt: messe.stadt,
  termin: messe.termin,
  weiterempfehlung: messe.messeBewertung > 3.7 ? true : false
});

console.log(erfahrungsBerichte(messe));
console.log(erfahrungsBerichte1(messe));

//** */
// const post = {
//   title: "Sample title",
//   comments: 3,
//   shared: true,
//   published: true,
//   postId: 5134
// }

// // // explicit return of the object
// // const processedPost = (post) => {
// //   return {
// //     title: post.title,
// //     comments: post.comments,
// //     popular: post.comments > 5 ? true : false
// //   }
// // };

// // implicit return of the object
// const processedPost = post => ({
//   title: post.title,
//   comments: post.comments,
//   popular: post.comments > 5 ? true : false
// });

// console.log(processedPost(post));

// // EXAMPLE 3
// //  IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined.

// //**** Closures and Private Data *****
// Another use case for an IIFE is to provide a wrapping scope around a local variable that is accessed by a function returned from the IIFE.This way, a closure is created that enables the function to access the local variable even when that function is executed outside of the IIFE's lexical scope.

// Assume we want to create a function uniqueId that returns a unique identifier(like "id_1", "id_2", and so on) every time it's called. Within the IIFE, we'll be keeping track of a private counter variable that is incremented every time the counter function is called.We return from the IIFE another function that returns a new identifier string when called: */
//Note that the count variable is inaccessible from outside of the IIFE. Except for the function that's being returned, nobody can read or modify the count variable. This allows for the creation of truly private state that can only be modified in a controlled fashion.

// Neither let nor const is a replacement for an IIFE returning a function that closes over some local variables to manage private data.

const uniqueId = (function() {
  let count = 0;
  return function() {
    ++count;
    return `id_${count}`;
  };
})();

console.log(uniqueId()); // "id_1"
console.log(uniqueId()); // "id_2"
console.log(uniqueId()); // "id_3"
//********* */

//** Aliasing Variables *******/

// Sometimes, you might be in the situation that you're using two different libraries that expose a global variable with the same name. For instance, consider that you're using jQuery and another library that also assigns to the $ global variable.

// To resolve this naming conflict, you can wrap a piece of code with an IIFE that passes one of the global variables(e.g.jQuery) as an argument.Within the function, you can then refer to the value by a parameter name(e.g.$) of your choosing

//** Capturing the Global Object ******/

(() => {
  this.greet = () => "Hey. What's up?";
  //   console.log(this); // window object
  return this;
})();
