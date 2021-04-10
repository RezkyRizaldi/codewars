//* Basic Algorithm
// function powersOfTwo(n) {
//   let arr = [];
//   for (let i = 0; i <= n; ++i) {
//     arr.push(Math.pow(2, i));
//   }

//   return arr;
// }

//* Typecase
function powersOfTwo(n) {
  // return Array.from({ length: ++n }, (e, i) => 2 ** i);

  return [...Array(++n)].map((e, i) => 2 ** i);
}

console.log(`Answer: ${powersOfTwo(0)}`, `Result: ${[1]}`);
console.log(`Answer: ${powersOfTwo(1)}`, `Result: ${[1, 2]}`);
console.log(`Answer: ${powersOfTwo(4)}`, `Result: ${[1, 2, 4, 8, 16]}`);
