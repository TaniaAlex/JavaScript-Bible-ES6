/**
 * ES6 Tagged Template Literals
 *
 * There is default TAGGED FUNCTION, that process each template literal and returns simple concatenated string
 *
 * How it works:
 * 1. you pass template literal to JS engine.
 * 2. JS engine evaluates each expression in template literal
 * 3. result of each expression is coerced to string
 * 4. JS engine concatenate this strings
 * 5. return the result in string
 *
 *
 * You can create custom TAGGED Function, PREPEND to template literal and than this template literal will be PARSED using this Custom Tagged function
 *
 *If there is an expression(custom handler function) preceding the template literal then it is called a "tagged template"
 * Each template literal can be parsed using tag function
 *
 *
 * The array helpers methods (higher order functions) iterate only through NUMERIC ARRAY PROPERTY and ignore property like "length", "raw"
 */

// EXAMPLE 1
const name = "Sophia";
const age = 25;

const checkAge = (arrayOfStrings, name, age) => {
  //   arrayOfStrings.forEach(elem => console.log(elem)); // "", is, years old
  console.log(arrayOfStrings, name, age);
  return age >= 18 ? `${name} is adult` : `${name} is underage`;
};

console.log(`${name} is ${age} years old`); // Sophia is 15 years old
console.log(checkAge`${name} is ${age} years old`); // Sophia is underage

// EXAMPLE 2

function highlight(strings, ...values) {
  // here i is the iterator for the strings array
  return strings.reduce((result, string, i) => {
    return `${result}${string} <cite>${values[i] || ""}</cite>`;
  }, "");
}

const author = "Thomas A. Edison";
const statement = `I have not failed. I've just found 10,000 ways that won't work.`;
const quote = highlight`${statement} by ${author}`;
console.log(quote);

const myArticle = `
  <div>
    <p>${quote}</p>
  </div>
`;
document.body.innerHTML = myArticle;
