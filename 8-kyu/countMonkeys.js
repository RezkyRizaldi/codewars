//* Basic Algorithm
// function monkeyCount(n) {
//   let sum = [];
//   for (let i = 1; i <= n; ++i) {
//     sum.push(i);
//   }
//   return sum;
// }

//* Typecase with Array Destructuring
function monkeyCount(n) {
  return [...Array(n + 1).keys()].slice(1);
}

console.log(`Answer: ${monkeyCount(5)}`, `Result: ${[1, 2, 3, 4, 5]}`);
console.log(`Answer: ${monkeyCount(3)}`, `Result: ${[1, 2, 3]}`);
console.log(`Answer: ${monkeyCount(9)}`, `Result: ${[1, 2, 3, 4, 5, 6, 7, 8, 9]}`);
console.log(`Answer: ${monkeyCount(10)}`, `Result: ${[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}`);
console.log(`Answer: ${monkeyCount(20)}`, `Result: ${[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]}`);
