//* Basic Algorithm
// function positiveSum(arr) {
//   let total = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//       total += arr[i];
//     }
//   }
//   return total;
// }

//* forEach() method
// function positiveSum(arr) {
//   let total = 0;
//   arr.forEach(function (i) {
//     if (i > 0) {
//       total += i;
//     }
//   });
//   return total;
// }

//* Higher Order Function
function positiveSum(arr) {
  // return arr.filter((a) => a > 0).reduce((acc, curr) => acc + curr, 0);
  return arr.reduce((a, b) => a + (b > 0 ? b : 0), 0);
}

console.log(`Answer: ${positiveSum([1, 2, 3, 4, 5])}`, `Result: ${15}`);
console.log(`Answer: ${positiveSum([1, -2, 3, 4, 5])}`, `Result: ${13}`);
console.log(`Answer: ${positiveSum([])}`, `Result: ${0}`);
console.log(`Answer: ${positiveSum([-1, -2, -3, -4, -5])}`, `Result: ${0}`);
console.log(`Answer: ${positiveSum([-1, 2, 3, 4, -5])}`, `Result: ${9}`);
