//* Basic Algorithm
// function between(a, b) {
//   let arr = [];
//   for (let i = a; i <= b; ++i) {
//     arr.push(i);
//   }

//   return arr;
// }

//* Typecase
function between(a, b) {
  // return Array.from(new Array(b - a + 1), (e, i) => i + a);

  return [...Array(b - a + 1)].map((e, i) => i + a);
}

console.log(`Answer: ${between(1, 4)}`, `Result: ${[1, 2, 3, 4]}`);
console.log(`Answer: ${between(-2, 2)}`, `Result: ${[-2, -1, 0, 1, 2]}`);
