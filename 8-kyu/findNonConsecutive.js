//* Basic Algorithm
// function firstNonConsecutive(arr) {
//   for (let i = 0; i < arr.length - 1; ++i) {
//     if (arr[i] + 1 !== arr[i + 1]) {
//       return arr[i + 1];
//     }
//   }
//   return null;
// }

//* Array.prototype.find()
function firstNonConsecutive(arr) {
  const nonConsecutive = arr.find((n, i, s) => i && n - s[i - 1] > 1);
  return nonConsecutive === undefined ? null : nonConsecutive;
}

console.log(`Answer: ${firstNonConsecutive([1, 2, 3, 4, 6, 7, 8])}`, `Result: ${6}`);
