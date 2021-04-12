//* Basic Algorithm
// function weatherInfo(temp) {
//   return convertToCelsius(temp) < 0 ? `${convertToCelsius(temp)} is freezing temperature` : `${convertToCelsius(temp)} is above freezing temperature`;
// }

// function convertToCelsius(temperature) {
//   return (celsius = (temperature - 32) * (5 / 9));
// }

//* ES6 Syntax
const weatherInfo = (temp) => `${(temp = (temp - 32) * (5 / 9))} is ${temp > 0 ? "above " : ""} freezing temperature`;

console.log(`Answer: ${weatherInfo(50)}`, "Result: 10 is above freezing temperature");
console.log(`Answer: ${weatherInfo(23)}`, "Result: -5 is freezing temperature");
