// EXAMPLE 1.1 - Object literal
// if we want to access to the property of the object and be able to use its value we MUST USE REGULAR FUNCTION and NOT arrow function

const house = {
  bedrooms: 4,
  bathrooms: 2,
  kitchen: 1,
  //   we can use named function or function expression
  security: function() {
    // console.log(this); // {bedrooms: 4, bathrooms: 2, kitchen: 1, security: ƒ}
    console.log("Please, use your fingerprint to unlock the front door"); // Please, use your fingerprint to unlock the front door

    return this.value;
  }
};
house.security();

// EXAMPLE 1.2 - Object literal
const num = {
  value: 100,
  // info: () => {
  //   console.log(this); // Window
  //   return this.value;
  // }

  info: function() {
    console.log(this); // num object
    return this.value;
  }
};

// num.info(); // {value: 100, info: ƒ}

//*************** */
// MUST USE REGULAR FUNCTIONS

// // EXAMPLE 2 - Function constructor

function GroceryItem(title, kind) {
  this.title = title;
  this.kind = kind;
}

// // // Uncaught TypeError: GroceryItem is not a constructor
// // const GroceryItem = (title, kind) => {
// //   this.title = title;
// //   this.kind = kind;
// // };

// Create method of function constructor prototypes
GroceryItem.prototype.info = function() {
  return `In our store you can always buy fresh ${this.title} in ${this.kind} department!`;
};

// // // "this" is Window and function always returns "undefined is undefined"
// // GroceryItem.prototype.info = () => {
// //   console.log(this);
// //   return this.title + " is " + this.kind;
// // };

const apple = new GroceryItem("apple", "fruits");
console.log(apple);
const brocolli = new GroceryItem("brocolli", "vegetables");
console.log(brocolli);
const salmon = new GroceryItem("salmon", "seafood");
console.log(salmon);
const pork = new GroceryItem("pork", "meat");
console.log(pork);

console.log(salmon.info()); // In our store you can always buy fresh salmon in seafood department!
