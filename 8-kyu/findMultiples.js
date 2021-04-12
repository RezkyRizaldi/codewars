//* Basic Algorithm
// function findMultiples(integer, limit) {
//   const result = [];
//   for (let i = integer; i <= limit; i += integer) {
//     result.push(i);
//   }
//
//   return result;
// }

//* Typecase
function findMultiples(int, limit) {
  // return Array(Math.floor(limit / int))
  //   .fill(1)
  //   .map((e, i) => int * (i + 1));

  // return Array.from({ length: ~~(lnt / limit) }, (a, i) => i * limit + limit);

  return [...Array((limit / int) ^ 0)].map((e, i) => ++i * int);
}

console.log(`Answer: ${findMultiples(5, 25)}`, `Result: ${[5, 10, 15, 20, 25]}`);
console.log(`Answer: ${findMultiples(1, 2)}`, `Result: ${[1, 2]}`);
console.log(`Answer: ${findMultiples(5, 7)}`, `Result: ${[5]}`);
console.log(`Answer: ${findMultiples(4, 27)}`, `Result: ${[4, 8, 12, 16, 20, 24]}`);
console.log(`Answer: ${findMultiples(11, 54)}`, `Result: ${[11, 22, 33, 44]}`);
