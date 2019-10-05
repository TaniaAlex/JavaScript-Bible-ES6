/**
 * * THE TYPE SYSTEM OF A LANGUAGE defines rules that tell us what types of data exist in that language and how they can be combined using different operators.
 *
 * TYPE COERCION - when the operands of an operator are different types, one of them will be converted to an "equivalent" value of the other operand's type.
 *
 *
 * !!! the addition operator + in JavaScript automagically converts any of the two operands to a string if at least one of them is… a string!
 *
 * Number bcomes a string, for example:
 * [] + 5 => "5"
 *
 * 'hello' + [89, 150.156, 'mike'] => "hello89,150.156,mike"
 *
 *
 * Array and objects are subject to the same conversion:
 *
 * 'hello' + { name: "Jacopo" } => "hello[object Object]"
 *
 * when you call toString() on a plain JavaScript object the engine gives “[object Object]” because the default behavior of Object.toString() is to return the string object followed by the entity type (Object in this case)
 *
 *
 *
 *
 */

// Pre-ES6 - Template Strings
const myNumber = 10; // "10"
const myStr = "Hello";
const myArr = [1, 2]; // "1,2"
const myObj = { x: 10 }; // [object Object]
const myBool = true; // "true"
const myGreeting = name => "Hello " + name;

/**
 * whenever you use the “+” operator, the values will concatenate if one is already a string or they will be cast to strings if possible.
 *
 * TO SPLIT STRING INTO SEVERAL LINES USE \n
 */
const templateStr =
  "Number is " +
  myNumber +
  " and string is " +
  myStr +
  " and array is " +
  myArr +
  " and object is " +
  myObj +
  " and boolean is " +
  myBool +
  " and result of the function call is " +
  myGreeting("Mike");

console.log(templateStr);

// ES6 - Template literals
const templateLiteral = `Number 
is ${myNumber} and string is ${myStr} and array is ${myArr} and object is ${myObj} and boolean is ${myBool} and result of the function call is ${(name =>
  "Hello " + name)("Mike")} and result of the ternary operator is ${
  myBool ? 15 : "World"
}`;
console.log(templateLiteral);

const btn1 = "Button 1";
const btn2 = "Button 2";

const myButtons = `
  <div>
    <button>${btn1}</button>
    <button>${btn2}</button>
  </div>
`;

document.body.innerHTML = myButtons;
