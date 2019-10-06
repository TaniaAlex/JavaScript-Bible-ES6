/* Create a function "weatherForecast" with two parameters "city" and "weather". 

If second argument is absent, "weather" parameter should get value "Great weather!".

1. First solve this WITHOUT default function parameter.
2. Comment previous solution and solve same task WITH default function parameter.

NOTE: Carefully compare your results with test calls results
*/

// /******* Soltion WITHOUT default function parameter *******/
// const weatherForecast = (city, weather) => {
//   // option 1
//   //   return weather === undefined
//   //     ? `Weather forecast for ${city}: Great weather!`
//   //     : `Weather forecast for ${city}: ${weather}`;
//   // option 2
//   weather = weather !== undefined ? weather : "Great weather!";
//   return `Weather forecast for ${city}: ${weather}`;
// };

// /******* Soltion WITH default function parameter *******/
const weatherForecast = (city, weather = "Great weather!") =>
  `Weather forecast for ${city}: ${weather}`;

console.log(weatherForecast("Dubai", "Sunny"));
// Weather forecast for Dubai: Sunny

console.log(weatherForecast("London", "Light rain"));
// Weather forecast for London: Light rain

console.log(weatherForecast("Paris"));
// Weather forecast for Paris: Great weather!

console.log(weatherForecast("Miami", ""));
// Weather forecast for Miami:

console.log(weatherForecast("Las Vegas", undefined));
// Weather forecast for Las Vegas: Great weather!
