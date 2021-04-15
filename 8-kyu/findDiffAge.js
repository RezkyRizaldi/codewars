//* Array.prototype.sort()
// function differenceInAges(ages) {
//   return [ages.sort((a, b) => a - b)[0], ages.sort((a, b) => a - b)[ages.length - 1], ages.sort((a, b) => a - b)[ages.length - 1] - ages.sort((a, b) => a - b)[0]];
// }

//* Math method
function differenceInAges(ages) {
  return [Math.min(...ages), Math.max(...ages), Math.max(...ages) - Math.min(...ages)];
}

console.log(`Answer: ${differenceInAges([82, 15, 6, 38, 35])}`, `Result: ${[6, 82, 76]}`);
console.log(`Answer: ${differenceInAges([57, 99, 14, 32])}`, `Result: ${[14, 99, 85]}`);
