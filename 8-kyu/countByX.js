//* Basic Algorithm
// function countBy(x, n) {
//   let arr = [];
//   for (let i = 1; i <= n; i++) {
//     arr.push(x * i);
//   }
//   return arr;
// }

//* Higher Order Function with Typecase
function countBy(x, n) {
  //* Array.keys()
  // return [...Array(n + 1).keys()].slice(1).map((a) => a * x);

  //* Array.from()
  // return Array.from({ length: n }, (k) => (k + 1) * x);

  //* Array.apply()
  return Array.apply(0, Array(n)).map((i) => (i + 1) * x);
}

console.log(`Asnwer: ${countBy(1, 5)}`, `Result: ${[1, 2, 3, 4, 5]}`, "Array does not match");
console.log(`Asnwer: ${countBy(2, 5)}`, `Result: ${[2, 4, 6, 8, 10]}`, "Array does not match");
