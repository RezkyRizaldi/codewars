//* Basic Algorithm
// function generateRange(min, max, step) {
//   const result = [];
//   for (let i = min; i <= max; i += step) {
//     result.push(i);
//   }
//   return result;
// }

//* Higher Order Function
const generateRange = (min, max, step) => [...Array(((max - min) / step + 1) ^ 0)].map((_, idx) => min + step * idx);

console.log(`Answer: ${generateRange(2, 10, 2)}`, `Result: ${[2, 4, 6, 8, 10]}`);
