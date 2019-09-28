//** ARROW FUNCTIONS AND "this" */

// inner functions get the context of the outer function due to CLOSURE.

// EXAMPLE 1
const num = {
  title: "Object literal with regular function as property value",
  value: 100,
  // refular function as property value
  info: function info() {
    console.log(this); // num object
    return this.value;
  }
  //   // ARROW FUNCTION DOESN'T HAVE its ouw "this" and refers to outer scope of the object -> outer scope for this object is Window
  //   info: () => {
  //     console.log(this); // Window
  //     return this.value;
  //   }
};

console.log(num.info());
console.log("==================================");
// // EXAMPLE 2
const anotherNum = {
  title: "Object literal with built-in method info",
  value: 5,
  //   info: () => {
  //     console.log(this); // still Window
  //     return this.value;
  //   }
  info: function info() {
    console.log(this); // newNum object if called with info.call(newNum)
    return this.value;
  }
};

// newNum doesn't have own info function. We will pass this object to anotherNum.info function as argument-> use .call method
const newNum = {
  title: "Object literal without built-in method info",
  value: 17
};

console.log(anotherNum.info.call(newNum));
console.log("==================================");

// //EXAMPLE 3
const str = {
  value: "Object literal with Delayed greeting method",
  //   // "this" is lost in the callback function
  //   greet: function greet() {
  //     setTimeout(function() {
  //       console.log(this); // Window
  //       console.log(this.value); // undefined
  //     }, 1000);
  //   }

  //   // // Option 1 - "self" is being used to maintain a reference to the original "this" even as the context is changing. It's a technique often used in event handlers (especially in closures).

  //   greet: function greet() {
  //     const self = this;
  //     setTimeout(function() {
  //       console.log(self);
  //       console.log(self.value); // "Delayed greeting"
  //     }, 1000);
  //   }

  // Option 2 - use "bind" method

  //   greet: function greet() {
  //     setTimeout(
  //       function() {
  //         console.log(this); // str
  //         console.log(this.value); // "Delayed greeting"
  //       }.bind(this),
  //       1000
  //     );
  //   }

  // Option 3 - arrow function
  greet: function greet() {
    setTimeout(() => {
      console.log(this); // str
      console.log(this.value); // "Delayed greeting"
    }, 0);
  }
};

str.greet();
