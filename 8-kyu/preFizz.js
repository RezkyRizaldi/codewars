//* Basic Algorithm
// function preFizz(n) {
//   let arr = [];
//   for (let i = 1; i < n + 1; ++i) {
//     arr.push(i);
//   }
//   return arr;
// }

//* Typecase
function preFizz(n) {
  return [...Array(n + 1).keys()].slice(1);

  // return [...Array(n)].map((x, i) => i + 1);
}

console.log(`Answer: ${preFizz(1)}`, `Result: ${[1]}`, `Array should be from 1 to 1`);
console.log(`Answer: ${preFizz(2)}`, `Result: ${[1, 2]}`, `Array should be from 1 to 2`);
console.log(`Answer: ${preFizz(3)}`, `Result: ${[1, 2, 3]}`, `Array should be from 1 to 3`);
console.log(`Answer: ${preFizz(4)}`, `Result: ${[1, 2, 3, 4]}`, `Array should be from 1 to 4`);
console.log(`Answer: ${preFizz(5)}`, `Result: ${[1, 2, 3, 4, 5]}`, `Array should be from 1 to 5`);
