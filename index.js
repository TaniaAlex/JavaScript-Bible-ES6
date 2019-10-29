/**
 * Object literal - Object initializer
 *
 * If Function is used in the Object literal as a value for specific property, this property is called Method
 */
// // Example 1.1
// let myObject = {
//   prop1: 10,
//   prop2: "String",
//   prop3: function() {
//     console.log(this.prop1, this.prop2);
//   }
// };
//
// Example 1.2
var a = "foo",
  b = 42,
  c = {};
var o = { a: a, b: b, c: c };
console.log(`Object literal:`, o);

// Example 1.3
let car = {
  brand: "Audi",
  model: "A3",
  color: "white",

  start: function() {
    return `Press the brake pedal and "Start" button to start the engine of your ${this.color} ${this.brand} ${this.model}`;
  }
};
console.log(car.start());

// // Enhanced object literals
// // EXAMPLE 2.1 - shorthand property names
// const num = 10;
// const str = "Hello world";
// const bool = true;

// const myObject = {
//   num,
//   str,
//   bool
//   // missingVar // Uncaught ReferenceError: missingVar is not defined
// };

// // EXAMPLE 2.2 - shorthand method names
const myCar = (make, year) => {
  return {
    make,
    year,
    info(price) {
      return `${this.make} costs ${price}$`;
    }
  };
};

const newCar = myCar("Tesla", 2020);
console.log(newCar.info(50000));

// // EXAMPLE 2.3 - shorthand method names
const coffeeMaker = (brand, type) => {
  return {
    brand,
    type,
    info(sort) {
      return `${brand} can make ${sort} in 5 sec`;
    }
  };
};
const phillipsCoffeeMaker = coffeeMaker("Phillips", "pads");
console.log(phillipsCoffeeMaker.info("capuccino"));

// // EXAMPLE 3.1 - computed propery names
// const BG_COLOR_PROP = "backgroundColor";

// const btn = {
//   title: "Button 1",
//   [BG_COLOR_PROP]: "blue"
// };

// const list = {
//   options: ["Option 1", "Option 2"],
//   [BG_COLOR_PROP]: "grey"
// };

// console.log(btn);
// console.log(list);

// // EXAMPLE 3.2 - computed propery names
var param = "size";
var config = {
  [param]: 12,
  ["mobile" + param.charAt(0).toUpperCase() + param.slice(1)]: 4
};

console.log(config); // {size: 12, mobileSize: 4}
