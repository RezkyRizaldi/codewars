//* Basic Algorithm
// const sum = (numbers) => {
//   "use strict";
//   let total = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     total += numbers[i];
//   }
//   return total;
// };

//* Higher Order Function
function sum(numbers) {
  "use strict";
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(`Answer: ${sum([])}`, `Result: ${0}`);
console.log(`Answer: ${sum([1, 5.2, 4, 0, -1])}`, `Result: ${9.2}`);
