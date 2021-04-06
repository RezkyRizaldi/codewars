//* Basic Algorithm
// function grow(x) {
//   let res = 1;
//   for (let i = 0; i < x.length; i++) {
//     res *= x[i];
//   }
//   return res;
// }

//* Higher Order Function
function grow(x) {
  return x.reduce((acc, curr) => acc * curr);
}

console.log(`Answer: ${grow([1, 2, 3])}`, `Result: ${6}`);
console.log(`Answer: ${grow([4, 1, 1, 1, 4])}`, `Result: ${16}`);
console.log(`Answer: ${grow([2, 2, 2, 2, 2, 2])}`, `Result: ${64}`);
