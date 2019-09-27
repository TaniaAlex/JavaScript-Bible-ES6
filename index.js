/**
 * CHALLENGE 2-1 TASK
 *
 * Create a button with "Click me" text on it.
 *
 * If you click on the button following actions
 * should be performed:
 * 1. Title of the button will be changed to following:
 * "Button was clicked <NUMBER> times"
 * 2. Log to the console message "Button was clicked"
 *
 * Use either "addEventListener" or "onclick" functions.
 * Try to use regular function and arrow function as a
 * callback function for functions above.
 *
 * Observe difference in behaviour and try to explain
 * this difference.
 */

// Solution 1 - Me
var btnCount = document.getElementById("btn-count");
let downloadCount = 0;
btnCount.onclick = function() {
  downloadCount += 1;
  console.log(`Button was clicked ${downloadCount} times`);

  btnCount.innerHTML = `You've downloaded this post ${downloadCount} times`;
};

///************* */
// Solution 2 - Teacher
// 1. Create a button with vanilla js
const createBtn = title => {
  const btn = document.createElement("button");
  let shareCount = 0;
  btn.innerHTML = title;

  // // 1 Option - add "onclick"
  //   btn.onclick = function() {
  //     // shareCount += 1;
  //     console.log("Thanks for sharing!");
  //     btn.innerHTML = `You have shared this post ${++shareCount} times`;
  //   };

  // 2 Option - addEventListener
  btn.addEventListener("click", function() {
    // shareCount += 1;
    // in regular function "this" is dynamically changed, depending on the context.
    // in Arrow function " this" refers to the global window object
    // console.log(this); // button
    console.log(`Thanks for sharing on ${title}`);
    btn.innerHTML = `You have shared this post ${++shareCount} times`;
  });

  document.body.appendChild(btn);
};

// becouse of CLOSURE we are able to call 'createBtn' only once, but perform count and store quantity of the clicks in the memory.

// This clicks Quantity is separate in each function call and retaned in the memory
// Every time we click the button this count is incremented. But in the first case we increment 1st CLOSED VARIABLE and in second case we increment second CLOSED VARIABLE.

// CLICKS COUTN IS A CLOSED VARIABLE IN THIS FUNCTION AND CREATE CLOSURE
createBtn("Share FB");
createBtn("Share Instagram");
